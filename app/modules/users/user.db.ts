import { userModel } from "./user.schema";
import { IUser } from "./user.types";

export const createUser = async(userDetails : IUser)=> await userModel.create({...userDetails});
