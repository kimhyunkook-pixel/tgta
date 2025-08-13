# app/db/session.py

from sqlalchemy import create_engine
from sqlalchemy.orm import sessionmaker, Session

DATABASE_URL = "sqlite:///./dev.db"

# エンジン作成（同期）
engine = create_engine(
    DATABASE_URL, connect_args={"check_same_thread": False}
)

# セッション作成（同期）
SessionLocal = sessionmaker(autocommit=False, autoflush=False, bind=engine)

# セッション取得関数（FastAPI用）
def get_db():
    db: Session = SessionLocal()
    try:
        yield db
    finally:
        db.close()
