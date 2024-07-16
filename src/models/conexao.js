    // const pg = require('pg-promise')()

    // const db = pg({
    //     user: process.env.PG_USER,
    //     password: process.env.PG_PASSWORD,
    //     database: process.env.PG_DB,
    //     host: process.env.PG_HOST,
    //     port: process.env.PG_PORT
    // })

    // // db.query("SELECT * FROM USUARIOS").then((r) => console.log(r));

    // module.exports = db


    // const pg = require('pg-promise')()

    var mysql = require('mysql');

    // const db = pg({
    //     user: process.env.PG_USER,
    //     password: process.env.PG_PASSWORD,
    //     database: process.env.PG_DB,
    //     host: process.env.PG_HOST,
    //     port: process.env.PG_PORT
    // })

    var con = mysql.createPool({
        // host: process.env.PG_HOST,
        // user: process.env.PG_USER,
        // password: process.env.PG_PASSWORD,
        // database:process.env.PG_DB,

         host: '154.56.48.204',
         user: 'u928351815_admin',
         password:'M@ratona19',
         database: 'u928351815_menoo',
         port: 3306


      });


    // db.query("SELECT * FROM USUARIOS").then((r) => console.log(r));

    module.exports = con