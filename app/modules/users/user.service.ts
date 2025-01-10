import { IUser } from "./user.types";
import {createUser} from './user.db'

export const registerUser = async(userDetails : IUser)=>{
    try {
        await createUser(userDetails);
        return true;
    } catch (error) {
        console.log(error);
        throw error;
    }
}