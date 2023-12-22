// import required libraries/dependencies
import express from 'express';
import path from 'path';
import pg from 'pg';
const { Pool } = pg;
const app = express();
const expressPort = 8005;
const pool = new Pool({
    user: "matthewslonoff",
    password: "slonoff4",
    host: 'localhost',
    database: 'vehiclesdb',
    port: 5432,
});

// middleware
app.use(express.json());
app.use(express.static('public'));

// create CRUD routes
app.get('/api/vehicles', (req, res) => { // good to go
    pool
    .query('SELECT * FROM vehicles')
    .then((result) => res.status(201).send(result.rows))
    .catch((error) => {
        console.error(error);
        res.status(500).send('Sorry your vehicles not found');
    });
});

app.get('/api/owners', (req, res) => { // good to go
    pool
    .query('SELECT * FROM owners')
    .then((result) => res.status(201).send(result.rows))
    .catch((error) => {
        console.error(error);
        res.status(500).send('Sorry your owners not found');
    });
});

app.get('/api/vehicles/:id', (req, res) => { // good to go
    const { id } = req.params;
    pool.query('SELECT * FROM vehicles WHERE id=$1', [id])
    .then((result) => {
        if (result.rows.length > 0) {
            res.status(200).send(result.rows)
        } else {
            res.status(404).send('Sorry cannot find vehicle');
        }
    })
    .catch((error) => {
        console.error(error);
        res.status(500).send('Internal Server Error');
    });
});

app.get('/api/owners/:id', (req, res) => {
    const { id } = req.params;
    pool.query('SELECT * FROM owners WHERE id=$1', [id])
    .then((result) => {
        if (result.rows.length > 0) {
            res.status(200).send(result.rows)
        } else {
            res.status(404).send('Sorry cannot find owner');
        }
    })
    .catch((error) => {
        console.error(error);
        res.status(500).send('Internal Server Error');
    });
});

app.listen(expressPort, () => {
    console.log(`Listening on port ${expressPort}...`);
});

