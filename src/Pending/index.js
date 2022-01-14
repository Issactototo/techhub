const express = require("express");
const router = express.Router();
const path = require('path')

require('dotenv').config({ path: path.resolve(__dirname, '../../.env') })

const {oracledb} = require('../Database')

router.get("/", async function (req, res) {
  let connection = await oracledb.getConnection({
    user: process.env.USERNAME,
    password: process.env.PASSWORD,
    connectionString: process.env.CONNECTIONSTRING,
  });
  try {
    const sql = `SELECT * FROM PendingUser`;
    
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

router.post("/", async function (req, res) {
  // console.log("req")
  // console.log(req.body)
  let connection = await oracledb.getConnection({
    user: process.env.USERNAME,
    password: process.env.PASSWORD,
    connectionString: process.env.CONNECTIONSTRING,
  });
  try {
    const sql = `INSERT INTO PendingUser VALUES (:1, :2, :3,:4, :5)`;
    const binds = [
      [
        req.body.email,
        req.body.username,
        req.body.reason,
        req.body.topic,
        req.body.isReferred,
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


router.delete("/:id", async function (req, res) {
    // console.log("req")
    // console.log(req)
    let connection = await oracledb.getConnection({
        user: process.env.USERNAME,
        password: process.env.PASSWORD,
        connectionString: process.env.CONNECTIONSTRING,
    });
    try {
      const sql = `DELETE FROM PENDINGUSER WHERE email='${req.params.email}'`;
      
      const result = await connection.execute(sql);
      connection.commit();
      console.log("result")
      console.log(result)
      res.status(200).send(result);
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

// async function run() {

//   let connection;

//   try {
//     connection = await oracledb.getConnection({ user: "admin", password: "Issacto606!!", connectionString: "hktechblog_high" });

//     // Create a table

//     const sql = `INSERT INTO PendingUser VALUES (:1, :2, :3,:4)`;

//     const binds =
//       [ ["issacto@ibm.com", "username", "reason","topic" ] ];

//     await connection.executeMany(sql, binds);

//     connection.commit();

//     // Now query the rows back

//     const result = await connection.execute(`SELECT * FROM PendingUser`);

//     console.dir(result.rows, { depth: null });

//   } catch (err) {
//     console.error(err);
//     return err;
//   } finally {
//     if (connection) {
//       try {
//         await connection.close();
//       } catch (err) {
//         console.error(err);
//       }
//     }
//   }
// }

// run();
