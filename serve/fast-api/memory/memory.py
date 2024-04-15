import os
import copy
import glob
import shutil
import time
import json
import io
import inspect
import re
import random
import string
import base64
import os.path
from googleapiclient.errors import HttpError
from googleapiclient.discovery import build
from google.oauth2.credentials import Credentials
from google_auth_oauthlib.flow import InstalledAppFlow
from googleapiclient.http import MediaIoBaseUpload
import base64
import email
from email import policy
from email.parser import BytesParser
from email.mime.text import MIMEText
from bs4 import BeautifulSoup
import dateutil.parser as parser
import sys
os.environ['SSL_VERSION'] = 'TLSv1_2'
import warnings
warnings.filterwarnings("ignore")
from pydrive.auth import GoogleAuth
from pydrive.drive import GoogleDrive
from io import BytesIO

# 授权文件
# SCOPES = [
#     'https://www.googleapis.com/auth/gmail.send',
#     'https://www.googleapis.com/auth/gmail.readonly',
#     'https://www.googleapis.com/auth/documents',
#     'https://www.googleapis.com/auth/drive',
#     'https://www.googleapis.com/auth/drive.readonly'
    
# ]

# flow = InstalledAppFlow.from_client_secrets_file(
#     'credentials-web3.json', SCOPES)
# creds = flow.run_local_server(port=9090, access_type='offline', prompt='consent')

# with open('token.json', 'w') as token:
#     token.write(creds.to_json())
def create_or_get_folder(folder_name, upload_to_google_drive=False):
    """
    创建或获取文件夹ID，本地存储时获取文件夹路径
    """
    if upload_to_google_drive:
        # 若存储至谷歌云盘，则获取文件夹ID
        creds = Credentials.from_authorized_user_file('token.json')
        drive_service = build('drive', 'v3', credentials=creds)

        # 查询是否已经存在该名称的文件夹
        query = f"mimeType='application/vnd.google-apps.folder' and name='{folder_name}' and trashed=false"
        results = drive_service.files().list(q=query).execute()
        items = results.get('files', [])

        # 如果文件夹不存在，则创建它
        if not items:
            folder_metadata = {
                'name': folder_name,
                'mimeType': 'application/vnd.google-apps.folder'
            }
            folder = drive_service.files().create(body=folder_metadata).execute()
            folder_id = folder['id']
        else:
            folder_id = items[0]['id']
        
    else:
        # 若存储本地，则获取文件夹路径，且同时命名为folder_id
        folder_path = os.path.join('./', folder_name)
        if not os.path.exists(folder_path):
            os.makedirs(folder_path)
        folder_id = folder_path
        
    return folder_id

def create_or_get_doc(folder_id, doc_name, upload_to_google_drive=False):
    """
    创建或获取文件ID，本地存储时获取文件路径
    """    
    if upload_to_google_drive:
        creds = Credentials.from_authorized_user_file('token.json')
        drive_service = build('drive', 'v3', credentials=creds)
        docs_service = build('docs', 'v1', credentials=creds)

        # 查询文件夹中是否已经存在该名称的文档
        query = f"name='{doc_name}' and '{folder_id}' in parents"
        results = drive_service.files().list(q=query).execute()
        items = results.get('files', [])

        # 如果文档不存在，创建它
        if not items:
            doc_metadata = {
                'name': doc_name,
                'mimeType': 'application/vnd.google-apps.document',
                'parents': [folder_id]
            }
            doc = drive_service.files().create(body=doc_metadata).execute()
            document_id = doc['id']
        else:
            document_id = items[0]['id']
            
    # 若存储本地，则获取文件夹路径，且同时命名为document_id
    else: 
        file_path = os.path.join(folder_id, f'{doc_name}.md')
        if not os.path.exists(file_path):
            with open(file_path, 'w', encoding='utf-8') as file:
                file.write('')  # 创建一个带有标题的空Markdown文件
        document_id = file_path
        
    return document_id

def get_file_content(file_id, upload_to_google_drive=False):
    """
    获取文档的具体内容，需要区分是读取谷歌云文档还是读取本地文档
    """
    # 读取谷歌云文档
    if upload_to_google_drive:
        creds = Credentials.from_authorized_user_file('token.json')
        service = build('drive', 'v3', credentials=creds)
        os.environ['SSL_VERSION'] = 'TLSv1_2'
        request = service.files().export_media(fileId=file_id, mimeType='text/plain')
        content = request.execute()
        decoded_content = content.decode('utf-8')
        
    # 读取本地文档
    else:
        with open(file_id, 'r', encoding='utf-8') as file:
            decoded_content = file.read()
    return decoded_content

