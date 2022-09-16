import axios from 'axios'

const http = axios.create({
    baseURL:"/lejuAdmin/index",
    timeout:5000
})
http.interceptors.request.use(confirm=>{
    return confirm
},error=>{
    return Promise.reject(error)
})

http.interceptors.response.use(res=>{
    return res.data
},error=>{
    return error
})

export default http