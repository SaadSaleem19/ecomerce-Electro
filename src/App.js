import logo from "./logo.svg";
import "./App.css";
import { React } from "react";
import { ChakraProvider } from "@chakra-ui/react";
import { Electro } from "./screen/Dashboard/index.js";
import Login from "./screen/Login/Login.js";
// import Logout from "./screen/Logout/index.js";

import Admin from "./screen/Admin/index.js";
import {
  createBrowserRouter,
  Link,
  RouterProvider,
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Signup from "./screen/Sigup/Signup.js";
import Protected from "./component/Protected.js";
import Public from "./component/Public.js";
import Addproduct from "./screen/Admin/Product/Addproduct/product.js";
import ProdductList from "./screen/Admin/Product/Addproduct/ProdductList/productlist.js";
import Order from "./screen/Admin/Order/index.js";
import Layout from "./component/layout/adminLayout.js";

function App() {
  const router = createBrowserRouter([
    {
      path: "/login",
      element: <Public Component={Login} />,
    },
    
    {
      path: "/dashboard",
      element: <Protected ><Electro /></Protected>,
    },
    { path: "/sign-up", element: <Public Component={Signup} /> },
    { path: "/admin", element: <Protected Component={Admin} /> },
    { path: "/product", element: <Protected Component={Addproduct} /> },
    { path: "/productlist",
      element: <Protected>
      <Layout Component={ProdductList} />
    </Protected>
    },
    { path: "/order",
      element: <Protected>
      <Layout Component={Order} />
    </Protected>
    },
    {
      path: "/add-product",
      element: (
        <Protected>
          <Layout Component={Addproduct} />
        </Protected>
      ),
    },
  ]);

  return(
    <ChakraProvider>
      <RouterProvider router={router} />
    </ChakraProvider>
  )
}

export default App;
