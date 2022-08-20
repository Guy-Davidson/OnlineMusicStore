import styled, { css } from "styled-components";

import { GetProductsQuery } from "./ProductsAPI";

import { AiOutlineLeft, AiOutlineRight } from 'react-icons/ai';

const PAGE_LENGTH = 4

const ProductsPagination = (props) => {
    const { config, setConfig } = props

    const products = GetProductsQuery(config)

    return (
        <StyledProductsPagination>
            <ButtonWrapper 
                isActive={config.page > 1}
                onClick={() => setConfig(prev => {return ({...prev, page: Math.max(prev.page - 1, 1)})})}
                >
                <AiOutlineLeft />
            </ButtonWrapper>  
            <PageWrapper>
                {config.page}
            </PageWrapper>
            <ButtonWrapper 
                isActive={products.isSuccess && products.data.length === PAGE_LENGTH}
                onClick={() => {
                    if(products.isSuccess && products.data.length === PAGE_LENGTH) {
                        setConfig(prev => {return ({...prev, page: prev.page + 1})})}
                    }                
            }>
                <AiOutlineRight />
            </ButtonWrapper>            
        </StyledProductsPagination>
    )
}

const StyledProductsPagination = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    font-size: 1.6rem; 
    width: 10%;
    width: fit-content;
`

const ButtonWrapper = styled.div`
    padding: .5rem 1rem;
    border-radius: 5px;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;

    &:hover {
        background-color: ${props => props.theme.App.backgroundColor.hover};
    }

    ${props => {
        if(!props.isActive) {
            return css`
                color: ${props => props.theme.App.backgroundColor.secondary};
                cursor: not-allowed;
            `
        }
    }}
`

const PageWrapper = styled.div`
    margin: 0 2rem;
    user-select: none;
`

export default ProductsPagination