<template>
    <vx-card title="Add Knowledge Base"> 
        <form @submit.prevent="addNewKB" >

        <vs-row vs-w="12" class="mb-base">
            <vs-col vs-type="flex" vs-w="4">
                <vs-input class="w-full" v-validate="'required'" name="TitleRu" label="Title Ru" v-model="newKb.title_ru" />
                <span class="text-danger text-sm">{{errors.first('TitleRu')}}</span>
            </vs-col>
            <vs-col vs-type="flex" vs-w="4">
                <label for=""></label>
                <vs-input class="w-full" v-validate="'required'" name="TitleUz" label="Title Uz" v-model="newKb.title_uz" />
                <span class="text-danger text-sm">{{errors.first('TitleUz')}}</span>
            </vs-col>
            <vs-col vs-type="flex" vs-w="4">
                <vs-input class="w-full" label="Title Uz2" v-validate="'required'" name="TitleUz2" v-model="newKb.title_uz2" />
                <span class="text-danger text-sm">{{errors.first('TitleUz2')}}</span>
            </vs-col>
        </vs-row>
        <vs-row vs-w="12" class="mb-base">
            <vs-col vs-type="flex" vs-w="4" >
                <!-- <label for="BodyRu">Body Ru</label> -->
                 <vs-textarea label="Body Ru" v-model="newKb.desc_ru" />
            </vs-col>
             <vs-col vs-type="flex" vs-w="4" >
                <!-- <label for="BodyUz">Body Uz</label> -->
                 <vs-textarea label="BodyUz" v-model="newKb.desc_uz" />
            </vs-col>
             <vs-col vs-type="flex" vs-w="4" >
                <!-- <label for="BodyUz2">Body Uz2</label> -->
                 <vs-textarea label="BodyUz2" v-model="newKb.desc_uz2" />
            </vs-col>
        </vs-row>
        <vs-row vs-w="12">            
            <vs-col vs-w="4" vs-type="flex">
                <input type="file" @change="uploadPhoto">
            </vs-col>
             <vs-col vs-w="2" vs-offset="6" vs-justify="flex-end" vs-type="flex" >
                <vs-button color="primary" >Add</vs-button>
            </vs-col>
        </vs-row>
        </form>
    </vx-card>
</template>

<script>
import {mapActions, mapGetters} from 'vuex'
export default {
data:() => ({
    newKb:{
        title_ru:'',
        title_uz:'',
        title_uz2:'',
        desc_ru:'',
        desc_uz:'',
        desc_uz2:'',
        photo:null
    }
}),
mounted() {
    
},

computed:{
    
},

methods:{
   
   uploadPhoto(e) {
       var fileReader = new FileReader();
       fileReader.readAsDataURL(e.target.files[0]);

       fileReader.onload = e => {        
           this.newKb.photo = e.target.result;
       }
   },
   addNewKB() {
       this.$validator.validateAll().then(result => {
        if (result) {
       this.$store.dispatch('addKB',this.newKb)
        .then(() => {
            this.$router.push({name:'Knowledge'});
        })
        }
       })
   }
}

}
</script>

<style>

</style>
