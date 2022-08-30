import styled from "styled-components";
import { useRecoilState } from 'recoil'
import { UserIdAtom, LoggedInAtom } from "../../App/AppAtoms";
import { PatchCart } from "../Cart/CartAPI";
import { PostAddToCart } from "./ProductsAPI";
import { queryClient } from "../../App/App";

import { GiGuitar, GiDrumKit, GiGrandPiano } from 'react-icons/gi';

import { useNavigate } from 'react-location'

const ProductCard = (props) => {
    const { product } = props
    const navigate = useNavigate()

    const [userId, setUserId] = useRecoilState(UserIdAtom)
    const [loggedIn, setLoggedIn] = useRecoilState(LoggedInAtom)

    const handleAddClick = async () => {
        if(loggedIn) {
            let resPatch = await PatchCart(userId, product.id, { addProduct: true})
            let resPost = await PostAddToCart(userId, product.title)
            if(resPatch === "ok" && resPost === "ok") {
                queryClient.refetchQueries(['GetCartQuery', userId])
            }
        } else {
            navigate({ to: `/login` })
        }
    }

    return (
        <StyledProductCard>
            <ImageWrapper>
                {[product.tag].map(tag => {
                    let src = ''
                    switch (tag) {
                        case "guitar":
                            src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQmSayqb44PT85LKLa_MhcSJW1Su4FBJ5ZA4Q&usqp=CAU"
                            break
                        case "organ":
                            src = "https://www.native-instruments.com/typo3temp/pics/img-tile-homepage-featured-products-keyboards-0c840e64b533dbb91c2ac1dca5883c37-m@2x.jpg"
                            break
                        case "drum":
                            src = "https://www.rech-cymbals.com.au/wp-content/uploads/2019/05/Force-White-1618x1240.png"
                            break
                        }
                    return (
                        <ProductImage 
                            key={`img-${product.id}`}
                            src={src}
                        />
                    )
                })}

            </ImageWrapper>
            <MidWrapper>
                <TitleWrapper>
                    {product.title}
                </TitleWrapper>            
                <PriceWrapper>
                    {`${product.price}$`}
                </PriceWrapper>                
            </MidWrapper>
            <DescWrapper>
                {product.desc}
            </DescWrapper>
            <FooterWrapper>
                <TagWrapper>
                    {[product.tag].map(tag => {
                        switch (tag) {
                            case "guitar":
                                return <GiGuitar key={`tag-${product.id}`} size={'3rem'} color={'rgb(209, 0, 0, .9)'}/>
                            case "organ":
                                return <GiGrandPiano key={`tag-${product.id}`} size={'3rem'} color={'rgb(90, 24, 154, 1)'}/>
                            case "drum":
                                return <GiDrumKit key={`tag-${product.id}`} size={'3rem'} color={'rgb(0, 128, 0, 1)'}/>
                            }
                    })}
                </TagWrapper>
                <CartWrapper onClick={handleAddClick}>
                    Add to Cart
                </CartWrapper>
            </FooterWrapper>            
        </StyledProductCard>
    )
}

const StyledProductCard = styled.div`
    border-radius: 5px;
    background-color: ${props => props.theme.App.backgroundColor.card};
    box-shadow: 2px 10px 15px 2px rgb(256,256,256, .25);
    padding: 2rem 2rem 1rem 2rem;
    display: flex;
    flex-direction: column;

    overflow: hidden;
    height: 40rem;
`

const ImageWrapper = styled.div`
    width: 100%;
    height: 50%;
    margin-bottom: 1rem;
`

const ProductImage = styled.img`    
    width: 100%;   
    height: 100%;
    object-fit: scale-down;
`

const MidWrapper = styled.div`
    display: flex;
    justify-content: space-between;
`

const TitleWrapper = styled.div`
    font-size: 1.75rem;
    font-weight: bold;
    margin-bottom: .5rem;
`

const PriceWrapper = styled.div`
    font-size: 1.4rem;
`

const DescWrapper = styled.div`
    height: 25%;
    overflow-y: scroll;

    ::-webkit-scrollbar {            
        width: 7px;                
        height: 7px;

        &:hover {
            cursor: pointer;
        }
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

const FooterWrapper = styled.div`
    width: 100%;
    height: fit-content;
    margin: auto auto 0 auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
`

const TagWrapper = styled.div`
    padding: .5rem 1rem;
    border-radius: 10px;
    width: fit-content;
    background-color: #151515;
`

const CartWrapper = styled.div`
    font-size: 1.4rem;
    cursor: pointer;
    padding: .5rem 1rem;
    border-radius: 10px;
    width: fit-content;
    &:hover {
        background-color: ${props => props.theme.App.backgroundColor.hover};
    }
`

export default ProductCard