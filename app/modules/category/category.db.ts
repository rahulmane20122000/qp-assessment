import { categoryModel } from "./category.schema";
import { ICategoryDetails } from "./category.types";

const createCategory = async(categoryDetails: ICategoryDetails)=> await categoryModel.create({...categoryDetails});


export default {createCategory}