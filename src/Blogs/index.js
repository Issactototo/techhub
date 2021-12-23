const express = require("express");
const router = express.Router();
const path = require('path')
const {processData} = require('../functions/local/storeBlog')
require('dotenv').config({ path: path.resolve(__dirname, '../../.env') })

const oracledb = require('../Database')

router.post("/storeImage", async function (req, res) {
    let connection = await oracledb.getConnection({
      user: process.env.USERNAME,
      password: process.env.PASSWORD,
      connectionString: process.env.CONNECTIONSTRING,
    });
    try {
      const sql = `INSERT INTO Image VALUES(:1,:2) `;
      const binds = [
        [
          req.body.data,
          req.body.id
        ],
      ];
      console.log("binds");
      console.log(binds);
      await connection.executeMany(sql, binds);
      connection.commit();
      res.status(200).send(req.body.id);
    } catch (err) {
      console.error(err);
      res.status(502).send(err);
    }
    try {
      await connection.close();
      console.log("HEREE");
    } catch (err) {
      console.error(err);
      res.status(502).send(err);
    }
});


router.post("/submit", async function (req, res) {
    let connection = await oracledb.getConnection({
      user: process.env.USERNAME,
      password: process.env.PASSWORD,
      connectionString: process.env.CONNECTIONSTRING,
    });
    try {
    // const processedData = await processData(data);
      const sql = `INSERT INTO BLOG VALUES(:1,:2,:3,:4,:5,:6,:7,:8) `;
      const binds = [
        [
          req.body.email,
          req.body.username,
          req.body.category,
          req.body.level,
          req.body.data,
          req.body.title,
          req.body.date,
          req.body.id,
        ],
      ];
      console.log("binds");
      console.log(binds);
      await connection.executeMany(sql, binds);
      connection.commit();
      res.status(200).send("success");
    } catch (err) {
      console.error(err);
      res.status(502).send(err);
    }
    try {
      await connection.close();
      console.log("HEREE");
    } catch (err) {
      console.error(err);
      res.status(502).send(err);
    }
});


router.get("/category/:category", async function (req, res) {
  let connection = await oracledb.getConnection({
    user: process.env.USERNAME,
    password: process.env.PASSWORD,
    connectionString: process.env.CONNECTIONSTRING,
  });
  try {
    console.log(req.params.category)
    //req.params.emai
    const sql = `SELECT USERNAME, PUBLISHEDLEVEL, TITLE, PUBLISHEDDATE, ID FROM BLOG WHERE CATEGORY='${req.params.category}' `;
    
    const result = await connection.execute(sql);
    res.status(200).send(result.rows);
  } catch (err) {
    console.error(err);
    res.status(502).send(err);
  }
  try {
    await connection.close();
    console.log("HEREE");
  } catch (err) {
    console.error(err);
    res.status(502).send(err);
  }
});


router.get("/blog/:id", async function (req, res) {
  let connection = await oracledb.getConnection({
    user: process.env.USERNAME,
    password: process.env.PASSWORD,
    connectionString: process.env.CONNECTIONSTRING,
  });
  try {
    console.log(req.params.id)
    //req.params.emai
    const sql = `SELECT EMAIL, USERNAME, CATEGORY,PUBLISHEDLEVEL, DBMS_LOB.substr(data, 3000), TITLE,PUBLISHEDDATE, ID FROM BLOG WHERE id='${req.params.id}'`;
    
    const result = await connection.execute(sql);
    res.status(200).send(result.rows);
  } catch (err) {
    console.error(err);
    res.status(502).send(err);
  }
  try {
    await connection.close();
    console.log("HEREE");
  } catch (err) {
    console.error(err);
    res.status(502).send(err);
  }
});


module.exports = router;