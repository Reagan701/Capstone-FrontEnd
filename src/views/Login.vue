<template>
    <div class="viewport login container d-flex justify-content-center align-items-center flex-column gap-5">
        <h1 class="w-100">Login</h1>
        <form class="w-50 d-flex flex-column" @submit="login">
            <input type="email" @click="reset" v-model="email" required placeholder="email@example.com">
            <input class="my-5" type="password" required v-model="password" @click="reset" placeholder="password">
            <div v-if="clicked">
                <div v-if="user">
                    <p>Successfully logged in</p>
                </div>
                <div v-else>
                    <p>Checking...</p>
                </div>
            </div>
            <div v-else>
                <button class="button mx-auto" type="submit">Login</button>
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
    },
    mounted(){
        window.scrollTo(0,0);
    }
}
</script>

<style scoped>
.login{
    padding-top:84px;
}

h1{
    font-weight: 900;
    color:greenyellow   
}


*{
    font-family: 'Roboto',sans-serif;
}
</style>