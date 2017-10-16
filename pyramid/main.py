from wsgiref.simple_server import make_server
from pyramid.config import Configurator
from pyramid.response import Response
import psycopg2
import os

def trips(request):
    # TODO: implement list trips here
    return Response("...")

if __name__ == '__main__':
    conn_string = "host='172.17.0.1' dbname='worlds_collide' user='"+ \
        os.environ['PG_USER']+"' password='"+os.environ['PG_USER']+"'"

    conn = psycopg2.connect(conn_string)

    print("Successfully connecting to database")

    cursor = conn.cursor()

    with Configurator() as config:
        config.add_route('trips', '/')
        config.add_view(trips, route_name='trips')
        app = config.make_wsgi_app()
    server = make_server('0.0.0.0', 6543, app)
    server.serve_forever()
