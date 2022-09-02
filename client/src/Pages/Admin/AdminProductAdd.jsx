import styled, {css} from 'styled-components'
import { useRef, useState } from 'react'
import { PostProduct } from './AdminAPI'
import { queryClient } from "../../App/App";
import  ImageEditor  from './ImageEditor'

const AdminProductsAdd = () => {
    const [isActive, setIsActive] = useState(false)
    const [confirm, setConfirm] = useState(false)

    const inputRef = useRef({
        title: null,
        desc: null,
        price: null,
        tag: null,
        url: null
    })

    const config = {
        price: "descending",
        tags: ['guitar', 'organ', 'drum'],
        search: '',
        page: -1
    }

    const getIsActive = () => {
        if(Object.values(inputRef.current).every(v => v) !== isActive) {
            setIsActive(!isActive)            
        }
    }

    const handleCtaClick = async () => {
        if(!isActive) return

        try {
            const res = await PostProduct(inputRef.current)
            if(res === "ok") {
                queryClient.refetchQueries(['Products', ...config.tags, config.search, config.price, config.page])
                setConfirm(true)
                setTimeout(() => {
                    setConfirm(false)
                }, 3000)
            }
        } catch (error) {
            setIsActive(false)
        }
    }

    const setUrl = (data) => {
        inputRef.current["url"] = data
        getIsActive() 
    }

    return (
        <StyledAdminProductsAdd>
            <LeftWrapper>
                <Header>Add Product</Header>
                <FormWrapper>
                    {fields.map(field => {
                        return (
                            <InputWrapper key={field.id}>
                                <Title>{field.title}</Title>
                                <Input 
                                    onChange={(e) => {
                                        inputRef.current[field.name] = e.target.value
                                        getIsActive() 
                                    }}
                                    type={field.type}
                                    disabled={field.name === 'url' && inputRef.current['url']}
                                />
                            </InputWrapper>
                        )
                    })}
                    <CTA
                        onClick={handleCtaClick}
                        isActive={isActive}
                    >
                        OK
                    </CTA>
                    {confirm && 
                        <ConfirmWrapper>
                            Added Suuccessfuly!
                        </ConfirmWrapper>
                    }
                </FormWrapper>
            </LeftWrapper>
            <RightWrapper>
                <ImageEditor setUrl={setUrl}/>
            </RightWrapper>
        </StyledAdminProductsAdd>
    )
}

const StyledAdminProductsAdd = styled.div`
    height: 35vh;
    padding-left: 2rem;
    display: grid;
    grid-template-columns: 1fr 1fr;
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

const LeftWrapper = styled.div`

`

const RightWrapper = styled.div`
    padding: 5rem;
`

const FormWrapper = styled.div`
    width: fit-content;
`

const Header = styled.div`
    font-size: 2rem;    
    text-decoration: underline;    
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

const ConfirmWrapper = styled.div`
    font-size: 1.8rem;
    text-align: center;
`

const fields = [
    {
        id: '1',
        title: 'Title:',
        name: 'title',
        type: 'text'
    },
    {
        id: '2',
        title: 'Description:',
        name: 'desc',
        type: 'text'
    },
    {
        id: '3',
        title: 'Price:',
        name: 'price',
        type: 'number'
    },
    {
        id: '4',
        title: 'Tag:',
        name: 'tag',
        type: 'text'
    },
    {
        id: '5',
        title: 'url:',
        name: 'url',
        type: 'text'
    },
]

export default AdminProductsAdd