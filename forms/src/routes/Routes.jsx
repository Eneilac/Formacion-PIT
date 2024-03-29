import React from "react";
import Main from '../components/layout/Main';
import { createBrowserRouter } from "react-router-dom";
import { BASE_PATH, EVERYTHIK_PATH, LOGIN, SINGIN, USER } from "../constants/paths";
import { Error404 } from "../components/errorpages/Error404";
import { Home } from "../views/home/Home";
import { User } from "../components/user/User";
import Login from "../views/auth/login/Login";
import Register from "../views/auth/register/Register";



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
                },
                {
                    path: LOGIN,
                    element: <Login />
                },
                {
                    path: SINGIN,
                    element: <Register />
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