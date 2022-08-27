import styled from "styled-components"
import { GetCartQuery } from "../Cart/CartAPI";
import { useRecoilState } from 'recoil'
import { UserIdAtom } from "../../App/AppAtoms";
import { PostPurchase } from "./CheckoutAPI";
import { useNavigate } from 'react-location'
import { useState } from 'react'
import { queryClient } from "../../App/App";


const Checkout = () => {
    const [showThank, setShowThank] = useState(false)
    const [userId, setUserId] = useRecoilState(UserIdAtom)
    const cart = GetCartQuery(userId)
    const navigate = useNavigate()

    const handleCtaClick = async () => {
        const res = await PostPurchase(userId)
        if(res === "ok") {
            setShowThank(true)
            queryClient.refetchQueries(['GetCartQuery', userId])
            setTimeout(() => {
                navigate({ to: `/` })
            }, 3000)
        }
    }

    return (
        <StyledCheckout>
            <CheckoutHeader>
                Checkout
            </CheckoutHeader>
            <CtaWrapper>
                <AmountWrapper>
                    {cart.isSuccess && 
                    `Total Price: ${cart.data.reduce((acc, curr) => {
                        return (
                            acc + curr.product.price
                        )
                    }, 0)}$`
                    }
                </AmountWrapper>
                <Cta onClick={handleCtaClick}>
                    Complete purchase
                </Cta>
            </CtaWrapper>
            {showThank && 
                <ThankWrapper>
                    Thank you for buying at IDC Music, Enjoy!
                </ThankWrapper>
            }
        </StyledCheckout>
    )
}

const StyledCheckout = styled.div`
    height: 100%;
    width: 100%;
    display: flex;
    flex-direction: column;
    padding: 5rem 10rem;
`

const CheckoutHeader = styled.div`
    height: 10vh;
    width: 100%;
    font-size: 4.5rem;
    padding: 0rem 1rem;
    font-weight: bold;
`

const CtaWrapper = styled.div`
    display: flex;
    align-items: center;
    width: 50%;
    padding: 1rem;
    height: 10vh;
`

const AmountWrapper = styled.div`
    font-size: 1.6rem;
    margin-right: 5rem;
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

const ThankWrapper = styled.div`
    font-size: 2rem;
`

export default Checkout