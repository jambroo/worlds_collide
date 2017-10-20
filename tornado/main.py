import json
import tornado.ioloop
from tornado_json.routes import get_routes
from tornado_json.application import Application


PORT = 3004

if __name__ == "__main__":
  import worldscollide

  routes = get_routes(worldscollide)

  print("Routes\n======\n\n" + json.dumps(
      [(url, repr(rh)) for url, rh in routes],
      indent=2)
  )

  app = Application(routes=routes,
                    settings={
                      "debug": True
                    },
                    db_conn=worldscollide.db)
  app.listen(PORT)
  tornado.ioloop.IOLoop.current().start()
