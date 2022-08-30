import styled, { withTheme, css } from "styled-components"

import { GiMusicSpell } from 'react-icons/gi';
import { GrProductHunt } from 'react-icons/gr';
import { IoBagCheckOutline } from 'react-icons/io5';
import { RiAdminLine } from 'react-icons/ri';
import { FiLogIn } from 'react-icons/fi';
import { BsPen } from 'react-icons/bs';
import { AiOutlineInfoCircle, AiOutlineShoppingCart } from 'react-icons/ai';
import { useNavigate, useLocation } from 'react-location'

import { useRecoilState } from 'recoil'
import { LoggedInAtom, UserIdAtom } from './AppAtoms'

import { GetUserQuery, PostLogout } from "./MainAPI";

import LeftBarNav from "./LeftBarNav";
import { useEffect } from "react";

const AppLeftBar = (props) => {
    const [loggedIn, setLoggedIn] = useRecoilState(LoggedInAtom)
    const location = useLocation()
    const [userId, setUserId] = useRecoilState(UserIdAtom)

    const user = GetUserQuery(userId)

    useEffect(() => {
        if(document.cookie.includes('loggedIn=true')) {
            setLoggedIn(true)

            let arr = document.cookie.split("=")
            let idVal = arr[arr.length - 1]
            setUserId(idVal)

        } else {
            setLoggedIn(false)
        }
    }, [location.current.pathname])

    return (
        <StyledAppLeftBar>

            <HeaderWrapper>
                <GiMusicSpell size={'4rem'} color={props.theme.App.fontColor.primary}/>
                <Header>IDC <br /> Music</Header>
            </HeaderWrapper>

            <TopNavWrapper>
                {TopNavs.filter(nav => loggedIn || !nav.requiresLogIn).map(nav => {
                    return (
                        <LeftBarNav 
                            key={`LeftBarNav-${nav.name}`}
                            {...nav}
                        />
                    )
                })}
            </TopNavWrapper>            

            <BottomNavWrapper>
                {BottomNavs
                    .filter(nav => loggedIn || !nav.requiresLogIn)
                    .filter(nav => {
                        if(loggedIn && nav.name === 'Admin' && user.isSuccess) {
                            return user.data.userName === 'admin'
                        } else {
                            return true
                        }
                    })
                    .map(nav => {
                    return (
                        <LeftBarNav 
                            key={`LeftBarNav-${nav.name}`}
                            {...nav}
                        />
                    )
                })}
                {loggedIn ?
                    <Logout />
                    :
                    <LeftBarNav 
                        name='Login'
                        directTo='/login'
                        icon={<FiLogIn style={{marginRight: '1rem'}}/>}
                        requiresLogIn={false}
                    />
                }
                {loggedIn && user.isSuccess && 
                    <StyledUserIcon>
                        {user.data.firstName[0].toUpperCase()}
                        {user.data.lastName[0].toUpperCase()}
                    </StyledUserIcon>
                }                
            </BottomNavWrapper> 
        </StyledAppLeftBar>
    )
}


const Logout = () => {
    const navigate = useNavigate()
    const [userId, setUserId] = useRecoilState(UserIdAtom)

    return (
        <StyledLogout onClick={async () => {
            const res = await PostLogout(userId)
            if(res === "ok") {
                document.cookie = `loggedIn=false; Max-Age=${1}`
                document.cookie = `id=${null}; Max-Age=${1}`      
                navigate({ to: `/` })
            }
        }}>
            <FiLogIn style={{marginRight: '1rem'}}/>
            Logout
        </StyledLogout>
    )
}


const StyledAppLeftBar = styled.div`
    height: 100%;
    width: 15rem;
    background-color: ${props => props.theme.App.backgroundColor.secondary};

    display: flex;
    flex-direction: column;
    align-items: center;

    padding: 1rem 1.5rem;
`

const HeaderWrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: fit-content;
    width: fit-content;
    width: 100%;
    border-bottom: ${props => `2px solid ${props.theme.App.fontColor.main}`};
`

const Header = styled.div`
    font-size: 2rem;
    font-weight: bold;    
    height: fit-content;
    padding:0 1rem;
`

const TopNavWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 1rem;
    width: 100%;
`

const BottomNavWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 1rem;
    width: 100%;
    margin: auto auto 0 auto;
`

const StyledLogout = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    font-size: 1.6rem;
    padding: .5rem;
    border-radius: 5px;

    &:hover {
        background-color: ${props => props.theme.App.backgroundColor.hover};
        cursor: pointer;
    }

    ${props => {
        if(props.isActive) {
            return css `
                color: ${props => props.theme.App.fontColor.primary};
            `
        }
    }}
`

const StyledUserIcon = styled.div`
    border-radius: 50px;
    border-width: 1px;
    border-style: solid;
    border-color: black;
    background-color: ${props => props.theme.App.fontColor.primary};
    font-size: 1.8rem;
    padding: .6rem;
    margin: 1rem 0;
`

const TopNavs = [
    {
        name: 'Products',
        directTo: '/products',
        icon: <GrProductHunt style={{marginRight: '1rem'}}/>,
        requiresLogIn: false
    },
    {
        name: 'Cart',
        directTo: '/cart',
        icon: <AiOutlineShoppingCart style={{marginRight: '1rem'}}/>,
        requiresLogIn: true
    },
    {
        name: 'MyPage1',
        directTo: '/mypage1',
        icon: <GrProductHunt style={{marginRight: '1rem'}}/>,
        requiresLogIn: true
    },
    {
        name: 'MyPage2',
        directTo: '/mypage2',
        icon: <GrProductHunt style={{marginRight: '1rem'}}/>,
        requiresLogIn: true
    },
    {
        name: 'MyPage3',
        directTo: '/mypage3',
        icon: <GrProductHunt style={{marginRight: '1rem'}}/>,
        requiresLogIn: true
    },
    {
        name: 'MyPage4',
        directTo: '/mypage4',
        icon: <GrProductHunt style={{marginRight: '1rem'}}/>,
        requiresLogIn: true
    },
]

const BottomNavs = [
    {
        name: 'Admin',
        directTo: '/admin',
        icon: <RiAdminLine style={{marginRight: '1rem'}}/>,
        requiresLogIn: true
    },
    {
        name: 'Register',
        directTo: '/register',
        icon: <BsPen style={{marginRight: '1rem'}}/>,
        requiresLogIn: false
    },
    {
        name: 'Readme',
        directTo: '/readme',
        icon: <AiOutlineInfoCircle style={{marginRight: '1rem'}}/>,
        requiresLogIn: false
    }, 
]

export default withTheme(AppLeftBar)