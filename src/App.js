import {
  createBrowserRouter,
  RouterProvider,
  Outlet,
} from "react-router-dom";      

import "./app.scss";
import React from 'react';
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import Product from "./pages/Product/Product";
import Products from "./pages/Products/Products";
import Home from "./pages/Home/Home";


const Layout = ()=>{
  return(
    <div className="app">
      <Navbar/>
      <Outlet/>
      <Footer/>
    </div>
  );
}

const router = createBrowserRouter([
  {
    path:"/",
    element:<Layout/>,
    children:[
      {
        path:"/",
        element:<Home/>
      },
      {
        path:"/product/:id",
        element:<Product/>
      },
      {
        path:"/products/:id",
        element:<Products/>
      },
    ]
  }
]);

const App = () => {
  return (
    <div>
      <RouterProvider router={router}/>
    </div>
  )
}

export default App




