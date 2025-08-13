# app/crud/user.py

from sqlalchemy.orm import Session
from backend.models.user import User
from backend.schemas.user import UserCreate
from datetime import datetime
from passlib.context import CryptContext

# パスワードハッシュ化用
pwd_context = CryptContext(schemes=["bcrypt"], deprecated="auto")

# パスワードをハッシュ化する関数
def get_password_hash(password: str) -> str:
    return pwd_context.hash(password)

# ユーザー新規登録
def create_user(db: Session, user_data: UserCreate) -> User:
    db_user = User(
        id=user_data.id,
        pw=get_password_hash(user_data.pw),  # ハッシュ化
        email=user_data.email,
        pref_code=user_data.pref_code,
        city_code=user_data.city_code,
        role=user_data.role,
        status=user_data.status,
        registered_by=user_data.registered_by,
        updated_by=user_data.updated_by,
        registered_at=datetime.now(),
        updated_at=datetime.now()
    )
    db.add(db_user)
    db.commit()
    db.refresh(db_user)
    return db_user

# ユーザーをIDで取得
def get_user_by_id(db: Session, user_id: str) -> User | None:
    return db.query(User).filter(User.id == user_id).first()
