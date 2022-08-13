import styled, { css } from "styled-components";

import { GiGuitar, GiDrumKit, GiGrandPiano } from 'react-icons/gi';

const ProductsTag = (props) => {
    const { config, setConfig } = props

    return (
        <StyledProductsTag>
            <TagWrapper 
                bg={'rgb(209, 0, 0, .9)'} 
                isActive={config.tags.includes('guitar')}
                onClick={() =>                     
                    setConfig(prev => prev.tags.includes('guitar') ? 
                    {...prev, tags: prev.tags.filter(tag => tag !== "guitar")} : 
                    {...prev, tags: [...prev.tags, 'guitar']}
                    )
                }
                >
                <GiGuitar size={'3rem'} style={{marginRight: '.5rem'}}/>
                Guitars
            </TagWrapper>
            <TagWrapper 
                bg={'rgb(90, 24, 154, .5)'}                 
                isActive={config.tags.includes('organ')}
                onClick={() =>                     
                    setConfig(prev => prev.tags.includes('organ') ? 
                    {...prev, tags: prev.tags.filter(tag => tag !== "organ")} : 
                    {...prev, tags: [...prev.tags, 'organ']}
                    )
                }
                >
                <GiGrandPiano size={'3rem'} style={{marginRight: '.5rem'}}/>
                Organs
            </TagWrapper>
            <TagWrapper 
                bg={'rgb(0, 128, 0, .5)'} 
                isActive={config.tags.includes('drum')}
                onClick={() =>                     
                    setConfig(prev => prev.tags.includes('drum') ? 
                    {...prev, tags: prev.tags.filter(tag => tag !== "drum")} : 
                    {...prev, tags: [...prev.tags, 'drum']}
                    )
                }
                >   
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
    user-select: none;

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