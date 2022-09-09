<template>
  <div class="viewport home d-flex justify-content-center align-items-center">
    <div class="background d-flex justify-content-center align-items-center flex-column gap-5">
      <h1 class="fw-bold">Welcome to the Digiverse</h1>
      <div class="d-flex justify-content-center align-items-center gap-2">
        <router-link to="/login">
          <button class="button">Login</button>
        </router-link>
        <router-link to="/register">
          <button class="button">Register</button>
        </router-link>
      </div>
    </div>

  </div>
</template>

<script>


export default {
  mounted(){
    window.scrollTo(0,0);
  }
  
}
</script>

<style scoped>
.home{
  background: linear-gradient(rgba(0, 0, 0, 0.301),rgba(0, 0, 0, 0.685)), url('https://images.unsplash.com/photo-1504610926078-a1611febcad3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80');
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  background-attachment: fixed;
}

.background{
  background: #0c0c0cec;
  padding:3rem;
  border-radius: 5px;
  border: 2px solid greenyellow;
  box-shadow: 0 0 5px greenyellow;
}

</style>