def append_content_in_doc(folder_id, doc_id, dict_list, upload_to_google_drive=False):
    """
    创建文档，或为指定的文档增加内容，需要区分是否是云文档
    """
    # 将字典列表转换为JSON字符串
    json_string = json.dumps(dict_list, indent=4, ensure_ascii=False)

    # 若是谷歌云文档
    if upload_to_google_drive:
        creds = Credentials.from_authorized_user_file('token.json')
        drive_service = build('drive', 'v3', credentials=creds)
        docs_service = build('docs', 'v1', credentials=creds)

        # 获取文档的当前长度
        document = docs_service.documents().get(documentId=doc_id).execute()
        end_of_doc = document['body']['content'][-1]['endIndex'] - 1  

        # 追加Q-A内容到文档
        requests = [{
            'insertText': {
                'location': {'index': end_of_doc},
                'text': json_string + '\n\n'   # 追加JSON字符串和两个换行，使格式整洁
            }
        }]
        docs_service.documents().batchUpdate(documentId=doc_id, body={'requests': requests}).execute()
        
    # 若是本地文档
    else:
        with open(doc_id, 'a', encoding='utf-8') as file:
            file.write(json_string)  # 追加JSON字符串
            
def clear_content_in_doc(doc_id, upload_to_google_drive=False):
    """
    清空指定文档的全部内容，需要区分是否是云文档
    """
    # 如果是清除谷歌云文档内容
    if upload_to_google_drive:
        creds = Credentials.from_authorized_user_file('token.json')
        docs_service = build('docs', 'v1', credentials=creds)

        # 获取文档的当前长度
        document = docs_service.documents().get(documentId=doc_id).execute()
        end_of_doc = document['body']['content'][-1]['endIndex'] - 1

        # 创建删除内容的请求
        requests = [{
            'deleteContentRange': {
                'range': {
                    'startIndex': 1,  # 文档的开始位置
                    'endIndex': end_of_doc  # 文档的结束位置
                }
            }
        }]

        # 执行删除内容的请求
        docs_service.documents().batchUpdate(documentId=doc_id, body={'requests': requests}).execute()
        
    # 如果是清除本地文档内容
    else:
        with open(doc_id, 'w') as file:
            pass  # 清空文件内容
        
def list_files_in_folder(folder_id, upload_to_google_drive=False):
    """
    列举当前文件夹的全部文件，需要区分是读取谷歌云盘文件夹还是本地文件夹
    """
    # 读取谷歌云盘文件夹内文件
    if upload_to_google_drive:
        creds = Credentials.from_authorized_user_file('token.json')
        drive_service = build('drive', 'v3', credentials=creds)

        # 列出文件夹中的所有文件
        query = f"'{folder_id}' in parents"
        results = drive_service.files().list(q=query).execute()
        files = results.get('files', [])

        # 获取并返回文件名称列表
        file_names = [file['name'] for file in files]
        
    # 读取本地文件夹内文件
    else:
        file_names = [f for f in os.listdir(folder_id) if os.path.isfile(os.path.join(folder_id, f))]
    return file_names

def rename_doc_in_drive(folder_id, doc_id, new_name, upload_to_google_drive=False):
    """
    修改指定的文档名称，需要区分是云文件还是本地文件
    """
    # 若修改云文档名称
    if upload_to_google_drive:
        creds = Credentials.from_authorized_user_file('token.json')
        drive_service = build('drive', 'v3', credentials=creds)

        # 创建更新请求以更改文档名称
        update_request_body = {
            'name': new_name
        }

        # 发送更新请求
        update_response = drive_service.files().update(
            fileId=doc_id,
            body=update_request_body,
            fields='id,name'
        ).execute()

        # 返回更新后的文档信息，包括ID和新名称
        update_name = update_response['name']
        
    # 若修改本地文档名称
    else:
        # 分解原始路径以获取目录和扩展名
        directory, old_file_name = os.path.split(doc_id)
        extension = os.path.splitext(old_file_name)[1]

        # 用新名称和原始扩展名组合新路径
        new_file_name = new_name + extension
        new_file_path = os.path.join(directory, new_file_name)

        # 重命名文件
        os.rename(doc_id, new_file_path)
        
        update_name=new_name
    
    return update_name

