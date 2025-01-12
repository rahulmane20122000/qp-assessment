export interface ICategoryDetails {
    id?: number;
    category_name : string;
    created_by : string;
}

export interface ILoggedUser {
    id : number;
    email : string;
    roleId : string;
}