<template>
    <div>       
        <inst-form></inst-form>
        <vx-card>
            <vs-table :data="inst">
                <template slot="thead">
                    <vs-th>ID</vs-th>
                    <vs-th>Institut</vs-th>
                    <vs-th>заведения</vs-th>
                    <vs-th>Institution</vs-th>   
                    <vs-th>Action</vs-th>                 
                </template>
                <template slot-scope="{data}">
                    <vs-tr v-for="val in data" :key="val.id">
                    <vs-td>{{val.id}}</vs-td>
                    <vs-td>{{val.inst_uz}}</vs-td>
                    <vs-td>{{val.inst_ru}}</vs-td>
                    <vs-td>{{val.inst_en}}</vs-td>
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
import InstForm from './inst-form'
export default {
    data: () => ({

    }),

    components: {
        InstForm
    },

    computed:{
        ...mapGetters(['inst'])
    }
}
</script>

<style>

</style>
