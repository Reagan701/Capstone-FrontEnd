<template>
  <div class="viewport admin container d-flex justify-content-center align-items-center flex-column gap">
    <h1 class="fw-bold">Admin Page</h1>
    <div class="mb-auto">
      <div class="row mt-5">
        <div class="col-md-6">
          <router-link to="/admin/users"><button class="button">Users</button></router-link>
        </div>
        <div class="col-md-6">
          <router-link to="/admin/products">
            <button class="button">Products</button>
          </router-link>
        </div>
      </div>
      <div class="row mt-5">
        <div class="col-md-12">
          <router-link to="/admin/billing"><button class="button">Billing Info</button></router-link>
        </div>
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
.admin{
  padding-top:81px;
  font-family: 'Roboto',sans-serif;
}
.gap{
  padding-bottom: 1rem;
}
h1{
  margin-top: 10rem;
}
.mb-auto{
  margin-top:3rem ;
}

.button{
  min-width: 200px;
}
</style>