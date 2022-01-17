const express = require("express");
const router = express.Router();
const path = require("path");

require("dotenv").config({ path: path.resolve(__dirname, "../../.env") });
const {oracledb} = require("../Database");
const {storeBlobAtIBM, getProfileImageIBM} = require('../functions/images/IBM/image.js')

router.get("/", async function (req, res) {
  let connection = await oracledb.getConnection({
    user: process.env.USERNAME,
    password: process.env.PASSWORD,
    connectionString: process.env.CONNECTIONSTRING,
  });
  try {
    const sql = `SELECT * FROM AuthorisedUser`;
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

router.post("/login", async function (req, res) {
  // console.log("req")
  // console.log(req.body)
  let connection = await oracledb.getConnection({
    user: process.env.USERNAME,
    password: process.env.PASSWORD,
    connectionString: process.env.CONNECTIONSTRING,
  });

  try {
    const sql = `SELECT * from AuthorisedUser where email='${req.body.email}' and password ='${req.body.password}' `;
    const result = await connection.execute(sql);
    connection.commit();
    if (result == undefined || result == null || result.rows.length == 0) {
      res.status(404).send("error");
      return;
    }
    const profileImage = await getProfileImageIBM(req.body.email);

    res.status(200).send({email : result.rows[0][0], profileImage: profileImage});
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

router.post("/authorise", async function (req, res) {
    // console.log("req")
    // console.log(req.body)
    let connection = await oracledb.getConnection({
      user: process.env.USERNAME,
      password: process.env.PASSWORD,
      connectionString: process.env.CONNECTIONSTRING,
    });
    try {
      const sql = `INSERT INTO AUTHORISEDUSER VALUES (:1,:2,:3,TO_DATE(:4, 'DD/MM/YY'))`;
      const binds = [
        [
          req.body.email,
          req.body.username,
          req.body.password,
          req.body.time,
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
  
router.post("/userInformation", async function (req, res) {
    let connection = await oracledb.getConnection({
      user: process.env.USERNAME,
      password: process.env.PASSWORD,
      connectionString: process.env.CONNECTIONSTRING,
    });
    try {
      const sql = `INSERT INTO USERINFORMATION VALUES(:1,:2,:3)`;
      const binds = [
        [
          req.body.email,
          req.body.username,
          req.body.image,
        ],
      ];
      await connection.executeMany(sql, binds);
      connection.commit();
      res.status(200).send("success");
    } catch (err) {
      res.status(502).send(err);
    }
    try {
      await connection.close();
    } catch (err) {
      console.error(err);
      res.status(502).send(err);
    }
});

router.get("/userInformation", async function (req, res) {
    // console.log("req")
    // console.log(req.body)
    let connection = await oracledb.getConnection({
      user: process.env.USERNAME,
      password: process.env.PASSWORD,
      connectionString: process.env.CONNECTIONSTRING,
    });
    try {
      const sql = `SELECT * FROM USERINFORMATION WHERE EMAIL=${req.body.email}`;
      const result = await connection.execute(sql);
      connection.commit();
      console.log(result)
      if (result == undefined || result == null || result.rows.length == 0) {
        res.status(404).send("failure");
      }
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

router.post("/userInformation/image", async function (req, res) {
    const response = await storeBlobAtIBM(req.body.email, req.body.image );
    if(response!='error'){
      res.status(200).send(response);
    }else{
      res.status(200).send('null');
    }
  }
)

router.get("/userInformation/image/:email", async function (req, res) {
  // console.log("req")
  const response = await getProfileImageIBM(req.params.email);
  // console.log(response)
  if(response!='error'){
    res.status(200).send(response);
    }else{
      res.status(404).send(null);
    }
  }
)

module.exports = router;
