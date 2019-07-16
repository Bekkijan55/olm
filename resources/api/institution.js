import request from '../utils/request';


export function getInst() {
    return request({
        url:'/api/get-inst',
        method: 'get'
    })
}

export function storeInst(data) {
    return request({
        url:'/api/add-inst',
        method: 'post',
        data
    })
}

export function updateInst(data) {
    return request({
        url: '/api/update-inst',
        method: 'put',
        data
    })
}
