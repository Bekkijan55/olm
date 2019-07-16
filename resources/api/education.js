import request from '../utils/request';

export function getEdu() {
    return request({
        url: '/api/get-edu',
        method: 'get'
    })
}

export function storeEdu(data) {
    return request({
        url: '/api/add-edu',
        method: 'post',
        data
    })
}