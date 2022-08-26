import styled from "styled-components";

import { useRecoilState } from 'recoil'
import { UserIdAtom } from "../../App/AppAtoms";

import { GetCartQuery } from "./CartAPI";

const Cart = () => {
    const [userId, setUserId] = useRecoilState(UserIdAtom)

    const cart = GetCartQuery(userId)
    console.log(cart)

    return (
        <StyledCart>
            {cart.isSuccess && cart.data.map(product => {
                return (
                    <div key={product.id}>{product.title}</div>
                )
            })}
        </StyledCart>
    )
}

const StyledCart = styled.div`

`

export default Cart