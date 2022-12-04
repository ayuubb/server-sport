import {Sequelize} from "sequelize";

const nameDatabase = process.env.MYSQLDATABASE || 'db';
const user = process.env.MYSQLUSER || 'root';
const host = process.env.MYSQLHOST || 'localhost';
const password = process.env.MYSQLPASSWORD || '';
const port = process.env.MYSQLPORT || 3306;
// const nameDatabase = process.env.MYSQLDATABASE;
// const user = process.env.MYSQLUSER;
// const host = process.env.MYSQLHOST;
// const password = process.env.MYSQLPASSWORD;



const db = new Sequelize(nameDatabase,user,password,{
    host: host,
    dialect: "mysql",
    port : port
});

export default db;