<template>
  <div v-if="singleProduct" class="viewport singleProduct container d-flex justify-content-center align-items-center flex-column">
    <div class="row">
        <div class="col-md-7">
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
        <div class="col-md-4 ms-auto bg-dark">
            <div class="d-flex justify-content-evenly align-items-center flex-column h-100">
                <h1>{{singleProduct.prodName}}</h1>
                <div class="d-flex justify-content-end w-100">
                    <h3>{{singleProduct.category}}</h3>
                </div>
                <p>{{singleProduct.prodDescription}}</p>
                <div class="d-flex justify-content-evenly ms-auto flex-column">
                    <p>{{singleProduct.price}}</p>
                    <button @click="addToCart" class="btn btn-light">Add to cart</button>
                </div>
            </div>
        </div>
    </div>
    <div class="viewport relatedProductView">
        <div v-if="relatedProducts" class="row">
            <h1 class="mb-5 fw-bold heading">You might also like</h1>
            <ProductCard :product="product" v-for="product in relatedProducts.filter((x)=> {return x.prodName != singleProduct.prodName})" :key="product.prodID"/>
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
import ProductCard from '../components/ProductCard.vue';
export default {
    components: {ProductCard, Loader},
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
        this.$store.dispatch('getSingleProduct', this.$route.params.id);
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
            this.$store.dispatch('getSingleProduct', to.params.id);
        }
    }
}
</script>

<style scoped>

.singleProduct{
    padding-top:96px;
    color:White !important;
}
.relatedProductView{
    padding-top:50px;
    color:White !important;
}

.related{
    width: 268px !important; 
    height: 184px !important;
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

/* 516x344 */

.heading{
    animation: pulse 3s linear infinite alternate;
}

.img-fluid{
    width:1000px !important;
    height: 497px !important;
    object-fit: contain;
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

/* 746 497 */

@keyframes pulse {
    0%{transform: scale(1.1);}
    100%{transform: scale(1);}
}

</style>