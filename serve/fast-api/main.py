from typing import Union
from typing import List
from fastapi import FastAPI,File,UploadFile
import shutil
import os
from pydantic import BaseModel
from aiTools import getResponse
from fastapi.middleware.cors import CORSMiddleware
from fastapi.responses import JSONResponse
import json
class Message(BaseModel):
    role: str
    content: str
app = FastAPI()
# 配置跨域
origins=[
    "*"
]
app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.get("/")
def read_root():
    return {"Hello": "World"}


@app.get("/items/{item_id}")
def read_item(item_id: int, q: Union[str, None] = None):
    return {"item_id": item_id, "q": q}

# 得到一次响应
@app.post("/ai")
async def getRes(data:List[Message]):
    res=getResponse(data)
    return res.choices[0]

#上传excel文件到服务器
@app.post("/upload")
async def upload_file(file:UploadFile=File(...)):
    try:
        contents = await file.read()  # 读取文件内容
        save_path = './file/'
        if not os.path.exists(save_path):
            os.makedirs(save_path)
        save_file = os.path.join(save_path, file.filename)
        with open(save_file, "wb") as buffer:
            buffer.write(contents)  # 将文件内容写入到本地文件
        return {"message": "文件上传成功", "statusCode": 200}
    except Exception as e:
        return {"message": f"上传文件失败：{str(e)}", "statusCode": 500}



    

