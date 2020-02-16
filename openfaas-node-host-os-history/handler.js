"use strict"

const { Client }  = require('pg')
const client = new Client({
  user: 'postgres',
  host: '192.168.43.70',
  database: 'postgres',
  password: 'postgres',
  port: 5432
})
client.connect()

module.exports = (event, context) => {
    let err;
    console.log('start server =====> query selec ' )
    client.query('SELECT * FROM public.tb_host_os_patch_history', (err, res) => {
      console.log(err,res)
      context.status(200).succeed(res.rows);
    })
}
