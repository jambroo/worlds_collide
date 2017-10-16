from wsgiref.simple_server import make_server
from pyramid.config import Configurator
from pyramid.response import Response
from pyramid.httpexceptions import HTTPBadRequest
import psycopg2
import os
from sqlalchemy import create_engine

from worldscollide.models import DBSession, Trip, Base

def trips_list(request):
    trips = []
    for trip in DBSession.query(Trip).all():
        trips.append({"src": trip.src, "dest": trip.dest})
    return Response(str(trips))

def trips_add(request):
    if "src" not in request.json_body.keys() or \
        "dest" not in request.json_body.keys():
        return HTTPBadRequest("Src and Dest are required input.")

    trip = Trip(src=request.json_body["src"], dest=request.json_body["dest"])
    result = DBSession.add(trip)

    return Response(result)

if __name__ == '__main__':
    engine = create_engine('postgresql+psycopg2://'+os.environ['PG_USER']+':'+os.environ['PG_PASS']+'@'+os.environ['PG_HOST']+'/worlds_collide')
    DBSession.configure(bind=engine, autocommit=True)
    Base.metadata.bind = engine
    Base.metadata.create_all(engine)

    with Configurator() as config:
        config.add_route('trips_list', '/')
        config.add_route('trips_add', '/add')
        config.add_view(trips_list, route_name='trips_list')
        config.add_view(trips_add, route_name='trips_add')
        app = config.make_wsgi_app()
    server = make_server('0.0.0.0', 6543, app)
    server.serve_forever()
