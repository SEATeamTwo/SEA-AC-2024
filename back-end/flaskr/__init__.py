import os
from flask import Flask, request
from flask_cors import CORS
from database import Database

db = Database() 



def create_app(test_config=None):
    # create and configure the app
    app = Flask(__name__, instance_relative_config=True)
    CORS(app)
    app.config.from_mapping(
        SECRET_KEY='dev',
        DATABASE=os.path.join(app.instance_path, 'flaskr.sqlite'),
    )

    return app

app = create_app()

print(db.getMovieRecs([1,4,6,8]))

@app.route('/getMovieRecs', methods=["POST","GET"])
def getMovieRecs():


    return db.getMovieRecs([1,3,4,6])
    



