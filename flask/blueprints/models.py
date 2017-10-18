from sqlalchemy import Column, Integer, String
from sqlalchemy.ext.declarative import declarative_base

Base = declarative_base()

class Trip(Base):
    __tablename__ = 'trips'
    id = Column(Integer, primary_key=True)
    src = Column(String(100))
    dest = Column(String(100))

    def to_dict(self):
        return {
            "id": self.id,
            "src": self.src,
            "dest": self.dest
        }

    def __str__(self):
        return str(self.to_dict())
