<template>
  <div class="loader">
    <div class="mx-auto circle"></div>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>

    .circle{
        width:80px;
        height: 80px;
        background: transparent;
        border:2px solid white;
        border-radius: 50%;
        animation: spin 1.5s linear infinite;
        display:flex;
        justify-content:center;
    }

    .circle::before{
        content: '';
        width: 20px;
        height: 20px;
        background: greenyellow;
        box-shadow: 0 0 20px greenyellow;
        border-radius: 50%;
        transform: translateX(130%);
    }
    @keyframes spin {
        0%{transform: rotate(0deg)}
        100%{transform: rotate(360deg);}
    }

</style>