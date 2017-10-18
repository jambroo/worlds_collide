from os import environ
from flask import Flask, g
from blueprints.worldscollide import bp


def create_app(config=None):
    app = Flask('flaskr')

    app.config.update(dict(
        DEBUG=True,
        SECRET_KEY=environ["FLASK_SECRET"],
        USERNAME='admin',
        PASSWORD='default'
    ))
    app.config.update(config or {})
    app.config.from_envvar('WORLDSCOLLIDE_SETTINGS', silent=True)

    app.register_blueprint(bp)

    return app


app = create_app()
app.run(host = '0.0.0.0')
