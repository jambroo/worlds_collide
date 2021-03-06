import tornado.ioloop
from tornado_json.routes import get_routes, get_module_routes
from tornado_json.application import Application
import os

if __name__ == "__main__":
  from worldscollide import api, db

  custom_routes = get_module_routes("worldscollide.api", [("/trips/?", api.WorldsCollideHandler)])

  app = Application(routes=custom_routes,
                    settings={
                      "debug": True
                    },
                    db_conn=db)
  app.listen(os.environ["TORNADO_PORT"])
  tornado.ioloop.IOLoop.current().start()
