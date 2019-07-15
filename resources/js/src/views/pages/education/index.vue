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
    <edu-form></edu-form>
    
        <vx-card>
            <vs-table :data="edu">
                <template slot="thead">
                    <vs-th>ID</vs-th>
                    <vs-th>Ta'lim</vs-th>
                    <vs-th>Образование</vs-th>
                    <vs-th>Education</vs-th>   
                    <vs-th>Action</vs-th>                 
                </template>
                <template slot-scope="{data}">
                    <vs-tr v-for="val in data" :key="val.id">
                    <vs-td>{{val.id}}</vs-td>
                    <vs-td>{{val.edu_uz}}</vs-td>
                    <vs-td>{{val.edu_uz2}}</vs-td>
                    <vs-td>{{val.edu_ru}}</vs-td>
                    <vs-td>
                        <vs-button color="warning" type="filled" icon-pack="feather" icon="icon-edit"></vs-button>
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
    ...mapActions(['fetchEdu'])
}
}
</script>

<style>

</style>
