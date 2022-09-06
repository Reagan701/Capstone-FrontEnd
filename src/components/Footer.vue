<template>
  <footer>
    <div class="container">
        <div class="row mb-3">
            <div class="col-md-4 headingMargin">
                <h3>About</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio quas veritatis impedit illum ea accusamus molestias saepe iure</p>
            </div>
            <div class="col-md-4 headingMargin">
                <h3>Quick Links</h3>
                <div class="h-50 d-flex justify-content-center align-items-center gap-5">
                    <ul class="h-100 d-flex justify-content-evenly align-item-center flex-column">
                        <li class="link">Home</li>
                        <li class="link">About</li>
                    </ul>
                    <ul class="h-100 d-flex justify-content-evenly align-item-center flex-column">
                        <li class="link">Contact</li>
                        <li class="link" style="text-align:left;">Login</li> 
                    </ul>
                </div>
            </div>
            <div class="col-md-4 headingMargin">
                <h3>Our Links</h3>
                <ul class="h-50 d-flex justify-content-center align-items-center flex-column m-0">
                    <li><i class="bi bi-telephone-fill"></i> 021 022 2020</li>
                    <li><i class="bi bi-envelope-fill"></i> digiverse@gmail.com</li>
                </ul>
            </div>
        </div>
        <div class="borderTop d-flex pb-2">
            <h6><span>Copyright</span> &copy; <span class="me-5">Digiverse</span> Made By: <span>Reagan Carolussen</span></h6>
            <div class="ms-auto">
                <i class="socialLink bi bi-linkedin"></i>
                <i class="socialLink ms-3 bi bi-github"></i>
            </div>
        </div>
    </div>
  </footer>
</template>

<script>
export default {

}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@100&display=swap');

*{
    font-family: 'Roboto', sans-serif;
    color: white;
}

ul{
    padding: 0;
    list-style:none;
}

.link{
    text-decoration: underline;
    text-underline-offset: 2px;
    font-weight: bold;
    font-size: 1.1rem;
}

span{
    color:greenyellow;
    font-weight:bold;
}

h3{
    margin-bottom: 1.5rem;
    font-weight: 700;
}

ul{
    margin: 0 !important;
}

footer{
    padding-top:20px;
    background-color: #0c0c0c;;
}

.borderTop{
    border-top: 5px solid black;
    padding-top: 1rem;
}
i{
    color: greenyellow;
}
.socialLink{
    color: white;
    font-size: 1.2rem;
}
.socialLink:hover{
    color: #76b900;
    cursor: pointer;
}
.socialLink:active{
    color: greenyellow;
    cursor: pointer;
}
.socialLink:active:before{
    transform: scale(0.9);
}
.socialLink:before{
    transition: all 0.1s linear;
}

@media screen and (max-width:768px) {
    .headingMargin{
        margin-top:1.5rem
    }
    footer{
        padding:0 !important;
        background-color: #0c0c0c;;
    }
}

</style>