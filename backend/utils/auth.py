from passlib.context import CryptContext
from jose import jwt
from datetime import datetime, timedelta

# JWT 関連設定
SECRET_KEY = "your-secret-key"  # 後で.envファイルに分離すること
ALGORITHM = "HS256"
ACCESS_TOKEN_EXPIRE_MINUTES = 30

# パスワードハッシュ化・検証用の設定
pwd_context = CryptContext(schemes=["bcrypt"], deprecated="auto")


# 平文のパスワードとハッシュされたパスワードを比較
def verify_password(plain_password: str, hashed_password: str) -> bool:
    return pwd_context.verify(plain_password, hashed_password)

# JWTアクセストークンの生成
def create_access_token(data: dict, expires_delta: timedelta = timedelta(minutes=ACCESS_TOKEN_EXPIRE_MINUTES)) -> str:
    to_encode = data.copy()
    expire = datetime.utcnow() + expires_delta
    to_encode.update({"exp": expire})
    encoded_jwt = jwt.encode(to_encode, SECRET_KEY, algorithm=ALGORITHM)
    return encoded_jwt
