<template>
    <div v-if="cart" class="viewport checkout container">
        <h1></h1>
    </div>
    <div v-else>
        <Loader />
    </div>
</template>

<script>
import Loader from '../components/Loader.vue';
export default {
    components: {Loader}
}
</script>

<style scoped>
    .checkout{
        padding-top:81px
    }
</style>