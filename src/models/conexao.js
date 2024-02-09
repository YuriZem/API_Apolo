    const pg = require('pg-promise')()

    const db = pg({
        user: process.env.PG_USER,
        password: process.env.PG_PASSWORD,
        database: process.env.PG_DB,
        host: process.env.PG_HOST,
        port: process.env.PG_PORT
    })

    // db.query("SELECT * FROM USUARIOS").then((r) => console.log(r));

    module.exports = db