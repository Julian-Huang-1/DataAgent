import os
import dotenv
from openai import OpenAI

# 加载环境变量
dotenv.load_dotenv()

# 实例化OpenAI客户端
client = OpenAI(
    api_key=os.getenv("OPENAI_API_KEY")
)


# 定义获取响应的函数
def getResponse(messages):
    completion = client.chat.completions.create(
        model="gpt-3.5-turbo",
        messages=messages,
        stream=False  # 设置为False以阻塞直到收到所有响应
    )
    return completion



# 调用getResponse函数获取响应
# completion = getResponse( { "role": "user", "content": "编写一个冒泡排序" })
# print(completion.choices[0])
# for chunk in completion:
#   print(chunk.choices[0].delta)

# # 处理响应
# print(completion.choices[0].message.content)
