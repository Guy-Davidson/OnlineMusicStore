import styled from 'styled-components'
import AdminUsersList from './AdminUsersList'
import AdminUsersFeature from './AdminUsersFeature'

const AdminUsers = () => {
    return (
        <StyledAdminUsers>
            <AdminUsersWrapper>
                <AdminUsersList />
                <AdminUsersFeature />
            </AdminUsersWrapper>
        </StyledAdminUsers>
    )
}

const StyledAdminUsers = styled.div`
    height: 50vh;
    width: 100%;
    padding: 4rem;
`

const AdminUsersWrapper = styled.div`
    width: 100%;
    height: 100%;
    display: grid;
    grid-template-columns: 1fr 4fr;
    background-color: grey;
    border-radius: 5px;
    background-color: ${props => props.theme.App.backgroundColor.card};
    box-shadow: 2px 10px 15px 2px rgb(256,256,256, .25);
    padding: 2rem 2rem 1rem 2rem;
`

export default AdminUsers