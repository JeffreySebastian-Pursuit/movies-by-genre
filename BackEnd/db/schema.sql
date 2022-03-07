DROP DATABASE IF EXISTS movies_dev;
CREATE DATABASE movies_dev;

\c movies_dev;


CREATE TABLE users(
    id SERIAL PRIMARY KEY,
    display_name VARCHAR(40),
    photo_url text

);
CREATE TABLE movies_genre(
    id SERIAL PRIMARY KEY,
    genre TEXT NOT NULL,
    title TEXT NOT NULL,
    thumbnail TEXT NOT NULL,
    year INTEGER NOT NULL,
    synopsis TEXT NOT NULL,
    duration NUMERIC NOT NULL,
    favorite INTEGER,
    users_id INT REFERENCES users (id) on DELETE CASCADE
);

CREATE TABLE comments(
    id SERIAL PRIMARY KEY,
    comment TEXT,
    movies_genre_id INTEGER REFERENCES movies_genre (id)
);