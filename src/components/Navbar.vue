<template>
    <nav class="p-0 navbar text-center fixed-top navbar-dark">
        <div class="container p-3 mt-1">
            <a href="#" class="me-auto fs-3 text-white navbar-brand">Digiverse</a>
            <div id="nav" v-if="!user" class="fs-5 me-auto">
                <router-link class="me-2" to="/">Home</router-link>
                <router-link class="me-2" to="/about">About</router-link>
                <router-link v-if="user" class="me-2" to="/products">Products</router-link>
                <router-link v-if="user" class="me-2" to="/admin">Admin</router-link>
                <router-link class="me-2" to="/contact">Contact</router-link>
                <router-link v-if="!user" class="me-2" to="/login">Login</router-link>
                <router-link v-if="!user" to="/register">Register</router-link>    
            </div>
            <div id="nav" v-if="user" class="fs-5 mx-auto">
                <router-link class="me-2" to="/">Home</router-link>
                <router-link class="me-2" to="/about">About</router-link>
                <router-link v-if="user" class="me-2" to="/products">Products</router-link>
                <router-link v-if="user" class="me-2" to="/admin">Admin</router-link>
                <router-link class="me-2" to="/contact">Contact</router-link>
                <router-link v-if="!user" class="me-2" to="/login">Login</router-link>
                <router-link v-if="!user" to="/register">Register</router-link>    
            </div>
            <button class="btn ms-auto" id="offcanvasButton" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div v-if="user" class="ms-auto d-flex justify-content-center align-items-center">
                <router-link to="/profile">
                    <i class="bi bi-person-circle" style="margin-left:0.5rem"></i>
                </router-link>
                <button id="nav" style="margin-left:0.5rem; outline:none;padding:0.4rem !important" type="button" class="btn position-relative">
                    <i id="nav" data-bs-toggle="offcanvas" data-bs-target="#cart" class="ms-auto bi bi-cart"></i>
                    <span v-if="cart" style="background:greenyellow;" class="position-absolute top-0 start-100 translate-middle badge rounded-pill">
                        <p id="badgeText">{{cart.length}}</p>
                    </span>
                </button>
            </div>

            <div class="offcanvas offcanvas-start" data-bs-backdrop="static" tabindex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbar">
                <div class="offcanvas-header">
                    <h1 class="offcanvas-title" style="color:greenyellow !important; font-weight:bold;" id="offcanvasNavbarLabel">Digiverse</h1>
                    <button type="button" id="closeNavButton" class="btn-close btn-close-white" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                </div>
                <div class="offcanvas-body">
                    <div class="d-flex flex-column mx-auto">
                        <router-link @click="closeNav" class="me-2" to="/">Home</router-link>
                        <router-link @click="closeNav" class="me-2" to="/about">About</router-link>
                        <router-link @click="closeNav" v-if="user" class="me-2" to="/products">Products</router-link>
                        <router-link @click="closeNav" v-if="user" class="me-2" to="/admin">Admin</router-link>
                        <router-link @click="closeNav" class="me-2" to="/contact">Contact</router-link>
                        <router-link @click="closeNav" v-if="!user" class="me-2" to="/login">Login</router-link>
                        <router-link @click="closeNav" v-if="!user" to="/register">Register</router-link>
                        <button style="outline:none;padding:0.4rem !important" v-if="cart" type="button" class="btn position-relative">
                            <i id="navCart" data-bs-toggle="offcanvas" data-bs-target="#cart" class="w-50 ms-auto bi bi-cart"></i>
                            <span id="badge" class="position-absolute top-0 start-100 translate-middle badge">
                                <p style="color:#0c0c0c">{{cart.length}}</p>
                            </span>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </nav>
    <Cart :currentUser="user"/>
</template>

<script>
import Cart from '../components/Cart.vue'
export default {
    components: {Cart},
    computed:{
        user(){
            return this.$store.state.currentUser
        },
        cart(){
            return this.$store.state.currentCart
        }
    },
    methods:{
        closeNav(){
            window.scrollTo(0,0);
            document.getElementById('closeNavButton').click();
        }
    }
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@100&display=swap');

*{
    font-family: 'Roboto', sans-serif;
}

#badgeText{
    color: black;
    font-weight: bolder;
    font-size: 1.1rem;
}

nav{
    background-color: #0c0c0c;
}

.bi{
    font-size: 1.4rem;
    color: white;
}
.offcanvas{
    width: 100vw !important;
    border: none;
    text-align: start;
    font-size: 3rem;
}

#navCart::before{
    font-size: 3rem;
    color: white;
}
.btn{
    border:none !important;
}

@media screen and (min-width:768px) {
    #offcanvasButton{
        display: none;
    }
}
@media screen and (max-width:767px) {
    #nav{
        display: none;
    }
}

a{
    text-decoration: none;
}

#nav:hover, .bi-person-circle:hover{
    cursor: pointer;
    color:#76b900;
}

#nav, .bi-person-circle{
    color: white
}

.bi-person-circle:active{
    color:greenyellow;
}

.navbar-brand{
    color:greenyellow !important;
}

.btn-close{
    width: 0.5em !important;
    height: 0.5em !important;
}

</style>