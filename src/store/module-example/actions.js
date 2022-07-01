import axios from "axios";
import { Notify } from "quasar";

const baseurl = "https://moms-express.herokuapp.com/api";
// const baseurl = "http://192.168.130.155:5000/api"

//Seller Section
export function sellerRegister(
  { context },
  { fullname, email, password, password2 }
) {
  console.log(fullname, email, password);
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
        console.log(data);
        console.log(status);

        if (status === 200 || status === 201) {
          Notify.create({
            message: "Shop successfully created. Login to continue",
            color: "blue",
          });
          this.$router.push("/login");
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
          localStorage.setItem("role", seller.role);
          localStorage.setItem("sellerToken", token);
          localStorage.setItem("sellerId", seller._id);
          localStorage.setItem("sellerFullname", seller.fullname);
          localStorage.removeItem("user");
          this.$router.push("/seller/dashboard");
          Notify.create({
            message: "Login Success.",
            color: "blue",
          });
          commit("saveSellerToken", { token });
          resolve();
        }
      })
      .catch((error) => {
        // console.log(error);
        reject();
      });
  });
}

export function addProduct(context, data) {
  const { formData } = data;

  return new Promise((resolve, reject) => {
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
        if (data.status === 200 || data.status === 201) {
          Notify.create({
            message: "Product successfully added.",
            color: "blue",
          });
          this.$router.push("/seller/product");
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
        if (status === 200 || status === 201) {
          let products = data.data.docs;
          commit("sellerProducts", products);
        }
        resolve(data.data.docs);
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
        let product = data.data;
        if (status === 200 || status === 201) {
          commit("setSingleSellerProduct", product);
        }
        resolve(data.data);
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

export function deleteProduct(context, id) {
  console.log(id);
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

export function getSellerOrders({ commit }) {
  return new Promise((resolve, reject) => {
    axios({
      method: "GET",
      url: baseurl + `/seller/order`,
      headers: {
        Authorization: "Bearer " + localStorage.getItem("sellerToken"),
      },
    })
      .then((response) => {
        if (response) {
          let sales;
          let month;
          let totalRevenue;
          let total;
          for (let a of response.data.data) {
            total = a.totalPrice;
            total += total;
          }
          let overview;
          if (response.data.data.length === 0) {
            overview = null;
          } else {
            overview = {
              sales: response.data.data.length,
              month: response.data.data.length,
              totalRevenue: total,
            };
          }
          commit("overview", overview);
          resolve(response.data.data);
        }
      })
      .catch((error) => {
        console.log(error);
        reject();
      });
  });
}

export function getSingleSellerOrder({ commit }, id) {
  return new Promise((resolve, reject) => {
    axios({
      method: "GET",
      url: baseurl + `/seller/order/${id}`,
      headers: {
        Authorization: "Bearer " + localStorage.getItem("sellerToken"),
      },
    })
      .then((response) => {
        if (response) {
          resolve(response.data.data);
        }
      })
      .catch((error) => {
        console.log(error);
        reject();
      });
  });
}

export function changePassword(context, data) {
  console.log(data);
  return new Promise((resolve, reject) => {
    axios({
      method: "POST",
      url: baseurl + `/seller/password`,
      headers: {
        Authorization: "Bearer " + localStorage.getItem("sellerToken"),
      },
      data: data,
    })
      .then(({ data, status }) => {
        if (status === 200 || status === 201) {
          console.log(data);
          Notify.create({
            message: "Password successfully Changed",
            color: "blue",
          });
        }
        resolve();
      })
      .catch((error) => {
        console.log(error);
        reject();
      });
  });
}

export function updateShopDetails(context, data) {
  console.log(data);
  return new Promise((resolve, reject) => {
    axios({
      method: "PUT",
      url: baseurl + `/seller/edit-shop`,
      headers: {
        Authorization: "Bearer " + localStorage.getItem("sellerToken"),
      },
      data: data,
    })
      .then((response) => {
        console.log(response);
        if (response) {
          console.log(response);
          Notify.create({
            message: "Shop details succefully updated.",
            color: "blue",
          });
        }
        resolve();
      })
      .catch((error) => {
        console.log(error);
        reject();
      });
  });
}

export function verificationDetails(context, data) {
  console.log(data);
  return new Promise((resolve, reject) => {
    axios({
      method: "POST",
      url: baseurl + "/seller/verify",
      data: data,
      headers: {
        Authorization: "Bearer " + localStorage.getItem("sellerToken"),
      },
    })
      .then((data) => {
        console.log(data);
        if (data.status === 200 || data.status === 201) {
          Notify.create({
            message: "Your Shop has been verified start selling",
            color: "blue",
          });
          resolve();
        }
      })
      .catch((error) => {
        console.log(error);
        Notify.create({
          message: "Error Verifying your shop.",
          color: "red",
        });
        reject();
      });
  });
}

/////////////////////////////////////////////////////////////////

//Buyer Section

export function buyerRegister(context, { email }) {
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
          console.log(data);
          let buyer = data.data.result;

          localStorage.setItem("user", JSON.stringify(buyer));
          commit("user", buyer);
          resolve();
        }
      })
      .catch((error) => {
        reject();
      });
  });
}

