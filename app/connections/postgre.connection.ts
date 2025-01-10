import {sequelize} from '../config/db.config'

export const connectToPostgres = async () => {
    try {
        await sequelize.authenticate();
        await sequelize.sync();
        console.log("CONNECTED TO POSTGRES");
        return true;
    } catch (error) {
        console.log(error)
        throw 'COULD NOT CONNECT TO POSTGRES';
    }
}