import styled from "styled-components";

import { useRecoilState } from 'recoil'
import { UserIdAtom } from "../../App/AppAtoms";

import { GetCartQuery } from "./CartAPI";
import { GetUserQuery } from "../../App/MainAPI";

import { useNavigate } from 'react-location'

import CartItem from "./CartItem";


import { AiOutlineRight } from 'react-icons/ai';

const Cart = () => {
    const [userId, setUserId] = useRecoilState(UserIdAtom)
    const navigate = useNavigate()
    const cart = GetCartQuery(userId)
    const user = GetUserQuery(userId)

    return (
        <StyledCart>
            <CartHeader>
                Cart
            </CartHeader>
            <CartItemWrapper>
                {cart.isSuccess && cart.data.map((productData,i) => {
                    return (
                        <CartItem 
                            key={`cart-item-${i}`} 
                            product={productData.product} 
                            quantity={productData.quantity}
                            />                
                        )
                })}
            </CartItemWrapper>
            <CtaWrapper>
                <Cta onClick={() => navigate({ to: `/checkout` })}>
                    Go to checkout
                    <AiOutlineRight style={{marginLeft: "1rem"}}/>
                </Cta>
            </CtaWrapper>
        </StyledCart>
    )
}

const StyledCart = styled.div`
    height: 100%;
    width: 100%;
    display: flex;
    flex-direction: column;
    padding: 5rem 10rem;
`

const CartHeader = styled.div`
    height: 10vh;
    width: 100%;
    font-size: 4.5rem;
    padding: 0rem 1rem;
    font-weight: bold;
`

const CartItemWrapper = styled.div`
    width: 50%;
    padding: 1rem;
    height: 50vh;

    overflow-y: scroll;

    ::-webkit-scrollbar {            
    width: 7px;                
    height: 7px;

    }

    ::-webkit-scrollbar-track {
            background-color: transparent;                 
            border-radius: 10px;                
    }

    ::-webkit-scrollbar-thumb {                
            background-color: ${props => props.theme.App.backgroundColor.secondary};
            border-radius: 10px;
    }

`

const CtaWrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: flex-end;
    width: 50%;
    padding: 1rem;
    height: 10vh;
`

const Cta = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: fit-content;
    font-size: 1.6rem;
    background-color: ${props => props.theme.App.backgroundColor.cta};
    box-shadow: 2px 1px 15px 2px rgb(256,256,256, .25);
    cursor: pointer;
    border-radius: 5px;
    padding: .5rem 1rem;
`

export default Cart