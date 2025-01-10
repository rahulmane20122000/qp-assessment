import { rolesModel } from "./roles.schema"
import { IRole } from "./roles.type"

const createRole = async(roleDetails : IRole)=> await rolesModel.create({...roleDetails})



export default {createRole}