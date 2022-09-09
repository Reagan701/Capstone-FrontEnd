<template>
  <div class="viewport about container">
    <h1>About Us</h1>
    <div id="infoRow" class="row my-5">
      <h2 class="mb-4">Digiverse</h2>
      <p class="fs-5">We are a technology eccomerce site dedicated to delivering only the highest quality hardware to our users</p>
    </div>
    <div class="row">
      <h2 style="color:white;" class="my-5">Meet the Creator</h2>
      <div id="aboutRow" class="row">
        <div id="imgColumn" class="col-md-6">
          <div id="imgContainer">
            <img class="img-fluid" src="https://i.postimg.cc/TwRbq1DH/Reagan1.jpg" alt="Reagan">
          </div>
        </div>
        <div class="col-md-6">
          <div class="fs-4 d-flex h-100 justify-content-center align-items-center flex-column gap-5">
            <h2 style="text-decoration:none !important;">Reagan Carolussen</h2>
            <p>A passion driven Aspiring Fullstack Developer</p>
            <div class="d-flex justify-content-center align-items-center gap-3 mx-auto col-md-2">
              <a href="https://github.com/Reagan701" target="_blank"><i class="socialLink bi bi-github"></i></a>
              <a href="https://www.linkedin.com/in/reagan-carolussen-03054823a/" target="_blank">
                <i class="socialLink bi bi-linkedin"></i>
              </a>
            </div>
          </div>
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

*{
  font-weight: bold;
  color: white;
  letter-spacing: 1px;
}

h2,h4{
  color: greenyellow;
}

h2{
  text-decoration: underline;
  text-underline-offset: 9px;
}

i:hover{
  color: greenyellow;
}

i{
  transition: all 0.1s linear;
}

i:active{
  color: #76b900;
}

.about{
  padding-top: 81px;
}

#infoRow{
  border:2px solid greenyellow;
  padding:2rem;
  width: 50%;
  margin: auto;
}
#aboutRow{
  border-top:2px solid greenyellow;
  padding-top:2rem;
  padding-bottom:2rem;
  margin: auto;
}

#imgContainer{
  width: 50%;
  height: 50%;
  margin: auto;
  border: 2px solid greenyellow
}

#imgColumn{
  height: 100%;
}

img{
  border-radius: 5px;
  box-shadow: 0 0 10px greenyellow;
}

</style>
