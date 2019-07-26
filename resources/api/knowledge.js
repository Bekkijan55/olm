import request from '../utils/request';

export function getKnowledge() {
    return request({
        url: '/api/get-knowledge',
        method: 'get'
    })
}

export function addKnowledge(data) {
    return request({
        url: '/api/add-knowledge',
        method: 'post',
        data
    })
}

export function getCategories(data) {
    return request({
        url: '/api/get-categories',
        method:'get',
        params:data
    })
}

export function addCategory(data) {
    return request({
        url: '/api/add-category',
        method: 'post',
        data
    })
}

export function editKnow(data) {
    return request({
        url:'/api/edit-knowledge',
        method: 'put',
        data
    })
}

export function addItem(data) {
    return request({
        url:'/api/add-cat-item',
        method:'post',
        data
    })
}

export function getItemPage(data) {
    return request({
        url: '/api/get-item-page',
        method:'get',
        params:data
    })
}

export function updateItem(data) {
    return request({
        url:'/api/get-edit-item',
        method:'get',
        params:data
    })
}

export function editItem(data) {
    return request({
        url: '/api/update-item',
        method:'put',
        data
    })
}