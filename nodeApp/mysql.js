const mysql = require("mysql2/promise");

const service = {

  async connect(host, user, password, database) {
    console.log('---->',host, user, password, database);
      this.pool = await mysql.createPool({
         host,
         user,
         password,
         database,
         waitForConnections: true,
         connectionLimit: 10,
         queueLimit: 0,
      });
      return this.pool;
  },

  async ps(statement, inputs=[]) {
      console.log('inputs', inputs);
    const query = await this.pool.format(statement, inputs);
    console.log("query -> ", query);
    const [rows] = await this.pool.query(query);
    return rows;
  },

};

module.exports = service;
