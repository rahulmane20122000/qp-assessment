import { IRole } from './roles.type';
import userDB from './roles.db'

const createRole = async(roleDetails : IRole)=>{
    try {
        await userDB.createRole(roleDetails)
    } catch (error) {
        console.log(error);
        throw error;
    }
}


export default {createRole}