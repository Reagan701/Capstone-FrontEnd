<template>
    <div class="login container">
        <h1>Login</h1>
        <form @submit="login">
            <label for="email" class="form-label">Email</label>
            <input type="email" @click="reset" v-model="email" required class="form-control">
            <label for="password" @click="reset" class="form-label">Password</label>
            <input type="password" class="form-control" required v-model="password">
            <div v-if="clicked">
                <div v-if="user">
                    <p>Successfully logged in</p>
                </div>
                <div v-else>
                    <p>Checking...</p>
                </div>
            </div>
            <div v-else>
                <button class="btn btn-dark" type="submit">Login</button>
            </div>
        </form>
    </div>
</template>

<script>
export default {
    data(){
        return{
            email: null,
            password: null,
            clicked: false
        }
    },
    computed:{
        user(){
            return this.$store.state.user;
        }
    },
    methods:{
        login(e){
            e.preventDefault();
            this.clicked = true;
            const payload = {
                userEmail: this.email,
                userPassword: this.password
            };
            this.$store.dispatch('loginUser', payload);
        },
        reset(){
            this.clicked = false;
        }
    }
}
</script>

<style scoped>

</style>