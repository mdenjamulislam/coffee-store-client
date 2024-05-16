import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import AddCoffee from "./components/AddCoffee.jsx";
import UpdateCoffee from "./components/UpdateCoffee.jsx";
import Root from "./layout/Root.jsx";
import Home from "./pages/Home/Home.jsx";
import CoffeeDetails from "./components/CoffeeDetails.jsx";
import SignUp from "./components/SignUp.jsx";
import Login from "./components/Login.jsx";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Root />,
        children: [
            {
                path: "/",
                element: <Home />,
                loader: () => fetch('http://localhost:5000/coffee'),
            },
            {
                path: "/coffee/:id", 
                element: <CoffeeDetails />,
                loader: ({params}) => fetch(`http://localhost:5000/coffee/${params.id}`),
            },
            {
                path: "/addcoffee",
                element: <AddCoffee />,
            },
            {
                path: "/updatecoffee/:id",
                element: <UpdateCoffee />,
                loader: ({params}) => fetch(`http://localhost:5000/coffee/${params.id}`),
            },
            {
                path: '/signup',
                element: <SignUp/>
            },
            {
                path: "/login",
                element: <Login/>
            }
        ],
    },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <RouterProvider router={router}></RouterProvider>
    </React.StrictMode>,
);
