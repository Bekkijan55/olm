import request from '../utils/request';


export function getUsers() {
    return request({
        url: '/api/get-users',
        method: 'get'
    })
}

export function newUser(data) {
    return request({
        url: '/api/add-user',
        method: 'post',
        data
    })
}

export function updateUser(data) {
    return request({
        url: '/api/add-user',
        method: 'put',
        data
    })
}
