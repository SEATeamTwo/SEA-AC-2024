CREATE TABLE IF NOT EXISTS movies_table (
    movie_id INTEGER PRIMARY KEY,
    title TEXT NOT NULL,
    image_url TEXT NOT NULL,
    video_url TEXT NOT NULL,
    calm_score REAL NOT NULL,
    cheerful_score REAL NOT NULL,
    awake_score REAL NOT NULL,
    fearless_score REAL NOT NULL
);
