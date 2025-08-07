from sqlalchemy import Column, Integer, String, DateTime, func
from app.db.base import Base

class User(Base):
    __tablename__ = "user"

    no = Column(Integer, primary_key=True, autoincrement=True)               # 内部用連番（主キー）
    id = Column(String(8), nullable=False, unique=True)                      # ユーザーID（ユニーク）
    pw = Column(String(100), nullable=False)                                 # ハッシュ化されたパスワード
    email = Column(String(150), nullable=True)                               # メールアドレス（任意）
    pref_code = Column(String(2), nullable=False, default="00")              # 都道府県コード（JIS X 0401）
    city_code = Column(String(5), nullable=False, default="00000")           # 市区町村コード（JIS X 0402）
    role = Column(String(1), nullable=False, default="X")                    # 役割コード（例：M, S, A）
    status = Column(Integer, nullable=False, default=0)                      # ステータス（例：0＝有効、1＝停止）
    registered_at = Column(DateTime, nullable=False, default=func.now())    # 登録日時
    registered_by = Column(String(8), nullable=False)                        # 登録者ID
    updated_at = Column(DateTime, nullable=False, default=func.now(), onupdate=func.now())  # 更新日時
    updated_by = Column(String(8), nullable=False)                           # 更新者ID
