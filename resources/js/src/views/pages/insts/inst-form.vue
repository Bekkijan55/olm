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
      <vs-popup class="holamundo" title="Add Institution" :active.sync="popup">
       <div class="vx-col w-full mb-base">
            <form @submit.prevent ="storeInst">
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
</div>
</template>

<script>
export default {
    data: () => ({
        insts: {            
            inst_uz:'',
            inst_uz2: '',
            inst_ru:''
        },
        popup: false
    }),

    methods:{
        storeInst() {
           this.$validator.validateAll().then(result => {
        if (result) {
            this.$store.dispatch('addInst',this.insts)
              .then(() => {
                  this.popup = false;
              })
        }
           })
        }
    }
}
</script>

<style>

</style>
