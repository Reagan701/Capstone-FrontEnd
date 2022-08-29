<template>
  <footer>
    <div class="container">
        <div class="row">
            <div class="col-md-4">
                <h3>About</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio quas veritatis impedit illum ea accusamus molestias saepe iure, libero inventore, sit, delectus dolores ratione.</p>
            </div>
            <div class="col-md-4">
                <h3>Quick Links</h3>
                <ul>
                    <li>Home</li>
                    <li>About</li>
                    <li>Contact</li>
                    <li>Login</li>
                </ul>
            </div>
            <div class="col-md-4">
                <h3>Our Links</h3>
                <ul>
                    <li><i class="bi bi-telephone-fill"></i> 021 022 2020</li>
                    <li><i class="bi bi-envelope-fill"></i> digiverse@gmail.com</li>
                </ul>
            </div>
        </div>
        <div class="borderTop d-flex">
            <h6><span>Copyright</span> &copy; <span class="me-5">Digiverse</span> Made By: <span>Reagan Carolussen</span></h6>
            <div class="ms-auto">
                <i class="bi bi-linkedin"></i>
                <i class="ms-3 bi bi-github"></i>
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
    font-weight: 900 !important;
}

ul{
    padding: 0;
    list-style:none;
}

span{
    color:darkblue
}

h3{
    margin-bottom: 1.5rem;
    font-weight: 700;
}

footer{
    padding-top:20px;
    background-color: #f2f2f2;;
}

.borderTop{
    border-top: 5px solid black;
    padding-top: 1rem;
}
</style>