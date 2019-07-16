<template>
    <div>       

        <vs-popup class="holamundo" title="Add Institution" :active.sync="popup">
       <div class="vx-col w-full mb-base">
            <form @submit.prevent ="updateInst">
         <div class="vx-row">
            <div class="vx-col sm:w-1/1 w-full mb-2">
              <vs-input
                class="w-full"
                v-validate="'required'"
                label="Institut"
                placeholder="Institut"
                name="Institut"
                v-model="insts.inst_uz"
              />
              <span class="text-danger text-sm">{{errors.first('Institut')}}</span>
            </div>
           
          </div>
          <div class="vx-row">
                <div class="vx-col sm:w-1/1 w-full mb-2">
              <vs-input
                class="w-full"
                v-validate="'required'"
                label="Институт"
                placeholder="Институт"
                name="Институт"
                v-model="insts.inst_uz2"
              />
              <span class="text-danger text-sm">{{errors.first('Институт')}}</span>
            </div>
          </div>
           <div class="vx-row">
            <div class="vx-col sm:w-1/1 w-full mb-2">
              <vs-input
                class="w-full"
                v-validate="'required'"
                label="Институт"
                placeholder="Институт"
                name="Институт"
                v-model="insts.inst_ru"
              />
              <span class="text-danger text-sm">{{errors.first('Институт')}}</span>
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

        <inst-form></inst-form>
        <vx-card>
            <vs-table :data="inst">
                <template slot="thead">
                    <vs-th>ID</vs-th>
                    <vs-th>Institut</vs-th>
                    <vs-th>Институт</vs-th>
                    <vs-th>заведения</vs-th>   
                    <vs-th>Action</vs-th>                 
                </template>
                <template slot-scope="{data}">
                    <vs-tr v-for="val in data" :key="val.id">
                    <vs-td>{{val.id}}</vs-td>
                    <vs-td>{{val.inst_uz}}</vs-td>
                    <vs-td>{{val.inst_uz2}}</vs-td>
                    <vs-td>{{val.inst_ru}}</vs-td>
                    <vs-td>
                        <vs-button color="warning" type="filled" icon-pack="feather" icon="icon-edit" @click="editInst(val);popup=true"></vs-button>
                    </vs-td>
                    </vs-tr>
                </template>
            </vs-table>
        </vx-card>
   </div>
</template>

<script>
import {mapGetters,mapActions} from 'vuex'
import InstForm from './inst-form'
export default {
    data: () => ({
        insts: {
            id: '',
            inst_uz:'',
            inst_uz2:'',
            inst_ru : ''
        },
        popup:false
    }),

    components: {
        InstForm
    },

    mounted() {
        this.fetchInst()
    },

    computed:{
        ...mapGetters(['inst'])
    },

    methods:{
        ...mapActions(['fetchInst']),


        editInst(val) {
            Object.assign(this.insts,val);
        },
        updateInst() {
            this.$store.dispatch('editInst',this.insts)
             .then(() => {
                 this.popup = false;
             })
        }
    }
}
</script>

<style>

</style>
