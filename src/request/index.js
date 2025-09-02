import axios from 'axios'
const instance = axios.create({
    baseURL: 'http://cn-qz-plc-1.ofalias.net:59591',
    timeout: 2000,
})
// 响应拦截器
instance.interceptors.response.use(
    response => {
        // 任何 HTTP 状态码为 2xx 的响应数据都会触发此函数
        // 对响应数据做点什么
        return response.data;
    },
    error => {
        // 任何超出 2xx 的 HTTP 状态码都会触发此函数
        // 对响应错误做点什么
        console.error('Response Error:', error);
        return Promise.reject(error);
    }
);
// 封装 get 请求
export function get(url, params = {}) {
    return instance.get(url, {
        params: params
    });
}

// 封装 post 请求
export function post(url, data = {}) {
    return instance.post(url, data);
}
// 导出实例
export default instance;