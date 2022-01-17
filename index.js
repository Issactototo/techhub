//express
const express = require('express')
const path = require('path')
const app = express()
const port = 5000
var cors = require('cors')
var bodyParser = require('body-parser');


// //oracle
// const oracledb = require('oracledb');
// oracledb.initOracleClient({ libDir: process.env.HOME + '/Downloads/instantclient_19_8' });
app.use(bodyParser.json());
//app.use(cors())
app.use(cors())
//routes
app.use('/pending', require("./src/Pending"));
app.use('/user', require("./src/User"));
app.use('/blogs', require("./src/Blogs"));
app.use('/mail', require("./src/Mail"));

app.use(express.static(path.resolve(__dirname, './frontend/build')));
app.use(express.static("./frontend/public"));
app.use((req, res) => {
  res.sendFile(path.resolve(__dirname, './frontend/build', 'index.html'));
});
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})


