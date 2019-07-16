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
      <vs-popup class="holamundo" title="Add Education" :active.sync="popup">
       <div class="vx-col w-full mb-base">
            <form @submit.prevent ="storeEdu">
         <div class="vx-row">
            <div class="vx-col sm:w-1/1 w-full mb-2">
              <vs-input
                class="w-full"
                v-validate="'required'"
                label="Ta'lim"
                placeholder="Ta'lim"
                name="Ta'lim"
                v-model="edu.edu_uz"
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
                v-model="edu.edu_uz2"
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
                v-model="edu.edu_ru"
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
</div>
</template>

<script>
export default {
    data: () => ({
        edu:{            
            edu_uz:'',
            edu_uz2:'',
            edu_ru:''
        },
        popup: false
    }),

    methods: {
        storeEdu() {
           this.$validator.validateAll().then(result => {
        if (result) {
            this.$store.dispatch('addEdu',this.edu).then(() => {
                this.popup=false
            })
        }
           });

        }
    }
}
</script>

<style>

</style>
