import { BASE_URL } from "./baseUrl";
import { commonAPI } from "./CommonAPI";

// register
export const registerAPI = async (user)=>{
    return await commonAPI("POST",`${BASE_URL}/user/register`,user)
}

//login 
export const loginAPI = async (user) =>{
    return await commonAPI("POST", `${BASE_URL}/user/login`, user);
}