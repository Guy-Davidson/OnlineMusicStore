import axios from 'axios';
import { useQuery } from 'react-query';
import { API_ROOT_PATH } from '../../App/MainAPI';


export const GetCartQuery = (id) => {
    return (
        useQuery(['GetCartQuery', id], () => 
            axios
                .get(`${API_ROOT_PATH}/carts?id=${id}`, 
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
                enabled: Boolean(id),
                retry: 3,
            }
        )
    )
}