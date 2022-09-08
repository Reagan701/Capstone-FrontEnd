<template>
  <div class="mx-auto loader"></div>
</template>

<script>
export default {

}
</script>

<style scoped>

.loader{
    width: 20%;
    height: 10px;
    border-radius: 5px;
    background: #757575;
    position: relative;
}

.loader::before{
    content: '';
    position: absolute;
    top:0;
    left:0;
    background: greenyellow;
    height: 100%;
    width: 0%;
    border-radius: 5px;
    animation: load 1.5s ease-in-out infinite;
}

@keyframes load {
    50%{width: 100%;}
    100%{
        right: 0;
        left: unset;
    }
}

</style>