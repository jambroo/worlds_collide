from flask import Flask, request, session, g, redirect, url_for, abort, \
     render_template, flash
from cassandra.cluster import Cluster

from .models.trip import Trip

app = Flask(__name__)
app.config.from_object('worlds_collide.default_settings')
app.config.from_envvar('WORLDS_COLLIDE_SETTINGS')

@app.route('/')
def main():
    cluster = Cluster()
    session = cluster.connect()
    session.set_keyspace('trips')
    rows = session.execute('SELECT id, from_place, to_place FROM trips')
    # for trip in rows:
        # print("heh: "+str(trip.id))

    return render_template('index.html', trips=rows)

@app.route('/new', methods=['POST'])
def new():
    if request.method == 'POST':
        try:
            trip = Trip(request.form["from"], request.form["to"])
            flash("New entry was submitted: %s" % trip.display())

            cluster = Cluster()
            session = cluster.connect()
            session.set_keyspace('trips')
            session.execute("INSERT INTO trips (id, from_place, to_place) VALUES (uuid(), %s, %s)", (request.form["from"], request.form["to"], ))
        except:
            flash("An error ocurred while submitting trip.")
    return redirect(url_for('main'))
