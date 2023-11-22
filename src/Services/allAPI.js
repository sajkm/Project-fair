import { BASE_URL } from "./baseUrl";
import { commonAPI } from "./CommonAPI";

// register
export const registerAPI = async (user)=>{
    return await commonAPI("POST",`${BASE_URL}/user/register`,user,"")
}

//login 
export const loginAPI = async (user) =>{
    return await commonAPI("POST", `${BASE_URL}/user/login`, user,"");
}

//addproject
export const addprojectAPI = async (reqBody,reqHeader)=>{
    return await commonAPI("POST", `${BASE_URL}/project/add`, reqBody,reqHeader)
}

//homeproject
export const homeProjectAPI = async ()=>{
    return await commonAPI("GET",`${BASE_URL}/projects/home-projects`,"","")
}

//allproject
export const allProjectsAPI =async(reqHeader)=>{
    return await commonAPI("GET",`${BASE_URL}/projects/all`,"",reqHeader)
}