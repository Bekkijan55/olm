import request from '../utils/request';

export function addContact(data) {
    return request({
        url: '/api/add-contact',
        method: 'post',
        data
    })
}

export function getContacts() {
    return request({
        url : '/api/get-contacts',
        method: 'get'
    })
}