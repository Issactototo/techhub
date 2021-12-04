//express
const express = require('express')
const app = express()
const port = 5000

// //oracle
// const oracledb = require('oracledb');
// oracledb.initOracleClient({ libDir: process.env.HOME + '/Downloads/instantclient_19_8' });


//routes
app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.use('/register', require("./src/Pending"));


app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})


