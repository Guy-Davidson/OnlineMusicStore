import styled from "styled-components";

import { AiOutlineLeft, AiOutlineRight } from 'react-icons/ai';

const ProductsPagination = (props) => {
    return (
        <StyledProductsPagination>
            <ButtonWrapper>
                <AiOutlineLeft />
            </ButtonWrapper>  
            <PageWrapper>
                12
            </PageWrapper>
            <ButtonWrapper>
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
`

const ButtonWrapper = styled.div`

`

const PageWrapper = styled.div`

`

export default ProductsPagination