export function buyerLogin({ commit }, data) {
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
          // console.log(buyer);
          localStorage.setItem("user", JSON.stringify(buyer));
          localStorage.setItem("userName", user.fullname);
          commit("user", buyer);

          resolve(buyer);
        }
      })
      .catch((error) => {
        reject();
      });
  });
}

export function getBuyerOrders() {
  return new Promise((resolve, reject) => {
    axios({
      method: "GET",
      url: baseurl + `/me/order`,
      withCredentials: true,
    })
      .then((response) => {
        if (response) {
          resolve(response.data.data);
        }
      })
      .catch((error) => {
        console.log(error);
        reject();
      });
  });
}

export function getSingleBuyerOrder(context, id) {
  return new Promise((resolve, reject) => {
    axios({
      method: "GET",
      url: baseurl + `/me/order/${id}`,
      withCredentials: true,
    })
      .then((response) => {
        if (response) {
          resolve(response.data.data);
        }
      })
      .catch((error) => {
        console.log(error);
        reject();
      });
  });
}

export function getMe() {
  return new Promise((resolve, reject) => {
    axios({
      method: "GET",
      url: baseurl + `/me`,
    })
      .then((response) => {
        if (response) {
          console.log(response.data);
          resolve();
        }
      })
      .catch((error) => {
        reject();
      });
  });
}

