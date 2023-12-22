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

