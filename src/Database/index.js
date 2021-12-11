const oracledb = require("oracledb");


oracledb.initOracleClient({
    libDir: process.env.HOME + "/Downloads/instantclient_19_8",
});

module.exports = oracledb;
