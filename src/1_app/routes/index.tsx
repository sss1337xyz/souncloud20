import React from 'react';
import {createBrowserRouter, RouterProvider} from "react-router-dom";

import Library from "2_pages/library";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Library />,
    },
]);

const Routes = () => {
    return (
        <RouterProvider router={router} />
    );
};

export default Routes;