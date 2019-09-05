"use strict"

const { Client }  = require('pg')
const client = new Client({
  user: 'icmdb',
  host: '211.251.237.70',
  database: 'icm',
  password: 'icmdb',
  port: 15432
})
client.connect()

module.exports = (event, context) => {
    let err;
    console.log('start server =====> query selec ' )
    client.query('SELECT * FROM icmdb.tb_host_os_patch_history', (err, res) => {
      console.log(err,res)
      context.status(200).succeed(res.rows);
    })
}
