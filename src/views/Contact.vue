<template>
    <div class="viewport contact container d-flex justify-content-center align-items-center flex-column gap-5">
        <h1 class="w-100">Contact Us</h1>
        <form class="w-100 row" @submit="alert('formspree')">
            <div class="col-md-6">
                <input type="text" class="w-100" name="Name" required placeholder="name">
            </div>
            <div class="col-md-6">
                <input name="subject" class="w-100" type="text" required placeholder="subject">
            </div>
            <div class="col-md-12 my-5">
                <textarea class="w-100" name="message" cols="30" rows="3" style="resize:none;" placeholder="tell us something"></textarea>
            </div>
            <button class="mx-auto" type="submit">
                <div id="sendHolder">
                    <i class="bi bi-send"></i>
                </div>
                <span class="fw-bold">Send</span>
            </button>
        </form>
    </div>
</template>

<script>
export default {

}
</script>

<style scoped>
.contact{
    padding-top:84px;
}

h1{
    font-weight: 900;
    color:greenyellow   
}

button{
    font-size: 1.4rem;
    background: transparent;
    color:greenyellow;
    display: flex;
    padding:10px 50px;
    justify-content: center;
    align-items: center;
    gap: 1rem;
    border: 1px solid white;
    outline: none;
    overflow: hidden;
    transition: all 0.2s;
    width: 20%;
}

button i{
    display: block;
    transform-origin: center center;
    transition: all 0.3s ease-in-out;
}
button span{
    display: block;
    transition: all 0.3s ease-in-out;
}

button:hover i{
    transform: translateX(120%) rotate(45deg);
}
button:hover #sendHolder{
    animation: float 1.5s ease-in-out infinite alternate;
}
button:hover span{
    transform: translateX(300%);
}

@keyframes float {
    from{
        transform: translateY(0.1rem);
    }
    to{
        transform: translateY(-0.1rem);
    }
}

textarea::placeholder{
    color:#757575;
    letter-spacing: 1px;
    font-weight: 100;
    transform: translateY(180%);
    transition: all 0.2s linear;
}
textarea:focus{
    border:2px solid greenyellow;
  color:#76b900;
}

textarea:focus::placeholder{
  color: #76b900;
  transform: translateY(0%);
}

</style>