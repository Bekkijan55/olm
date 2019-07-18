<template>
<div>
    <vx-card>
        <form @submit.prevent="addCreds">
        <div class="vx-row">
            <div class="vx-col sm:w-2/3 w-full mb-2">
            <vs-tabs>
                <vs-tab label="Uz">
                     <div class="vx-row">

             <div class="vx-col sm:w-1/2 w-full mb-2">
            <vs-input class="w-full" label="Ism" placeholder="Ism" v-model="userCreds.firstname_uz" ></vs-input>
        </div>
        <div class="vx-col sm:w-1/2 w-full mb-2">
            <vs-input class="w-full" label="Familiya" placeholder="Familiya" v-model="userCreds.lastname_uz" ></vs-input>
        </div>
        <div class="vx-col sm:w-1/2 w-full mb-2">
            <vs-input class="w-full" label="Otasini Ismi" placeholder="Otasini Ismi" v-model="userCreds.surname_uz" ></vs-input>
        </div>             
        
        </div>
                </vs-tab>
                <vs-tab label="Ru">
                   <div class="vx-row">
                       <div class="vx-col sm:w-1/2 w-full mb-2">
            <vs-input class="w-full" label="Имя" placeholder="Имя" v-model="userCreds.firstname_ru" ></vs-input>
        </div>
            
        <div class="vx-col sm:w-1/2 w-full mb-2">
            <vs-input class="w-full" label="Фамилия" placeholder="Фамилия" v-model="userCreds.lastname_ru" ></vs-input>
        </div>
         <div class="vx-col sm:w-1/2 w-full mb-2">
            <vs-input class="w-full" label="отчество" placeholder="отчество" v-model="userCreds.surname_ru" ></vs-input>
        </div>
        </div> 
                </vs-tab>
         <vs-tab label="kiril">
               <div class="vx-row">
                       <div class="vx-col sm:w-1/2 w-full mb-2">
            <vs-input class="w-full" label="Исм" placeholder="Исм" v-model="userCreds.firstname_uz2" ></vs-input>
        </div>
            
        <div class="vx-col sm:w-1/2 w-full mb-2">
            <vs-input class="w-full" label="Фамилия" placeholder="Фамилия" v-model="userCreds.lastname_uz2" ></vs-input>
        </div>
         <div class="vx-col sm:w-1/2 w-full mb-2">
            <vs-input class="w-full" label="Отасини исми" placeholder="Отасини исми" v-model="userCreds.surname_uz2" ></vs-input>
        </div>
        </div> 
                </vs-tab>
            </vs-tabs>
           
        
      
        <div class="vx-row">
            <div class="vx-col sm:w-1/2 w-full mb-2">
            <vs-input class="w-full" label="Email" placeholder="Email" v-model="userCreds.email" ></vs-input>
        </div>
        </div>
        <div class="vx-row">
              <div class="vx-col sm:w-1/2 w-full mb-2 mt-5">
        <label for="education">Education</label>
            <v-select v-model="eduo" :options="edus" label="edu_uz"></v-select>
        </div>
         <div class="vx-col sm:w-1/2 w-full mb-2 mt-5">
         <label for="party">Party</label>
            <v-select v-model="partyo" :options="parties" label="party_uz"></v-select>
        </div>
        </div>

        </div>
        <div class="vx-col sm:w-1/3 w-full mb-2 mt-4">
                <img v-if="userCreds.photo" :src="userCreds.photo" width="150" height="150" >
                <input type="file" @change="getPhoto" class="mt-4" >
            </div>
        </div>
   
    
    <div class="vx-row">
        <div class="vx-col sm:w-1/3 w-full mb-2 mt-5">
        <label for="okrug">Okrug</label>
            <v-select v-model="okrugo" :options="okrugs" label="okrug_uz"></v-select>
        </div>
        <div class="vx-col sm:w-1/3 w-full mb-2 mt-5">
        <label for="inst">Institution</label>
            <v-select multiple v-model="instsa" :options="inst" label="inst_uz"></v-select>
        </div>
        <div class="vx-col sm:w-1/3 w-full mb-2 mt-5">
         <label for="nation">Nation</label>
            <v-select v-model="nationo" :options="nations" label="nation_uz"></v-select>
        </div>
          
    </div>
    <div class="vx-row">
        <div class="vx-col sm:w-1/3 w-full mb-2">
            <vs-input class="w-full" label="Registered Address" placeholder="Registered Address" v-model="userCreds.registered_address" ></vs-input>
        </div>
        <div class="vx-col sm:w-1/3 w-full mb-2">
            <vs-input class="w-full" label="Actual Address" placeholder="Actual Address" v-model="userCreds.actual_address" ></vs-input>
        </div>
        <div class="vx-col sm:w-1/3 w-full mb-2">
            <vs-input class="w-full" label="Work Number" placeholder="Work Number" v-model="userCreds.work_phone" ></vs-input>
        </div>
    </div>
      <div class="vx-row">
        <div class="vx-col sm:w-1/3 w-full mb-2">
            <vs-input class="w-full" label="Phone" placeholder="Phone" v-model="userCreds.phone" ></vs-input>
        </div>
        <div class="vx-col sm:w-1/3 w-full mb-2">
            <vs-input class="w-full" label="Mobile Phone" placeholder="Mobile Phone" v-model="userCreds.mobile_phone" ></vs-input>
        </div>
       
         <div class="vx-col sm:w-1/3 w-full mb-2">
            <vs-input class="w-full" label="Birthplace" placeholder="Birthplace" v-model="userCreds.birthplace" ></vs-input>
        </div>
    </div>
    <div class="vx-row">
      <div class="vx-col sm:w-1/3 w-full mb-2">
         <label for="roles">Roles</label>
            <v-select multiple v-model="userCreds.roles" :options="role" label="role_name"></v-select>
        </div>
        <div class="vx-col sm:w-1/3 w-full mb-2">
         <label for="birthdate">Birthdate</label>
           <datepicker placeholder="Select Date" v-model="userCreds.birthdate"></datepicker>
        </div>
    <div class="vx-col sm:w-1/3 w-full mb-2 mt-6">
        <vs-row vs-type="flex" vs-justify="flex-end">
                <div class="bx-row mb-10">
                  <vs-button class="mr-3 mb-2" size="medium" color="success">Edit</vs-button>
                </div>
              </vs-row>
    </div>
         
    </div>
    </form>
    </vx-card>
    </div>
