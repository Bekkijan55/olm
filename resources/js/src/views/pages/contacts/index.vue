<template>
    <div>
    <vs-popup class="holamundo" :title="edit ? editing : add" :active.sync="popupActive">
        <div class="vx-col w-full mb-base">
            <form @submit.prevent ="storeContact">
         <div class="vx-row">
            <div class="vx-col sm:w-1/2 w-full mb-2">
              <vs-input
                class="w-full"
                v-validate="'required'"
                label="Firstname"
                placeholder="Firstname"
                name="Firstname"
                v-model="contact.firstname"
              />
              <span class="text-danger text-sm">{{errors.first('Firstname')}}</span>
            </div>
             <div class="vx-col sm:w-1/2 w-full mb-2">
              <vs-input
                class="w-full"
                v-validate="'required'"
                label="Lastname"
                placeholder="Lastname"
                name="Lastname"
                v-model="contact.lastname"
              />
              <span class="text-danger text-sm">{{errors.first('Lastname')}}</span>
            </div>
          </div>
           <div class="vx-row">
            <div class="vx-col sm:w-1/2 w-full mb-2">
              <vs-input
                class="w-full"
                v-validate="'required'"
                label="Middlename"
                placeholder="Middlename"
                name="Middlename"
                v-model="contact.middlename"
              />
              <span class="text-danger text-sm">{{errors.first('Middlename')}}</span>
            </div>
          <div class="vx-col sm:w-1/2 w-full mb-2 mt-6">
                <datepicker placeholder="Select Date" v-model="contact.date"></datepicker>
              </div>
          </div>
           <div class="vx-row">
            <div class="vx-col sm:w-1/2 w-full mb-2">
              <vs-input
                class="w-full"
                v-validate="'required'"
                label="Mobile Number"
                placeholder="MobileNumber"
                name="Mobile Number"
                v-model="contact.mobnum"
              />
              <span class="text-danger text-sm">{{errors.first('Mobile Number')}}</span>
            </div>
             <div class="vx-col sm:w-1/2 w-full mb-2">
              <vs-input
                class="w-full"
                v-validate="'required'"
                label="Work Number"
                placeholder="WorkNumber"
                name="Work Number"
                v-model="contact.worknum"
              />
              <span class="text-danger text-sm">{{errors.first('Work Number')}}</span>
            </div>
          </div>
          <div class="vx-row">
                 <div class="vx-col sm:w-1/2 w-full mb-2">
              <vs-input
                class="w-full"
                v-validate="'required'"
                label="Email"
                placeholder="Email"
                name="Email"
                v-model="contact.email"
              />
              <span class="text-danger text-sm">{{errors.first('Email')}}</span>
            </div>
              <div class="vx-col sm:w-1/2 w-full mb-2">
              <label for="Gender" class="mb-4">Gender</label>
                <ul class="centerx">
                     <li>
                        <vs-radio v-model="contact.gender" vs-value="male">Male</vs-radio>
                    </li>
                    <li>
                        <vs-radio v-model="contact.gender" vs-value="female">Female</vs-radio>
                    </li>
                </ul>
              </div>                
          </div>
          <div class="vx-row">
              <div class="vx-col sm:w-1/2 w-full mb-2 mt-2">
              <label for="photo" class="mb-4">Upload Photo </label>
                <input type="file" @change='getPhoto' >
              </div>
          </div>
           <div class="vx-row">
              <div class="vx-col sm:w-1/1 w-full mb-2 mt-4">
                <vs-textarea label="Description" v-model="contact.desc" />
              </div>
          </div>
           <vs-row vs-type="flex" vs-justify="flex-end">
        <div class="bx-row">
          <vs-button
            color="success"
            type="filled"
            size="medium"
                                  
          >Save</vs-button>
        </div>
      </vs-row>
          </form>
        </div>
    </vs-popup>

        <vx-card class="mb-2" v-if="hasPermission(addingRoles)">
      <vs-row vs-type="flex" vs-justify="flex-end">
        <div class="bx-row">
          <vs-button
            color="primary"
            type="filled"
            size="medium"
            icon-pack="feather"
            icon="icon-plus" 
            @click="popupActive = true"          
          >Add</vs-button>
        </div>
      </vs-row>
    </vx-card>
    <vx-card>
        <vs-table :data="contacts">
            <template slot="thead">
                <vs-th>ID</vs-th>
                <vs-th>Foto</vs-th>
                <vs-th>FIO</vs-th>
                <vs-th>Gender</vs-th>
                <vs-th>Birthday</vs-th>
                <vs-th>Mob.number</vs-th>
                <vs-th>Action</vs-th>
            </template>
            <template slot-scope="{data}">
                <vs-tr v-for="(val,index) in data" :key="index">
                    <vs-td>{{val.id}}</vs-td>
                    <vs-td>
                        <img v-if="val.photo" :src="val.photo" width="80" height="80">
                    </vs-td>
                    <vs-td>{{val.firstname}}</vs-td>
                    <vs-td v-if="val.gender == 1">Male</vs-td>
                    <vs-td v-else>Female</vs-td>
                    <vs-td>{{val.birthday}}</vs-td>
                    <vs-td>{{val.mobnum}}</vs-td>
                    <vs-td>
                        <vs-button v-if="hasPermission(editingRoles)" color="warning" type="filled" icon-pack="feather" icon="icon-edit" @click="updateContact(val);popupActive=true" ></vs-button>
                    </vs-td>
                </vs-tr>
            </template>
        </vs-table>
    </vx-card>
    </div>
