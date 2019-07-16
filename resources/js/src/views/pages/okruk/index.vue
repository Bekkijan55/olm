<template>
     <div>       

              <vs-popup class="holamundo" title="Update Okrug" :active.sync="popup">
       <div class="vx-col w-full mb-base">
            <form @submit.prevent ="changeOkrug">
         <div class="vx-row">
            <div class="vx-col sm:w-1/1 w-full mb-2">
              <vs-input
                class="w-full"
                v-validate="'required'"
                label="Okrug"
                placeholder="Okrug"
                name="Okrug"
                v-model="okrugs.okrug_uz"
              />
              <span class="text-danger text-sm">{{errors.first('Okrug')}}</span>
            </div>
           
          </div>
          <div class="vx-row">
                <div class="vx-col sm:w-1/1 w-full mb-2">
              <vs-input
                class="w-full"
                v-validate="'required'"
                label="Округ"
                placeholder="Округ"
                name="Округ"
                v-model="okrugs.okrug_uz2"
              />
              <span class="text-danger text-sm">{{errors.first('Округ')}}</span>
            </div>
          </div>
           <div class="vx-row">
            <div class="vx-col sm:w-1/1 w-full mb-2">
              <vs-input
                class="w-full"
                v-validate="'required'"
                label="Округ"
                placeholder="Округ"
                name="Округ"
                v-model="okrugs.okrug_ru"
              />
              <span class="text-danger text-sm">{{errors.first('Округ')}}</span>
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

        <okruk-form></okruk-form>
        <vx-card>
            <vs-table :data="okrug">
                <template slot="thead">
                    <vs-th>ID</vs-th>
                    <vs-th>Okrug</vs-th>
                    <vs-th>Округ</vs-th>
                    <vs-th>Округ</vs-th>   
                    <vs-th>Action</vs-th>                 
                </template>
                <template slot-scope="{data}">
                    <vs-tr v-for="val in data" :key="val.id">
                    <vs-td>{{val.id}}</vs-td>
                    <vs-td>{{val.okrug_uz}}</vs-td>
                    <vs-td>{{val.okrug_uz2}}</vs-td>
                    <vs-td>{{val.okrug_ru}}</vs-td>
                    <vs-td>
                        <vs-button color="warning" type="filled" icon-pack="feather" icon="icon-edit" @click="editOkrug(val);popup=true"></vs-button>
                    </vs-td>
                    </vs-tr>
                </template>
            </vs-table>
        </vx-card>
   </div>
</template>

<script>
import {mapGetters,mapActions} from 'vuex'
import OkrukForm from './okruk-form'
export default {
    data: () => ({
        okrugs:{
            id:'',
            okrug_uz:'',
            okrug_uz2:'',
            okrug_ru:''
        },
        popup:false
    }),

    components:{
        OkrukForm
    },

    mounted() {
        this.fetchOkrug()
    },

    computed:{
        ...mapGetters(['okrug'])
    },
    methods:{
        ...mapActions(['fetchOkrug']),

        editOkrug(val) {
            Object.assign(this.okrugs,val);
        },

        changeOkrug() {
            this.$store.dispatch('updateOkrug',this.okrugs) 
              .then(() => {
                  this.popup = false;
              })
        }
    }
}
</script>

<style>

</style>
