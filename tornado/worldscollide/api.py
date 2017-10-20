from tornado import gen

from tornado_json.requesthandlers import APIHandler
from tornado_json import schema
from tornado_json.gen import coroutine

from pony.orm import db_session, select, commit
from worldscollide.db import Trip as TripEntity
import json

class WorldsCollideHandler(APIHandler):
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
