/**
 * A simple HTTP request module
 */
import axios from 'axios'
import events from '@/utils/events'
import { contextPath } from '@/config/env.conf'
import { SERVER_TIME } from '@/config/eventName.conf'

// axios instance with default configurations
const instance = axios.create({
	baseURL: contextPath,
	withCredentials: true,
	responseType: 'json'
})

instance.interceptors.request.use(function (config) {
	// set user defined headers, etc:
	// config.headers = {...config.headers, 'X-CSRFToken': window['csrftoken']}
	return config
}, function (error) {
	return Promise.reject(error)
})

const request = (url, method, data, headers) => {
	if (data) {
		// remove 'null' value for backend check
		for (let key in data) {
			data[key] = data[key] === null ? undefined : data[key]
		}
	}
	const options = {
		method,
		url,
		data,
		headers
	}

	if (method === 'get') {
		options.params = data
	} else {
		options.data = data
	}

	return instance.request(options).then(res => {
		// 从任意服务器响应头中获取服务器时间, 不需要单独定义接口
		if (res.headers && res.headers.date) {
			events.emitEvent(SERVER_TIME, [new Date(res.headers.date)])
		}

		// 通用处理，可根据与后端约定进行自定义，此处简单的校验了一下返回码是不是 2xx
		// 返回结果可以根据约定进行一次默认提取
		if (/2\d\d/.test(res.status)) {
			return res.data
		} else {
			throw new Error(`wrong http status: ${res.status}`)
		}
	})
}

/**
 * http get
 */
export const get = (url, data, headers) => {
	return request(url, 'get', data, headers)
}

/**
 * http post
 */
export const post = (url, data, headers) => {
	return request(url, 'post', data, headers)
}

/**
 * http put
 */
export const put = (url, data, headers) => {
	return request(url, 'put', data, headers)
}

/**
 * http delete
 */
export const del = (url) => {
	return request(url, 'delete')
}
