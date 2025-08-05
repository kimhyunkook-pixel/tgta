# app/schemas/user.py

from pydantic import BaseModel, EmailStr
from datetime import datetime
from typing import Optional

# ユーザー登録時の入力スキーマ
class UserCreate(BaseModel):
    id: str
    pw: str
    email: Optional[EmailStr] = None
    pref_code: str = "00"
    city_code: str = "00000"
    role: str = "X"
    status: int = 0
    registered_by: str
    updated_by: str

# ユーザー取得・出力用のスキーマ
class UserOut(BaseModel):
    no: int
    id: str
    email: Optional[EmailStr] = None
    pref_code: str
    city_code: str
    role: str
    status: int
    registered_at: datetime
    registered_by: str
    updated_at: datetime
    updated_by: str

    class Config:
        orm_mode = True  # SQLAlchemyモデルと連携するために必要
