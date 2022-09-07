<template>
  <Navbar/>
  <router-view v-slot="{Component}">
    <transition name="route" mode="out-in">
      <component :is="Component"></component>
    </transition>
  </router-view>
  <Footer />
</template>

<style>

.customSelect{
  width: 100%;
  height: 100%;
  border-radius: 5px;
  padding: 0.5rem;
  font-weight: bold;
  background: transparent;
  border: 2px solid #757575;
  color: #757575;
  transition: border 0.2s linear, color 0.2s linear ;
}
.customSelect:focus{
  border:2px solid greenyellow;
  color: greenyellow;
}

.selectedCustomSelect{
  border:2px solid greenyellow !important;
  color: greenyellow !important;
}

.customSelect:focus-visible{
  outline: none;
}

.selectOption{
  background: rgb(33,37,41);
  color: white;
  font-weight: bold;
  padding:1rem;
}

p{
  margin:0;
}

.offcanvas{
  background-color: #0c0c0c;
}

.offcanvas-header{
  margin-right:15px;
  margin-left:15px;
  border-bottom: 2px solid #757575;
}
.modal-content{
  background-color: #0c0c0c;
}

.modal-header{
  margin-right:15px;
  margin-left:15px;
  border-bottom: 2px solid #757575;
}

*{
  font-family: 'Roboto', sans-serif;
  
}
#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  background-color:#0c0c0c;
}

input, textarea{
  border:2px solid transparent;
  outline: none;
  border-bottom: 2px solid #757575;
  padding:5px;
  color: white;
  letter-spacing: 1px;
  transition: all 0.5s linear;
  background-color: transparent;
  font-weight: 900;
}

input::placeholder{
  color: #757575;
  font-weight: 900;
}

input:focus{
  border:2px solid greenyellow;
  color:#76b900;
  font-weight: 900;
}

input:focus::placeholder{
  color: #76b900
}

h1{
  color: greenyellow;
}
.confirm{
  border: 2px solid greenyellow;
  color:white;
  width:250px;
  padding-top:0.5rem;
  padding-left:0.6rem;
  padding-bottom:0.6rem;
  background: transparent;
  font-weight: 900;
  transition: all 0.15s linear;
  background: transparent;
}

.adminConfirm{
  border: 1px solid white;
  padding-right: 1rem;
  padding-left: 1rem;
  padding-top: 0.5rem;
  padding-bottom: 0.5rem;
  background: transparent;
  color: white;
  font-weight: 900;
  transition: all 0.15s linear;
}
.adminConfirm:hover{
  background: white;
  border: 1px solid transparent;
  color:black
}
.confirm:hover{
  background: black;
  border: 2px solid white;
  color:white
}

.button {
  width: 140px;
  transition: .5s linear;
  position: relative;
  display: block;
  overflow: hidden;
  padding: 15px;
  text-align: center;
  background: transparent;
  text-transform: uppercase;
  font-weight: 900;
}

.button:before {
  position: absolute;
  content: '';
  left: 0;
  bottom: 0;
  height: 4px;
  width: 100%;
  border-bottom: 4px solid transparent;
  border-left: 4px solid transparent;
  box-sizing: border-box;
  transform: translateX(100%);
}

.button:after {
  position: absolute;
  content: '';
  top: 0;
  left: 0;
  width: 100%;
  height: 4px;
  border-top: 4px solid transparent;
  border-right: 4px solid transparent;
  box-sizing: border-box;
  transform: translateX(-100%);
}

.button:hover {
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.5);
  border: 2px solid #0c0c0c;
}

.button:hover:before {
  border-color:  #76b900;
  height: 100%;
  transform: translateX(0);
  transition: .1s transform linear, .1s height linear .1s;
}

tr{
  border-color:greenyellow;
  padding-top:6px;
  padding-bottom:6px;
}

.button:hover:after {
  border-color:     #76b900;
  height: 100%;
  transform: translateX(0);
  transition: .1s transform linear, .1s height linear .1s;
}

button {
  color: white;
  outline: none;
  border: 2px solid #757575;
  background: transparent;
}

.viewport{
  min-height: 100vh;
}

nav a {
  font-weight: bold;
  color:white;
}

nav a.router-link-exact-active {
  color: greenyellow;
}
nav a:hover {
  color: #76b900;
}

::-webkit-scrollbar{
  width:10px;
}

::-webkit-scrollbar-track{
  background-color:white;
}

::-webkit-scrollbar-thumb{
  background-color:greenyellow;
}

.route-enter-from{
  opacity:0;
  transform: translateX(-200px);
}
.route-leave-to{
  opacity:0;
  transform: translateX(1200px);
}
.route-leave-active{
  opacity:0;
  transition: all 0.5s ease-in;
}
.route-enter-active{
  transition: all 0.5s ease-out;
}

input::-webkit-outer-spin-button, input::-webkit-inner-spin-button{
  -webkit-appearance: none;
  -moz-appearance: none;
  margin: 0;
}

</style>

<script>
import Navbar from './components/Navbar.vue'
import Footer from './components/Footer.vue'
export default {
  components:{Navbar, Footer}
}
</script>