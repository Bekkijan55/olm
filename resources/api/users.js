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
        url: '/api/update-user',
        method: 'post',
        data
    })
}

export function userById(data) {
   
    return request({
        url : '/api/user-id',
        method: 'get',
        params: data
    })
}

export function addUserCreds(data) {
    return request({
        url: '/api/add-usercreds',
        method: 'post',
        data
    })
}
