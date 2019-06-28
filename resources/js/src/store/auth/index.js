import {getToken, setToken, removeToken} from '../../../../utils/auth'
import {login, logout, userInfo} from '../../../../api/authentication'

const user = {
    state: {
        username:'',
        email: '',
        token: getToken(),
        roles:[]
    },
    getters:{
        token: state => {
            return state.token;
        },
        username: state => {
            return state.username;
        },
        email: state=> {
            return state.username;
        },
        roles: state => {
            return state.roles;
        }
    },
    mutations: {
        SET_TOKEN:(state, token) => {
            state.token = token;
        },
        SET_NAME: (state,name) => {
            state.username = name;
        },
        SET_EMAIL: (state,email) => {
            state.email = email;
        },
        SET_ROLES: (state, roles) => {
            state.roles = roles;
        }
    },
    actions: {
        LoginUser({commit},data) {
            return new Promise((resolve, reject) => {
                login(data).then(response => {
                    if(response.data.access_token){
                        commit('SET_TOKEN', response.data.access_token)
                        setToken(response.data.access_token)
                    } else{
                        reject(response.data.error)
                    }
                    resolve()
                }).catch(error => {
                    reject(error)
                })
            })
        },
        UserInfo({commit}) {
            return userInfo().then(response => {
                console.log(response.data.data.name)
                var name = response.data.data.name

                if(response.data.data.lastname) {
                    name += ' ' + response.data.data.lastname
                }
                commit('SET_NAME',name)
                commit('SET_EMAIL', response.data.data.email)
                commit('SET_ROLES', response.data.data.roles)
            })
        },
        FedLogOut({commit}) {
            commit('SET_TOKEN','')
            commit('SET_NAME','')
            commit('SET_EMAIL','')
            removeToken()
        }
    }
}

export default user;