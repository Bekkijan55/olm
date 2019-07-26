<template>
    <div id="knowledge-base-page">
        <!-- JUMBOTRON -->
        <div class="knowledge-base-jumbotron">
            <div class="knowledge-base-jumbotron-content lg:p-32 md:p-24 sm:p-16 py-8 rounded-lg mb-base">
                <h1 class="mb-1 text-white">База знаний</h1>
                <p class="text-white">Раздел искусственного интеллекта, изучающий базы знаний и методы работы со знаниями.</p>
                <vs-input placeholder="Search Topic or Keyword" icon-pack="feather" icon="icon-search" size="large" class="w-full no-icon-border mt-6" />
            </div>
        </div>

        <!-- KNOWLEDGE BASE CARDS  -->
        <div class="vx-row">
                <div class="vx-col w-full md:w-1/3 sm:w-1/2 mb-base" v-for="item in kb" :key="item.id"  @click="$router.push('/knowledge/category/'+item.id)">
                    <vx-card class="text-center cursor-pointer">
                        <!-- <img :src="require(`@/assets/images/pages/${item.graphic}`)" alt="graphic" width="180" class="mx-auto mb-4"> -->
                        <h4 class="mb-2">{{ item.title_ru }}</h4>
                        <small>{{ item.desc_ru }}</small>
                    </vx-card>
                </div>
            </div>  
    </div>
</template>

<script>
import {mapActions, mapGetters} from "vuex"
export default {
     data() {
        return {           
            
        }
    },
    computed:{
        ...mapGetters(['kb'])
    },

    mounted() {
        this.fetchKnowledges()
    },
    methods:{
        ...mapActions(['fetchKnowledges'])
    }
    
}
</script>

<style>

.knowledge-base-jumbotron-content {
    /* background-image: url('../../../../../assets/images/pages/2knowledge-base-cover.jpg'); */
    background-size: cover;
}

</style>
