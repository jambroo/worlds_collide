from tornado_json.requesthandlers import APIHandler
from tornado_json import schema

from pony.orm import db_session, select, commit

from worldscollide.db import Trip as TripEntity

class WorldsCollideHandler(APIHandler):
    def set_default_headers(self):
        self.set_header("Access-Control-Allow-Origin", "*")
        self.set_header("Access-Control-Allow-Headers", "x-requested-with, Content-Type")
        self.set_header('Access-Control-Allow-Methods', 'POST, GET, OPTIONS')

    def options(self):
        # no body
        self.set_status(200)
        self.finish()

    @schema.validate(
        output_schema={
          "type": "object",
          "properties": {
              "trips": {
                  "type": "array",
                  "items": {
                    "type": "object",
                    "properties": {
                        "id": {
                            "type": "integer"
                        },
                        "src": {
                            "type": "string"
                        },
                        "dest": {
                            "type": "string"
                        }
                    },
                    "required": [
                        "id",
                        "src",
                        "dest"
                    ]
                }
              }
          }
        },
        output_example={
            "trips": [
                {
                    "id": 0,
                    "src": "A",
                    "dest": "B"
                }
            ]
        }
    )
    def get(self):
        trips = []
        with db_session:
            for trip in TripEntity.select():
                trips.append(trip.to_dict())

        return {"trips": trips}


    @schema.validate(
       input_schema={
            "type": "object",
            "properties": {
                "src": {"type": "string"},
                "dest": {"type": "string"}
            },
           "required": [
               "src",
               "dest"
           ]
        },
        input_example={
            "src": "A",
            "dest": "B",
        }
    )
    def post(self):
        with db_session:
            trip = TripEntity(src=self.body["src"], dest=self.body["dest"])

        return trip.to_dict()
