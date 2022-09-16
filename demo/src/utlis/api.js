import http from '../utlis/http'

export async function onlogin(params){
    let {data} = await http.post('/index/login',params)
    return data
 }

// export async function getMencs(){
//     let { data } = await http.get('')
// }