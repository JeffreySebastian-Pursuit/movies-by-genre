DROP DATABASE IF EXISTS movies_dev;
CREATE DATABASE movies_dev;

\c movies_dev;

CREATE TABLE movies_genre(
    id SERIAL PRIMARY KEY,
    genre TEXT NOT NULL,
    title TEXT NOT NULL,
    thumbnail TEXT NOT NULL,
    year INTEGER NOT NULL,
    synopsis TEXT NOT NULL,
    duration NUMERIC NOT NULL,
    favorite INTEGER
);