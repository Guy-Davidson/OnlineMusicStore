import styled from "styled-components";

import ProductsSearch from "./ProductsSearch";
import ProductsSort from "./ProductsSort";
import ProductsTag from "./ProductsTag";
import ProductsPagination from "./ProductsPagination";

const Products = () => {
    return (
        <StyledProducts>
            <HeaderWrapper>
                <ProductsSearch 
                    onChange={() => {console.log("onChange search")}}
                    />
                <ProductsTag />
                <ProductsSort />
            </HeaderWrapper>

            <ProductsWrapper>
                {(new Array(100).fill(0)).map((elm, index) => {
                    return (
                        <div
                            key={index}
                            style={{width: '10px', height: '55px'}}
                        >
                            {index}
                        </div>
                    )
                })}
            </ProductsWrapper>

            <PaginationWrapper>
                <ProductsPagination />
            </PaginationWrapper>
        </StyledProducts>
    )
}

const StyledProducts = styled.div`
    height: 100%;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`

const HeaderWrapper = styled.div`
    width: 100%;
    height: 20vh;

    display: flex;
    align-items: center;
    justify-content: space-around;
`

const ProductsWrapper = styled.div`
    width: 100%;
    height: 70vh;

    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;

    overflow-y: scroll;

    ::-webkit-scrollbar {            
        width: 7px;                
        height: 7px;

        &:hover {
            cursor: pointer;
        }
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

const PaginationWrapper = styled.div`
    width: 100%;
    height: 10vh;
    display: flex;
    align-items: center;
    justify-content: center;
`


export default Products