</template>

<script>
import {mapGetters, mapActions} from 'vuex'
import Datepicker from 'vuejs-datepicker';
import vSelect from 'vue-select'
import { userById, addUserCreds } from "../../../../../api/users";
import userCreds from '../../../store/user-creds';
export default {
data:() => ({
    pageId: {
        id: ''
    },

    userCreds: {
        firstname_uz:'',
        firstname_uz2:'',
        firstname_ru:'',
        lastname_uz: '',
        lastname_uz2:'',
        lastname_ru:'',
        surname_uz: '',
        surname_uz2:'',
        surname_ru:'',
        username_id:'',
        photo:null,       
        email:'',
        birthdate:'',
        roles:[],
        edu:'',
        party:'',
        okrug:'',
        insts: [],
        nation:'',
        birthplace:'',
        registered_address:'',
        actual_address:'',
        work_phone:'',
        phone:'',
        mobile_phone:'',
        prof_id:''
    },
    users:{},
    edus:[],
    parties:[],
    okrugs:[],
    nations:[],
    inst:[],
    role:[],
    eduo:{},
    partyo:{},
    nationo:{},
    okrugo:{},
    instsa:[],
    setPhoto:null
}),
computed: {
     
},
 components: {
    Datepicker,
    'v-select': vSelect,
  },

mounted() {
    this.pageId.id = this.$route.params.id;
    this.fetchById();
    // console.log(this.$store.getters.userId)
    // Object.assign(this.userCreds,userId)
},

methods: {
    fetchById() {
     
       userById(this.pageId)
         .then(res => {
             Object.assign(this.userCreds,res.data[0],res.data[0].profile,res.data[0].profile.username);
            console.log(this.userCreds)
             
             if(this.userCreds.profile != null) {
                 let prof = this.userCreds.profile;
                 this.userCreds.prof_id = prof.id;
                 this.eduo = prof.edu;
                 this.partyo = prof.party;
                 this.okrugo = prof.okrug;
                 this.nationo = prof.nation;
                 this.instsa = prof.insts;
                //  this.userCreds.actual_address = prof.actual_address;
                //  this.userCreds.birthplace = prof.birthplace;
                //  this.userCreds.mobile_phone = prof.mob_phone;
                //  this.userCreds.phone = prof.phone;
                //  this.userCreds.registered_address = prof.regis_address;
                //  this.userCreds.work_phone = prof.work_phone;
                //  this.userCreds.username_id = prof.username.id;
             }
             
             this.edus = res.data[2],
             this.nations = res.data[1],
             this.parties = res.data[3],
             this.okrugs = res.data[4],
             this.inst = res.data[5],
             this.role = res.data[6]
             
         })
          .catch(err => console.log(err))
    },

     getPhoto(e) {
          
          var filereader = new FileReader();
          filereader.readAsDataURL(e.target.files[0]);

          filereader.onload = e => {
              this.setphoto = e.target.result;
          }
      },

      addCreds() {
            // Object.seal(this.userCreds,this.userCreds.profile)
             this.userCreds.edu = this.eduo.id;
             this.userCreds.party = this.partyo.id;
             this.userCreds.okrug = this.okrugo.id;
             this.userCreds.nation = this.nationo.id;  
             this.userCreds.insts = [];
             this.instsa.forEach(val => {
                 this.userCreds.insts.push(val.id);
             });
             this.userCreds.photo = this.setPhoto;
             console.log(this.userCreds.insts)
          addUserCreds(this.userCreds)
            .then(res => {
                this.$vs.notify({ title: 'Success', 
                text: 'Successfully Edited', 
                color: 'success', position: 'top-center' });
                this.$router.push({name: "users"})
            })
             .catch(err => console.log(err))
        
      }
}

}
</script>

<style>

</style>
