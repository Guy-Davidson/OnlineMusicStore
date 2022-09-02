import styled, {css} from 'styled-components'
import { GetProductsQuery } from '../Products/ProductsAPI'

import { queryClient } from "../../App/App";

import { AiOutlineDelete } from 'react-icons/ai';
import { DeleteProduct } from './AdminAPI';

const AdminProductsList = () => {
    const config = {
        price: "descending",
        tags: ['guitar', 'organ', 'drum'],
        search: '',
        page: -1
    }

    const products = GetProductsQuery(config)

    const handleDeleteClick = async (id) => {
        let res = await DeleteProduct(id)
        if(res === "ok") {
            queryClient.refetchQueries(['Products', ...config.tags, config.search, config.price, config.page])
        }
    }
    
    return (
        <StyledAdminProductsList>
            <Title>Store Products</Title>
            {products.isSuccess && products.data.map(product => {
                return (
                    <ProductItem key={`product-${product.id}`}>
                        <Button onClick={() => handleDeleteClick(product.id)}><AiOutlineDelete size={'2.5rem'}/></Button>
                        {product.title}
                    </ProductItem>
                )
            })}
        </StyledAdminProductsList>
    )
}

const StyledAdminProductsList = styled.div`
    height: 35vh;
    overflow-y: auto;
    
    ::-webkit-scrollbar {            
        width: 7px;                
        height: 7px;        

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

const Title = styled.div`
    font-size: 2rem;    
    text-decoration: underline;
    margin-bottom: 2rem;
`

const ProductItem = styled.div`
    font-size: 1.6rem;
    margin: .5rem 0;
    display: flex;
    align-items: center;
    padding: 1rem .5rem;
    width: 90%;
    border-radius: 5px;
    &:hover {
        background-color: ${props => props.theme.App.backgroundColor.secondary};
    }
`

const Button = styled.div`
    cursor: pointer;
    margin-right: 2rem;
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

export default AdminProductsList