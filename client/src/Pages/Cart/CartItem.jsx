import styled, { css } from "styled-components";
import { useRecoilState } from 'recoil'
import { UserIdAtom } from "../../App/AppAtoms";

import { GetCartQuery, PatchCart } from "./CartAPI";
import { queryClient } from "../../App/App";

import { AiOutlinePlusCircle, AiOutlineDelete, AiOutlineMinusCircle } from 'react-icons/ai';

const CartItem = (props) => {
    const { product, quantity } = props
    const { id, title, price } = product

    const [userId, setUserId] = useRecoilState(UserIdAtom)
    const cart = GetCartQuery(userId)

    const handlePatchClick = async (newQuantity) => {
        let res = await PatchCart(userId, id, { quantity: newQuantity})
        if(res === "ok") {
            queryClient.refetchQueries(['GetCartQuery', userId])
        }
    }

    const handleDeleteClick = async () => {
        let res = await PatchCart(userId, id, { deleteProduct: true})
        if(res === "ok") {
            queryClient.refetchQueries(['GetCartQuery', userId])
        }
    }

    return (
        <StyledCartItem>
            <Title>{title}</Title>
            <div>{price} $</div>
            <div>{quantity}</div>
            <ButtonsWrapper>
                <Button onClick={() => handlePatchClick(quantity + 1)}><AiOutlinePlusCircle size={'2.5rem'}/></Button>
                <Button onClick={() => quantity > 1 && handlePatchClick(quantity - 1)} isActive={quantity > 1}><AiOutlineMinusCircle size={'2.5rem'}/></Button>
                <Button onClick={handleDeleteClick}><AiOutlineDelete size={'2.5rem'}/></Button>
            </ButtonsWrapper>
        </StyledCartItem>
    )
}

const StyledCartItem = styled.div`
    width: 100%;
    display: grid;
    grid-template-columns: 2fr 1fr 1fr 1fr;
    font-size: 1.6rem;
    margin: 1.5rem 0;
    padding: 2rem;
    border-radius: 5px;
    background-color: ${props => props.theme.App.backgroundColor.card};
    box-shadow: 2px 10px 15px 2px rgb(256,256,256, .25);
    user-select: none;
`

const Title = styled.div`
    white-space: nowrap;
    margin-right: 1rem;
    user-select: none;
`

const ButtonsWrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
`

const Button = styled.div`
    cursor: pointer;
    &:hover {
        color: ${props => props.theme.App.fontColor.active};
    }

    ${props => {
        if(typeof props.isActive === 'boolean' && !props.isActive) {
            return css`
                color: ${props => props.theme.App.backgroundColor.secondary};
            `
        }
    }}
`

export default CartItem