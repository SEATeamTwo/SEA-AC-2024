import sqlite3
import json

# https://prod.liveshare.vsengsaas.visualstudio.com/join?753F51D34C9D74191DDF81595D3E5B82C0A3

class Database:

    def __init__(self):
        # self.conn = sqlite3.connect('movies.db')
        self.conn = sqlite3.connect('movies.db', check_same_thread=False)
        self.createDB()


    def createDB(self):
        with open('flaskr/static/sql/movies_table.sql') as f:
            self.conn.executescript(f.read())

        with open('flaskr/static/movies.json', 'r') as json_file:
            data = json.load(json_file)

        for item in data:
            query = """
INSERT OR REPLACE INTO movies_table (movie_id, title, image_url, video_url, calm_score, cheerful_score,
awake_score, fearless_score) VALUES(?,?,?,?,?,?,?,?)
            """


            # https://prod.liveshare.vsengsaas.visualstudio.com/join?753F51D34C9D74191DDF81595D3E5B82C0A3


            try:
                #INSERT OR UPDATE
                self.conn.execute(
                    query,\
                (item["movie_id"], item["title"], item["image_url"], item["video_url"], \
                item["calm_score"], item["cheerful_score"], item["awake_score"], item["fearless_score"]))
            except Exception as e:
                print(e)
                print((item["movie_id"], item["title"], item["image_url"], item["video_url"], \
                item["calm_score"], item["cheerful_score"], item["awake_score"], item["fearless_score"]))
            # else:
            #     print("Successfully added")


        self.conn.commit()


    def getAllMovies(self):
        rows = self.conn.execute("SELECT * FROM movies_table")
        print(rows)
        

    def getMovieRecs(self, user_emotions):
        print(user_emotions)
        query = """
        SELECT title, image_url, video_url 
        FROM movies_table
        ORDER BY (Abs(calm_score - ?) + Abs(cheerful_score - ?) + Abs(awake_score - ?) + Abs(fearless_score - ?)) ASC
        LIMIT 5;
"""

        films = self.conn.execute(query, \
        (user_emotions[0], user_emotions[1], user_emotions[2], user_emotions[3]))

        for film in films:
            print(film)

        return list(films)

    def close(self):
        self.conn.close()