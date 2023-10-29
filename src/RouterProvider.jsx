import { createBrowserRouter } from "react-router-dom";
import Root from "./components/root/Root";
import Home from "./components/Home/Home";
import Cart from "./components/Cart/Cart";
import AddProduct from "./components/AddProduct/AddProduct";
import Samsung from "./components/Home/brands/samsung/Samsung";
import Apple from "./components/Home/brands/apple/Apple";
import Realme from "./components/Home/brands/realme/Realme";
import Google from "./components/Home/brands/google/Google";
import Nothing from "./components/Home/brands/nothing/Nothing";
import Update from "./components/root/Update";
import Details from "./components/root/Details";
import Login from "./components/login&signup/Login";
import Register from "./components/login&signup/Register";
import Private from "./components/Authentication/Privete";
import Error from "./components/Error";
import Oneplus from './components/Home/brands/onplus/Oneplus';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement:<Error></Error>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/myCart",
        element:<Private><Cart></Cart></Private>,
      },
      {
        path: "/addProduct",
        element: <Private><AddProduct></AddProduct></Private>,
      },
      {
        path: "/brands/samsung",
        element: <Samsung></Samsung>,
        loader: () => fetch("https://assignment-10-mu.vercel.app/brand/samsung"),
      },
      {
        path: "/brands/apple",
        element: <Apple></Apple>,
        loader: () => fetch("https://assignment-10-mu.vercel.app/brand/apple"),
      },
      {
        path: "/brands/realme",
        element: <Realme></Realme>,
        loader: () => fetch("https://assignment-10-mu.vercel.app/brand/realme"),
      },
      {
        path: "/brands/oneplus",
        element: <Oneplus></Oneplus>,
        loader: () => fetch("https://assignment-10-mu.vercel.app/brand/oneplus"),
      },
      {
        path: "/brands/google",
        element: <Google></Google>,
        loader: () => fetch("https://assignment-10-mu.vercel.app/brand/google"),
      },
      {
        path: "/brands/nothing",
        element: <Nothing></Nothing>,
        loader: () => fetch("https://assignment-10-mu.vercel.app/brand/nothing"),
      },
      {
        path:"/update/:id",
        element:<Private><Update></Update></Private>,
        loader:({params})=>fetch(`https://assignment-10-mu.vercel.app/update/${params.id}`)
      },
      {
        path:"details/:id",
        element:<Private><Details></Details></Private>,
        loader:({params})=>fetch(`https://assignment-10-mu.vercel.app/update/${params.id}`)
      },
      {
        path:"/login",
        element:<Login></Login>
      },
      {
        path:"/register",
        element:<Register></Register>
      }
    ],
  },
]);

export default router;
