import styled, { withTheme } from "styled-components"

import { GiMusicSpell } from 'react-icons/gi';
import { GrProductHunt } from 'react-icons/gr';
import { IoBagCheckOutline } from 'react-icons/io5';
import { RiAdminLine } from 'react-icons/ri';
import { FiLogIn } from 'react-icons/fi';
import { BsPen } from 'react-icons/bs';
import { AiOutlineInfoCircle, AiOutlineShoppingCart } from 'react-icons/ai';



import LeftBarNav from "./LeftBarNav";

const AppLeftBar = (props) => {
    return (
        <StyledAppLeftBar>

            <HeaderWrapper>
                <GiMusicSpell size={'4rem'} color={props.theme.App.fontColor.primary}/>
                <Header>IDC <br /> Music</Header>
            </HeaderWrapper>

            <TopNavWrapper>
                {TopNavs.map(nav => {
                    return (
                        <LeftBarNav 
                            key={`LeftBarNav-${nav.name}`}
                            {...nav}
                        />
                    )
                })}
            </TopNavWrapper>            

            <BottomNavWrapper>
                {BottomNavs.map(nav => {
                    return (
                        <LeftBarNav 
                            key={`LeftBarNav-${nav.name}`}
                            {...nav}
                        />
                    )
                })}
            </BottomNavWrapper> 
        </StyledAppLeftBar>
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

const TopNavs = [
    {
        name: 'Products',
        directTo: '/products',
        icon: <GrProductHunt style={{marginRight: '1rem'}}/>
    },
    {
        name: 'Cart',
        directTo: '/cart',
        icon: <AiOutlineShoppingCart style={{marginRight: '1rem'}}/>
    },
    {
        name: 'Checkout',
        directTo: '/checkout',
        icon: <IoBagCheckOutline style={{marginRight: '1rem'}}/>
    },
    {
        name: 'MyPage1',
        directTo: '/mypage1',
        icon: <GrProductHunt style={{marginRight: '1rem'}}/>
    },
    {
        name: 'MyPage2',
        directTo: '/mypage2',
        icon: <GrProductHunt style={{marginRight: '1rem'}}/>
    },
    {
        name: 'MyPage3',
        directTo: '/mypage3',
        icon: <GrProductHunt style={{marginRight: '1rem'}}/>
    },
    {
        name: 'MyPage4',
        directTo: '/mypage4',
        icon: <GrProductHunt style={{marginRight: '1rem'}}/>
    },
]

const BottomNavs = [
    {
        name: 'Admin',
        directTo: '/admin',
        icon: <RiAdminLine style={{marginRight: '1rem'}}/>
    },
    {
        name: 'Register',
        directTo: '/register',
        icon: <BsPen style={{marginRight: '1rem'}}/>
    },
    {
        name: 'Login',
        directTo: '/login',
        icon: <FiLogIn style={{marginRight: '1rem'}}/>
    },
    {
        name: 'Readme',
        directTo: '/readme',
        icon: <AiOutlineInfoCircle style={{marginRight: '1rem'}}/>
    },
]

export default withTheme(AppLeftBar)