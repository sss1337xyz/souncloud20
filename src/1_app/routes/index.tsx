import React from 'react';
import {createBrowserRouter, Outlet, RouterProvider} from "react-router-dom";

import Library from "pages/library";
import Home from "pages/home";
import Sider from "widget/sider";
import RouterLayout from "app/routes/router_layout";

const router = createBrowserRouter([
    {
        element:  <RouterLayout/>,
        children: [
            {
                path: "/",
                element: <Home />,
            },
            {
                path: "/collection",
                element: <Library />,
            },
        ]
    }
]);

const Routes = () => {
    return (
        <RouterProvider router={router} />
    );
};

export default Routes;