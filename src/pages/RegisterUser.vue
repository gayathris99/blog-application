<template>
   <div class="form-container">
       
        <q-form ref="registerForm" @submit.prevent="onRegister" class="input">
             <h4>Be a part of the BusyMonk Family! <br> Register Now</h4>

            <q-input
                 
                outlined 
                v-model="userDetails.firstName" 
                label="First Name*" 
                type="text"
                :rules="[
                    val => (val && val.length > 0) || 'First Name is required '
                ]"
             />

            <q-input
                 
                outlined 
                v-model="userDetails.lastName" 
                label="Last Name*" 
                type="text"
                :rules="[
                    val => (val && val.length > 0) || 'Last Name is required '
                ]"
             />
            
            <q-input
                 
                outlined 
                v-model="userDetails.email" 
                label="Email*" 
                type="email"
                :rules="[
                    val => (val && val.length > 0) || 'Email is required ',
                    val => (/\S+@\S+\.\S+/.test(val)) || 'Invalid Email'
                ]"
             />
            <q-input 

                outlined  
                v-model="userDetails.password" 
                label="Password*" 
                type="password"
                :rules="[
                    val => (val && val.length > 0) || 'Password is required'
                ]"
            />
            <q-input 

                outlined  
                v-model="userDetails.confirmPassword" 
                label="Confirm Password*" 
                type="password"
                :rules="[
                    val => (val && val.length > 0) || 'Password is required',
                    val => (userDetails.password === userDetails.confirmPassword) || 'Passwords do not match'
                ]"
            />
            <div class="btn">
            <q-btn type="submit" no-caps style="background-color:#303030;" >
                Register
            </q-btn>
            </div>
            <h6>Already have an account? <router-link class="link" to="/login">Login now!</router-link></h6>
        </q-form>
    </div>
</template>

<script>
import { mapActions } from 'vuex'
export default {
    name: "RegisterUser",
    data () {
        return {
        userDetails: {

            firstName: '',
            lastName: '',
            email: '',
            password: '',
            confirmPassword: '',
        }
        }
    },

    methods: {
        ...mapActions('users', ['registerUser']),
        onRegister() {
            this.registerUser(this.userDetails)
            this.userDetails = {
            firstName: '',
            lastName: '',
            email: '',
            password: '',
            confirmPassword: '',
            }
            this.$refs.registerForm.reset()
            
        }
    }
}
</script>

<style lang="scss" scoped>
     .form-container {
        padding-top: 50px;
        display:flex;
        justify-content: center;
        
        h4 {
            text-align: center;
            font-size: 25px;
            font-weight: 500;
            padding-bottom: 15px;
        }

        .input {
            @media(max-width: 600px) {
                max-width: 75%
            }
       }

       .btn {
           display:flex;
           align-items: center;
           justify-content: center;

           color: white;
           font-weight: 300;
       }

        h6 {
            font-weight: 300;
            padding: 30px;
            text-align: center;
            font-size: 15px;
             
            .link {
                text-decoration: underline;
                font-weight: bold;
                text-transform: capitalize;

                 &:hover {
                    color: #1eb8b8;
                }
            }
        }

    }
</style>