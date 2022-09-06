<template>
    <div v-if="!currentUser" class="viewport login container d-flex justify-content-center align-items-center flex-column gap-5">
        <h1 class="w-100 mb-5 pb-5">Login</h1>
        <form class="w-100 row" @submit="login">
            <div>
                <input type="email" class="w-100" @click="reset" v-model="email" required placeholder="email@example.com">
            </div>
            <div id="pass">
                <i @click="change" v-if="visible" class="bi bi-eye-fill"></i>
                <i @click="change" v-if="!visible" class="bi bi-eye-slash-fill"></i>
                <!-- <label for="text">?</label> -->
                <input id="passwordInput" name="password" class="my-5 w-100" type="password" required v-model="password" @input="reset" @change="reset" @click="reset" placeholder="password">
            </div>
            <div v-if="clicked && !currentUser">
                <div v-if="!user && !loginError">
                    <h2 class="fw-bold text-white">Checking..</h2>
                </div>
                <div v-else-if="!loginError">
                    <h2 class="fw-bold text-white">Verifying...</h2>
                </div>
                <div v-else>
                    <h2 class="fw-bold text-white">{{loginError}}</h2>
                </div>
            </div>
            <div v-else>
                <button class="button mx-auto" type="submit">Login</button>
            </div>
        </form>
    </div>
    <div v-else class="viewport login container d-flex justify-content-center align-items-center flex-column gap-5">
        <h1 class="fw-bold">Welcome back {{currentUser.firstName}} {{currentUser.lastName}}</h1>
        <router-link to="/products" class="w-25">
            <button class="button w-100">View our Products</button>
        </router-link>
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
    padding-top:81px;
}

h1{
    font-weight: 900;
    color:greenyellow   
}

a{
    text-decoration: none;
}

#pass{
    position:relative;
}

#pass i{
    position:absolute;
    top:41%;
    left:93%;
    color: #5c9100;
    cursor: pointer;
}
#pass label{
    position:absolute;
    top:41%;
    left:100%;
    color: greenyellow;
    cursor: pointer;
    font-weight: bold;
    border-radius: 50%;
    width: 25px;
    height: 25px;
    aspect-ratio: 1;
    border: 1px solid greenyellow;
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

@media screen and (min-width:991px){
    #pass i{
        left:96%;
    }
}
@media screen and (max-width:768px){
    #pass i{
        left:90%;
    }
}
@media screen and (max-width:450px){
    #pass i{
        left:85% !important;
    }
    a{
        width: 50% !important;
    }
}

</style>