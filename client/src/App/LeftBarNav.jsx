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

    return (
        <Link 
            to={props.directTo}
            style={{width: '100%'}}
            >
            <StyledLeftBarNav isActive={location.current.pathname === directTo}>
                {icon}
                {name}
                {name === 'Cart' && cart.isSuccess && 
                    <CartItemsIcon>{cart.data.length}</CartItemsIcon>
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

`

export default LeftBarNav