from flask import Blueprint, request, session, g, redirect, url_for, abort, \
     jsonify, flash, current_app
import os

from sqlalchemy import create_engine
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

bp = Blueprint('worldscollide', __name__)

def connect_db():
    engine = create_engine('postgresql+psycopg2://'+os.environ['PG_USER']+':'+os.environ['PG_PASS']+'@'+os.environ['PG_HOST']+'/worlds_collide')

    DBSession = scoped_session(sessionmaker())
    DBSession.configure(bind=engine)
    Base.metadata.bind = engine
    Base.metadata.create_all(engine)

    return DBSession

def get_db():
    if not hasattr(g, 'postgres_db'):
        g.postgres_db = connect_db()
    return g.postgres_db


@bp.route('/')
def show_entries():
    dbsession = get_db()
    trips = []
    for trip in dbsession.query(Trip).all():
        trips.append(trip.to_dict())
    return jsonify(trips)

@bp.route('/add', methods=['POST'])
def add():
    input = request.get_json()
    if "src" not in input.keys() or \
        "dest" not in input.keys():
        return jsonify({"result": 1})

    dbsession = get_db()
    trip = Trip(src=input["src"], dest=input["dest"])
    dbsession.add(trip)
    dbsession.commit()

    return jsonify({"result": 0, "trip": trip.to_dict()})
