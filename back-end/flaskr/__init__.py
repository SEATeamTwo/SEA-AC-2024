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

    print(db.getMovieRecs([3,0.5,3.5,4]))

    return app

app = create_app()


@app.route('/getMovieRecs')
def getMovieRecs():
    data = request.args.get('arr')
    return db.getMovieRecs(data)
    



