import axios from 'axios';
import { useQuery } from 'react-query';
import { API_ROOT_PATH } from '../../App/MainAPI';

export const GetProductsQuery = (config) => {
    console.log(config);
    return (
        useQuery(['Products', ...config.tags], () => 
            axios
                .post(`${API_ROOT_PATH}/products`, config)
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