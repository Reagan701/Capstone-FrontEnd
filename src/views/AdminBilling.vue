<template>
    <div v-if="billing" class="viewport adminBilling container">
        
    </div>
    <div v-else class="viewport adminBilling container d-flex justify-content-center align-items-center flex-column">
        <p class="fw-bold fs-1">loading..</p>
    </div>
</template>

<script>
export default {
    mounted(){
        window.scrollTo(0,0);
        this.$store.dispatch('getBillingInfo');
    },
    computed: {
        billing(){
            return this.$store.state.billing
        }
    }
}
</script>

<style scoped>

*{
    font-family: 'Roboto', sans-serif;
}

.admingBilling{
    padding-top:84px;
}

</style>