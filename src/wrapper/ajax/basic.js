import axios from 'axios';
import qs from 'qs';
import { Message } from 'element-ui';

// 创建axios 实例
const service = axios.create({
  baseURL: process.env.VUE_APP_BASE_API,
  timeout: 35000, // 请求超时时间
  headers: {
    'Content-Type': 'application/json;charset=UTF-8',
  },
});

// request 拦截器
service.interceptors.request.use(
  (config) => {
    const t = config;
    if (t.contentType) {
      t.headers['Content-Type'] = t.contentType;
    }
    // if (!t.contentType || (t.contentType && t.contentType.indexOf('application/json') === -1)) {
    //   // 允许在向服务器发送前，修改请求数据，只能用在 'PUT', 'POST' 和 'PATCH' 这几个请求方法，并且contentType不等于application/json
    //   t.transformRequest = [data => qs.stringify(data)
    //   ];
    // }
    // 是一个负责 `params` 序列化的函数
    t.paramsSerializer = params => qs.stringify(params);
    t.headers.userToken = localStorage.getItem('userToken');
    return t;
  },
  (error) => {
    // 这里处理一些请求出错的情况
    Message({
      showClose: true,
      message: error,
      type: 'error',
    });
    Promise.reject(error);
  },
);

// response 拦截器
service.interceptors.response.use(
  (response) => { // 这里处理一些response 正常放回时的逻辑
    if (response.data.code === 999) {
      if (response.data.message) {
        Message({
          showClose: true,
          message: response.data.message,
          type: 'error',
        });
      }
      setTimeout(() => {
        window.location.href = response.data.data;
      }, 1000);
    } else if (response.data.success === false) {
      Message({
        showClose: true,
        message: response.data.message,
        type: 'error',
      });
      return Promise.reject(response.data);
    }
    return response.data;
  },
  (error) => { // 这里处理一些response 出错时的逻辑
    Message({
      showClose: true,
      message: error,
      type: 'error',
    });
    return Promise.reject(error);
  },

);

export default service;
