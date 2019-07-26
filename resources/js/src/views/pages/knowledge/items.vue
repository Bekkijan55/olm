<template>
     <div id="knowledge-base-article">
        <div class="vx-row">
            <div class="vx-col w-full md:w-2/5 lg:w-1/4">
                <vx-card title="Related Questions">
                    <ul class="bordered-items">
                        <li v-if="que.id != pageId.item_id" v-for="que in items" :key="que.id" class="py-2"><router-link :to="{name:'catItems',params:{id:que.id,cat_id:que.cat_id}}">{{ que.title_ru }}</router-link></li>
                    </ul>
                </vx-card>
            </div>
            <div class="vx-col w-full md:w-3/5 lg:w-3/4 mt-12 md:mt-0">
                <vx-card>
                    <div class="article-title mb-6">
                        <vs-row>
                            <vs-col vs-w="10" vs-type="flex" >
                                <h1>{{ item.title_ru }}</h1>
                            </vs-col>
                            <vs-col vs-w="2" vs-type="flex" vs-justify="flex-end" >
                                <router-link :to="{name:'editItem',params:{id:pageId.item_id}}" >
                                <vs-button color="success" size="medium" >Edit</vs-button>
                                </router-link>
                            </vs-col>
                        </vs-row>
                        
                        <p class="mt-1">Last updated on <span>{{ item.created_at | date(true) }}</span></p>
                    </div>
                    <p>{{item.body_ru}}</p>
                    <p>Pastry jelly chocolate bar caramels fruitcake gummies marshmallow lemon drops. Powder cupcake topping muffin carrot cake croissant soufflé sugar plum sweet roll. Cotton candy ice cream gummies biscuit bonbon biscuit. Icing pastry bonbon. Sweet roll chocolate cake liquorice jelly beans caramels jelly cookie caramels. Pastry candy canes cake powder lollipop tootsie roll sugar plum. Cake cotton candy dragée danish. Muffin croissant sweet roll candy wafer marzipan cheesecake. Carrot cake toffee gummi bears gingerbread donut biscuit. Donut chupa chups oat cake cheesecake apple pie gummies marzipan icing cake. Macaroon jelly beans gummi bears carrot cake tiramisu liquorice. Sweet tootsie roll cookie marzipan brownie icing cookie jelly tart. Lollipop cookie tootsie roll candy canes.</p>
                    <!-- <img :src="require(`@/assets/images/pages/${article.img}`)" alt="article-img" class="responsive my-3 rounded" /> -->
                    <p class="mb-6">Candy canes oat cake biscuit halvah ice cream. Marshmallow icing topping toffee caramels dessert carrot cake. Liquorice soufflé brownie sugar plum dessert cotton candy. Cupcake halvah topping oat cake soufflé pastry dragée pudding cotton candy.</p>
                    <h5 class="mb-2">Topics:</h5>
                    <!-- <vx-list :list="article.topics"></vx-list> -->
                    <p class="mt-4">Chocolate cake powder I love jelly beans lemon drops candy fruitcake. Sesame snaps sugar plum chocolate candy canes muffin. Wafer pastry topping croissant pudding dessert I love. Bonbon apple pie fruitcake candy canes I love. Lollipop sweet gingerbread I love I love dessert. I love halvah marshmallow pie jelly beans macaroon candy. Bonbon ice cream lollipop pie fruitcake oat cake. Topping marshmallow I love sesame snaps dragée. I love sesame snaps jelly. Chocolate sesame snaps jelly I love I love powder jelly-o.</p>

                    <template slot="footer">
                        <div class="flex items-center justify-between">
                            <router-link :to="{name:'catItems',params:{id:pageId.item_id !=1 ? pageId.item_id-1 : 1,cat_id:pageId.cat_id}}" class="flex items-center"><feather-icon icon="ChevronsLeftIcon" class="mr-2" svgClasses="h-4 w-4"></feather-icon> Previous Article</router-link>
                            <router-link to="/pages/knowledge-base/category/question" class="flex items-center">Next Article <feather-icon icon="ChevronsRightIcon" class="ml-2" svgClasses="h-4 w-4"></feather-icon></router-link>
                        </div>
                    </template>
                </vx-card>
            </div>
        </div>
    </div>
</template>

<script>
import {mapActions, mapGetters} from 'vuex'
export default {
    data:() => ({
        pageId:{
            item_id:'',
            cat_id:''
        }
    }),

    mounted() {
        this.pageId.item_id = this.$route.params.id,
        this.pageId.cat_id = this.$route.params.cat_id,
        this.getItem(this.pageId);
        
    },
    watch: {
        '$route':function(refreshPage) {
            console.log(refreshPage.params)
            this.pageId.item_id = refreshPage.params.id;
            this.pageId.cat_id = refreshPage.params.cat_id;
            this.getItem(this.pageId);
        }
    },
    computed:{
        ...mapGetters(['item','items'])
    },

    methods:{
        ...mapActions(['getItem']),
        
    }
}
</script>

<style>

</style>
