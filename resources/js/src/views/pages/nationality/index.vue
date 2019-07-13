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
import AddForm from './add-form'
export default {
    data: () => ({
      
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
        ])
        
    }
}
</script>

<style>

</style>
