import axios from 'axios'

export const commonAPI = async (httpRequest,url,reqBody,reqheader)=>{
    const reqConfig = {
        method:httpRequest,
        url,
        data:reqBody,
        headers:reqheader?reqheader:{"Content-Type":"application/json"}
    }
    return await axios(reqConfig).then(
        (result)=>{
            return result
        }
    ).catch((err)=>{
        return err
    })
}