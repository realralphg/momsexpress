import axios from "axios";
import { Notify } from "quasar";
import items from "src/data/items";

export function getProductsLocal({ commit }) {
  let products = items;
  commit("setProducts", products);
}

const baseurl = "https://moms-express.herokuapp.com/api";
// const baseurl = "http://192.168.130.155:5000/api"

//Seller Side
export function sellerRegister({ fullname, email, password, password2 }) {
  return new Promise((resolve, reject) => {
    axios({
      method: "POST",
      url: baseurl + "/sign-up",
      data: {
        fullname,
        email,
        password,
        password2,
      },
    })
      .then(({ data, status }) => {
        if (status === 200 || status === 201) {
          console.log(data);
          resolve();
        }
      })
      .catch((error) => {
        reject();
      });
  });
}

export function sellerLogin({ commit }, { email, password }) {
  return new Promise((resolve, reject) => {
    axios({
      method: "POST",
      url: baseurl + "/login2",
      data: {
        email,
        password,
      },
    })
      .then(({ data, status }) => {
        if (status === 200 || status === 201) {
          console.log(data);
          let token = data.data.token;
          let seller = data.data.user;
          localStorage.setItem("userRole", seller.role);
          localStorage.setItem("sellerToken", token);
          localStorage.setItem("sellerId", seller._id);
          localStorage.setItem("sellerEmail", seller.email);
          localStorage.setItem("sellerFullname", seller.fullname);
          localStorage.setItem("sellerStore", seller.store);
          this.$router.push("/seller/dashboard");
          Notify.create({
            message: "Login Success.",
            color: "blue",
          });
          context.commit("saveSellerToken", { token });
          resolve();
        }
      })
      .catch((error) => {
        // console.log(error);
        reject();
      });
  });
}

export function addProduct(data) {
  const { formData } = data;

  return new Promise((resolve, reject) => {
    console.log(data);
    axios({
      method: "POST",
      url: baseurl + "/product",
      data: formData,
      headers: {
        Authorization: "Bearer " + localStorage.getItem("sellerToken"),
        "Content-Type": "multipart/form-data",
      },
    })
      .then((data) => {
        console.log(data);
        if (data.status === 200 || data.status === 201) {
          // console.log(data);
          Notify.create({
            message: "Product successfully added.",
            color: "blue",
          });
          resolve();
        } else {
          Notify.create({
            message: "Error sending message. Please retry.",
            color: "red",
          });
          reject();
        }
      })
      .catch((error) => {
        console.log(error);
        Notify.create({
          message: "Error sending message. Please retry.",
          color: "red",
        });
        reject();
      });
  });
}

export function getSellerProducts({ commit }) {
  return new Promise((resolve, reject) => {
    axios({
      method: "GET",
      url: baseurl + "/product?page=1",
      headers: {
        Authorization: "Bearer " + localStorage.getItem("sellerToken"),
      },
    })
      .then(({ data, status }) => {
        console.log(data);
        if (status === 200 || status === 201) {
          console.log(data.data.docs);
          let products = data.data.docs;
          commit("sellerProducts", products);
        }
        resolve();
      })
      .catch((error) => {
        console.log(error);
        reject();
      });
  });
}

export function getSingleSellerProduct({ commit }, productId) {
  return new Promise((resolve, reject) => {
    axios({
      method: "GET",
      url: baseurl + `/product/${productId}`,
      headers: {
        Authorization: "Bearer " + localStorage.getItem("sellerToken"),
      },
    })
      .then(({ data, status }) => {
        console.log(data.data);
        let product = data.data;
        if (status === 200 || status === 201) {
          commit("setSingleSellerProduct", product);
        }
        resolve();
      })
      .catch((error) => {
        console.log(error);
        reject();
      });
  });
}

export function updateSellerProductData({ commit }, product) {
  return new Promise((resolve, reject) => {
    axios({
      method: "POST",
      url: baseurl + `/product/${product._id}`,
      headers: {
        Authorization: "Bearer " + localStorage.getItem("sellerToken"),
      },
      data: product,
    })
      .then(({ data, status }) => {
        if (status === 200 || status === 201) {
          // commit('setSingleSellerProduct', data)
          console.log(data);
        }
        resolve();
      })
      .catch((error) => {
        console.log(error);
        reject();
      });
  });
}

