import request from '../utils/request';


export function getOkrug() {
    return request({
        url :'/api/get-okrug',
        method: 'get'

    })
}

export function storeOkrug(data) {
    return request({
        url : '/api/add-okrug',
        method : 'post',
        data
    })
}

export function editOkrug(data) {
    return request({
        url: '/api/update-okrug',
        method:'put',
        data
    })
}