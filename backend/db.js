
const {Client, Pool} = require('pg');

const pool = new Pool({
    user:"postgres",
    password:"admin",
    host:"localhost",
    port:5433,
    database: "Persona"
  })

const client = new Client({
    user:"postgres",
    password:"admin",
    host:"localhost",
    port:5433,
    database: "Persona"
})

pool.on('error', (err, client) => {
    console.error('Unexpected error on idle client', err)
    process.exit(-1)
  })


module.exports={client, pool}
