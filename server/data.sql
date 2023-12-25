-- SAMPLE QUERIES FOR TESTING PURPOSES ONLY --

-- \c dbname - goto db
-- \dt show all tables
-- \d+ tablename - show table details
-- \q quit

CREATE DATABASE todoapp;

CREATE TABLE todos (
  id SERIAL PRIMARY KEY,
  userId INTEGER REFERENCES users(id),
  title VARCHAR(255) NOT NULL,
  progress INTEGER NOT NULL,
  date INTEGER NOT NULL
);

CREATE TABLE users (
  id SERIAL PRIMARY KEY,
  email VARCHAR(255) NOT NULL,
  hashed_password VARCHAR(255) NOT NULL
);

INSERT INTO users (email, hashed_password) VALUES ('admin@gmail.com', '$2a$1');

INSERT INTO todos (userId, title, progress, date) VALUES (1, 'Create a todo app', 100, 1614556800000);

UPDATE todos SET progress = 50 WHERE id = 1;

SELECT * FROM todos;