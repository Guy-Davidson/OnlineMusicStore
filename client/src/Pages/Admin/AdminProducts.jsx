import styled from 'styled-components'
import AdminProductsList from './AdminProductsList'

const AdminProducts = () => {
    return (
        <StyledAdminProducts>
            <AdminProductsWrapper>
                <AdminProductsList />
            </AdminProductsWrapper>
        </StyledAdminProducts>
    )
}

const StyledAdminProducts = styled.div`
    height: 50vh;
    width: 100%;
    padding: 4rem;
`

const AdminProductsWrapper = styled.div`
    width: 100%;
    height: 100%;
    display: grid;
    grid-template-columns: 1fr 1fr;
    border-radius: 5px;
    background-color: ${props => props.theme.App.backgroundColor.card};
    box-shadow: 2px 10px 15px 2px rgb(256,256,256, .25);
    padding: 2rem 2rem 1rem 2rem;
`

export default AdminProducts