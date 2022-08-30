import { useState } from 'react'
import styled from 'styled-components'
import { GetUsersQuery } from './AdminAPI'

const AdminUsersList = () => {
    const [config, setConfig] = useState({
        search: ''        
    })

    const users = GetUsersQuery(config)

    return (
        <StyledAdminUsersList>
            {users.isSuccess && users.data.map(user => {
                return (
                    <UserWrapper key={user.id}>
                        {user.userName}
                    </UserWrapper>
                )
            })}
        </StyledAdminUsersList>
    )
}

const StyledAdminUsersList = styled.div`
    height: 100%;
    width: 100%;
    display: flex;
    flex-direction: column;
    border-right: 2px white solid;
    overflow-y: scroll;

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

const UserWrapper = styled.div`
    font-size: 1.6rem;
    cursor: pointer;
    margin-bottom: 2rem;
    margin-right: 2rem;
    padding: .5rem 1rem;
    border-radius: 5px;
    background-color: ${props => props.theme.App.backgroundColor.secondary};
    &:hover {
        box-shadow: 2px 2px 15px 2px rgb(256,256,256, .25);
    }
`

export default AdminUsersList