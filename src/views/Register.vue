<template>
    <div class="viewport register container d-flex justify-content-center align-items-center flex-column">
        <h1 class="fw-bold w-100">Register</h1>
        <form class="w-100 d-flex flex-column" @submit="register">
            <div class="row">
                <div class="col-md-6">
                    <input type="text" @click="reset" v-model="firstName" required placeholder="first name">
                </div>
                <div class="col-md-6">
                    <input type="text" required v-model="lastName" @click="reset" placeholder="last name">
                </div>
                <div class="col-md-12">
                    <input type="number" required v-model="phoneNumber" @click="reset" placeholder="phoneNumber">
                </div>
                <div class="col-md-6">
                    <input type="email" required v-model="email" @click="reset" placeholder="email@example.com">
                </div>
                <div class="col-md-6">
                    <input type="password" required v-model="password" @click="reset" placeholder="password">
                </div>
            </div>
            <div v-if="clicked">
                <div v-if="user">
                    <p>Successfully logged in</p>
                </div>
                <div v-else>
                    <p>Checking...</p>
                </div>
            </div>
            <div v-else>
                <button class="confirm" type="submit">Register</button>
            </div>
        </form>
    </div>
</template>

<script>
export default {
    data(){
        return{
            firstName: null,
            lastName: null,
            phoneNumber:null,
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
                firstName: this.firstName,
                lastName: this.lastName,
                phoneNumber: this.phoneNumber,
                userEmail: this.email,
                userPassword: this.password
            };
            this.$store.dispatch('RegisterUser', payload);
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

.col-md-6{
    margin-top:1rem;
    margin-bottom:1rem;
}

*{
    font-family: 'Roboto',sans-serif;
}

</style>