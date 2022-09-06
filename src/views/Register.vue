<template>
    <div class="viewport register container d-flex justify-content-center align-items-center flex-column">
        <h1 class="fw-bold w-100">Register</h1>
        <form class="w-100 row" @submit="register">
            <div class="col-md-6 mt-5">
                <input class="w-100" type="text" @click="reset" v-model="firstName" required placeholder="first name">
            </div>
            <div class="col-md-6 mt-5">
                <input class="w-100" type="text" required v-model="lastName" @click="reset" placeholder="last name">
            </div>
            <div class="col-md-6 mt-5">
                <input class="w-100" type="email" required v-model="email" @click="reset" placeholder="email@example.com">
            </div>
            <div class="col-md-6 mt-5">
                <input class="w-100" type="number" required v-model="phoneNumber" @click="reset" placeholder="phoneNumber">
            </div>
            <div class="col-md-12 my-5">
                <div id="pass">
                    <i @click="change" v-if="visible" class="bi bi-eye-fill"></i>
                    <i @click="change" v-if="!visible" class="bi bi-eye-slash-fill"></i>
                    <input id="passwordInput" type="password" required v-model="password" @click="reset" class="w-100" placeholder="password">
                </div>
            </div>
            <div v-if="clicked && !currentUser">
                <div v-if="!user && !registerError">
                    <p>Checking..</p>
                </div>
                <div v-else-if="!registerError">
                    <p>Verifying...</p>
                </div>
                <div v-else>
                    <p class="fw-bold">{{registerError}}</p>
                </div>
            </div>
            <div v-else-if="clicked && currentUser">
                <p class="fw-bold">Welcome {{currentUser.firstName}} {{currentUser.lastName}}</p>
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
        },
        currentUser(){
            return this.$store.state.currentUser;
        },
        registerError(){
            return this.$store.state.registerError;
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
            this.$store.dispatch('registerUser', payload);
        },
        reset(){
            if(!this.currentUser){
                this.clicked = false;
                this.$store.commit('setRegisterError',null);
            }
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