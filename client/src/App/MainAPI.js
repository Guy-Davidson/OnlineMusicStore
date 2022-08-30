import axios from 'axios';
import { useQuery } from 'react-query';

// export const API_ROOT_PATH = '';
export const API_ROOT_PATH = 'http://localhost:5000';

export const GetUserQuery = (id) => {
    return (
        useQuery(['User', id], () => 
            axios
                .get(`${API_ROOT_PATH}/users?id=${id}`, 
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

export const PostLogout = (userId) => {
    return (        
        axios
            .post(`${API_ROOT_PATH}/logout`, { userId },
            {
                withCredentials: true,
                headers: { 'Content-Type': 'application/json' },
            })
            .then(res => res.data)        
    )
}