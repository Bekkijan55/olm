<template>
    <div>
        
        <vs-popup class="holamundo" title="Update Education" :active.sync="popup">
       <div class="vx-col w-full mb-base">
            <form @submit.prevent ="changeEdu">
         <div class="vx-row">
            <div class="vx-col sm:w-1/1 w-full mb-2">
              <vs-input
                class="w-full"
                v-validate="'required'"
                label="Ta'lim"
                placeholder="Ta'lim"
                name="Ta'lim"
                v-model="edus.edu_uz"
              />
              <span class="text-danger text-sm">{{errors.first('Ta\'lim')}}</span>
            </div>
           
          </div>
          <div class="vx-row">
                <div class="vx-col sm:w-1/1 w-full mb-2">
              <vs-input
                class="w-full"
                v-validate="'required'"
                label="Таълим"
                placeholder="Таълим"
                name="Таълим"
                v-model="edus.edu_uz2"
              />
              <span class="text-danger text-sm">{{errors.first('Таълим')}}</span>
            </div>
          </div>
           <div class="vx-row">
            <div class="vx-col sm:w-1/1 w-full mb-2">
              <vs-input
                class="w-full"
                v-validate="'required'"
                label="Образование"
                placeholder="Образование"
                name="Образование"
                v-model="edus.edu_ru"
              />
              <span class="text-danger text-sm">{{errors.first('Образование')}}</span>
            </div>
          
          </div>      
           
           <vs-row vs-type="flex" vs-justify="flex-end">
        <div class="bx-row">
          <vs-button
            color="success"
            type="filled"
            size="medium"
                                  
          >Save</vs-button>
        </div>
      </vs-row>
          </form>
        </div>
    </vs-popup>

    <edu-form></edu-form>
    
        <vx-card>
            <vs-table :data="edu">
                <template slot="thead">
                    <vs-th>ID</vs-th>
                    <vs-th>Ta'lim</vs-th>
                    <vs-th>Таълим</vs-th>
                    <vs-th>Образование</vs-th>   
                    <vs-th>Action</vs-th>                 
                </template>
                <template slot-scope="{data}">
                    <vs-tr v-for="val in data" :key="val.id">
                    <vs-td>{{val.id}}</vs-td>
                    <vs-td>{{val.edu_uz}}</vs-td>
                    <vs-td>{{val.edu_uz2}}</vs-td>
                    <vs-td>{{val.edu_ru}}</vs-td>
                    <vs-td>
                        <vs-button color="warning" type="filled" icon-pack="feather" icon="icon-edit" @click="editEdu(val);popup=true"></vs-button>
                    </vs-td>
                    </vs-tr>
                </template>
            </vs-table>
        </vx-card>
    </div>
</template>

<script>
import {mapGetters, mapActions} from 'vuex'
import EduForm from './edu-form.vue'
export default {
data: () => ({
    edus: {
        id:'',
        edu_uz: '',
        edu_uz2: '',
        edu_ru:''
    },
    popup:false
}),
components:{
    EduForm
},
mounted() {
   this.fetchEdu()
},
computed: {
    
   ...mapGetters(['edu'])
},

methods:{
    ...mapActions(['fetchEdu']),

    editEdu(val) {
        Object.assign(this.edus,val)
    },
    changeEdu() {
        this.$store.dispatch('updateEdu',this.edus)
         .then(() => {
             this.popup = false;
         })
    }
}
}
</script>

<style>

</style>
