import { Sequelize, Dialect } from 'sequelize'
require('dotenv').config();

let nodeEnv: any
const dbConfig = {
    development: {
        username: process.env.DB_USER || 'postgres',
        password: process.env.DB_PASSWORD || 'admin',
        database: process.env.DB_NAME || 'gambreng',
        host: process.env.DB_HOST || '127.0.0.1',
        dialect: 'postgres'
    },
    production: {
        username: process.env.DB_USER,
        password: process.env.DB_PASSWORD,
        database: process.env.DB_NAME,
        host: process.env.DB_HOST,
        port: process.env.DB_PORT,
        dialect: 'postgres'
    }
}


if (process.env.NODE_ENV === 'development') {
    nodeEnv = dbConfig.development;
} else {
    nodeEnv = dbConfig.production;
}
const db = new Sequelize(nodeEnv.database, nodeEnv.username, nodeEnv.password, {
    host: nodeEnv.host,
    port: nodeEnv.port,
    dialect: nodeEnv.dialect as Dialect
})

db.sync({ alter: false })

export default db;
