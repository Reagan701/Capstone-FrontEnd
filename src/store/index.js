import { createStore } from 'vuex'

export default createStore({
  state: {
    user: null,
    currentUser: null,
    products: null,
    loginError: null,
    singleProduct: null,
    allUsers: null,
    billing: null,
    allCarts: null,
    productCategory: null
  },
  getters: {
  },
  mutations: {
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
        context.commit('setSingleProduct', data.results[0])
        context.dispatch('getProductByCategory', data.results[0].category);
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
      .then((data)=>console.log(data));
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
      fetch('https://digiverseapi.herokuapp.com/users/'+payload, {
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
      .then((data)=>console.log(data));
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
            padding:'1rem'
            }
          )
        }else{
          context.commit('setUser', data.token);
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
      });
    },
    getProductByCategory(context,payload){
      fetch('https://digiverseapi.herokuapp.com/productCategory/'+ payload)
      .then((res)=>res.json())
      .then((data)=> context.commit('setProductCategory', data.results));
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
      .then((data)=> console.log(data));
    }
  },
  modules: {
  }
})