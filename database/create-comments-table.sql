CREATE TABLE comments (
                       id serial primary key,
                       userID INTEGER,
                       name VARCHAR(30),
                       content VARCHAR(30),
                       parent_id integer not null references art(id)
);