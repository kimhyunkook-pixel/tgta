# app/api/v1/auth.py

from fastapi import APIRouter, HTTPException, Depends, Form
from sqlalchemy.orm import Session
from app.db.session import get_db
from app.schemas.token import Token
from app.crud.user import get_user_by_id
from app.utils.auth import verify_password, create_access_token
from fastapi import Body
from app.schemas.login import LoginInput


router = APIRouter()

@router.post("/login", response_model=Token)
def login(
    data: LoginInput = Body(...),
    db: Session = Depends(get_db)
):
    print("✅ login() に入った") 
    user = get_user_by_id(db, data.userId)

    if not user or not verify_password(data.password, user.pw):
        raise HTTPException(status_code=401, detail="IDまたはパスワードが正しくありません。")
    
    access_token = create_access_token(data={"sub": user.id})

    return {"access_token": access_token, "token_type": "bearer"}
