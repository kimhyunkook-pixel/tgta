# app/db/base.py

from sqlalchemy.orm import declarative_base

# すべてのモデルクラスが継承するベースクラス
Base = declarative_base()
