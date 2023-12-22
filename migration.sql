DROP TABLE IF EXISTS owners;
DROP TABLE IF EXISTS vehicles;

CREATE TABLE owners (
    id serial PRIMARY KEY,
    firstName varchar(20),
    lastName varchar(20)
);

CREATE TABLE vehicles (
    id serial PRIMARY KEY,
    make varchar(20),
    model varchar(20),
    modelYear integer,
    color varchar(20),
    licensePlate varchar(7),
    owner_id integer NOT NULL,
    FOREIGN KEY (owner_id) REFERENCES owners (id) ON DELETE CASCADE
)