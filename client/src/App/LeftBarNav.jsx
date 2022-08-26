import styled, { withTheme, css } from "styled-components";
import { Link, useLocation } from 'react-location'

import { useRecoilState } from 'recoil'
import { LoggedInAtom, UserIdAtom } from './AppAtoms'

import { GetCartQuery } from "../Pages/Cart/CartAPI";

const LeftBarNav = (props) => {
    const { name, directTo, icon } = props
    const location  = useLocation() 
    const [loggedIn, setLoggedIn] = useRecoilState(LoggedInAtom)

    const [userId, setUserId] = useRecoilState(UserIdAtom)
    const cart = GetCartQuery(userId)

    console.log(cart.data)

    return (
        <Link 
            to={props.directTo}
            style={{width: '100%'}}
            >
            <StyledLeftBarNav isActive={location.current.pathname === directTo}>
                {icon}
                {name}
                {name === 'Cart' && cart.isSuccess && 
                    <CartItemsIcon>
                        {cart.data.reduce((acc, curr) => {
                            return acc + curr.quantity
                        }, 0)}
                        </CartItemsIcon>
                }
            </StyledLeftBarNav>
        </Link>
    )
}

const StyledLeftBarNav = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    font-size: 1.6rem;
    padding: .5rem;
    border-radius: 5px;

    &:hover {
        background-color: ${props => props.theme.App.backgroundColor.hover};
    }

    ${props => {
        if(props.isActive) {
            return css `
                color: ${props => props.theme.App.fontColor.primary};
            `
        }
    }}
`

const CartItemsIcon = styled.div`
    border-radius: 100%;
    border-width: 1px;
    border-style: solid;
    border-color: black;
    background-color: black;
    font-size: 1.4rem;
    width: 3rem;
    height: 3rem;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-left: 1rem;
`

export default LeftBarNav