</template>

<script>
import Datepicker from 'vuejs-datepicker';
import { addContact, getContacts, editContact } from "../../../../../api/contact";
export default {    
    data() {
        return {
            popupActive: false,
            contacts: [],
            addingRoles:['Manager'],
            editingRoles:['Admin'],
            contact:{
                firstname:'',
                lastname:'',
                middlename:'',
                email:'',
                mobnum:'',
                worknum:'',
                gender:'male',
                date:null,
                photo:null,
                desc:''
            },
            edit:false,
            add: 'Add Contact',
            editing: 'Edit Contact'
        }
    },
    components: {
    Datepicker
  },
  mounted() {
      this.fetchContacts()
  },
  computed:{
      permissionRoles:{
          get() {
              return this.$store.getters.roles;
          },
          set() {}
      }
  },

  methods : {
      getPhoto(e) {
          
          var filereader = new FileReader();
          filereader.readAsDataURL(e.target.files[0]);

          filereader.onload = e => {
              this.contact.photo = e.target.result;
          }
      },

      storeContact() {
            this.$validator.validateAll().then(result => {
        if (result) {
            if(this.edit ===false) {
          addContact(this.contact)
           .then(res => {
              
               this.contacts.unshift(res.data.data);
               this.popupActive = false;
           })
             .catch(err => console.log(err))
        }
        else {
            editContact(this.contact)
             .then(res => {
                 
                 this.fetchContacts();
                 this.popupActive = false;
             })
              .catch(err => {
                  console.log(err)
              })
        }
        }
        }
            )},

     fetchContacts() {
         getContacts()
           .then(res => {
               this.contacts = res.data.data;
           })
             .catch(err => {
                 console.log(err);
             })
     },
     updateContact(v) {
         this.edit = true;
         Object.assign(this.contact,v)
         v.gender == 1 ? this.contact.gender='male' : this.contact.gender='female';
         this.contact.photo = null;
                  

     },
     hasPermission(data) {
         let roles = data;
         if(data.length == 0) {
             return true;
         }
         else{
             let Boolean=false;
             for(let item of this.permissionRoles) {
                 roles = roles.filter(val => {
                     if(item.role_name === val) {
                         Boolean = true;
                     }
                 });
             }
             return Boolean;
         }
        
     }
  }

}
</script>

<style>
.vdp-datepicker__calendar{
    width:250px !important;
}

</style>
