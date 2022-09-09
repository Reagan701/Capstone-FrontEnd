<template>
  <div v-if="singleProduct" class="viewport singleProduct container d-flex justify-content-center align-items-center flex-column">
    <div class="d-flex justify-content-start align-items-center w-100 h-100 my-3">
        <router-link to="/products"> <i id="backButton" class="bi bi-caret-left-fill"></i> </router-link>
    </div>
    <div class="row">
        <div class="col-md-6">
            <img :src="singleProduct.prodImg" id="mainImg" class="img-fluid" :alt="singleProduct.prodName">
            <div class="d-flex">
                <div @mouseleave="reset" @mouseenter="changeImg(2)" class="relatedContainer w-50 position-relative">
                    <div class="cover"></div>
                    <img style="border-right:4px solid #0c0c0c" :src="JSON.parse(singleProduct.relatedImages).image1" id="2" class="related" alt="image1">
                </div>
                <div @mouseleave="reset" @mouseenter="changeImg(3)" class="relatedContainer w-50 position-relative">
                    <div class="cover"></div>
                    <img style="border-left:4px solid #0c0c0c" :src="JSON.parse(singleProduct.relatedImages).image2" id="3" class="related" alt="image2">
                </div>
            </div>
        </div>
        <div id="infoColumn" class="col-md-1"></div>
        <div id="info" class="col-md-5 ms-auto">
            <div class="d-flex justify-content-evenly align-items-center flex-column h-100">
                <h1 class="fw-bold">{{singleProduct.prodName}}</h1>
                <div  style="text-align:left" class="d-flex justify-content-start w-100 flex-column gap-5">
                    <h3 id="category" class="fw-bold">{{singleProduct.category}}</h3>
                    <p class="fs-3 fw-bold">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ad maxime dolores unde, similique eius ipsa perspiciatis reprehenderit explicabo provident. Beatae!</p>
                    <p style="text-align: left;color:greenyellow" class="fw-bold fs-1 mb-4">R {{singleProduct.price}}</p>
                </div>
                <!-- <p>{{singleProduct.prodDescription}}</p> -->
                <div class="d-flex justify-content-evenly ms-auto flex-column">
                    <button @click="addToCart" class="deleteButton">
                        <span>Add to Cart</span>
                        <i class="bi bi-cart"></i>
                    </button>
                </div>
            </div>
        </div>
    </div>
    <div class="viewport relatedProductView">
        <div v-if="relatedProducts" class="row">
            <h1 class="mb-5 fw-bold heading">You might also like</h1>
            <Card :product="product" v-for="product in relatedProducts.filter((x)=> {return x.prodName != this.singleProduct.prodName})" :key="product.prodID"/>
        </div>
        <div v-else class="viewport singleProduct d-flex justify-content-center align-items-center">
            <Loader/>
        </div>
    </div>
  </div>
  <div v-else class="viewport singleProduct container d-flex justify-content-center align-items-center">
    <Loader/>
  </div>
</template>

<script>
import Loader from '../components/Loader.vue';
import Card from '../components/RelatedCard.vue';
export default {
    components: {Card, Loader},
    computed:{
        singleProduct(){
            return this.$store.state.singleProduct;
        },
        relatedProducts(){
            return this.$store.state.productCategory;
        }
    },
    mounted(){
        window.scrollTo(0,0);
        setTimeout(() =>{
            this.$store.dispatch('getSingleProduct', this.$route.params.id);
        },500)
    },
    methods:{
        changeImg(id){
            const newSrc = document.getElementById(`${id}`).src;
            document.getElementById('mainImg').src = newSrc;
        },
        reset(){
            document.getElementById('mainImg').src = this.$store.state.singleProduct.prodImg
        },
        addToCart(){
            this.$store.dispatch('addToCart',this.singleProduct)
        }
    },
    watch:{
        $route(to,from){
            window.scrollTo(0,0);
            this.$store.commit('setSingleProduct',null);
            setTimeout(() => {
                this.$store.dispatch('getSingleProduct', to.params.id);
            }, 500);
        }
    }
}
</script>

<style scoped>

*{
    letter-spacing: 1px;
}

#backButton{
    font-size: 3rem;
    color: #76b900;
}

.singleProduct{
    padding-top:90px;
    color:White !important;
}
.relatedProductView{
    padding-top:50px;
    color:White !important;
}

.related{
    width:100%;
    height: fit-content;
    aspect-ratio: 1;
    object-fit: cover;
    margin-top:8px;
}

.cover{
    position: absolute;
    top:8px;
    left: 0;
    background: #0c0c0cb7;
    width: 100%;
    height: 100%;
    transition: all 0.5s linear;
}

.relatedContainer:hover .cover{
    opacity: 0;
}

#infoColumn{
    border-right:2px solid greenyellow;
    width: 0%;
    margin-left: 50px;
    padding:0%;
}


@media screen and (max-width:768px){
    #info{
        border-top: 2px solid greenyellow;
        margin-top: 40px;
        padding-top:20px
    }
}

.heading{
    animation: pulse 3s linear infinite alternate;
}

.img-fluid{
    width:1000px !important;
    height: 400px !important;
    object-fit: cover;
}

@media screen and (max-width:1199px) {
    .img-fluid{
        width:1000px !important;
        height: 358px !important;
        object-fit: contain;
    }
    
}
@media screen and (max-width:767px) {
    .img-fluid{
        width:516px !important;
        height: 344px !important;
        object-fit: contain;
    }
    
}
@media screen and (min-width:768px) and (max-width:991px) {
    .img-fluid{
        width:1000px !important;
        height: 265px !important;
        object-fit: contain;
    }
    
}

@keyframes pulse {
    0%{transform: scale(1.1);}
    100%{transform: scale(1);}
}

.deleteButton{
    padding-right:1rem;
    padding-left:0.75rem;
    padding-top: 0.5rem ;
    padding-bottom:0.5rem ;
    margin-left: auto;
    margin-right: auto;
    display: flex;
    justify-content: center;
    align-content: center;
    cursor: pointer;
    font-size: 2rem;
    border: 2px solid white;
}
.deleteButton:hover .bi-cart{
    transform: translateX(-245%);
    color: greenyellow;
}
.deleteButton:hover span{
    color: transparent;
}
.deleteButton:hover{
    border-color: #76b900;
    box-shadow: 0 0 2px #76b900;
}

.deleteButton span{
    font-weight: bold;
    transition: all 0.15s linear;
}

.bi{
    transition: all 0.15s linear;
    transform: translateX(10px);
}

</style>