def delete_all_files_in_folder(folder_id, upload_to_google_drive=False):
    """
    删除某文件夹内全部文件，需要区分谷歌云文件夹还是本地文件夹
    """
    # 如果是谷歌云文件夹
    if upload_to_google_drive:
        creds = Credentials.from_authorized_user_file('token.json')
        drive_service = build('drive', 'v3', credentials=creds)

        # 列出文件夹中的所有文件
        query = f"'{folder_id}' in parents"
        results = drive_service.files().list(q=query).execute()
        files = results.get('files', [])

        # 遍历并删除每个文件
        for file in files:
            file_id = file['id']
            drive_service.files().delete(fileId=file_id).execute()
            # print(f"Deleted file: {file['name']} (ID: {file_id})")
       
    # 如果是本地文件夹
    else:
        for filename in os.listdir(folder_id):
            file_path = os.path.join(folder_id, filename)
            try:
                if os.path.isfile(file_path) or os.path.islink(file_path):
                    os.unlink(file_path)
                elif os.path.isdir(file_path):
                    shutil.rmtree(file_path)
            except Exception as e:
                print(f'Failed to delete {file_path}. Reason: {e}')
                
class InterProject():
    """
    项目类：项目是每个分析任务的基础对象，换而言之，每个分析任务应该都是“挂靠”在某个项目中。\
    每个代码解释器必须说明所属项目，若无所属项目，则在代码解释器运行时会自动创建一个项目。\
    需要注意的是，项目不仅起到了说明和标注当前分析任务的作用，更关键的是，项目提供了每个分析任务的“长期记忆”，\
    即每个项目都有对应的谷歌云盘和谷歌云文档，用于保存在分析和建模工作过程中多轮对话内容，\
    此外，也可以选择借助本地文档进行存储。
    """

    def __init__(self, 
                 project_name, 
                 part_name, 
                 folder_id = None, 
                 doc_id = None, 
                 doc_content = None, 
                 upload_to_google_drive = False):
        
        # 项目名称，即项目文件夹名称
        self.project_name = project_name
        # 项目某部分名称，即项目文件名称
        self.part_name = part_name
        # 是否进行谷歌云文档存储
        self.upload_to_google_drive = upload_to_google_drive
        
        # 项目文件夹ID
        # 若项目文件夹ID为空，则获取项目文件夹ID
        if folder_id == None:
            folder_id = create_or_get_folder(folder_name=project_name,
                                             upload_to_google_drive = upload_to_google_drive)
        self.folder_id = folder_id
        
        # 创建时获取当前项目中其他文件名称列表
        self.doc_list = list_files_in_folder(folder_id, 
                                             upload_to_google_drive = upload_to_google_drive)
        
        # 项目文件ID
        # 若项目文件ID为空，则获取项目文件ID
        if doc_id == None:
            doc_id = create_or_get_doc(folder_id=folder_id, 
                                       doc_name=part_name, 
                                       upload_to_google_drive = upload_to_google_drive)
        self.doc_id = doc_id
        
        # 项目文件具体内容，相当于多轮对话内容
        self.doc_content = doc_content
        # 若初始content不为空，则将其追加入文档内
        if doc_content != None:
            append_content_in_doc(folder_id=folder_id, 
                                  doc_id=doc_id, 
                                  qa_string=doc_content, 
                                  upload_to_google_drive = upload_to_google_drive)
            

    def get_doc_content(self):
        """
        根据项目某文件的文件ID，获取对应的文件内容
        """     
        self.doc_content = get_file_content(file_id=self.doc_id, 
                                            upload_to_google_drive = self.upload_to_google_drive)

        return self.doc_content
    
    def append_doc_content(self, content):
        """
        根据项目某文件的文件ID，追加文件内容
        """  
        append_content_in_doc(folder_id=self.folder_id, 
                              doc_id=self.doc_id, 
                              dict_list=content, 
                              upload_to_google_drive = self.upload_to_google_drive)
    
    def clear_content(self):
        """
        清空某文件内的全部内容
        """  
        clear_content_in_doc(doc_id=self.doc_id, 
                             upload_to_google_drive = self.upload_to_google_drive)
        
    def delete_all_files(self):
        """
        删除当前项目文件夹内的全部文件
        """  
        delete_all_files_in_folder(folder_id=self.folder_id, 
                                   upload_to_google_drive = self.upload_to_google_drive)
        
    def update_doc_list(self):
        """
        更新当前项目文件夹内的全部文件名称
        """
        self.doc_list = list_files_in_folder(self.folder_id, 
                                             upload_to_google_drive = self.upload_to_google_drive)
    
    def rename_doc(self, new_name):
        """
        修改当前文件名称
        """
        self.part_name = rename_doc_in_drive(folder_id=self.folder_id, 
                                             doc_id=self.doc_id, 
                                             new_name=new_name, 
                                             upload_to_google_drive = self.upload_to_google_drive)

# 本地存储测试
# p1 = InterProject(project_name='测试项目', part_name='测试文档')
# print(p1.folder_id)
# print(p1.doc_id)

#谷歌云文档测试       
p2 = InterProject(project_name='测试项目_img', part_name='测试文档_hah', upload_to_google_drive=True)
print(p2.folder_id) #1mbyb2a_YtewIZE6UnZKNj2fTQWleHghK