import styled from 'styled-components'
import GlobalStyles from '../Styles/Global.Styled'
import { ThemeProvider } from 'styled-components'
import { DarkTheme } from '../Styles/DarkMain'

import AppLeftbar from './AppLeftBar'

import { Router, Outlet, ReactLocation } from 'react-location'
import { routes } from './routes'

import { QueryClientProvider, QueryClient } from 'react-query'

export const queryClient = new QueryClient()
const location = new ReactLocation()

const App = () => {
    
    return (             
        <Router routes={routes} location={location}>
            <QueryClientProvider client={queryClient}>
                <ThemeProvider theme={DarkTheme}>
                    <GlobalStyles />
                    <StyledApp>
                        <ContentWrapper>
                            <SideBarsWrapper>
                                <AppLeftbar />
                                <OutletWrapper>                                                
                                    <Outlet />                                                
                                </OutletWrapper>
                            </SideBarsWrapper>
                        </ContentWrapper>       
                    </StyledApp>            
                </ThemeProvider>
            </QueryClientProvider>
        </Router>               
    )
}

const StyledApp = styled.div`        
    height: 100vh; 
    width: 100vw;

    display: flex;        
    background-color: ${props => props.theme.App.backgroundColor.main};
    color: ${props => props.theme.App.fontColor.main};
`

const ContentWrapper = styled.div`
    width: 100%;    
    display: flex;
    flex-direction: column;    
`
const SideBarsWrapper = styled.div`
    display: flex;
    height: 100%;
    width: 100%;
`
const OutletWrapper = styled.div`
    height: 100%;
    width: 100%;    
`

export default App