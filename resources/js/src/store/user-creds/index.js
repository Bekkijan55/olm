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


const userCreds = {
    state: {
        nations: [],
        edu: [],
        parties: [],
        inst: [],
        okrug: []

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
        }

    },


}

export default userCreds
