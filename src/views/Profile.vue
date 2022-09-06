<template>
    <div v-if="currentUser" class="viewport profile container">
        <h1>Profile</h1>
    </div>
    <div v-else class="viewport profile container d-flex justify-content-center align-items-center flex-column gap-5">
        <h1 class="fw-bold">There is no user logged in</h1>
        <router-link to="/login">
            <button class="button">Return to Login</button>
        </router-link>
    </div>
</template>

<script>
export default {
    computed:{
        currentUser(){
            return this.$store.state.currentUser;
        }
    }
}
</script>

<style scoped>
.profile{
    padding-top:81px
}

a{
    text-decoration: none;
}

</style>