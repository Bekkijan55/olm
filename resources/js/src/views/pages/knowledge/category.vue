<template>
    <div id="knowledge-base-category-page">
        <vs-popup class="holamundo" title="Add Category" :active.sync="popupCategory">
     
            <form @submit.prevent="addSubCategory">
                <vs-row vs-w="12">
                    <vs-col vs-w="10" vs-offset="1" vs-type="flex">
                        <vs-input label="Title Ru"  v-validate="'required'" name="TitleRu" class="w-full" v-model="newCat.title_ru" /><br>
                        <span class="text-danger text-sm">{{errors.first('TitleRu')}}</span>
                    </vs-col>
                    <vs-col vs-w="10" vs-offset="1" vs-type="flex">
                        <vs-input label="Title Uz"  v-validate="'required'" name="TitleUz" class="w-full" v-model="newCat.title_uz"  />
                        <span class="text-danger text-sm">{{errors.first('TitleUz')}}</span>
                    </vs-col>
                    <vs-col vs-w="10" vs-offset="1" vs-type="flex">
                        <vs-input label="Title Uz2"  v-validate="'required'" name="TitleUz2" class="w-full" v-model="newCat.title_uz2" />
                        <span class="text-danger text-sm">{{errors.first('TitleUz2')}}</span>
                    </vs-col>
                    <vs-col vs-w="12" vs-type="flex" class="mt-8" vs-justify="flex-end" >
                        <vs-button color="primary" >Save</vs-button>
                    </vs-col>
                </vs-row>
            </form>

        </vs-popup>

          <vs-popup class="holamundo" title="Edit Category" :active.sync="editKnowledge">
     
            <form @submit.prevent="updateKnowledge">
                <div class="vx-row">
                    <div class="vx-col sm:w-1/2 w-full">
                        <div class="vx-row">
                           <div class="vx-col sm:w-1/1 w-full">
                            <vs-input label="Title Ru" class="w-full mb-2" v-validate="'required'" v-model="editKnow.title_ru" />
                           </div> 
                           <div class="vx-col sm:w-1/1 w-full">
                            <vs-input label="Title Uz" class="w-full mb-2" v-validate="'required'" v-model="editKnow.title_uz" />
                           </div> 
                           <div class="vx-col sm:w-1/1 w-full">
                            <vs-input label="Title Uz2" class="w-full mb-2" v-validate="'required'" v-model="editKnow.title_uz2" />
                           </div> 
                        </div>
                    </div>
                    <div class="vx-col sm:w-1/2 w-full">
                        <img v-if="editKnow.photo" :src="editKnow.photo" width="150" height="150" >
                        <input type="file" @change="getPhoto" class ="mt-6" >
                    </div>
                    <div class="vx-col sm:w-1/1 w-full  mb-2">
                        <vs-textarea label="Description Ru" v-model="editKnow.desc_ru" />
                    </div>
                    <div class="vx-col sm:w-1/1 w-full mb-2 ">
                        <vs-textarea label="Description Uz" v-model="editKnow.desc_uz" />
                    </div>
                    <div class="vx-col sm:w-1/1 w-full mb-2 ">
                        <vs-textarea label="Description Uz2" v-model="editKnow.desc_uz2" />
                    </div>
                    <vs-col vs-w="12" vs-type="flex" vs-justify="flex-end" >
                        <vs-button color="primary">Edit</vs-button>
                    </vs-col>
                </div>
            </form>

        </vs-popup>

        

        <vs-row vs-w = "12">
            <vs-col vs-type="flex" vs-w="8" >
                <h3 class="mb-4">{{catKnow.title_ru}}</h3>
            </vs-col>
            <vs-col vs-type="flex" vs-w="2" vs-justify="flex-end" >
                <vs-button color="primary" @click="popupCategory=true" >Add Category</vs-button>
            </vs-col>
            <vs-col vs-type="flex" vs-w="2" vs-justify="flex-end" >
                <vs-button color="success" @click="editKnowledge=true;AssignKnow()" >Edit Knowledge</vs-button>
            </vs-col>
        </vs-row>
        

        <div class="vx-row mt-8 match-height">
            <div class="vx-col w-full sm:w-1/2 md:w-1/3 mb-base" v-for="section in categories" :key="section.id">
                <vx-card>
                    <vs-row vs-w="12">
                        <vs-col vs-w="9" vs-type="flex">
                            <h4 class="mb-4">{{ section.title_ru }}</h4>
                        </vs-col>
                        <vs-col vs-w="1" vs-type="flex" >
                            <router-link :to="{name:'KnowledgeCategoryItem', params:{id:section.id}}"><vs-button color="primary" size="small">Add</vs-button></router-link>
                        </vs-col>
                    </vs-row>
                   
                    <ul class="bordered-items">
                       <li v-for="que in section.items" :key="que.id" class="py-2"><router-link :to="{name:'catItems',params:{id:que.id,cat_id:section.id}}" >{{ que.title_ru }}</router-link></li>
                    </ul>
                </vx-card>
            </div>
        </div>
    </div>
</template>

<script>
import {mapGetters, mapActions} from 'vuex'
export default {
    data:() => ({
        pageId:{
            id:''
        },
        newCat:{
           child_id:'',
            title_ru:'',
            title_uz:'',
            title_uz2:'',            
        },
        editKnow:{
            id:'',
            photo:'',
            title_ru:'',
            title_uz:'',
            title_uz2:'',            
            desc_ru:'',
            desc_uz:'',
            desc_uz2:''
        },
        popupCategory:false,
        editKnowledge:false
        
    }),
    computed:{
        ...mapGetters(['categories','catKnow']),
        
    },

    mounted() {
        this.pageId.id = this.$route.params.id,
        this.newCat.child_id = this.$route.params.id,
        this.fetchCategories(this.pageId)
             
    },
    methods:{
        ...mapActions(['fetchCategories']),
        addSubCategory() {
             this.$validator.validateAll().then(result => {
        if (result) {
            this.$store.dispatch('addCategory',this.newCat)
             .then(() => {
                 this.popupCategory = false;
             })
        }
             })
        },
        AssignKnow() {
            console.log(this.catKnow);
            Object.assign(this.editKnow,this.catKnow);
        },
        getPhoto(e) {
            var filereader = new FileReader();

            filereader.readAsDataURL(e.target.files[0]);
            filereader.onload = e => {
                this.editKnow.photo = e.target.result;
            }
        },
        updateKnowledge() {
            this.$store.dispatch('updateKnow',this.editKnow)
             .then(() => {
                 this.editKnowledge = false;
             })
        }
    }
}
</script>

<style>

</style>
