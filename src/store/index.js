import router from '@/router';
import { toRaw } from 'vue';
import { createStore } from 'vuex'

const def = () => {
  return{
    user: null,
    currentUser: null,
    products: null,
    loginError: null,
    registerError: null,
    singleProduct: null,
    allUsers: null,
    billing: null,
    allCarts: null,
    productCategory: null,
    currentCart: null,
    cartTotal: 0,
    singleCart: null,
    singleBilling: null,
    userPassword: null
  }
}


export default createStore({
  state: def(),
  getters: {
  },
  mutations: {
    resetState(state){
      router.push('/login');
      Object.assign(state,def());
    },
    setUser(state,user){
      state.user = user;
    },
    setCurrentUser(state,currentUser){
      state.currentUser = currentUser;
    },
    setProducts(state,products){
      state.products = products;
    },
    setSingleProduct(state,product){
      state.singleProduct = product;
    },
    setAllUsers(state,allUsers){
      state.allUsers = allUsers;
    },
    setBilling(state,info){
      state.billing = info
    },
    setCartInfo(state,info){
      state.allCarts = info
    },
    setProductCategory(state,info){
      state.productCategory = info;
    },
    setLoginError(state,error){
      state.loginError = error;
    },
    setRegisterError(state,error){
      state.registerError = error;
    },
    setCurrentCart(state,cart){
      state.currentCart = cart
    },
    setCartTotal(state,total){
      state.cartTotal = total;
    },
    setSingleCartInfo(state,info){
      state.singleCart = info
    },
    setSingleBilling(state,info){
      state.singleBilling = info
    },
    setUserPassword(state,info){
      state.userPassword = info;
    }
  },
  actions: {
    getProducts(context){
      fetch('https://digiverseapi.herokuapp.com/products')
      .then((res)=>res.json())
      .then((data)=> {
        context.commit('setProducts',data.results);
      });
    },
    getSingleProduct(context,payload){
      fetch('https://digiverseapi.herokuapp.com/products/'+payload)
      .then((res)=>res.json())
      .then((data)=>
        {
          if(data.results){
            context.commit('setSingleProduct', data.results[0])
            context.dispatch('getProductByCategory', data.results[0].category);
          }
        }
      );
    },
    getAllUsers(context){
      fetch('https://digiverseapi.herokuapp.com/users')
      .then((res)=>res.json())
      .then((data)=>context.commit('setAllUsers',data.results))
    },
    getBillingInfo(context){
      fetch('https://digiverseapi.herokuapp.com/billing')
      .then((res)=>res.json())
      .then((data)=>context.commit('setBilling',data.results))
    },
    getAllCarts(context){
      fetch('https://digiverseapi.herokuapp.com/cart')
      .then((res)=>res.json())
      .then((data)=>context.commit('setCartInfo',data.results))
    },
    editProduct(context,payload){
      fetch('https://digiverseapi.herokuapp.com/products/'+payload.prodId, {
        method: 'PUT',
        body: JSON.stringify(payload),
        headers: {
          'Content-type': 'application/json; charset=UTF-8'
        }
      })
      .then((res)=>res.json())
      .then((data)=>context.dispatch('getProducts'));
    },
    deleteUser(context,payload){
      fetch('https://digiverseapi.herokuapp.com/users/'+payload, {
        method: 'DELETE',
        headers: {
          'Content-type': 'application/json; charset=UTF-8'
        }
      })
      .then((res)=>res.json())
      .then(()=> context.dispatch('getAllUsers'));
    },
    deleteProduct(context,payload){
      fetch('https://digiverseapi.herokuapp.com/products/'+payload, {
        method: 'DELETE',
        headers:{
          'Content-type': 'application/json; charset=UTF-8'
        }
      })
      .then((res)=> res.json())
      .then(() => context.dispatch('getProducts'));
    },
    registerUser(context,payload){
      fetch('https://digiverseapi.herokuapp.com/users', {
        method: 'POST',
        body: JSON.stringify(payload),
        headers: {
          'Content-type': 'application/json; charset=UTF-8'
        }
      })
      .then((res)=>res.json())
      .then((data)=>{
        if(data.message){
          context.commit('setRegisterError',data.message)
          Swal.fire({
            icon:'error',
            title:data.message,
            padding:'1rem'
            }
          )
        }else{
          context.dispatch('loginUser', payload);
        }
      });
    },
    loginUser(context,payload){
      fetch('https://digiverseapi.herokuapp.com/users', {
        method: 'PATCH',
        body: JSON.stringify(payload),
        headers: {
          'Content-type': 'application/json; charset=UTF-8'
        }
      })
      .then((res)=>res.json())
      .then((data)=>{
        if(data.message){
          context.commit('setLoginError',data.message)
          Swal.fire({
            icon:'error',
            title:data.message,
            padding:'1rem',
            }
          )
        }else{
          context.commit('setUser', data.token);
          context.commit('setUserPassword', payload.userPassword)
          context.dispatch('verify');
        }
      })
    },
    verify(context){
      fetch('https://digiverseapi.herokuapp.com/verify', {
        method: 'GET',
        headers: {
          'Content-type': 'application/json; charset=UTF-8',
          'x-auth-token': context.state.user
        }
      })
      .then((res) => res.json())
      .then((data)=> {
        Swal.fire({
          icon:'success',
          title:'Logged In',
          padding:'1rem'
          }
        )
        context.commit('setCurrentUser', data.decodedUser.user)
        context.dispatch('getSingleBilling');
        context.dispatch('getCurrentCart')
      });
    },
    getProductByCategory(context,payload){
      fetch('https://digiverseapi.herokuapp.com/productCategory/'+ payload)
      .then((res)=>res.json())
      .then((data)=>context.commit('setProductCategory',data.results));
    },
    addProduct(context, payload){
      fetch('https://digiverseapi.herokuapp.com/products', {
        method: 'POST',
        body: JSON.stringify(payload),
        headers:{
          'Content-type': 'application/json; charset=UTF-8'
        }
      })
      .then((res)=>res.json())
      .then(()=> context.dispatch('getProducts'));
    },
    addToCart(context,payload){
      fetch('https://digiverseapi.herokuapp.com/cart/'+context.state.currentUser.userID, {
        method: 'POST',
        body: JSON.stringify(payload),
        headers:{
          'Content-type': 'application/json; charset=UTF-8'
        }
      })
      .then((res)=> res.json())
      .then(()=> context.dispatch('getCurrentCart'));
    },
    getCurrentCart(context){
      fetch('https://digiverseapi.herokuapp.com/cart/'+ context.state.currentUser.userID)
      .then((res)=> res.json())
      .then((data)=> {
        if(data.results[0].cartItems){
          context.commit('setCurrentCart',JSON.parse(data.results[0].cartItems));
          context.dispatch('getCartTotal')
        }else{
          context.commit('setCurrentCart',null);
          context.dispatch('getCartTotal')
        }
      });
    },
    getCartTotal(context){
      const cart = toRaw(context.state.currentCart);
      let total = 0;
      if(cart){
        for(let i = 0; i<cart.length;i++){
          total += cart[i].price;
        }
      }
      context.commit('setCartTotal',total);
    },
    removeFromCart(context,payload){
      fetch('https://digiverseapi.herokuapp.com/cart/'+context.state.currentUser.userID+'/cartItems/'+payload.prodId, {
        method: 'DELETE',
        headers:{
          'Content-type': 'application/json; charset=UTF-8'
        }
      })
      .then((res)=>res.json())
      .then((data)=> {
        context.dispatch('getCurrentCart');
      })
    },
    clearCart(context,payload){
      fetch('https://digiverseapi.herokuapp.com/cart/'+context.state.currentUser.userID, {
        method: 'DELETE',
        headers:{
          'Content-type': 'application/json; charset=UTF-8'
        }
      })
      .then((res)=>res.json())
      .then((data)=> {
        context.dispatch('getCurrentCart');
      })
    },
    getSingleCartInfo(context,payload){
      fetch('https://digiverseapi.herokuapp.com/usercart/'+ payload)
      .then((res)=> res.json())
      .then((data)=> {
        context.commit('setSingleCartInfo', data.results[0]);
      });
    },
    getSingleBilling(context){
      fetch('https://digiverseapi.herokuapp.com/billing/'+context.state.currentUser.userID)
      .then((res)=>res.json())
      .then((data)=>context.commit('setSingleBilling', data.results[0]));
    },
    updateBilling(context, payload){
      fetch('https://digiverseapi.herokuapp.com/billing/'+context.state.currentUser.userID, {
        method: 'PUT',
        body: JSON.stringify(payload[0]),
        headers: {
          'Content-type': 'application/json; charset=UTF-8'
        }
      })
      .then((res)=> res.json())
      .then((data)=> {
        if(payload[1] == false){
          context.dispatch('clearCart');
        }else{
          context.commit('resetState');
        }
      })
    },
    updateUser(context,payload){
      fetch('https://digiverseapi.herokuapp.com/users/'+context.state.currentUser.userID, {
        method: 'PUT',
        body: JSON.stringify(payload),
        headers: {
          'Content-type': 'application/json; charset=UTF-8'
        }
      })
      .then((res)=> res.json())
      .then((data)=> {
        context.commit('resetState');
      })
    },
    deleteAccount(context){
      fetch('https://digiverseapi.herokuapp.com/users/'+context.state.currentUser.userID,{
        method:'DELETE',
        headers:{
          'Content-type': 'application/json; charset=UTF-8'
        }
      })
      .then((res)=> res.json())
      .then((data)=>{
        context.commit('resetState');
      })
    }
  },
  modules: {
  }
})