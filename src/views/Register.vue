<template>
    <div class="viewport register container d-flex justify-content-center align-items-center flex-column">
        <h1 class="fw-bold w-100">Register</h1>
        <form class="w-75 d-flex flex-column" @submit="register">
            <input type="text" @click="reset" v-model="firstName" required placeholder="first name">
                <input type="text" required v-model="lastName" @click="reset" placeholder="last name">
                <input type="number" required v-model="phoneNumber" @click="reset" placeholder="phoneNumber">
                <input type="email" required v-model="email" @click="reset" placeholder="email@example.com">
                <div id="pass">
                    <i @click="change" v-if="visible" class="bi bi-eye-fill"></i>
                    <i @click="change" v-if="!visible" class="bi bi-eye-slash-fill"></i>
                    <input id="passwordInput" type="password" required v-model="password" @click="reset" class="w-100" placeholder="password">
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
                <button class="button mx-auto" type="submit">Register</button>
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
            visible: false,
            clicked: false
        }
    },
    computed:{
        user(){
            return this.$store.state.user;
        }
    },
    methods:{
        register(e){
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
        },
        change(){
            if(this.visible){
                this.visible = !this.visible;
                document.getElementById('passwordInput').type = 'password';
            }else{
                this.visible = !this.visible;
                document.getElementById('passwordInput').type = 'text';
            }
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

#pass{
    position:relative;
}

#pass i{
    position:absolute;
    top:27%;
    left:96%;
    color: #5c9100;
    cursor: pointer;
}
i:active{
    transform: scale(0.9);
}

</style>