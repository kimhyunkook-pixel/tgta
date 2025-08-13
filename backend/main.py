# app/main.py

from fastapi import FastAPI
from backend.api.v1 import hello
from backend.api.v1 import user
from backend.api.v1 import auth
from backend.db.session import engine
from backend.db.base import Base
from fastapi.middleware.cors import CORSMiddleware


# テーブル初期化（初回だけ必要）
Base.metadata.create_all(bind=engine)

app = FastAPI()

# CORS設定（全許可、開発用）
app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:5173"],  # React dev server 주소
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# ルーター登録
app.include_router(hello.router, prefix="/api/v1")
app.include_router(user.router, prefix="/api/v1", tags=["Users"])
app.include_router(auth.router, prefix="/api/v1")