import {
    getNations,
    storeNations
} from '../../../../api/nations'
import {
    getEdu,
    storeEdu,
    editEdu
} from '../../../../api/education'
import {
    getParties,storeParty,updateParty
} from '../../../../api/party'

import {
    getInst,
    storeInst,
    updateInst
} from '../../../../api/institution'

import {
    getOkrug,storeOkrug,editOkrug
} from '../../../../api/okrug'

import {userById} from '../../../../api/users'



const userCreds = {
    state: {
        nations: [],
        edu: [],
        parties: [],
        inst: [],
        okrug: [],
        user_id:{},
        user_edu:[],
        user_nation:[],
        user_party:[],
        user_inst:[],
        user_okrug:[]

    },
    getters: {
        nations: state => {
            return state.nations;
        },
        edu: state => {
            return state.edu;
        },
        parties: state => {
            return state.parties;
        },
        inst: state => {
            return state.inst;
        },
        okrug: state => {
            return state.okrug;
        },
        userId: state => {
            return state.user_id;
        },
        userEdu: state => {
            return state.user_edu;
        },
        userParty: state => {
            return state.user_party;
        },
        userNation: state => {
            return state.user_nation;
        },
        userInst: state => {
            return state.user_inst;
        },
        userOkrug: state => {
            return state.user_okrug;
        }

    },
    mutations: {
        setNations: (state, nations) => {
            state.nations = nations;
        },
        addNation: (state, nation) => {
            state.nations.push(nation);
        },
        setEdu: (state, edu) => {
            state.edu = edu;
        },
        setParty: (state, party) => {
            state.parties = party;
        },
        setInst: (state, inst) => {
            state.inst = inst;
        },
        addInst: (state, inst) => {
            state.inst.push(inst);
        },
        setOkrug: (state, okrug) => {
            state.okrug = okrug;
        },
        addOkrug : (state,data) => {
            state.okrug.push(data);
        },
        setUserById: (state,data) => {
            state.user_id = data[0];
            state.user_edu = data[2];
            state.user_nation = data[1];
            state.user_party = data[3];
            state.user_okrug = data[4];
            state.user_inst = data[5];
        }
    },
    actions: {
        fetchNations({
            commit
        }) {
            getNations()
                .then(res => {
                    commit('setNations', res.data.data);
                })
                .catch(err => console.log(err));
        },
        fetchEdu({
            commit
        }) {
            getEdu()
                .then(res => {
                    commit('setEdu', res.data.data);
                })
        },
        addEdu({
            commit,
            dispatch
        }, data) {
            storeEdu(data)
                .then(res => {
                    dispatch('fetchEdu');
                })
                .catch(err => console.log(err))
        },
        updateEdu({commit,dispatch},data) {
            editEdu(data)
              .then(res => {
                  dispatch('fetchEdu');
              })
        },
        fetchParties({
            commit
        }) {
            getParties()
                .then(res => {
                    commit('setParty', res.data.data)
                })
                .catch(err => console.log(err))
        },
        addParty({commit,dispatch}, party) {
            storeParty(party)
             .then(res => {
               dispatch('fetchParties')
             })
             .catch(err => console.log(err))
        },

        editParty({dispatch},data) {
            updateParty(data)
              .then(res => {
                  dispatch('fetchParties');
              })
               .catch(err => console.log(err))
        },
        fetchInst({commit}){
              getInst()
             .then(res => {
                commit('setInst',res.data.data)
             })
              .catch(err => console.log(err))
        },
        addInst({commit}, data) {
            storeInst(data)
              .then(res => {
                commit('addInst',res.data.data)
              })
               .catch(err => console.log(err))
        },
        editInst({dispatch},data) {
            updateInst(data)
             .then(res => {
                 dispatch('fetchInst');
             })
               .catch(err => console.log(err))
        },
        fetchOkrug({commit}) {
            getOkrug() 
            .then(res => {
                commit('setOkrug',res.data.data);
            })
             .catch(err => console.log(err))
        },
        addOkrug({commit}, okrug) {
            storeOkrug(okrug)
             .then(res => {
                commit('addOkrug',res.data.data)
             })
              .catch(err => console.log(err))
        },

        updateOkrug({dispatch},data) {
            editOkrug(data)
             .then(res => {
                 dispatch('fetchOkrug');
             })
              .catch(err => console.log(err))
        },

        getUserById({commit},data) {           
            userById(data)
             .then(res => {
                 commit('setUserById',res.data);
                 
             })
              .catch(err => console.log(err))
        }

    },


}

export default userCreds
