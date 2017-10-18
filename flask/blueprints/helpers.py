from flask import g
from sqlalchemy import create_engine
from sqlalchemy.orm import scoped_session, sessionmaker
import os

def connect_db(Base):
    engine = create_engine('postgresql+psycopg2://'+os.environ['PG_USER']+':'+os.environ['PG_PASS']+'@'+os.environ['PG_HOST']+'/worlds_collide')

    DBSession = scoped_session(sessionmaker())
    DBSession.configure(bind=engine)
    Base.metadata.bind = engine
    Base.metadata.create_all(engine)

    return DBSession

def get_db(Base):
    if not hasattr(g, 'postgres_db'):
        g.postgres_db = connect_db(Base)
    return g.postgres_db
