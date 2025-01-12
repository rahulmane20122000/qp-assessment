import { IUser } from "./user.types";
import userDb from "./user.db";
import jwt from "jsonwebtoken";
import { ERROR_MESSAGE } from "../../constants/messages.constants";

const { JWT_SECRET } = process.env;

const registerUser = async (userDetails: IUser) => {
    try {
        const existingUser = await userDb.findUser(userDetails.email);
        if (existingUser?.dataValues) {
            throw ERROR_MESSAGE.USER_ALREADY_EXIST;
        }
        const user: any = await userDb.createUser(userDetails);

        const token = jwt.sign(
            {
                id: user.id,
                email: user.email,
            },
            JWT_SECRET as string,
            { expiresIn: "1h" }
        );

        return {
            token,
        };
    } catch (error) {
        console.log(error);
        throw error;
    }
};

export default { registerUser };
