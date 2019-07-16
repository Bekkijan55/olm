import request from '../utils/request';


export function getParties() {
    return request({
        url: '/api/get-parties',
        method: 'get'
    })
}

export function storeParty(data) {
    return request({
        url: '/api/add-party',
        method: 'post',
        data
    })
}
