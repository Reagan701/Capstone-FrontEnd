<template>
  <Navbar/>
  <router-view/>
  <Footer />
</template>

<style>
#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

input{
  border: 2px solid black;
  padding-top:0.5rem;
  padding-left:0.6rem;
  padding-bottom:0.6rem;
  width: 100%;
}

input::placeholder{
  font-family: 'Roboto', sans-serif;
}

.confirm{
    border: 2px solid black;
    width:250px;
    padding-top:0.5rem;
    padding-left:0.6rem;
    padding-bottom:0.6rem;
    background: transparent;
    font-weight: 900;
    transition: all 0.15s linear;
}

.confirm:hover{
    background: black;
    border: 2px solid white;
    color:white
}

.viewport{
  min-height: 100vh;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: blue;
}
nav a:hover {
  color: darkblue;
}
</style>

<script>
import Navbar from './components/Navbar.vue'
import Footer from './components/Footer.vue'
export default {
  components:{Navbar, Footer}
}
</script>