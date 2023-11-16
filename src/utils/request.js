import axios from "axios";

export function request(config)
{
    const instance = axios.create({
        baseURL: 'http://f5bae9d8-983a-45d9-8c97-7c10d1659904.mock.pstmn.io',
        timeout: 5000,
    })
    // 添加请求拦截器
    instance.interceptors.request.use(function (config) {
        // 在发送请求之前做些什么
        if(config.headers)
            config.headers['Authorization'] = String (localStorage.getItem('token'))
        return config;
    }, function (error) {
        // 对请求错误做些什么
        console.log(error);
        return Promise.reject(error);
    });

// 添加响应拦截器
    instance.interceptors.response.use(function (response) {
        // 2xx 范围内的状态码都会触发该函数。
        // 对响应数据做点什么
        return response.data;
    }, function (error) {
        // 超出 2xx 范围的状态码都会触发该函数。
        // 对响应错误做点什么
        return Promise.reject(error);
    });

   return instance(config)
}