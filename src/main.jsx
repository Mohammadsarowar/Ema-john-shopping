import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Shop from './components/Shop/Shop';
import Home from './components/Home/Home';
import Orders from './components/Orders/Orders';
import Inventory from './components/Inventory/Inventory';
import Login from './components/login/Login';
import cardProductsLoder from './loders/cardProductsLoder';
import Checkout from './components/Checkout/Checkout';
import SingUp from './components/SingUp/SingUp';
import Context from './components/Context/Context';
import PreviteRoutes from './components/routes/PreviteRoutes';
const router = createBrowserRouter([
  {
    path: "/",
    element: <Home></Home>,
    children:[
      {
        path:"/",
        element:<Shop></Shop>
      },
      {
        path:"order",
        element:<Orders></Orders>,
        loader:cardProductsLoder,
      },
      {
        path:"inventory",
        element:<Inventory></Inventory>
      },
      {
        path:"/checkout",
        element:<PreviteRoutes><Checkout/></PreviteRoutes>
      },
      {
        path:"/login",
        element:<Login></Login>
      },
      {
        path:'/singUp',
        element:<SingUp/>
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Context>
      <RouterProvider router={router}></RouterProvider>
    </Context>

  </React.StrictMode>,
)
