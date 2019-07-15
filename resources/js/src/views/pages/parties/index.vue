<template>
   <div>
       <part-form></part-form>
        <vx-card>
            <vs-table :data="parties">
                <template slot="thead">
                    <vs-th>ID</vs-th>
                    <vs-th>Partiya</vs-th>
                    <vs-th>Партия</vs-th>
                    <vs-th>Party</vs-th>   
                    <vs-th>Action</vs-th>                 
                </template>
                <template slot-scope="{data}">
                    <vs-tr v-for="val in data" :key="val.id">
                    <vs-td>{{val.id}}</vs-td>
                    <vs-td>{{val.party_uz}}</vs-td>
                    <vs-td>{{val.party_ru}}</vs-td>
                    <vs-td>{{val.party_en}}</vs-td>
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
import {mapGetters} from 'vuex'
import PartForm from './part-form.vue'
export default {
    data:() => ({

    }),
    components:{
        PartForm
    },
    computed:{
        ...mapGetters(['parties'])
    }
}
</script>

<style>

</style>
