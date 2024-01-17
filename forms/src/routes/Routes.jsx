import React from "react";
import Main from '../components/layout/Main';
import { createBrowserRouter } from "react-router-dom";
import { BASE_PATH, EVERYTHIK_PATH, LOGIN, SINGIN, USER } from "../constants/paths";
import { Error404 } from "../components/errorpages/Error404";
import { Home } from "../scenes/home/Home";
import { User } from "../components/user/User";
import Login from "../components/auth/login/Login";
import SingIn from "../components/auth/singin/SingIn";




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
                    element: <SingIn />
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