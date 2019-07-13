import request from '../utils/request';

export function getNations() {
    return request({
        url : '/api/get-nations',
        method: 'get'
    })
}

export function storeNations(data) {
    return request({
        url: '/api/store-nation',
        method: 'post',
        data
    })
}