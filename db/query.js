const Pool = require('pg').Pool
const pool = new Pool({
    user: 'postgres',
    host: 'localhost',
    database: 'art',
    password: '',
    port: 5433
});

const getArt = (request, response) => {
    pool.query('SELECT * FROM art ORDER BY id ASC', (error, results) => {
        if (error) {
            throw error
        }
        response.status(200).json(results.rows)
    })
};

const getArtById = (request, response) => {
    const id = parseInt(request.params.id);

    pool.query('SELECT * FROM art WHERE id = $1', [id], (error, results) => {
        if (error) {
            throw error
        }
        response.status(200).json(results.rows)
    })
};

const createComment = (request, response) => {
    const { name, content, userID } = request.body;
    const artID = parseInt(request.params.id);

    pool.query('INSERT INTO comment (name, content, userID, artID) VALUES ($1, $2, $3, $4)', [name, content, userID, artID], (error, results) => {
        if (error) {
            throw error
        }
        response.status(201).send(`User added with ID: ${results.insertId}`)
    })
};

const getUsers = (request, response) => {
    pool.query('SELECT * FROM users ORDER BY id ASC', (error, results) => {
        if (error) {
            throw error
        }
        response.status(200).json(results.rows)
    })
};

const createUser = (request, response) => {
    const { name, age, location } = request.body

    pool.query('INSERT INTO users (name, age, location) VALUES ($1, $2, $3)', [name, age, location], (error, results) => {
        if (error) {
            throw error
        }
        response.status(201).send(`User added with ID: ${results.insertId}`)
    })
};


module.exports = {
    getArt,
    getArtById,
    createComment,
    getUsers,
    createUser,
};
