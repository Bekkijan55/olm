/*=========================================================================================
  File Name: router.js
  Description: Routes for vue-router. Lazy loading is enabled.
  Object Strucutre:
                    path => router path
                    name => router name
                    component(lazy loading) => component to load
                    meta : {
                      rule => which user can have access (ACL)
                      breadcrumb => Add breadcrumb to specific page
                      pageTitle => Display title besides breadcrumb
                    }
  ----------------------------------------------------------------------------------------
  Item Name: Vuesax Admin - VueJS Dashboard Admin Template
  Author: Pixinvent
  Author URL: http://www.themeforest.net/user/pixinvent
==========================================================================================*/


import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const router = new Router({
    mode: 'history',
    base: '/',
    routes: [

        {
            // =============================================================================
            // MAIN LAYOUT ROUTES
            // =============================================================================
            path: '',
            component: () => import('./layouts/main/Main.vue'),
            children: [
                // =============================================================================
                // Theme Routes
                // =============================================================================
                {
                    path: '/',
                    name: 'home',
                    component: () => import('./views/Home.vue'),
                },
                // {
                //     path: '/page2',
                //     name: 'page2',
                //     component: () => import('./views/Page2.vue'),
                // },
                {
                    path: '/users',
                    name: 'users',
                    component: () => import('./views/pages/users/index.vue')
                },
                {
                    path: '/users/edit/:id',
                    name: 'editUser',
                    meta: {
                        breadcrumb: [{
                            title: 'Home',
                            url: '/'
                        },
                    {
                        title: 'Edit',
                        active: true
                    }]
                    },
                    component: () => import('./views/pages/users/edit-user.vue')
                },
                {
                    path: '/users/view/:id',
                    name: 'viewUser',
                    meta: {
                        breadcrumb: [{
                            title: 'Home',
                            url: '/'
                        },
                    {
                        title: 'View',
                        active: true
                    }]
                    },
                    component: () => import('./views/pages/users/view-user.vue')
                },
                {
                    path: '/contacts',
                    name: 'contacts',
                    meta: {
                        breadcrumb: [{
                            title: 'Home',
                            url: '/'
                        },
                    {
                        title: 'Contacts',
                        active: true
                    }]
                    },
                    component: () => import('./views/pages/contacts/index.vue')
                },
                {
                    path: '/nationalities',
                    name: 'nationality',
                    meta: {
                        breadcrumb: [{
                            title: 'Home',
                            url: '/'
                        },
                    {
                        title: 'Nationality',
                        active: true
                    }]
                    },
                    component: () => import('./views/pages/nationality/index.vue')
                },
                {
                    path: '/education',
                    name: 'education',
                    meta: {
                        breadcrumb: [{
                            title: 'Home',
                            url: '/'
                        },
                    {
                        title: 'Education',
                        active: true
                    }]
                    },
                    component: () => import('./views/pages/education/index.vue')
                },
                {
                    path: '/parties',
                    name: 'Party',
                    meta: {
                        breadcrumb: [{
                            title: 'Home',
                            url: '/'
                        },
                    {
                        title: 'Parties',
                        active: true
                    }]
                    },
                    component: () => import('./views/pages/parties/index.vue')
                },
                {
                    path: '/institution',
                    name: 'institution',
                    meta: {
                        breadcrumb: [{
                            title: 'Home',
                            url: '/'
                        },
                    {
                        title: 'Institution',
                        active: true
                    }]
                    },
                    component: () => import('./views/pages/insts/index.vue')
                },
                {
                    path: '/okrug',
                    name: 'Okrug',
                    meta: {
                        breadcrumb: [{
                            title: 'Home',
                            url: '/'
                        },
                    {
                        title: 'Okrug',
                        active: true
                    }]
                    },
                    component: () => import('./views/pages/okruk/index.vue')
                },
                {
                    path: '/knowledge',
                    name: 'Knowledge',
                    meta: {
                        breadcrumb: [{
                            title: 'Home',
                            url: '/'
                        },
                    {
                        title: 'Knowledge',
                        active: true
                    }],
                    Adding:{
                        title:'Add KB',
                        url:'/add-knowledge'
                    }
                    },

                    component: () => import('./views/pages/knowledge/index.vue')
                },
                {
                    path: '/add-knowledge',
                    name: 'AddKnowledge',
                    meta: {
                        breadcrumb: [{
                            title: 'Home',
                            url: '/'
                        },
                    {
                        title: 'Add Knowledge',
                        active: true
                    }]
                    },
                    component: () => import('./views/pages/knowledge/add-kb.vue')
                },
                {
                    path: '/knowledge/category/:id',
                    name: 'KnowledgeCategory',
                    meta: {
                        breadcrumb: [{
                            title: 'Home',
                            url: '/'
                        },
                        {
                            title: 'Knowledge',
                            url: '/knowledge'
                        },
                    {
                        title: 'Category',
                        active: true
                    }],
                    
                    
                    },
                    
                    component: () => import('./views/pages/knowledge/category.vue')
                },
                {
                    path: '/knowledge/category/item/:id',
                    name: 'KnowledgeCategoryItem',
                    meta: {
                        breadcrumb: [{
                            title: 'Home',
                            url: '/'
                        },
                        {
                            title: 'Knowledge',
                            url: '/knowledge'
                        },
                    {
                        title: 'CategoryItem',
                        active: true
                    }],                    
                    },                    
                    component: () => import('./views/pages/knowledge/category-item.vue')
                },
                {
                    path: '/knowledge/items/:cat_id/:id',
                    name: 'catItems',
                    meta: {
                        breadcrumb: [{
                            title: 'Home',
                            url: '/'
                        },
                        {
                            title: 'Knowledge',
                            url: '/knowledge'
                        },
                    {
                        title: 'Items',
                        active: true
                    }],                    
                    },                    
                    component: () => import('./views/pages/knowledge/items.vue')
                },
                {
                    path: '/knowledge/item/edit/:id',
                    name: 'editItem',
                    meta: {
                        breadcrumb: [{
                            title: 'Home',
                            url: '/'
                        },
                        {
                            title: 'Knowledge',
                            url: '/knowledge'
                        },
                    {
                        title: 'EditItems',
                        active: true
                    }],                    
                    },                    
                    component: () => import('./views/pages/knowledge/edit-item.vue')
                },
                {
                    path: '/add-kb-category/:id',
                    name: 'AddKbCategory',
                    meta: {
                        breadcrumb: [{
                            title: 'Home',
                            url: '/'
                        },
                        {
                            title: 'Knowledge',
                            url: '/knowledge'
                        },
                        {
                            title: 'category',
                            url: '/knowledge/category/:id'
                        },
                        
                    {
                        title: 'Add Category',
                        active: true
                    }]
                    },
                    component: () => import('./views/pages/knowledge/add-kb-category.vue')
                },

            ],
        },
        // =============================================================================
        // FULL PAGE LAYOUTS
        // =============================================================================
        {
            path: '',
            component: () => import('@/layouts/full-page/FullPage.vue'),
            children: [
                // =============================================================================
                // PAGES
                // =============================================================================
                {
                    path: '/pages/login',
                    name: 'pageLogin',
                    component: () => import('@/views/pages/Login.vue')
                },
                {
                    path: '/pages/error-404',
                    name: 'pageError404',
                    component: () => import('@/views/pages/Error404.vue')
                },
                {
                    path: '/login',
                    name: 'login',
                    component: () => import('./views/authentication/Login.vue')
                }
            ]
        },
        // Redirect to 404 page, if no match found
        {
            path: '*',
            redirect: '/pages/error-404'
        }
    ],
})

export default router
