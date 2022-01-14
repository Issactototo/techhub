
const path = require('path')

require('dotenv').config({ path: path.resolve(__dirname, '../../../.env') })
const {oracledb} = require('../../Database')

async function deletePendingUser(email) {
  // console.log("req")
  // console.log(req)
  let connection = await oracledb.getConnection({
      user: process.env.USERNAME,
      password: process.env.PASSWORD,
      connectionString: process.env.CONNECTIONSTRING,
  });
  try {
    console.log("email")
    console.log(email)
    const sql = `DELETE FROM PENDINGUSER WHERE EMAIL='${email}'`;
    const result = await connection.execute(sql);
    connection.commit();
    return result
  } catch (err) {
    return "error"
  }
}

module.exports = {deletePendingUser};