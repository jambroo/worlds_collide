from pyramid.security import Allow, Everyone

from sqlalchemy import (
    Column,
    Integer,
    String
    )

from sqlalchemy.ext.declarative import declarative_base

from sqlalchemy.orm import (
    scoped_session,
    sessionmaker,
    )

DBSession = scoped_session(sessionmaker())
Base = declarative_base()

class Trip(Base):
    __tablename__ = 'trips'
    uid = Column(Integer, primary_key=True)
    src = Column(String(100))
    dest = Column(String(100))


class Root(object):
    __acl__ = [(Allow, Everyone, 'edit')]

    def __init__(self, request):
        pass
