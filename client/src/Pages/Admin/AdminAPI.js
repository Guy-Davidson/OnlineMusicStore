import axios from 'axios';
import { useQuery } from 'react-query';
import { API_ROOT_PATH } from '../../App/MainAPI';

export const GetUsersQuery = (config) => {
    return (
        useQuery(['Users', config.search], () => 
            axios
                .post(`${API_ROOT_PATH}/users/list`, config, 
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
                retry: 3,
            }
        )
    )
}