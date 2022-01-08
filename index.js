//express
const express = require('express')
const app = express()
const port = 5000
var cors = require('cors')
var bodyParser = require('body-parser');


// //oracle
// const oracledb = require('oracledb');
// oracledb.initOracleClient({ libDir: process.env.HOME + '/Downloads/instantclient_19_8' });
app.use(bodyParser.json());
app.use(cors())

//routes
app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.use('/register', require("./src/Pending"));
app.use('/user', require("./src/User"));
app.use('/blogs', require("./src/Blogs"));
app.use('/mail', require("./src/Mail"));


app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})


