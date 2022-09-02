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

export const GetLoginsQuery = (userId) => {
    return (
        useQuery(['Logins', userId], () => 
            axios
                .get(`${API_ROOT_PATH}/login/user?userId=${userId}`,  
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
                enabled: Boolean(userId),
                retry: 3,
            }
        )
    )
}

export const GetLogoutsQuery = (userId) => {
    return (
        useQuery(['Logouts', userId], () => 
            axios
                .get(`${API_ROOT_PATH}/logout/user?userId=${userId}`,  
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
                enabled: Boolean(userId),
                retry: 3,
            }
        )
    )
}

export const GetAddToCartQuery = (userId) => {
    return (
        useQuery(['AddToCart', userId], () => 
            axios
                .get(`${API_ROOT_PATH}/addToCart/user?userId=${userId}`,  
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
                enabled: Boolean(userId),
                retry: 3,
            }
        )
    )
}

export const DeleteProduct = (id) => {
    return (        
        axios
            .delete(`${API_ROOT_PATH}/products?id=${id}`, 
            {
                withCredentials: true,
                headers: { 'Content-Type': 'application/json' },
            })
            .then(res => res.data)        
    )
}