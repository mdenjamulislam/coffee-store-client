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
import AuthProvider from "./providers/AuthProvider.jsx";
import Users from "./components/Users.jsx";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Root />,
        children: [
            {
                path: "/",
                element: <Home />,
                loader: () => fetch("https://coffee-store-server-one-hazel.vercel.app/coffee"),
            },
            {
                path: "/coffee/:id",
                element: <CoffeeDetails />,
                loader: ({ params }) => fetch(`https://coffee-store-server-one-hazel.vercel.app/coffee/${params.id}`),
            },
            {
                path: "/addcoffee",
                element: <AddCoffee />,
            },
            {
                path: "/updatecoffee/:id",
                element: <UpdateCoffee />,
                loader: ({ params }) => fetch(`https://coffee-store-server-one-hazel.vercel.app/coffee/${params.id}`),
            },
            {
                path: "/signup",
                element: <SignUp />,
            },
            {
                path: "/login",
                element: <Login />,
            },
            {
                path: "/users",
                element: <Users />,
                loader: () => fetch("https://coffee-store-server-one-hazel.vercel.app/users"),
            },
            {
                path: "/users/:id",
                element: <Users />,
                loader: () => fetch("https://coffee-store-server-one-hazel.vercel.app/users"),
            },
        ],
    },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <AuthProvider>
            <RouterProvider router={router}></RouterProvider>
        </AuthProvider>
    </React.StrictMode>,
);
