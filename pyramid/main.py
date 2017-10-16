from wsgiref.simple_server import make_server
from pyramid.config import Configurator
from pyramid.response import Response

def trips(request):
    # TODO: implement list trips here

if __name__ == '__main__':
    with Configurator() as config:
        config.add_route('trips', '/')
        config.add_view(trips, route_name='trips')
        app = config.make_wsgi_app()
    server = make_server('0.0.0.0', 6543, app)
    server.serve_forever()
