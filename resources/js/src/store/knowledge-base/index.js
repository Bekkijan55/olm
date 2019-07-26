
import {getKnowledge,
        addKnowledge, 
        getCategories,
        addCategory,
        editKnow,
        addItem,
        getItemPage
        } from '../../../../api/knowledge'

const knowledgeBase = {
    state:{
        knowleds:[],
        categories:[],
        catKnow:{},
        knowItems:[],
        catName:{},
        item:{},
        items:[],
        
    },
    getters:{
        kb:state => {
            return state.knowleds;
        },
        categories:state => {
            return state.categories;
        },
        catKnow:state => {
            return state.catKnow;
        },
        item:state => {
            return state.item;
        },
        items:state => {
            return state.items;
        },
       
      
    },
    mutations:{
        SET_KNOWLEDGES:(state,knowledges) => {
            state.knowleds = knowledges;            
        },
        ADD_KNOWLEDGE:(state,data) => {
            state.knowledges.push(data);
        },
        getCategory:(state,data) => {
            state.categories = data;
        },
        setCategory:(state,data) => {
            state.categories.push(data);
        },
        setCatKnow:(state,data) => {
            state.catKnow = data;
        },
        setItem:(state,data) => {
            state.item = data;
        },
        setItems:(state,data) => {
            state.items = data;
        }      
       
        
    },
    actions:{
        fetchKnowledges({commit}){
            getKnowledge() 
                .then(res => {
                    commit('SET_KNOWLEDGES',res.data.data)
                })
                 .catch(err => console.log(err))
        },
        addKB({commit},data) {
            addKnowledge(data)
             .then(res => {
                 commit('ADD_KNOWLEDGE',res.data.data);
             })
              .catch(err => console.log(err))
        },
        fetchCategories({commit},data){            
            getCategories(data)
             .then(res => {
                 commit('getCategory',res.data[0]);
                 commit('setCatKnow',res.data[1]);
             })
              .catch(err => console.log(err))
        },
        addCategory({commit},data) {
            addCategory(data)
             .then(res => {
                 commit('setCategory',res.data.data);
                 
             })
              .catch(err => console.log(err))
        },
        updateKnow({dispatch},data) {
            editKnow(data)
             .then(res => {
                 dispatch('fetchCategories',{id:data.id});
             })
              .catch(err => console.log(err))
        },
        addNewItem({commit},data) {
            addItem(data)
             .then(res => {

             })
              .catch(err => console.log(err))
        },
        getItem({commit},data) {
            getItemPage(data)
             .then(res => {
                 commit('setItem',res.data[0]);
                 commit('setItems',res.data[1]);
             })
              .catch(err => console.log(err))
        }
      
      
    }
}

export default knowledgeBase;