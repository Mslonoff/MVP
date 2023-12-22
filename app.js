// import required libraries/dependencies
import express from 'express';
import path from 'path';
import pg from 'pg';
import 'dotenv/config';

const { Pool } = pg;
const app = express();
const expressPort = 8005;

// const pool = new Pool({  // use this for local host
//     user: "matthewslonoff",
//     password: "slonoff4",
//     host: 'localhost',
//     database: 'vehiclesdb',
//     port: 5432,
// });

const connectionString = process.env.PG_DATABASE_URL; // hide to prevent hacking? USE this for render
console.log(connectionString);
const pool = new Pool ({
    connectionString,
})

// middleware
app.use(express.static('public'));
app.use(express.json());

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

app.get('/api/vehicles/license/:license', (req, res) => { // good to go
    const { license } = req.params;
    pool.query('SELECT * FROM vehicles WHERE licensePlate=$1', [license])
    .then((result) => {
        if (result.rows.length > 0) {
            console.log(result.rows)
            res.status(200).send(result.rows)
        } else {
            res.status(404).send('Sorry cannot find vehicle');
        }
    })
    .catch((error) => {
        //console.log(result.rows)
        console.error(error);
        res.status(500).send('Internal Server Error');
    });
});

app.get('/api/owners/:id', (req, res) => { // good to go
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

// app.get('/api/owners/ownerid:id', (req, res) => { // good to go
//     const { id } = req.params;
//     pool.query('SELECT * FROM owners WHERE id=$1', [id])
//     .then((result) => {
//         if (result.rows.length > 0) {
//             res.status(200).send(result.rows)
//         } else {
//             res.status(404).send('Sorry cannot find owner');
//         }
//     })
//     .catch((error) => {
//         console.error(error);
//         res.status(500).send('Internal Server Error');
//     });
// });

app.listen(expressPort, () => {
    console.log(`Listening on port ${expressPort}...`);
});

