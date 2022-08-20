import styled from "styled-components";

const ProductsSearch = (props) => {
    const { onChange } = props
    return (
        <StyledProductsSearch>
            <input   
                autoComplete="off"
                onChange={props.onChange}   
                autoFocus={true}                                                   
                placeholder={'Search Our Products...'}                                    
                />   
        </StyledProductsSearch>
    )
}

const StyledProductsSearch = styled.div`
    padding: 1rem 1rem;
    width: 25%;
    border-radius: 3rem;
    background-color: white;
    box-shadow: 2px 10px 15px 2px rgb(256,256,256, .25);

    input {
            width: 100%;                  
            border: none;
            background-color: transparent;
            outline: none;        
            border-radius: 0.4rem;                        
            line-height: normal;                    
            padding-left: .5rem;

            color: black;
            font-size: 1.6rem;
        }
`

export default ProductsSearch
