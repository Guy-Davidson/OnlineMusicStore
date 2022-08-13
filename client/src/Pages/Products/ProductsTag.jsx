import styled, { css } from "styled-components";

import { GiGuitar, GiDrumKit, GiGrandPiano } from 'react-icons/gi';

const ProductsTag = () => {
    return (
        <StyledProductsTag>
            <TagWrapper bg={'rgb(209, 0, 0, .9)'} isActive={Math.random() < .5}>
                <GiGuitar size={'3rem'} style={{marginRight: '.5rem'}}/>
                Guitars
            </TagWrapper>
            <TagWrapper bg={'rgb(90, 24, 154, .5)'} isActive={Math.random() < .5}>
                <GiGrandPiano size={'3rem'} style={{marginRight: '.5rem'}}/>
                Organs
            </TagWrapper>
            <TagWrapper bg={'rgb(0, 128, 0, .5)'} isActive={Math.random() < .5}>   
                <GiDrumKit size={'3rem'} style={{marginRight: '.5rem'}}/>
                Drums
            </TagWrapper>
        </StyledProductsTag>
    )
}

const StyledProductsTag = styled.div`
    font-size: 1.6rem;
    display: flex;    
    align-items: center;
`

const TagWrapper = styled.div`
    display: flex;
    align-items: center;
    margin-right: 4rem;
    padding: .5rem 1rem;
    border-radius: 15px;
    box-shadow: 2px 5px 15px 2px rgb(256,256,256, .25);
    cursor: pointer;

    background-color: ${props => props.bg};

    ${props => {
        if(!props.isActive) {
            return css`
                background-color: ${props => props.theme.App.backgroundColor.secondary};
            `
        }
    }}
`

export default ProductsTag