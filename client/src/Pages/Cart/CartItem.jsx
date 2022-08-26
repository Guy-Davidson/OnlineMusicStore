import styled, { css } from "styled-components";

import { AiOutlinePlusCircle, AiOutlineDelete, AiOutlineMinusCircle } from 'react-icons/ai';

const CartItem = (props) => {
    const { product, quantity } = props
    const { title, price } = product

    return (
        <StyledCartItem>
            <Title>{title}</Title>
            <div>{price} $</div>
            <div>{quantity}</div>
            <ButtonsWrapper>
                <Button><AiOutlinePlusCircle size={'2.5rem'}/></Button>
                <Button isActive={quantity > 1}><AiOutlineMinusCircle size={'2.5rem'}/></Button>
                <Button><AiOutlineDelete size={'2.5rem'}/></Button>
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
`

const Title = styled.div`
    white-space: nowrap;
    margin-right: 1rem;
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