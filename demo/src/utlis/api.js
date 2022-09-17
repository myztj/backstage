import http from '../utlis/http'

export async function onlogin(params){
    let {data} = await http.post('/lejuAdmin/index/login',params)
    return data
 }

export async function getMencs(){
    let { data } = await http.get('/admin/sysAuth/index/getInitMenus')
    return data
}