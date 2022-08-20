import axios from 'axios';
import { API_ROOT_PATH } from '../../App/MainAPI';

export const PostContactForm = (formData) => {
    return (
        axios
            .post(`${API_ROOT_PATH}/contact/send`, formData)
            .then(res => res.data)
    )
}