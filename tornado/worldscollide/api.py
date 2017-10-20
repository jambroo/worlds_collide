from tornado import gen

from tornado_json.requesthandlers import APIHandler
from tornado_json import schema
from tornado_json.gen import coroutine


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
        return {"trips": [
                {
                    "id": 1,
                    "src": "C",
                    "dest": "D"
                }
            ]}


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
        self.body["src"]
        # self.body["dest"]
        return {
            "message": "was posted."
        }
