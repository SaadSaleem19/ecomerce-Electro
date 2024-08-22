import logo from './logo.svg';
import './App.css';
import { React } from 'react'
import { ChakraProvider } from "@chakra-ui/react"
import { Electro } from './Electro';
import Login  from './component/Login.js'
import Signin  from './component/Signin.js'

import {createBrowserRouter, Link, RouterProvider,BrowserRouter,Routes,Route} from 'react-router-dom'
function App() {
  const router = createBrowserRouter([
    {
      path: "/Login",
      element: <Login/>
    },
    {
      path: "/dashboard",
      element: <Electro/>
    },
    { path: "/sign-up",
      element: <Signin/>
    },
    {}
  ])

  return (
    <ChakraProvider>
      <RouterProvider router={router} />
     {/* <BrowserRouter>
     <Routes>
      <Route path='Login' element={<Login/>}></Route>
      <Route path='Signin' element={<Signin/>}></Route>
     </Routes>
     </BrowserRouter> */}
    </ChakraProvider>



  );
}

export default App;
