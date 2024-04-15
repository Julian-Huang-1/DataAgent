import os
import dotenv
import pymysql
import pandas as pd

from gptLearning import *
# 加载环境变量
dotenv.load_dotenv()
mysql_pw = os.getenv('MYSQL_PW')
mysql_name = os.getenv('MYSQL_USER_NAME')
mysql_db_name = os.getenv('MYSQL_DB_NAME')
#---测试连接数据库
# 建立连接
# connection = pymysql.connect(
#     host='localhost',  # 数据库地址
#     user=mysql_name,  # 数据库用户名
#     passwd=mysql_pw,  # 数据库密码
#     db=mysql_db_name,  # 数据库名
#     charset='utf8'  # 字符集选择utf8
# )
# cursor = connection.cursor()
# sql_query = "SELECT * FROM user_demographics LIMIT 10"
# df_temp = pd.read_sql(sql_query, connection)


# ----测试是否能实时生成SQL语句并进行查询
def get_user_demographics(sql_query):
    """
    用于获取user_demographics表格的各类相关信息
    :param sql_query: 字符串形式的SQL查询语句，用于执行对MySQL中存储的user_demographics进行查询，并获得表中各类相关信息
    :return：sql查询的user_demographics相关信息
    """ 
    connection = pymysql.connect(
    host='localhost',  # 数据库地址
    user=mysql_name,  # 数据库用户名
    passwd=mysql_pw,  # 数据库密码
    db=mysql_db_name,  # 数据库名
    charset='utf8'  # 字符集选择utf8
) 
    try:
        with connection.cursor() as cursor:
            # SQL查询语句
            sql = sql_query
            cursor.execute(sql)

            # 获取查询结果
            results = cursor.fetchall()

    finally:
        connection.close()
    
    # 获取列名（headers）
    column_names = [desc[0] for desc in cursor.description]

    # 使用results和column_names创建DataFrame
    df_temp = pd.DataFrame(results, columns=column_names)
    
    return df_temp.to_json(orient='records')
functions_list = [get_user_demographics]
functions = auto_functions(functions_list)
print(functions)