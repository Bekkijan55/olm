<template>
     <div>       
        <okruk-form></okruk-form>
        <vx-card>
            <vs-table :data="okrug">
                <template slot="thead">
                    <vs-th>ID</vs-th>
                    <vs-th>Okrug</vs-th>
                    <vs-th>Округ</vs-th>
                    <vs-th>Округ</vs-th>   
                    <vs-th>Action</vs-th>                 
                </template>
                <template slot-scope="{data}">
                    <vs-tr v-for="val in data" :key="val.id">
                    <vs-td>{{val.id}}</vs-td>
                    <vs-td>{{val.okrug_uz}}</vs-td>
                    <vs-td>{{val.okrug_uz2}}</vs-td>
                    <vs-td>{{val.okrug_ru}}</vs-td>
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
import OkrukForm from './okruk-form'
export default {
    data: () => ({

    }),

    components:{
        OkrukForm
    },

    computed:{
        ...mapGetters(['okrug'])
    }
}
</script>

<style>

</style>
