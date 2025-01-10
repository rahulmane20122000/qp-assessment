

import { IExcludedPaths } from "../../utility/authorize";
import { userRouter } from "../users/user.routes";
import { Route, Routes } from "./routes.types";

export const routes: Routes = [
    new Route('/user',userRouter)
];

export const excludedPaths: IExcludedPaths[] = [
  { path: '/auth/login', method: "POST" },
  { path: '/auth/change-password/', method: "PUT" },
]
