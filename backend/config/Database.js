import { Sequelize } from "sequelize";

const db = new Sequelize('crud_db', 'root', '', {
    host: 'localhost',
    dialect: 'mysql',
    port: 3304,
});

export default db;