import { IUser } from "./user.types";
import userDb from "./user.db";
import jwt from "jsonwebtoken";
import { ERROR_MESSAGE } from "../../constants/messages.constants";
import { ERROR_RESPONSES } from "../../constants/response.constants";

const { JWT_SECRET } = process.env;

const createAuthenticationToken = async (tokenBody: any) => {
    try {
        const token = jwt.sign(
            {...tokenBody},
            JWT_SECRET as string,
            { expiresIn: "1h" }
        );

        return token;
    } catch (error) {
        console.log(error);
        throw error;
    }
};

const registerUser = async (userDetails: IUser) => {
    try {
        const existingUser = await userDb.findUser(userDetails.email);
        if (existingUser?.dataValues) {
            throw ERROR_MESSAGE.USER_ALREADY_EXIST;
        }
        const user: any = await userDb.createUser(userDetails);

        const token = await createAuthenticationToken({
            id: user.id,
            roleId: user.roleId
        });

        return {
            token,
        };
    } catch (error) {
        console.log(error);
        throw error;
    }
};

const userLogin = async (userDetails: IUser) => {
    try {
        const is_verified_user : any = await userDb.verifyUserCredentials(
            userDetails.email,
            userDetails.password
        );

        if (is_verified_user) {
            const token = await createAuthenticationToken({
                id: is_verified_user.id,
                roleId: is_verified_user.roleId,
                email : is_verified_user.email
            });

            return token
        }

        throw ERROR_RESPONSES.INVALID_USER
    } catch (error) {
        console.log(error);
        throw error;
    }
};

export default { registerUser,userLogin };
