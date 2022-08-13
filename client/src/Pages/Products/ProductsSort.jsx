import styled, { css } from "styled-components";

import { BsArrowUp, BsArrowDown } from 'react-icons/bs';

const ProductsSort = () => {
    return (
        <StyledProductsSort>
            Price
            <ButtonWrapper isActive={true}>
                <BsArrowUp />
            </ButtonWrapper>            
            <ButtonWrapper>
                <BsArrowDown />
            </ButtonWrapper>              
        </StyledProductsSort>
    )
}

const StyledProductsSort = styled.div`
    font-size: 1.6rem;
    display: flex;    
    align-items: center;
`

const ButtonWrapper = styled.div`
    padding: 1rem;
    margin-left: 1rem;
    display: flex;
    align-items: center;
    border-radius: 4px;
    cursor: pointer;
    background-color: ${props => props.theme.App.backgroundColor.secondary};
    &:hover {
        background-color: ${props => props.theme.App.backgroundColor.hover};
    }
    box-shadow: 2px 2px 5px 2px rgb(256,256,256, .25);

    ${props => {
        if(props.isActive) {
            console.log("active in if");
            return css`
                color: ${props => props.theme.App.fontColor.active};
            `
        }
    }}
`

export default ProductsSort