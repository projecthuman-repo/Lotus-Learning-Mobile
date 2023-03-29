import axios from 'axios';
import {API_ENDPOINT} from '../constants';

export const login = async (body) => {
    const response = await axios.post(`${API_ENDPOINT}/user/login`, body);
    const { data } = response;
    
    if (!data.error){
        window.localStorage.setItem("token", data.token);
    }


    return data;
};