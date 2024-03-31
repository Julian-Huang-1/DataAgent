import os
import dotenv
from httpx import AsyncClient
from typing import List,Dict
dotenv.load_dotenv()
async def request(val:List[Dict[str,str]]):
    """
    :param:val 用户连续对话
    """
    url="https://api.openai.com/v1/chat/completions"
    headers={
        "Content-Type":"application/json",
        "Authorization":"Bearer "+os.getenv("OPENAI_API_KEY")
    }
    params={
        "model":"gpt-3.5-turbo",
        "messages":val,
        "temperature":0.8,
        "n":1,
        "stream":False
    }
    async with AsyncClient() as client:
        res=await client.post(url,headers=headers,json=params,timeout=60)
        print(res.json())






# print(os.getenv("OPENAI_API_KEY"))