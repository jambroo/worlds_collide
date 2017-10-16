from wsgiref.simple_server import make_server
from pyramid.config import Configurator
from pyramid.response import Response
import psycopg2
import os
from sqlalchemy import create_engine

from worldscollide.models import DBSession, Trip, Base

def trips(request):
    trips = []
    for trip in DBSession.query(Trip).all():
        trips.append({"src": trip.src, "dest": trip.dest})
    return Response(str(trips))

def add_trip(request):
    #DBSession.add(Trip(src="bne", dest="syd"))
    return Response(True)

if __name__ == '__main__':
    engine = create_engine('postgresql+psycopg2://'+os.environ['PG_USER']+':'+os.environ['PG_PASS']+'@'+os.environ['PG_HOST']+'/worlds_collide')
    DBSession.configure(bind=engine, autocommit=True)
    Base.metadata.bind = engine
    Base.metadata.create_all(engine)

    with Configurator() as config:
        config.add_route('trips', '/')
        config.add_view(trips, route_name='trips')
        app = config.make_wsgi_app()
    server = make_server('0.0.0.0', 6543, app)
    server.serve_forever()
