import axios from 'axios';
import { API_ROOT_PATH } from '../../App/MainAPI';


export const PostRegister = (input) => {
    return (
        axios
            .post(`${API_ROOT_PATH}/register`, input)
            .then(res => res.data)
    )
}