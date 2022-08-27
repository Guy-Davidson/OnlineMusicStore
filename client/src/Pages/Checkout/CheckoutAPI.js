import axios from 'axios';
import { API_ROOT_PATH } from '../../App/MainAPI';

export const PostPurchase = (userId) => {
    return (
        axios
            .post(`${API_ROOT_PATH}/purchases?userId=${userId}`, {}, 
                {
                    withCredentials: true,
                    headers: { 'Content-Type': 'application/json' },
                })
            .then(res => res.data)
    )
}