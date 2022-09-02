<template>
    <div class="viewport login container d-flex justify-content-center align-items-center flex-column gap-5">
        <h1 class="w-100 mb-5">Login</h1>
        <form class="w-75 d-flex flex-column" @submit="login">
            <input type="email" @click="reset" v-model="email" required placeholder="email@example.com">
            <div id="pass">
                <i @click="change" v-if="visible" class="bi bi-eye-fill"></i>
                <i @click="change" v-if="!visible" class="bi bi-eye-slash-fill"></i>
                <input id="passwordInput" name="password" class="my-5 w-100" type="password" required v-model="password" @input="reset" @change="reset" @click="reset" placeholder="password">
            </div>
            <div v-if="clicked && !currentUser">
                <div v-if="!user && !loginError">
                    <p>Checking..</p>
                </div>
                <div v-else-if="!loginError">
                    <p>Verifying...</p>
                </div>
                <div v-else>
                    <p class="fw-bold">{{loginError}}</p>
                </div>
            </div>
            <div v-else-if="clicked && currentUser">
                <p class="fw-bold">Welcome {{currentUser.firstName}} {{currentUser.lastName}}</p>
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
        loginError(){
            return this.$store.state.loginError;
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
            if(!this.currentUser){
                this.clicked = false;
                this.$store.commit('setLoginError',null);
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
.login{
    padding-top:84px;
}

h1{
    font-weight: 900;
    color:greenyellow   
}

#pass{
    position:relative;
}

#pass i{
    position:absolute;
    top:41%;
    left:96%;
    color: #5c9100;
    cursor: pointer;
}
i:active{
    transform: scale(0.9);
}

input{
    letter-spacing: 1px;
}

p{
    color:greenyellow;
}

</style>