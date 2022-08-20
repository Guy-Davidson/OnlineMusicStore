import styled, { css } from 'styled-components'
import { useRef, useState } from 'react'
import { PostRegister } from './RegisterAPI'
import { AiOutlineCloseCircle } from 'react-icons/ai';

const Register = (props) => {
    const [isActive, setIsActive] = useState(false)
    const [err, setErr] = useState(null)

    const inputRef = useRef({
        userName: null,
        firstName: null,
        lastName: null,
        email: null,
        password: null,
        confirmPassword: null
    })

    const getIsActive = () => {
        if(Object.values(inputRef.current).every(v => v) !== isActive) {
            setIsActive(!isActive)            
        }
    }

    const handleCtaClick = async () => {
        if(!isActive) return

        try {
            const res = await PostRegister(inputRef.current)
            console.log(res)
        } catch (error) {
            setErr(error.response.data)
            setIsActive(false)
        }
    }

    return (
        <StyledRegister>
            <FormWrapper>
                {fields.map(field => {
                    return (
                        <InputWrapper key={field.id}>
                            <Title>{field.title}</Title>
                            <Input 
                                onChange={(e) => {
                                    inputRef.current[field.name] = e.target.value
                                    getIsActive() 
                                    setErr(null)
                                }}
                                type={field.type}
                            />
                        </InputWrapper>
                    )
                })}
                <CTA
                    onClick={handleCtaClick}
                    isActive={isActive}
                >
                    Register
                </CTA>
                {err && 
                    <ErrorWrapper>
                        <AiOutlineCloseCircle 
                            style={{marginRight: '1rem', color: "red"}}
                            size={"3rem"}
                            />
                        {err}
                    </ErrorWrapper>
                }
            </FormWrapper>
        </StyledRegister>
    )
}

const StyledRegister = styled.div`
    height: 100%;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`

const FormWrapper = styled.div`
    width: fit-content;
`

const InputWrapper = styled.div`
    width: 100%;
    display: grid;
    grid-template-columns: 1fr 1fr;
    align-content: center;
    margin: 1rem 0;
`

const Title = styled.div`
    font-size: 1.6rem;
    margin-right: 2rem;
`

const Input = styled.input`
    width: 20rem;                  
    border: none;
    border-bottom: 2px white solid;
    background-color: transparent;
    outline: none;        
    line-height: normal;                    
    padding-left: .5rem;

    color: inherit;
    font-size: 1.6rem;
    margin-bottom: 1rem;
`
const CTA = styled.div`
    font-size: 1.6rem;
    padding: .5rem 5rem;
    width: fit-content;    
    margin: auto;
    margin-top: 3rem;
    margin-bottom: 5rem;
    border-radius: 5px;
    background-color: ${props => props.theme.App.backgroundColor.secondary};
    cursor: not-allowed;

    ${props => {
        if(props.isActive) {
            return css`
                background-color: ${props => props.theme.App.backgroundColor.cta};
                box-shadow: 2px 1px 15px 2px rgb(256,256,256, .25);
                cursor: pointer;
            `
        }
    }}
`

const ErrorWrapper = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 1.6rem;        
`   

export default Register

const fields = [
    {
        id: '1',
        title: 'User Name:',
        name: 'userName',
        type: 'text'
    },
    {
        id: '2',
        title: 'First Name:',
        name: 'firstName',
        type: 'text'
    },
    {
        id: '3',
        title: 'Last Name:',
        name: 'lastName',
        type: 'text'
    },
    {
        id: '4',
        title: 'Email:',
        name: 'email',
        type: 'email'
    },
    {
        id: '5',
        title: 'Password:',
        name: 'password',
        type: 'password'
    },
    {
        id: '6',
        title: 'Confirm Password:',
        name: 'confirmPassword',
        type: 'password'
    }
]