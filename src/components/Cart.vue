<template>
  <div class="offcanvas offcanvas-start" data-bs-backdrop="static" tabindex="-1" id="cart" aria-labelledby="offcanvasNavbar">
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
</template>

<script>
export default {

}
</script>

<style scoped>

</style>