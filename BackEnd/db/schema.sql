DROP DATABASE IF EXISTS movies_dev;
CREATE DATABASE movies_dev;

\c movies_dev;


CREATE TABLE users(
    id SERIAL PRIMARY KEY,
    display_name VARCHAR(40),
    photo_url TEXT
);
CREATE TABLE movies(
    id SERIAL PRIMARY KEY,
    genre TEXT NOT NULL,
    title TEXT NOT NULL,
    thumbnail TEXT NOT NULL,
    year INTEGER NOT NULL,
    synopsis TEXT NOT NULL,
    duration NUMERIC NOT NULL,
    favorite INTEGER,
    user_id INT REFERENCES users (id) on DELETE CASCADE
);


CREATE TABLE comments(
    id SERIAL PRIMARY KEY,
    comment TEXT,
    movies_id INTEGER REFERENCES movies (id) ON DELETE CASCADE,
    user_id INTEGER REFERENCES users (id) ON DELETE CASCADE,
    dt TIMESTAMP DEFAULT CURRENT_TIMESTAMP
    
);