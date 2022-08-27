import { useEffect } from 'react'
import { useNavigate } from 'react-location'

import Products from '../Pages/Products/Products'
import Register from '../Pages/Register/Register'
import Login from '../Pages/Login/Login'
import Cart from '../Pages/Cart/Cart'
import Checkout from '../Pages/Checkout/Checkout'

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
        path: '/mypage1',
        element: <div>mypage1 Page</div>
    },
    {
        path: '/mypage2',
        element: <div>mypage2 Page</div>
    },
    {
        path: '/mypage3',
        element: <div>mypage3 Page</div>
    },
    {
        path: '/mypage4',
        element: <div>mypage4 Page</div>
    },
    {
        path: '/admin',
        element: <div>admin Page</div>
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