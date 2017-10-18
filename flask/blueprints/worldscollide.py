from flask import Blueprint, request, session, g, redirect, url_for, abort, \
     jsonify, flash, current_app

bp = Blueprint('worldscollide', __name__)

@bp.route('/')
def show_entries():
    return jsonify({"ok": "1"})
