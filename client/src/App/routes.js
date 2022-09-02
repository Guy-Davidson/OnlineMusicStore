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
        element: <Cart />
    },
    {
        path: '/checkout',
        element: <Checkout />
    },
    {
        path: "/tuner",
        element: <Tuner />,
    },
    {
    path: "/guides",
    element: <Guides />,
    },
    {
        path: "/chords",
        children: [
          { path: "/", element: <Chords /> },
          {
            path: ":fileName",
            element: <ChordsPage />,
          },
        ],
    },
    {
        path: "/contact",
        element: <Contact />,
    },
    {
        path: '/admin',
        element: <Admin />
    },
    {
        path: '/register',
        element: <Register />
    },
    {
        path: '/login',
        element: <Login />
    },
    {
        path: '/readme',
        element: <div>Readme Page</div>
    },
]