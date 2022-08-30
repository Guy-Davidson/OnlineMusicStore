import axios from 'axios';
import { useQuery } from 'react-query';
import { API_ROOT_PATH } from '../../App/MainAPI';

export const GetProductsQuery = (config) => {
    return (
        useQuery(['Products', ...config.tags, config.search, config.price, config.page], () => 
            axios
                .post(`${API_ROOT_PATH}/products`, config, 
                {
                    withCredentials: true,
                    headers: { 'Content-Type': 'application/json' },
                })
                .then(res => res.data)
            , 
            {
                refetchOnWindowFocus: true,
                staleTime: 4000,
                cacheTime: 5000,
                enabled: Boolean(config),
                retry: 3,
            }
        )
    )
}

export const PostAddToCart = (userId, title) => {
    return (        
        axios
            .post(`${API_ROOT_PATH}/addToCart`, { userId, title },
            {
                withCredentials: true,
                headers: { 'Content-Type': 'application/json' },
            })
            .then(res => res.data)        
    )
}