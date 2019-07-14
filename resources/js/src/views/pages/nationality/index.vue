<template>
    <div>
           <!-- <vx-card class="mb-2">
      <vs-row vs-type="flex" vs-justify="flex-end">
        <div class="bx-row">
          <vs-button
            color="primary"
            type="filled"
            size="medium"
            icon-pack="feather"
            icon="icon-plus" 
            @click="popupActive = true"          
          >Add</vs-button>
        </div>
      </vs-row>
    </vx-card> -->
    <add-form></add-form>

      <vs-popup class="holamundo" title="Add Nation" :active.sync="popupedit">
       <div class="vx-col w-full mb-base">
            <form @submit.prevent ="changeNation">
         <div class="vx-row">
            <div class="vx-col sm:w-1/1 w-full mb-2">
              <vs-input
                class="w-full"
                v-validate="'required'"
                label="Nation Uz"
                placeholder="Nation Uz"
                name="NationUz"
                v-model="nation.nation_uz"
              />
              <span class="text-danger text-sm">{{errors.first('NationUz')}}</span>
            </div>
           
          </div>
          <div class="vx-row">
                <div class="vx-col sm:w-1/1 w-full mb-2">
              <vs-input
                class="w-full"
                v-validate="'required'"
                label="Nation Uz2"
                placeholder="Nation Uz2"
                name="NationUz2"
                v-model="nation.nation_uz2"
              />
              <span class="text-danger text-sm">{{errors.first('NationsUz2')}}</span>
            </div>
          </div>
           <div class="vx-row">
            <div class="vx-col sm:w-1/1 w-full mb-2">
              <vs-input
                class="w-full"
                v-validate="'required'"
                label="Nations Ru"
                placeholder="Nations Ru"
                name="NationsRu"
                v-model="nation.nation_ru"
              />
              <span class="text-danger text-sm">{{errors.first('NationsRu')}}</span>
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
      <vx-card>
          <vs-table max-items="5" pagination :data="nations">
              <template slot="thead">
                  <vs-th>ID</vs-th>
                  <vs-th>Millat</vs-th>
                  <vs-th>Миллат</vs-th>
                  <vs-th>Национальность</vs-th>
                  <vs-th>Action</vs-th>
              </template>
              <template slot-scope="{data}">
                  <vs-tr :key="val.id" v-for="val in data" >
                      <vs-td>{{val.id}}</vs-td>
                      <vs-td>{{val.nation_uz}}</vs-td>
                      <vs-td>{{val.nation_uz2}}</vs-td>
                      <vs-td>{{val.nation_ru}}</vs-td>
                      <vs-td>
                          <vs-button color="warning" type="filled" icon-pack="feather" icon="icon-edit" @click="popupedit=true;editNations(val)"></vs-button>
                      </vs-td>
                  </vs-tr>
              </template>
          </vs-table>
      </vx-card>
    </div>
</template>

<script>
import {mapGetters, mapActions} from 'vuex'
import AddForm from './add-form'
import {updateNation} from '../../../../../api/nations'
export default {
    data: () => ({
      popupedit:false,
      nation:{
          id:'',
          nation_uz:'',
          nation_uz2:'',
          nation_ru: ''
      }
    }),
    components: {
        AddForm
    },
    computed: {
        ...mapGetters(['nations'])
    },

    mounted() {
        this.fetchNations()
    },

    methods: {        
        ...mapActions([
            'fetchNations',
        ]),

        editNations(val) {            
            Object.assign(this.nation,val);
           
        },
        changeNation() {
             updateNation(this.nation)
             .then(res => {
                 this.fetchNations();
                 this.popupedit = false;
             })
              .catch(err => console.log(err));
        }
        
    }
}
</script>

<style>

</style>
