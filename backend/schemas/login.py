# schemas/login.py
from pydantic import BaseModel

class LoginInput(BaseModel):
    userId: str
    password: str