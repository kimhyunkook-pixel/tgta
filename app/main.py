# app/main.py

from fastapi import FastAPI
from app.api.v1 import hello
from app.api.v1 import user
from app.db.session import engine
from app.db.base import Base

# テーブル初期化（初回だけ必要）
Base.metadata.create_all(bind=engine)

app = FastAPI()

# ルーター登録
app.include_router(hello.router, prefix="/api/v1")
app.include_router(user.router, prefix="/api/v1", tags=["Users"])
app.include_router(user.router)