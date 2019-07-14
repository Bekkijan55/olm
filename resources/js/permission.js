import router from '../js/src/router'
import store from '../js/src/store/store'
import {getToken} from '../utils/auth'



function hasPermission(roles, permissionRoles) {
    
      if (!permissionRoles) {return true}
      else {
        var Boolean = false
        for (var item of roles) {
          permissionRoles = permissionRoles.filter((obj, pos, arr) => {
            return arr.map(function (val) {
              if (item.role_name === val) {
                Boolean = true
              }
            })
          });
        }
        return Boolean
      }
    
      // if (roles.indexOf('ROLE_USER') >= 0) return true // admin permission passed directly
    
      return roles.some(role => permissionRoles.indexOf(role) >= 0)
    }


const whiteList = ['/login']// no redirect whitelist

router.beforeEach((to, from, next) => {
    if (getToken()) { // determine if there has token      
        if (to.path === '/login') {          
            next({path: '/'})
        }else {          
          if (store.getters.roles.length === 0) {                     
            store.dispatch('UserInfo').then(res => {
                                     
            next({...to, replace: true})           
          }).catch((err) => {
              store.dispatch('FedLogOut').then(() => {
                  next({path: '/login'})
              })
            })
          } else {
            if (hasPermission(store.getters.roles, to.meta.roles)) {
              next()//
            } else {
              next({path: '/401', replace: true, query: {noGoBack: true}})
            }
          }
        }
    }else {
        /* has no token*/
        if (whiteList.indexOf(to.path) !== -1) { // In the log-in white list, enter directly
            next()
        } else {
            next('/login') // Otherwise all redirect to login page
        }
    }
})