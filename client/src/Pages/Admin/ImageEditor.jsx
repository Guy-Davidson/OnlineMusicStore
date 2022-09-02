import { useState } from 'react'
import styled from "styled-components";
import ImageUploading from "react-images-uploading";

import { BsFillImageFill } from 'react-icons/bs';

const ImageEditor = (props) => {    
    const { setUrl } = props
    const [images, setImages] = useState([]);
    const maxNumber = 1;
    const onChange = (imageList) => {
        setUrl(imageList[0].data_url);
        setImages(imageList);
    };
  
    return (      
        <ImageUploading
          multiple
          value={images}
          onChange={onChange}
          maxNumber={maxNumber}
          dataURLKey="data_url"
        >
          {({imageList, onImageUpload, isDragging, dragProps }) => (
            <>
            {
                images.length ? 
                    <Image src={images[0].data_url} draggable="false"/>
                :
                    <UploaderWrapper>
                        <UploaderContent>
                            <UploaderButton                                
                                isDragging={isDragging}                                
                                onClick={onImageUpload}
                                {...dragProps}
                            >       
                                                        
                                <BsFillImageFill size={'5rem'} style={{marginBottom: '2rem'}}/> 
                                <span>Drop your image here, or click to browse</span>                                
                            </UploaderButton>
                        </UploaderContent>
                    </UploaderWrapper>
            }
            </>
          )}
        </ImageUploading>      
    );  
}

const Image = styled.img`
    object-fit: contain;  
`

const UploaderWrapper = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100%;
    background-color: ${props => props.theme.App.backgroundColor.secondary};
    padding: 2rem;    
`

const UploaderContent = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100%;
    border-style: dashed;
    border-width: 2px;
    border-color: white;
    overflow: hidden;
    background-color: #333;
`

const UploaderButton = styled.button`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    color: inherit;
    border: none;
    font-family: inherit;
    background-color: transparent;
`

export default ImageEditor