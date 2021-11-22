<template>
    <div class="form-container">
       
        <q-form  ref="loginForm" @submit.prevent="onLogin" class="input">
             <h4>Login to BusyMonk</h4>
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
            <div class="btn">
            <q-btn type="submit" no-caps style="background-color:#303030;" >
                Login
            </q-btn>
            </div>
            <h6>Dont have an account? <router-link class="link" to="/register">Register here!</router-link></h6>
        </q-form>
    </div>
</template>

<script>
import { mapActions } from 'vuex'
export default {
    name: "LoginUser",
    data() {
        return {
            userDetails :{
                email: '',
                password: ''
            }
        }
    },
    methods: {
        ...mapActions('users',['loginUser']),
        onLogin() {
            this.loginUser(this.userDetails)
            this.userDetails = {
                email: '',
                password: ''
            }
            this.$refs.loginForm.reset()
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
            padding: 20px;
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
                text-align: center;
                text-transform: capitalize;

                 &:hover {
                    color: #1eb8b8;
                }
            }
        }

    }
</style>