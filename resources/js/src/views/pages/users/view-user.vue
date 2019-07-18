<template>
    <vx-card>
       <vs-row class="mt-6">
           <vs-col vs-offset="3" vs-w="6" vs-justify="center" vs-type="flex" vs-align="center" >
               <h3>{{users.lastname}} {{users.name}} {{users.surname}} </h3>              
           </vs-col>
       </vs-row>
       <vs-row class="mt-10">
           <vs-col vs-w="8" vs-offset="1" vs-type="flex" >
               <vs-row class="mt-6">
             <div class="vx-col w-sm:1/2 w-full mb-8" >
              <h5><strong>Дата рождения:</strong></h5> 
               <h5>{{users.birthdate}}</h5>                
           </div>
           <div class="vx-col w-sm:1/2 w-full mb-8" vs-offset="1" >
              <h5><strong>Национальность:</strong></h5> 
               <h5>{{users.profile.nation.nation_ru}}</h5>                
           </div>
           <div class="vx-col w-sm:1/2 w-full mb-8" vs-offset="1" >
                        <h5><strong>Округ</strong></h5>
                        <h5>{{users.profile.okrug.okrug_ru}}</h5>
                   </div>
               </vs-row>

               <vs-row class="mt-6">
                   <div class="vx-col w-sm:1/2 mb-8">
                       <h5><strong>Место рождения:</strong></h5>
                       <h5>{{users.profile.birthplace}}</h5>
                   </div>

                   <div class="vx-col w-sm:1/2 mb-8">
                       <h5><strong>Партийность:</strong></h5>
                       <h5>{{users.profile.party.party_ru}}</h5>
                   </div>
                   <div class="vx-col w-sm:1/2 mb-8">
                       <h5><strong>Название учебного заведения:</strong></h5>
                       <h5>N/A</h5>
                   </div>
                   
               </vs-row>

           </vs-col>
           <vs-col vs-w="3" vs-type="flex" >
               <img :src="users.photo" width="200" height="200" >
           </vs-col>
         
       </vs-row>

        <vs-row class="mt-6">
            <vs-col vs-w="5" vs-offset="1" class="mb-8" >
                 <h5><strong>Образование:</strong></h5>
                <h5>{{users.profile.edu.edu_ru}}</h5>
            </vs-col>
            <vs-col vs-w="6" vs-offset="1" class="mb-8">
                <h5><strong>Адрес по прописке:</strong></h5>
                <h5>{{users.profile.regis_address}}</h5>
            </vs-col>
        </vs-row>
        <vs-row class="mb-8">
            <vs-col vs-w="11" vs-offset="1">
                <h5><strong>Фактический адрес:</strong></h5>
                <h5>{{users.profile.actual_address}}</h5>
            </vs-col>
        </vs-row>

        <vs-row class="mb-8">
            <vs-col vs-w="3" vs-offset="1" >
                <h5><strong>Рабочий телефон:</strong></h5>
                <h5>{{users.profile.work_phone}}</h5>
            </vs-col>
            <vs-col vs-w="4">
                <h5><strong>Домашний телефон:</strong></h5>
                <h5>{{users.profile.phone}}</h5>
            </vs-col>
            <vs-col vs-w="4">
                <h5><strong>Мобильный телефон:</strong></h5>
                <h5>{{users.profile.mob_phone}}</h5>
            </vs-col>
        </vs-row>

    </vx-card>
</template>

<script>
import { viewUsers } from "../../../../../api/users";
export default {
    data:() => ({
        pageId:{
            id:''
        },
        users:{
            name:'',
            lastname:'',
            surname:'',

        }
    }),

    mounted() {
        this.pageId.id = this.$route.params.id;
        this.fetchUsers()
    },

    methods:{
        fetchUsers() {
            viewUsers(this.pageId)
              .then(res => {
                  Object.assign(this.users,res.data.data);
                  console.log(this.users.name)
              })
               .catch(err => console.log(err))
        }
    }
}
</script>

<style>

</style>
