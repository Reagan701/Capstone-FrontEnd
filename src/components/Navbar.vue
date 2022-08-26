<template>
    <nav class="p-0 navbar text-center fixed-top navbar-expand-lg navbar-light">
        <div class="container p-3 mt-1">
            <a href="#" class="mx-auto navbar-brand">Reagan Carolussen</a>
            <button class="mx-auto navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#collapsedNav" aria-controls="collapsedNav" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="collapsedNav">
                <div class="navbar-nav mx-auto">
                    <div class="navbar-nav d-flex">
                        <router-link to="/">Home</router-link>
                        <router-link to="/about">About</router-link>
                        <router-link to="/login">Login</router-link>
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

</style>