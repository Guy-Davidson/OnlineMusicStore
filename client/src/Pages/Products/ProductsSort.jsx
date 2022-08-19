import styled, { css } from "styled-components";

import { BsArrowUp, BsArrowDown } from 'react-icons/bs';

const ProductsSort = (props) => {
    const { config, setConfig } = props

    return (
        <StyledProductsSort>
            Price
            <ButtonWrapper
                isActive={config.price === 'descending'}
                onClick={() => {
                    config.price !== 'descending' &&
                    setConfig(prev => { return({...prev, price: 'descending'})})
                }}            
            >
                <BsArrowDown />
            </ButtonWrapper>              
            <ButtonWrapper 
                isActive={config.price === 'ascending'}
                onClick={() => {
                    config.price !== 'ascending' &&
                    setConfig(prev => { return({...prev, price: 'ascending'})})
                }}
                >
                <BsArrowUp />
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
            return css`
                color: ${props => props.theme.App.fontColor.active};
            `
        }
    }}
`

export default ProductsSort