import styled from 'styled-components'
import AdminUsers from './AdminUsers'
import AdminProducts from './AdminProducts'

const Admin = () => {
    return (
        <StyledAdmin>
            <AdminUsers />
            <AdminProducts />
        </StyledAdmin>
    )
}

const StyledAdmin = styled.div`
    height: 100%;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`

export default Admin