<template>
    <div class="viewport contact container d-flex justify-content-center align-items-center flex-column gap-5">
        <h1 class="w-100 mb-5 pb-5">Contact Us</h1>
        <form class="w-100 row" action="https://formspree.io/f/mdojagyg" method="POST">
            <div class="col-md-6 mb-4 mb-md-0">
                <input type="text" class="w-100" name="Name" required placeholder="name" maxlength="40">
            </div>
            <div class="col-md-6 my-4 my-md-0">
                <input name="subject" class="w-100" type="text" required placeholder="subject" maxlength="20">
            </div>
            <div class="col-md-12 mb-5 my-md-5">
                <textarea class="w-100" name="message" cols="30" rows="3" style="resize:none;" placeholder="tell us something"></textarea>
            </div>
            <button class="button mx-auto" type="submit">
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
    padding-top:81px;
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
    border: 2px solid #757575;
    outline: none;
    overflow: hidden;
    transition: all 0.2s;
    width: 20%;
}

@media screen and (max-width:768px) {
    button{
        width: 30%;
    }
}
@media screen and (max-width:576px) {
    button{
        width: 45%;
    }
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
    transform: translateX(310%) rotate(45deg);
}
button:hover #sendHolder{
    animation: float 1.5s ease-in-out infinite alternate;
}
button:hover span{
    transform: translateX(-80%);
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
    font-weight: 900;
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