import axios from 'axios';
import { API_ROOT_PATH } from '../../App/MainAPI';

export const PostLogin = (input) => {
    return (
        axios
            .post(`${API_ROOT_PATH}/login`, input)
            .then(res => res.data)
    )
}