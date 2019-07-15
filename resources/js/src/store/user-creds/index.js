import {getNations, storeNations} from '../../../../api/nations'
import {getEdu, storeEdu} from '../../../../api/education'
 

const userCreds = {
    state:{
        nations: [],
        edu: [],
        parties: [
            {
                id:1,
                party_uz:'O`zbekiston “Milliy tiklаnish” Demokrаtik pаrtiyasi',
                party_ru:'Демократической партии Узбекистана «Миллий тикланиш»',
                party_en:'The Democratic party of Uzbekistan “Milliy tiklanish'
            },
            {
                id:2,
                party_uz:'“Tаdbirkorlаr vа ishbilаrmonlаr hаrаkаti – O`zbekiston Liberаl-demokrаtik pаrtiyasi” (O’zLiDeP)',
                party_ru:'движении предпринимателей и деловых людей – Либерально-демократической партии Узбекистана” (УзЛиДеП)',
                party_en:'The Movement of Entrepreneurs and Business people – the Liberal-democratic party of Uzbekistan (UzLiDeP)'
            }
        ],
        inst:[
            {
                id:1,
                inst_uz:'Volgograddagi gaz va neft sanoati texnika maktabi',
                inst_ru: 'Волгоградский техникум газовой и нефтяной промышленности',
                inst_en: 'Volgograd technical school of gas and oil industry'
            }
        ],
        okrug:[
            {
                id: 1,
                okrug_uz:'Senat a\'zosi',
                okrug_uz2:'Сенат аъзоси',
                okrug_ru : 'Член Сената'
            }
        ]
      
    },
    getters:{
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
    mutations:{
        setNations:(state,nations) => {
            state.nations = nations;
        },
       addNation: (state,nation) => {
           state.nations.push(nation);
       },
       setEdu: (state,edu) => {
           state.edu = edu;          
       },
       setParty:(state,party) => {
           state.parties.push(party);
       },
       setInst: (state,inst) => {
           state.inst.push(inst);
       },
       setOkrug: (state,okrug) => {
           state.okrug.push(okrug);
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
        fetchEdu({commit}) {
            getEdu()
              .then(res => {                  
                  commit('setEdu',res.data.data);
              })
        },
        addEdu({commit, dispatch},data) {            
            storeEdu(data) 
             .then(res => {
                dispatch('fetchEdu');
             })
              .catch(err => console.log(err))
        },
        addParty({commit},party) {
            commit('setParty',party);
        },
        addInst({commit},inst) {
            commit('setInst',inst);
        },
        addOkrug({commit},okrug) {
            commit('setOkrug',okrug);
        }
        
    },

    
}

export default userCreds