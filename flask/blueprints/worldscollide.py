from flask import Blueprint, request, session, g, redirect, url_for, abort, \
     jsonify, flash, current_app

from blueprints.models import Base, Trip
from blueprints.helpers import get_db

bp = Blueprint('worldscollide', __name__)

@bp.route('/')
def show_entries():
    dbsession = get_db(Base)
    trips = []
    for trip in dbsession.query(Trip).all():
        trips.append(trip.to_dict())
    return jsonify(trips)

@bp.route('/add', methods=['POST'])
def add():
    input = request.get_json()
    if "src" not in input.keys() or \
        "dest" not in input.keys():
        return jsonify({"result": 1})

    dbsession = get_db(Base)
    trip = Trip(src=input["src"], dest=input["dest"])
    dbsession.add(trip)
    dbsession.commit()

    return jsonify({"result": 0, "trip": trip.to_dict()})
