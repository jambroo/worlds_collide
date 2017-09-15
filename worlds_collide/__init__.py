from flask import Flask, request, session, g, redirect, url_for, abort, \
     render_template, flash

app = Flask(__name__)
app.config.from_object('worlds_collide.default_settings')

@app.route('/')
def main():
    session['username'] = "james"
    return render_template('index.html')

@app.route('/new', methods=['POST'])
def new():
    if request.method == 'POST':
        try:
            trip = Trip(request.form["from"], request.form["to"])
            flash("New entry was submitted: %s" % trip.display())
        except:
            flash("An error ocurred while submitting trip.")
    return redirect(url_for('main'))
