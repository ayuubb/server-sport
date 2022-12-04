import {Sequelize} from "sequelize";

const nameDatabase = process.env.MYSQLDATABASE || 'db';
const user = process.env.MYSQLUSER || 'root';
const host = process.env.MYSQLHOST || 'localhost';
const password = process.env.MYSQLPASSWORD || '';


const db = new Sequelize(nameDatabase,user,password,{
    host: host,
    dialect: "mysql"
});

export default db;