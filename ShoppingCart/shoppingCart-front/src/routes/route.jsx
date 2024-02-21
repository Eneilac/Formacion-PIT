import { createBrowserRouter } from "react-router-dom";
import Dashboard from "../views/Dashboard";
import Layout from "../layout/Layout";
import {BASE_PATH, EVERYTHIK_PATH} from '../constants/paths'
import Error404 from "../views/errors/Error404";

const router = createBrowserRouter((
    [
        {
            element: <Layout />,
            children: [
                {
                    path: BASE_PATH,
                    element: <Dashboard />
                },
            ]
        },
        {
            path: EVERYTHIK_PATH,
            element: <Error404 />
        }
    ]
))


export default router