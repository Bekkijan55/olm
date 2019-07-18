<template>
  <div>
    <vs-popup classContent="popup-example" title="Add User" :active.sync="popupActive2">
      <div class="vx-col w-full mb-base">
        <form @submit.prevent="addUser">
          <div class="vx-row">
            <div class="vx-col sm:w-1/2 w-full mb-2">
              <vs-input
                class="w-full"
                v-validate="'required'"
                label="Name"
                placeholder="Name"
                name="Name"
                v-model="user.name"
              />
              <span class="text-danger text-sm">{{errors.first('Name')}}</span>
            </div>
            <div class="vx-col sm:w-1/2 w-full mb-2">
              <vs-input
                class="w-full"
                v-validate="'required'"
                label="Lastname"
                placeholder="Lastname"
                name="Lastname"
                v-model="user.lastname"
              />
              <span class="text-danger text-sm">{{errors.first('Lastname')}}</span>
            </div>
          </div>    
             <div class="vx-row">
            <div class="vx-col sm:w-1/2 w-full mb-2">
              <vs-input
                class="w-full"
                v-validate="'required'"
                label="Surname"
                placeholder="Surname"
                name="Surname"
                v-model="user.surname"
              />
              <span class="text-danger text-sm">{{errors.first('Surname')}}</span>
            </div>
             <div class="vx-col sm:w-1/2 w-full mb-2">
              <vs-input
                class="w-full"
                v-validate="'required|email'"
                label="Email"
                placeholder="Email"
                v-model="user.email"
                name="email"
              />
              <span class="text-danger text-sm">{{errors.first('email')}}</span>
            </div>
          </div>
          
          <div class="vx-row">
            <div class="vx-col sm:w-1/2 w-full mb-2">
              <vs-input
                class="w-full"
                label="Password"
                placeholder="Password"
                type="password"
                v-model="user.password"
                name="Password"
              />
              <!-- <span class="text-danger text-sm">{{errors.first('Password')}}</span> -->
            </div>
            <div class="vx-col sm:w-1/2 w-full mb-2 mt-6">
              <v-select multiple label="role_name" :options="roles" v-model="user.selectedRole"></v-select>
            </div>
          </div>
          <div class="vx-row">
           <div class="vx-col sm:w-1/2 w-full mb-2 mt-6">
               <datepicker placeholder="Select Date" v-model="user.birthdate"></datepicker>
            </div>
            <div class="vx-col sm:w-1/2 w-full mb-2 mt-8">
               <input type="file" @change="getPhoto">
            </div>

          </div>
         

          <div class="vx-row">
            <div class="vx-col w-full">
              <vs-row vs-type="flex" vs-justify="flex-end">
                <div class="bx-row mb-10">
                  <vs-button class="mr-3 mb-2">Add</vs-button>
                </div>
              </vs-row>
            </div>
          </div>
        </form>
      </div>
    </vs-popup>

    <vx-card class="mb-2">
      <vs-row vs-type="flex" vs-justify="flex-end">
        <div class="bx-row">
          <vs-button
            color="primary"
            type="filled"
            size="medium"
            icon-pack="feather"
            icon="icon-plus"
            @click="popupActive2=true;edit=false;clearData()"
          >Add</vs-button>
        </div>
      </vs-row>
    </vx-card>
    <vx-card>
      <vs-table :data="users">
        <template slot="thead">
          <vs-th>ID</vs-th>
          <vs-th>Foto</vs-th>
          <vs-th>Name</vs-th>
          <vs-th>Email</vs-th>
          <vs-th>Roles</vs-th>
          <vs-th>created_at</vs-th>
          <vs-th>Action</vs-th>
         
        </template>
        <template slot-scope="{data}">
          <vs-tr v-for="(val,index) in data" :key="index">
            <vs-td>{{val.id}}</vs-td>
            <vs-td><img v-if="val.photo" :src="val.photo" width="60" height="60" alt=""></vs-td>
            <vs-td>{{val.name}}</vs-td>
            <vs-td>{{val.email}}</vs-td>
            <vs-td>
              <vs-chip color="success" v-for="item in val.roles" :key="item.id">{{item.role_name}}</vs-chip>
            </vs-td>
            <vs-td>{{val.created_at}}</vs-td>
            <vs-td>
              <div class="vx-row">
                <div class="vx-col w-1/2">
              <router-link :to="{name:'editUser', params:{id:val.id}}">
              <vs-button
                color="warning"
                icon-pack="feather"
                icon="icon-edit"
                type="filled"               
              ></vs-button>
              </router-link>   
              </div> 
              <div class="vx-col w-1/2">
              <router-link :to="{name:'viewUser',params:{id:val.id}}" >
                  <vs-button color="primary" type="filled" icon-pack="feather" icon="icon-eye" ></vs-button>
              </router-link>
                </div>
              </div>  
                    
            </vs-td>
            
          </vs-tr>
        </template>
      </vs-table>
    </vx-card>
  </div>
</template>

<script>
import { getUsers, newUser, updateUser } from "../../../../../api/users";
import vSelect from "vue-select";
import Datepicker from 'vuejs-datepicker';
export default {
  data() {
    return {
      users: [],
      roles: [],
      user: {
        id: "",
        name: "",
        lastname:'',
        surname:'',
        email: "",
        password: "",
        role: "",
        selectedRole: [],
        birthdate:'',
        photo:null
      },
      edit: false,
      popupActive2: false
    };
  },

  mounted() {
    this.fetchUsers();
  },
  components: {
    "v-select": vSelect,
    Datepicker
  },

  methods: {
    fetchUsers() {
      getUsers()
        .then(res => {
          this.users = res.data[0];
          this.roles = res.data[1];
        })
        .catch(err => console.log(err));
    },
    getPhoto(e) {
          
          var filereader = new FileReader();
          filereader.readAsDataURL(e.target.files[0]);

          filereader.onload = e => {
              this.user.photo = e.target.result;
          }
      },
    addUser() {
      console.log(this.selectedRole);
      // this.user.role = this.selectedRole.id;
      this.$validator.validateAll().then(result => {
        if (result) {
          if (this.edit === false) {
            newUser(this.user)
              .then(res => {
                this.users.unshift(res.data.data);
                this.popupActive2 = false;
              })
              .catch(err => {
                console.log(err);
              });
          } else {
            updateUser(this.user)
              .then(res => {
                this.fetchUsers();
                this.popupActive2 = false;
              })
              .catch(err => {
                console.log(err);
              });
          }
        }
      });
    },

    updateUser(v) {
      this.edit = true;
      // Object.assign(this.user, v);
      // console.log(v);
      this.user.id = v.id;
      this.user.name = v.name;
      this.user.email = v.email;
      this.user.password = v.password ? v.password : null;
      this.user.selectedRole = v.roles;
      console.log(this.user);
    },
    clearData() {
      this.user.id = "";
      this.user.name = "";
      this.user.email = "";
      this.user.password = "";
      this.user.selectedRole = [];
      console.log(this.user);
    }
  }
};
</script>

<style>
</style>
