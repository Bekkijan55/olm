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
    <vs-popup class="holamundo" title="Add Party" :active.sync="popup">
      <div class="vx-col w-full mb-base">
        <form @submit.prevent="storeParty">
          <div class="vx-row">
            <div class="vx-col sm:w-1/1 w-full mb-2">
              <vs-input
                class="w-full"
                v-validate="'required'"
                label="Ta'lim"
                placeholder="Ta'lim"
                name="Ta'lim"
                v-model="party.party_uz"
              />
              <span class="text-danger text-sm">{{errors.first('Ta\'lim')}}</span>
            </div>
          </div>
          <div class="vx-row">
            <div class="vx-col sm:w-1/1 w-full mb-2">
              <vs-input
                class="w-full"
                v-validate="'required'"
                label="Талим"
                placeholder="Талим"
                name="Талим"
                v-model="party.party_uz2"
              />
              <span class="text-danger text-sm">{{errors.first('Талим')}}</span>
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
                v-model="party.party_ru"
              />
              <span class="text-danger text-sm">{{errors.first('Образование')}}</span>
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
  </div>
</template>

<script>
import { mapActions } from "vuex";
export default {
  data: () => ({
    party: {
      party_uz: "",
      party_uz2: "",
      party_ru: ""
    },
    popup: false
  }),

  methods: {
    storeParty() {
      this.$store.dispatch("addParty", this.party)
      .then(() => {
        this.popup = false;
      })
    }
  }
};
</script>

<style>
</style>
