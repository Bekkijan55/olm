import {getNations, storeNations} from '../../../../api/nations'
 

const userCreds = {
    state:{
        nations: [],
      
    },
    getters:{
        nations: state => {
            return state.nations;
        },
        
    },
    mutations:{
        setNations:(state,nations) => {
            state.nations = nations;
        },
       addNation: (state,nation) => {
           state.nations.push(nation);
       }
    },
    actions:{
        fetchNations({commit}) {
            getNations() 
            .then(res => {
                commit('setNations',res.data.data);
            })
            .catch(err =>console.log(err));
        },
        
    }
}

export default userCreds