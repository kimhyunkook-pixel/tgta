# app/routers/user.py

from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.orm import Session
from app.schemas.user import UserCreate, UserOut
from app.crud.user import create_user, get_user_by_id
from app.db.session import get_db

# ルーターオブジェクト作成
router = APIRouter(
    prefix="/users",  # URLパスの共通部分
    tags=["users"]    # OpenAPIドキュメント用タグ
)

# ユーザー登録API
@router.post("/", response_model=UserOut)
def register_user(user: UserCreate, db: Session = Depends(get_db)):
    existing_user = get_user_by_id(db, user.id)
    if existing_user:
        raise HTTPException(status_code=400, detail="このIDは既に使用されています")
    return create_user(db, user)

# IDによるユーザー取得API
@router.get("/{user_id}", response_model=UserOut)
def get_user(user_id: str, db: Session = Depends(get_db)):
    db_user = get_user_by_id(db, user_id)
    if not db_user:
        raise HTTPException(status_code=404, detail="ユーザーが見つかりません")
    return db_user
