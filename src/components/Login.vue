<template>
    <h1 class="text-center">Login</h1>
    <div class="m-4">
        <input type="email" name="email" v-model="email" id=""><br><br>
        <input type="password" name="password" v-model="password" id=""> <br><br>
        <button v-on:click="addUser()">Add User</button>
    </div>
</template>

<script>
import axios from 'axios'
export default {
   data(){
    return {
        email:"",
        password:""
    }
   },
   methods:{
    async addUser(){
        let result = await axios.post("http://localhost:3000/Users",{
            email:this.email,
            password:this.password
        })
        console.warn(result)
    }
   }
}
</script>

<style lang="scss" scoped></style>