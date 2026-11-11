import {createBrowserRouter, RouterProvider} from "react-router";

import Login from "./pages/login.jsx";
import ProductDetails from "./pages/product_detail.jsx";
import Signup from "./pages/signup.jsx";
import Game from "./pages/game.jsx";

const router = createBrowserRouter([
    {path : "/", element : <Login/>},
    {path : "/signup", element : <Signup/>},
    {path : "/product-details", element : <ProductDetails/>},
    {path : "/game", element : <Game/>},
])

export default function App() {
    return(
        <RouterProvider router={router}/>
    );
}
