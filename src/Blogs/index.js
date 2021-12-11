const express = require("express");
const router = express.Router();
const path = require('path')

require('dotenv').config({ path: path.resolve(__dirname, '../../.env') })

const oracledb = require('../Database')

router.post("/blog/submit", async function (req, res) {
    let connection = await oracledb.getConnection({
      user: process.env.USERNAME,
      password: process.env.PASSWORD,
      connectionString: process.env.CONNECTIONSTRING,
    });
    try {
      const sql = `INSERT INTO USERINFORMATION VALUES(:1,:2,:3,:4)`;
      const binds = [
        [
          req.body.email,
          req.body.username,
          req.body.category,
          req.body.level,
          req.body.data,
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