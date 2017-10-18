from flask import Blueprint, request, session, g, redirect, url_for, abort, \
     jsonify, flash, current_app

bp = Blueprint('worldscollide', __name__)

@bp.route('/')
def show_entries():
    return jsonify([])

@bp.route('/add', methods=['POST'])
def add():
    return jsonify({"result": 0, "trip": {"id": 0, "src": "SRC", "dest": "DEST"}})
