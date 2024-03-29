/*=========================================================================================
  File Name: store.js
  Description: Vuex store
  ----------------------------------------------------------------------------------------
  Item Name: Vuesax Admin - VueJS Dashboard Admin Template
  Author: Pixinvent
  Author URL: http://www.themeforest.net/user/pixinvent
==========================================================================================*/


import Vue from 'vue'
import Vuex from 'vuex'

import user from './auth/index'
import userCreds from './user-creds/index'
import knowledgeBase from './knowledge-base/index'

import state from "./state"
import getters from "./getters"
import mutations from "./mutations"
import actions from "./actions"

Vue.use(Vuex)


export const store = new Vuex.Store({
  modules: {
    user,
    userCreds,
    knowledgeBase
  },
    getters,
    mutations,
    state,
    actions,
    strict: process.env.NODE_ENV !== 'production'
})


export default store