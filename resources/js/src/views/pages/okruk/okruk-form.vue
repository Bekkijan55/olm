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
      <vs-popup class="holamundo" title="Add Okrug" :active.sync="popup">
       <div class="vx-col w-full mb-base">
            <form @submit.prevent ="storeOkrug">
         <div class="vx-row">
            <div class="vx-col sm:w-1/1 w-full mb-2">
              <vs-input
                class="w-full"
                v-validate="'required'"
                label="Okrug"
                placeholder="Okrug"
                name="Okrug"
                v-model="okrug.okrug_uz"
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
                v-model="okrug.okrug_uz2"
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
                v-model="okrug.okrug_ru"
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
</div>
</template>

<script>
export default {
    data: () => ({
        okrug: {            
            okrug_uz:'',
            okrug_uz2:'',
            okrug_ru:''
        },
        popup:false
    }),

    methods:{

        storeOkrug() {
           this.$validator.validateAll().then(result => {
        if (result) {
            this.$store.dispatch('addOkrug',this.okrug)
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
