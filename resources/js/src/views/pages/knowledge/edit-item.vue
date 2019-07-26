<template>
    <vx-card title="Edit Item" >
        <form @submit.prevent="editingItem" >
        <div class="vx-row mb-base">
            <div class="vx-col sm:w-1/3">
                <vs-input label="Title Ru" class="w-full" v-validate="'required'" name="TitleRu" v-model="items.title_ru" />
                <span class="text-danger text-sm">{{errors.first('TitleRu')}}</span>
            </div>
            <div class="vx-col sm:w-1/3">
                <vs-input label="Title Uz" class="w-full" v-validate="'required'" name="TitleUz" v-model="items.title_uz" />
                <span class="text-danger text-sm">{{errors.first('TitleUz')}}</span>
            </div>
            <div class="vx-col sm:w-1/3">
                <vs-input label="Title Uz2" class="w-full" v-validate="'required'" name="TitleUz2" v-model="items.title_uz2" />
                <span class="text-danger text-sm">{{errors.first('TitleUz2')}}</span>
            </div>
        </div>
        <div class="vx-row mb-base">
            <div class="vx-col sm:w-1/3">
                <label for="BodyRu">Body Ru</label>
               <quill-editor v-model="items.body_ru"></quill-editor>
            </div>
            <div class="vx-col sm:w-1/3">
                <label for="BodyUz">Body Uz</label>
                <quill-editor v-model="items.body_uz"></quill-editor>
            </div>
            <div class="vx-col sm:w-1/3">
            <label for="Body Uz2">Body Uz2</label>
               <quill-editor v-model="items.body_uz2"></quill-editor>
            </div>
        </div>
        <div class="vx-row">
            <vs-col vs-w="12" vs-type="flex" vs-justify="flex-end" >
                <vs-button color="primary" type="filled" >Save</vs-button>
            </vs-col>
        </div>
        </form>
    </vx-card>
</template>

<script>
import {updateItem,editItem} from '../../../../../api/knowledge'
import 'quill/dist/quill.core.css'
import 'quill/dist/quill.snow.css'
import 'quill/dist/quill.bubble.css'

import { quillEditor } from 'vue-quill-editor'
import {mapActions,mapGetters} from 'vuex'
export default {
    data:() => ({
        pageId:{
            id:''
        },
        items:{
            id:'',
            cat_id:'',
            title_ru:'',
            title_uz:'',
            title_uz2:'',
            body_ru:'',
            body_uz:'',
            body_uz2:''

        }
    }),
    mounted() {
        this.pageId.id = this.$route.params.id;
        this.getItem()
        
    },
     components: {
    quillEditor,
  },
  methods:{
      getItem() {
          updateItem(this.pageId)
           .then(res => {
               Object.assign(this.items,res.data.data);
               console.log(this.items);
           })
            .catch(err => console.log(err))
      },

      editingItem() {
          editItem(this.items)
           .then(res => {
               this.getItem()
           })
            .catch(err => console.log(err))
      }
  },

  computed:{
   
  }
}
</script>

<style>

</style>
