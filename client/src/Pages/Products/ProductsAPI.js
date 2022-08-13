import axios from 'axios';
import { useQuery } from 'react-query';
import { API_ROOT_PATH } from '../../App/MainAPI';

export const GetProductsQuery = (config) => {
    return (
        useQuery(['Products'], () => 
            axios
                .get(`${API_ROOT_PATH}/products?config=${config}`)
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