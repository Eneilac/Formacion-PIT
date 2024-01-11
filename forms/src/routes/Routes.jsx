import React from "react";
import Main from '../components/layout/Main';
import { createBrowserRouter } from "react-router-dom";
import { BASE_PATH, EVERYTHIK_PATH, USER } from "../constants/paths";
import { Error404 } from "../components/errorpages/Error404";
import { Home } from "../scenes/home/Home";
import { User } from "../components/user/User";




const router = createBrowserRouter(
    [
        {
            element: <Main />,
            children: [
                {
                    path: BASE_PATH,
                    element: <Home />
                },
                {
                    path: USER,
                    element: <User />
                }
            ]
        },
        {
            path: EVERYTHIK_PATH,
            element: <Error404 />
        }
    ]
)

export default router