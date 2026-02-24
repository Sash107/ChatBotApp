import os
from fastapi import FastAPI
from google import genai
from pydantic import BaseModel
from dotenv import load_dotenv
from prompts import SYSTEM_PROMPT
from typing import List

load_dotenv()
app=FastAPI()

client=genai.Client(api_key=os.environ["API_KEY"])

class UserMessage(BaseModel):
    role:str
    content:str

class UserResponse(BaseModel):
    messages:List[UserMessage]

def AskChatBot(user_input:List):
    prompt=f"""
            {SYSTEM_PROMPT}

            """
    for msg in user_input:
        prompt+=f" {msg.role} : {msg.content}\n"

    response=client.models.generate_content(
        model="gemma-3-27b-it",
        contents=prompt
    )
    return response

@app.post("/ask_chatBot")
def ask_chatBot(user:UserResponse):
    req=user.messages
    response=AskChatBot(req)
    return {
        "res":response.text
    }