from flask import Blueprint, request, session, g, redirect, url_for, abort, \
     jsonify, flash, current_app

from blueprints.models import Base, Trip
from blueprints.helpers import get_db

bp = Blueprint('worldscollide', __name__)

@bp.route('/trips/')
def show_entries():
    dbsession = get_db(Base)
    trips = []
    for trip in dbsession.query(Trip).all():
        trips.append(trip.to_dict())
    payload = {
        "data": {
            "trips": trips
        }
    }
    return jsonify(payload)

@bp.route('/trips/', methods=['POST'])
def add():
    input = request.get_json()
    if "src" not in input.keys() or \
        "dest" not in input.keys():
        return abort(400)

    dbsession = get_db(Base)
    trip = Trip(src=input["src"], dest=input["dest"])
    dbsession.add(trip)
    dbsession.commit()

    payload = {
        "data": trip.to_dict()
    }

    return jsonify(payload)
