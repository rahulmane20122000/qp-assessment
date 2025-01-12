import { userModel } from "./user.schema";
import { IUser } from "./user.types";

const createUser = async(userDetails : IUser)=> await userModel.create({...userDetails});
const findUser = async(email : string)=> await userModel.findOne({where : {email}});

export default {createUser,findUser};

