from pony.orm import Database, Required
import os

database = Database()

class Trip(database.Entity):
    _table_ = "trips"
    src = Required(str)
    dest = Required(str)

database.bind(provider='postgres', user=os.environ["PG_USER"], password=os.environ["PG_PASS"], host=os.environ["PG_HOST"], database='worlds_collide')
database.generate_mapping(create_tables=True)
