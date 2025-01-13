

import { IExcludedPaths } from "../../utility/authorize";
import { categoryRouter } from "../category/category.routes";
import { groceryItemsRouter } from "../grocery/grocery.routes";
import { rolesRouter } from "../roles/roles.routes";
import { userRouter } from "../users/user.routes";
import { Route, Routes } from "./routes.types";

export const routes: Routes = [
    new Route('/user',userRouter),
    new Route('/role',rolesRouter),
    new Route('/category',categoryRouter),
    new Route('/grocery-items',groceryItemsRouter)
];

export const excludedPaths: IExcludedPaths[] = [
  { path: '/user/register', method: "POST" },
  { path: '/user/login', method: "POST" },
]
