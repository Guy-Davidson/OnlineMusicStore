import { useEffect } from 'react'
import { useNavigate } from 'react-location'

import Products from '../Pages/Products/Products'
import Register from '../Pages/Register/Register'
import Login from '../Pages/Login/Login'
import Cart from '../Pages/Cart/Cart'
import Checkout from '../Pages/Checkout/Checkout'
import Admin from '../Pages/Admin/Admin'

import Contact from "../Pages/Contact/Contact";
import Chords from "../Pages/Chords/Chords";
import ChordsPage from "../Pages/Chords/ChordsPage";
import Guides from "../Pages/Guides/Guides";
import Tuner from "../Pages/Tuner/Tuner";
import Readme from "../Pages/Readme/Readme";
import PrivateRoute from './PrivateRoute'

const Redirect = () => {
    const navigate = useNavigate()
    useEffect(() => {
        navigate({ to: `./products`, replace: true })
    }, [])

    return (
        <></>
    )
}

export const routes = [
    {
        path: '/',
        element: <Redirect />
    },
    {
        path: '/products',
        element: <Products />
    },
    {
        path: '/cart',
        element: <PrivateRoute><Cart /></PrivateRoute>
    },
    {
        path: '/checkout',
        element: <PrivateRoute><Checkout /></PrivateRoute>
    },
    {
        path: "/tuner",
        element: <PrivateRoute><Tuner /></PrivateRoute>,
    },
    {
    path: "/guides",
    element: <PrivateRoute><Guides /></PrivateRoute>,
  },
  {
    path: "/chords",
    children: [
      { path: "/", element: <PrivateRoute><Chords /></PrivateRoute>},
      {
        path: ":fileName",
        element: <PrivateRoute><ChordsPage /></PrivateRoute>,
      },
    ],
  },

  {
    path: "/contact",
    element: <PrivateRoute><Contact /></PrivateRoute>,
  },
  {
    path: "/admin",
    element: <PrivateRoute><Admin /></PrivateRoute>
  },
  {
    path: "/register",
    element: <Register />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/readme",
    element: <Readme />,
  },
];
