<template>
    <nav class="p-0 navbar text-center fixed-top navbar-light">
        <div class="container p-3 mt-1">
            <a href="#" class="me-auto fs-3 navbar-brand">Digiverse</a>
            <div id="nav" class="fs-5 mx-auto">
                <router-link class="me-2" to="/">Home</router-link>
                <router-link class="me-2" to="/about">About</router-link>
                <router-link class="me-2" to="/products">Products</router-link>
                <router-link class="me-2" to="/admin">Admin</router-link>
                <router-link class="me-2" to="/login">Login</router-link>    
                <router-link to="/register">Register</router-link>    
            </div>
            <button class="btn ms-auto" id="offcanvasButton" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar">
                <span class="navbar-toggler-icon"></span>
            </button>
            <i id="nav" class="ms-auto bi bi-person-circle"></i>
            <div class="offcanvas offcanvas-start" data-bs-backdrop="static" tabindex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbar">
                <div class="offcanvas-header">
                    <h5 class="offcanvas-title" id="offcanvasNavbarLabel">Navbar</h5>
                    <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                </div>
                <div class="offcanvas-body">
                    <div class="d-flex flex-column mx-auto">
                        <router-link class="me-2" to="/">Home</router-link>
                        <router-link class="me-2" to="/about">About</router-link>
                        <router-link class="me-2" to="/login">Login</router-link>    
                        <router-link to="/register">Register</router-link>    
                        <i id="nav" class="ms-auto bi bi-person-circle"></i>
                    </div>
                </div>
            </div>
        </div>
    </nav>
</template>

<script>
export default {

}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@100&display=swap');

*{
    font-family: 'Roboto', sans-serif;
}

nav{
    background-color: #f2f2f2;;
}

.bi{
    font-size: 2rem;
}
.offcanvas{
    width: 100vw !important;
    border: none;
    text-align: start;
    font-size: 3rem;
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

#nav:hover{
    cursor: pointer;
    color:darkblue;
}
</style>