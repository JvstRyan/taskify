import React from "react";
import { createBrowserRouter } from "react-router-dom";
import HomePage from "../pages/HomePage";
import App from "../App";


const router = createBrowserRouter([
    {
        path: '/',
        element: <HomePage />
    },
    {
        path: '/todos', element: <App />
    }
])

export default router