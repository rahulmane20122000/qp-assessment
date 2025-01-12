import { ICategoryDetails, ILoggedUser } from "./category.types";
import categoryDb from "./category.db";
import { SUCCESS_RESPONSES } from "../../constants/response.constants";

const createCategory = async(categoryDetails : ICategoryDetails,loggedUser :ILoggedUser )=>{
    try {
       await categoryDb.createCategory({...categoryDetails,created_by : loggedUser.email})
       return SUCCESS_RESPONSES.CREATED
    } catch (error) {
        console.log(error);
        throw error;
    }
}


export default {createCategory}