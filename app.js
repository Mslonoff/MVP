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
app.get('/api/vehicles', (req, res) => {
    pool
    .query('SELECT * FROM vehicles')
    .then((result) => res.status(201).send(result.rows))
    .catch((error) => {
        console.error(error);
        res.status(500).send('Sorry your vehicles not found');
    });
});

app.listen(expressPort, () => {
    console.log(`Listening on port ${expressPort}...`);
});

