import { Sequelize, Dialect } from 'sequelize'
import dbConfig from './dbConfig';
let nodeEnv: any

if (process.env.NODE_ENV === 'development') {
    nodeEnv = dbConfig.development;
} else {
    nodeEnv = dbConfig.production;
}
export const db = new Sequelize(nodeEnv.database, nodeEnv.username, nodeEnv.password, {
    host: nodeEnv.host,
    port: nodeEnv.port,
    dialect: nodeEnv.dialect as Dialect
})

<<<<<<< HEAD
db.sync({ alter: false })
=======
db.sync({ alter: false })
>>>>>>> 5b4969f91d5346f23c1ae4d8747cc7a3730a83e6
