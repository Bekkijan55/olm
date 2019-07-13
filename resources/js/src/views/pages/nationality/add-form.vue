<template>
<div>
         <vx-card class="mb-2">
      <vs-row vs-type="flex" vs-justify="flex-end">
        <div class="bx-row">
          <vs-button
            color="primary"
            type="filled"
            size="medium"
            icon-pack="feather"
            icon="icon-plus" 
            @click="popup = true"          
          >Add</vs-button>
        </div>
      </vs-row>
    </vx-card>
      <vs-popup class="holamundo" title="Add Nation" :active.sync="popup">
       <div class="vx-col w-full mb-base">
            <form @submit.prevent ="storeNation">
         <div class="vx-row">
            <div class="vx-col sm:w-1/1 w-full mb-2">
              <vs-input
                class="w-full"
                v-validate="'required'"
                label="Nation Uz"
                placeholder="Nation Uz"
                name="NationUz"
                v-model="nations.nation_uz"
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
                v-model="nations.nation_uz2"
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
                v-model="nations.nation_ru"
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
</div>
   
</template>

<script>
import {mapGetters, mapMutations} from 'vuex'
import { storeNations } from "../../../../../api/nations";
export default {
    data: () => ({
       popup:false,
       nations: {
           nation_uz:'',
           nation_uz2:'',
           nation_ru:''
       }
    }),

    

    methods: {        
        storeNation() {
              storeNations(this.nations)
             .then(res=> {
                 console.log(res.data.data);
                this.$store.commit('addNation',res.data.data);
                this.popup = false;
             })
              .catch(err => console.log(err));
        }
        
    }
}
</script>

<style>

</style>