export function updateImage({ id, formData }) {
  return new Promise((resolve, reject) => {
    console.log(formData);
    axios({
      method: "POST",
      url: baseurl + `/product/img/${id}`,
      headers: {
        Authorization: "Bearer " + localStorage.getItem("sellerToken"),
      },
      data: formData,
    })
      .then(({ data, status }) => {
        if (status === 200 || status === 201) {
          window.location.reload();
          console.log(data);
        }
        resolve();
      })
      .catch((error) => {
        console.log(error);
        reject();
      });
  });
}

export function deleteProduct(id) {
  return new Promise((resolve, reject) => {
    axios({
      method: "DELETE",
      url: baseurl + `/product/${id}`,
      headers: {
        Authorization: "Bearer " + localStorage.getItem("sellerToken"),
      },
    })
      .then(({ data, status }) => {
        console.log(data);
        if (status === 200 || status === 201) {
          console.log(data);
          window.location.reload();
        }
        resolve();
      })
      .catch((error) => {
        console.log(error);
        reject();
      });
  });
}

/////////////////////////////////////////////////////////////////

//Buyer Side

export function buyerRegister({ email }) {
  return new Promise((resolve, reject) => {
    axios({
      method: "POST",
      url: baseurl + "/sign-up/fast",
      data: {
        email,
      },
    })
      .then(({ data, status }) => {
        if (status === 200 || status === 201) {
          this.$router.replace("/");
          console.log(data);
          resolve();
        }
      })
      .catch((error) => {
        reject();
      });
  });
}

export function buyerLogin(data) {
  return new Promise((resolve, reject) => {
    axios({
      method: "POST",
      url: baseurl + "/login",
      data: {
        email: data.email,
        password: data.password,
      },
    })
      .then((response) => {
        if (response.status === 200 || response.status === 201) {
          let buyer = response.data.data.user;
          console.log(buyer);
          localStorage.setItem("userRole", buyer.role);
          localStorage.setItem("buyerId", buyer._id);
          localStorage.setItem("buyerEmail", buyer.email);
          localStorage.setItem("buyerFullname", buyer.fullname);
          // this.$router.push("/");
          resolve();
        }
      })
      .catch((error) => {
        // console.log(error);
        reject();
      });
  });
}

export function buyerLogout() {
  return new Promise((resolve, reject) => {
    axios({
      withCredentials: true,
      method: "GET",
      url: baseurl + "/logout",
    })
      .then(({ data, status }) => {
        if (status === 200 || status === 201) {
          console.log(data);
          localStorage.removeItem("buyerId");
          localStorage.removeItem("buyerName");
          localStorage.removeItem("buyerEmail");
          localStorage.removeItem("buyerRole");
        }
        resolve();
      })
      .catch((error) => {
        console.log(error);
        reject();
      });
  });
}

export function getUser() {
  return new Promise((resolve, reject) => {
    // console.log(location.href)
    let x = location.href;
    let a = "";
    if (x.split("=")[1] !== undefined) {
      a = "?h=" + x.split("=")[1].split("#")[0]; //.split('=')[1].split('#')[0]
      //  console.log(a);
    }
    let person = localStorage.getItem("buyerEmail");
    if (!person) {
      axios({
        withCredentials: true,
        method: "GET",
        url: baseurl + `/login3${a}`,
      })
        .then((response) => {
          // location.href = '/'
          let user = response.data.data.user;
          console.log(user);
          if (user !== "") {
            // if (location.href !== "http://localhost:8080") location.href = "/";

            let id = user._id;
            let name = user.fullname;
            let email = user.email;
            let role = user.role;
            // context.commit('getUser', {user})
            localStorage.setItem("buyerId", id);
            localStorage.setItem("buyerFullname", name);
            localStorage.setItem("buyerEmail", email);
            localStorage.setItem("buyerRole", role);
            resolve();
          } else {
            console.log("Not Working");
            reject();
          }
        })
        .catch((err) => {
          console.log(err);
        });
    }
  });
}

/////////////////////////////////////////////////////////////////

//Generalllllllllllll

export function forgotPassword({ commit }, email) {
  return new Promise((resolve, reject) => {
    axios({
      method: "POST",
      url: baseurl + "/forgot-password",
      data: email,
    })
      .then(({ data, status }) => {
        if (status === 200 || status === 201) {
          Notify.create({
            message: "An Email has been sent",
            color: "blue",
          });
          console.log(data);
          resolve();
        }
      })
      .catch((error) => {
        reject();
      });
  });
}

export function addProductToCart({ commit }, { product, quantity }) {
  commit("addToCart", { product, quantity });
}

export function setCart({ commit }, cart) {
  commit("setCart", cart);
}
