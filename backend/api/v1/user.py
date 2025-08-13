# app/api/v1/user.py

from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.orm import Session
from backend.schemas.user import UserCreate, UserOut
from backend.crud.user import create_user, get_user_by_id
from backend.db.session import get_db

router = APIRouter()

# ユーザー登録
@router.post("/users", response_model=UserOut)
def create_user_view(user: UserCreate, db: Session = Depends(get_db)):
    return create_user(db, user)

# ユーザー情報取得
@router.get("/users/{user_id}", response_model=UserOut)
def read_user_view(user_id: str, db: Session = Depends(get_db)):
    user = get_user_by_id(db, user_id)
    if not user:
        raise HTTPException(status_code=404, detail="User not found")
    return user
