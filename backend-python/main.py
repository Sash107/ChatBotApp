import os
from fastapi import FastAPI
from google import genai
from pydantic import BaseModel
from dotenv import load_dotenv
from prompts import SYSTEM_PROMPT

load_dotenv()
app=FastAPI()

client=genai.Client(api_key=os.environ["API_KEY"])

class UserInput(BaseModel):
    message:str


def AskChatBot(user_input:str):
    prompt=f"""
            {SYSTEM_PROMPT}

            User:{user_input}
            """
    response=client.models.generate_content(
        model="gemma-3-27b-it",
        contents=prompt
    )
    return response

@app.post("/ask_chatBot")
def ask_chatBot(user:UserInput):
    response=AskChatBot(user.message)
    return {
        "res":response.text
    }