export function buyerLogout({ commit }) {
  localStorage.removeItem("buyerId");
  localStorage.removeItem("userName");
  localStorage.removeItem("buyerEmail");
  localStorage.removeItem("user");
  let user = null;
  commit("user", user);

  let openAuth = localStorage.getItem("openAuth");
  if (openAuth !== null) {
    return new Promise((resolve, reject) => {
      axios({
        withCredentials: true,
        method: "GET",
        url: baseurl + "/logout",
      })
        .then(({ data, status }) => {
          if (status === 200 || status === 201) {
            console.log("open auth logged out");
            localStorage.removeItem("openAuth");
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
}

export function getUser(context) {
  return new Promise((resolve, reject) => {
    let x = location.href;
    let a = "";
    let person = localStorage.getItem("buyerId");
    if (x !== "http://localhost:8080/" && person !== "") {
      a = "?h=" + x.split("=")[1].split("#")[0];
      axios({
        withCredentials: true,
        method: "GET",
        url: baseurl + `/login3${a}`,
      })
        .then((response) => {
          let user = response.data.data.user;
          console.log(user);

          localStorage.setItem("user", user);
          localStorage.setItem("userName", user.fullname);
          context.commit("user", user);
          this.$router.replace("/");
          resolve();
        })
        .catch((err) => {
          reject();
          console.log(err);
        });
    }
  });
}

export function commentOnProduct(context, { comment, id }) {
  console.log(comment);
  console.log(id);
  return new Promise((resolve, reject) => {
    axios({
      withCredentials: true,
      method: "POST",
      url: baseurl + `/search/${id}/comment`,

      data: { comment: comment },
    })
      .then((response) => {
        if (response) {
          console.log(response);
          resolve(response.data.data);
        }
      })
      .catch((error) => {
        reject();
      });
  });
}

export function createOrder(context, data) {
  console.log(data);
  return new Promise((resolve, reject) => {
    axios({
      method: "POST",
      url: baseurl + "/me/order",
      withCredentials: true,
      data: data,
    })
      .then((response) => {
        console.log(response);
        console.log(response.data.data.cart);
        if (response) {
          Notify.create({
            message: "Your order has been created",
            color: "blue",
          });
          resolve();
        }
      })
      .catch((error) => {
        console.log(error);
        reject();
      });
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

export function cartItemIncrement({ commit }, { product, quantity }) {
  commit("cartItemIncrement", { product, quantity });
}

export function cartItemDecrement({ commit }, { product, quantity }) {
  commit("cartItemDecrement", { product, quantity });
}

export function deleteCartItem({ commit }, { product }) {
  commit("deleteCartItem", { product });
}

// export function addProductToWishlist({ commit }, { product }) {
//   commit("addToWishlist", { product });
// }

export function setCart({ commit }, cart) {
  commit("setCart", cart);
}

// export function setWishlist({ commit }, wishlist) {
//   commit("setWishlist", wishlist);
// }

export function getCategories() {
  return new Promise((resolve, reject) => {
    axios({
      method: "GET",
      url: baseurl + `/shops/categories`,
    })
      .then((response) => {
        if (response) {
          resolve(response.data.data);
        }
      })
      .catch((error) => {
        reject();
      });
  });
}

export function getSingleCategory(context, category) {
  console.log(category);
  return new Promise((resolve, reject) => {
    axios({
      method: "GET",
      url: baseurl + `/search?category=${category}`,
    })
      .then((response) => {
        if (response) {
          resolve(response.data.data);
        }
      })
      .catch((error) => {
        reject();
      });
  });
}

export function getEasyBudgetCategory(context, amount) {
  return new Promise((resolve, reject) => {
    axios({
      method: "GET",
      url: baseurl + `/search?price=${amount}`,
    })
      .then((response) => {
        if (response) {
          // console.log(response.data.data);
          resolve(response.data.data);
        }
      })
      .catch((error) => {
        reject();
      });
  });
}

export function getTrendingCategory(context) {
  return new Promise((resolve, reject) => {
    axios({
      method: "GET",
      url: baseurl + `/search?trending=6`,
    })
      .then((response) => {
        if (response) {
          // console.log(response.data.data);
          resolve(response.data.data);
        }
      })
      .catch((error) => {
        reject();
      });
  });
}

export function getProducts() {
  return new Promise((resolve, reject) => {
    axios({
      method: "GET",
      url: baseurl + `/search?page=1`,
      headers: {
        Authorization: "Bearer " + localStorage.getItem("buyerToken"),
      },
    })
      .then((response) => {
        if (response) {
          resolve(response.data.data);
        }
      })
      .catch((error) => {
        reject();
      });
  });
}

export function getSingleProduct(context, id) {
  return new Promise((resolve, reject) => {
    axios({
      method: "GET",
      url: baseurl + `/search/${id}`,
    })
      .then((response) => {
        if (response) {
          resolve(response.data.data);
        }
      })
      .catch((error) => {
        reject();
      });
  });
}

export function searchProduct(context, search) {
  // console.log(search);
  return new Promise((resolve, reject) => {
    axios({
      method: "GET",
      url: baseurl + `/search?productName=${search}`,
    })
      .then((response) => {
        if (response) {
          resolve(response.data.data);
        }
      })
      .catch((error) => {
        reject();
      });
  });
}

export function getSingleSeller(commit, id) {
  return new Promise((resolve, reject) => {
    axios({
      method: "GET",
      url: baseurl + `/shops/${id}`,
    })
      .then((response) => {
        if (response) {
          // console.log(response.data.data);
          resolve(response.data.data);
        }
      })
      .catch((error) => {
        reject();
      });
  });
}

export function getShops() {
  return new Promise((resolve, reject) => {
    axios({
      method: "GET",
      url: baseurl + `/shops`,
    })
      .then((response) => {
        if (response) {
          // console.log(response.data.data);
          resolve(response.data.data);
        }
      })
      .catch((error) => {
        reject();
      });
  });
}
