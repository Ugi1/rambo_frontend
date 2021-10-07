import axios from "axios";
import qs from 'querystring'
import {ENV} from "../environment/env";

export const saveUsernameAndPassword = async (username: string, password: string) => {

    const data = {
        username: username,
        password: password
    }
    return await axios.post(ENV.BACKEND.USER.SAVE, qs.stringify(data))
}

export const getAllUser = async () => {
    return await axios.get(ENV.BACKEND.USER.GET_ALL)
}



