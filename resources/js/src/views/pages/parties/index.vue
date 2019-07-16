<template>
  <div>

     <vs-popup class="holamundo" title="Add Party" :active.sync="popup">
      <div class="vx-col w-full mb-base">
        <form @submit.prevent="changeParty">
          <div class="vx-row">
            <div class="vx-col sm:w-1/1 w-full mb-2">
              <vs-input
                class="w-full"
                v-validate="'required'"
                label="Partiya"
                placeholder="Partiya"
                name="Partiya"
                v-model="partys.party_uz"
              />
              <span class="text-danger text-sm">{{errors.first('Partiya')}}</span>
            </div>
          </div>
          <div class="vx-row">
            <div class="vx-col sm:w-1/1 w-full mb-2">
              <vs-input
                class="w-full"
                v-validate="'required'"
                label="Партия"
                placeholder="Партия"
                name="Партия"
                v-model="partys.party_uz2"
              />
              <span class="text-danger text-sm">{{errors.first('Партия')}}</span>
            </div>
          </div>
          <div class="vx-row">
            <div class="vx-col sm:w-1/1 w-full mb-2">
              <vs-input
                class="w-full"
                v-validate="'required'"
                label="Партия"
                placeholder="Партия"
                name="Партия"
                v-model="partys.party_ru"
              />
              <span class="text-danger text-sm">{{errors.first('Партия')}}</span>
            </div>
          </div>

          <vs-row vs-type="flex" vs-justify="flex-end">
            <div class="bx-row">
              <vs-button color="success" type="filled" size="medium">Save</vs-button>
            </div>
          </vs-row>
        </form>
      </div>
    </vs-popup>

    <part-form></part-form>
    <vx-card>
      <vs-table :data="parties">
        <template slot="thead">
          <vs-th>ID</vs-th>
          <vs-th>Partiya</vs-th>
          <vs-th>Партия</vs-th>
          <vs-th>Партия</vs-th>
          <vs-th>Action</vs-th>
        </template>
        <template slot-scope="{data}">
          <vs-tr v-for="val in data" :key="val.id">
            <vs-td>{{val.id}}</vs-td>
            <vs-td>{{val.party_uz}}</vs-td>
            <vs-td>{{val.party_uz2}}</vs-td>
            <vs-td>{{val.party_ru}}</vs-td>
            <vs-td>
              <vs-button color="warning" type="filled" icon-pack="feather" icon="icon-edit" @click="editParty(val);popup=true"></vs-button>
            </vs-td>
          </vs-tr>
        </template>
      </vs-table>
    </vx-card>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
import PartForm from "./part-form.vue";
export default {
  data: () => ({
    partys:{
      party_uz:'',
      party_uz2:'',
      party_ru:''
    },
    popup: false
  }),
  components: {
    PartForm
  },
  mounted() {
    this.fetchParties();
  },
  computed: {
    ...mapGetters(["parties"])
  },
  methods: {
    ...mapActions(["fetchParties"]),


    changeParty() {
      this.$store.dispatch('editParty',this.partys)
       .then(() => {
         this.popup = false;
       })
    },

    editParty(val) {
      Object.assign(this.partys,val);
    }
  }
};
</script>

<style>
</style>
