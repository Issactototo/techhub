const oracledb = require("oracledb");
const redis = require("ioredis");
const contentful = require('contentful');
const redisClient = redis.createClient({
  host: process.env.REDISHOST,
  port: process.env.REDISPORT,
  username: process.env.REDISUSERNAME,
  password: process.env.REDISPASSWORD,
});

redisClient.on("connect", () => {
  console.log("connected to redis successfully!");
});

redisClient.on("error", (error) => {
  console.log("Redis connection error :", error);
});

oracledb.initOracleClient({
  libDir: process.env.HOME + "/Downloads/instantclient_19_8",
});


const contentfulClient = contentful.createClient({
  space: process.env.CONTENTFULSPACEID,
  accessToken: process.env.CONTENTFULAPIKEY,
});

module.exports = { oracledb, redisClient, contentfulClient };
