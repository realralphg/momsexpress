import axios from 'axios'
import { Notify } from 'quasar'

const baseurl = "https://moms-express.herokuapp.com/api"
// const baseurl = "http://192.168.130.155:5000/api"

//Seller Sideeeeeeeee

export function sellerRegister ({commit}, {fullname, email, password, password2}) {
  return new Promise((resolve, reject) => {
    axios({
      method: "POST",
      url:  baseurl + '/sign-up' ,
      data: {
        fullname,
        email,
        password,
        password2
      }
    })
    .then(({ data, status }) => {
      if (status === 200 || status === 201 ){
        console.log(data)
        resolve()
      }
    })
    .catch(error => {
      reject()
    })
  })
}


export function sellerLogin  ({commit}, {email, password}) {
  return new Promise((resolve, reject) => {
    axios({
      method: "POST",
      url: baseurl + '/login2' ,
      data: {
        email,
        password
      }
    })
    .then(({ data, status }) => {
      if (status === 200 || status === 201 ){
        console.log(data);
        let token = data.data.token;
        let seller = data.data.user;
        localStorage.setItem('userRole', seller.role);
        localStorage.setItem('sellerToken', token);
        localStorage.setItem('sellerId', seller._id);
        localStorage.setItem('sellerEmail', seller.email);
        localStorage.setItem('sellerFullname', seller.fullname);
        localStorage.setItem('sellerStore', seller.store);
        this.$router.replace('/seller/dashboard')
        Notify.create({
          message: 'Login Success.',
          color: 'blue'
      })
        context.commit('saveSellerToken', {token})
        resolve()
      }
    })
    .catch(error => {
      // console.log(error);
      reject()
    })
  })
}



export function addProduct (context, data) {

  console.log(data);
  const { formData } = data;

  return new Promise((resolve, reject) => {
    console.log(data)
    axios({
      method: "POST",
      url: baseurl + '/product',
      data: formData,
      headers: {
        'Authorization': 'Bearer '+localStorage.getItem('sellerToken'),
        'Content-Type': 'multipart/form-data'
      }
    })
    .then(data => {
      console.log(data);
      if(response.status === 200 || status === 201){
        console.log(data);
        Notify.create({
            message: "Product successfully added.",
            color: 'blue'
        })
        resolve();
      }else{
          Notify.create({
              message: "Error sending message. Please retry.",
              color: 'red'
          })
          reject();
      }
    })
    .catch(error => {
        console.log(error)
        Notify.create({
            message: 'Error sending message. Please retry.',
            color: 'red'
        })
        reject();
    })
  })

}


export function addProductToCart ({commit}, {product, quantity}) {
  commit('ADD_TO_CART', {product, quantity});
}

// export function getProduct ({commit}) {

// }










//Buyer Sideeeeeeeeeeeeeeeeeeeeeeeee!!!!!!

export function buyerRegister ({commit}, {email}) {
  return new Promise((resolve, reject) => {
    axios({
      method: "POST",
      url:  baseurl + '/sign-up/fast' ,
      data: {
        email
      }
    })
    .then(({ data, status }) => {
      if (status === 200 || status === 201 ){
        this.$router.replace('/')
        console.log(data)
        resolve()
      }
    })
    .catch(error => {
      reject()
    })
  })
}


export function buyerLogin ({commit}, {email, password}) {
  return new Promise((resolve, reject) => {
    axios({
      method: "POST",
      url: baseurl + '/login' ,
      data: {
        email,
        password
      }
    })
    .then(({ data, status }) => {
      if (status === 200 || status === 201 ){
        console.log(data);
        let token = data.data.token;
        let buyer = data.data.user;
        localStorage.setItem('userRole', buyer.role);
        localStorage.setItem('buyerToken', token);
        localStorage.setItem('buyerId', buyer._id);
        localStorage.setItem('buyerEmail', buyer.email);
        localStorage.setItem('buyerFullname', buyer.fullname);
        localStorage.setItem('buyerStore', buyer.store);
        context.commit('saveBuyerToken', {token})
      }
      resolve()
    })
    .catch(error => {
      // console.log(error);
      reject()
    })
  })
}


export function buyerLogout ({commit}) {
  return new Promise((resolve, reject) => {
    axios({
      withCredentials: true,
      method: "GET",
      url: baseurl + '/logout'
    })
    .then(({ data, status }) => {
      if (status === 200 || status === 201 ){
        console.log(data);
        localStorage.removeItem('buyerId')
        localStorage.removeItem('buyerName')
        localStorage.removeItem('buyerEmail')
        localStorage.removeItem('buyerRole')
      }
      resolve()
    })
    .catch(error => {
      console.log(error);
      reject()
    })
  })
}


export function getUser (context) {

  return new Promise((resolve, reject) => {
     // console.log(location.href)
     let x = location.href
     let a = ''
     if(x.split('=')[1] !== undefined ){
        a = "?h="+ x.split('=')[1].split('#')[0]     //.split('=')[1].split('#')[0]
      //  console.log(a);
     }

    axios({
      withCredentials :true,
      method: "GET",
      url: `https://moms-express.herokuapp.com/api/login3${a}`,
      })
    .then(response => {
    // location.href = '/'
      let user = response.data.data.user
      console.log(user);
      if(user !== ''  ){
        if(location.href !== 'http://localhost:8080/#/'){
            location.href = '/'
        }
        let id = user._id;
        let name = user.fullname;
        let email = user.email;
        let role = user.role;
        // context.commit('getUser', {user})
        localStorage.setItem('buyerId', id)
        localStorage.setItem('buyerName', name)
        localStorage.setItem('buyerEmail', email)
        localStorage.setItem('buyerRole', role)
        resolve();
      }else{
          console.log('E no work oooh1');
          reject();
      }
    })
    .catch(err => {
      console.log('e no work ohh2')
      console.log(err);
    })
  })

}


export function buyerFacebookAuth ({commit}) {
  return new Promise((resolve, reject) =>{
    axios({
      method: "GET",
      url: baseurl + '/facebook'
    })
    .then((response) => {
      console.log(response);
      resolve()
    })
    .catch(error =>{
      reject()
    })
  })
}


export function logout ({commit}) {
  return new Promise((resolve, reject) =>{
    axios({
      method: "GET",
      url: baseurl + '/google'
    })
    .then((response) => {
      console.log(response);
      localStorage.removeItem('userRole', seller.role);
      localStorage.removeItem('sellerToken', token);
      localStorage.removeItem('sellerId', seller._id);
      localStorage.removeItem('sellerEmail', seller.email);
      localStorage.removeItem('sellerFullname', seller.fullname);
      localStorage.removeItem('sellerStore', seller.store);
      resolve()
    })
    .catch(error =>{
      reject()
    })
  })
}





















//Generalllllllllllll
export function forgotPassword ({commit}, ) {
  return new Promise((resolve, reject) => {
    axios({
      method: "GET",
      url:  baseurl + '/logout'
    })
    .then(({ data, status }) => {
      if (status === 200 || status === 201 ){
        console.log(data)
        resolve()
      }
    })
    .catch(error => {
      reject()
    })
  })
}
