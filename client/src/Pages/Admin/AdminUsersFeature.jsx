import styled, { css } from 'styled-components'
import { GetLoginsQuery, GetLogoutsQuery, GetAddToCartQuery } from './AdminAPI'

const AdminUsersFeature = (props) => {
    const { featureUser, setFeatureUser } = props

    const logins = GetLoginsQuery(featureUser)
    const logouts = GetLogoutsQuery(featureUser)
    const addToCarts = GetAddToCartQuery(featureUser)


    return (
        <StyledAdminUsersFeature>
            <Title>Logins</Title>
            <Title>Logouts</Title>
            <Title>AddToCart</Title>
            <ColWrapper>
                {logins.isSuccess && logins.data.map(date => {
                    return (
                        <Item key={date}>{new Date(date).toString()}</Item>
                        )
                    })}
            </ColWrapper>
            <ColWrapper>
                {logouts.isSuccess && logouts.data.map(date => {
                    return (
                        <Item key={date}>{new Date(date).toString()}</Item>
                        )
                    })}
            </ColWrapper>
            <ColWrapper>
                {addToCarts.isSuccess && addToCarts.data.map(date => {
                    return (
                        <Item key={date}>{date}</Item>
                        )
                    })}
            </ColWrapper>
        </StyledAdminUsersFeature>
    )
}

const StyledAdminUsersFeature = styled.div`
    height: 100%;
    width: 100%;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;    
`

const Title = styled.div`
    padding: 0 3rem;
    font-size: 2rem;    
    text-decoration: underline;
`

const ColWrapper = styled.div`
    padding: 0 3rem;
    font-size: 1.6rem;    
    height: 32vh;
    border-right: 2px white solid;
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

const Item = styled.div`
    margin: 1rem 0;
`

export default AdminUsersFeature