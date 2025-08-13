# app/api/v1/hello.py

from fastapi import APIRouter

router = APIRouter()

@router.get("/hello")
def say_hello():
    return {"message": "Hello from TGTA 🎯"}
