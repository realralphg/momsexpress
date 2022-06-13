import { Notify } from "quasar";

//Local storage function for storing cart
function updateLocalStorage(cart) {
  localStorage.setItem("cart", JSON.stringify(cart));
}

//Products Handling
export function setProducts(state, products) {
  state.products = products;
}

export function setCart(state, cart) {
  state.cart = cart;
  updateLocalStorage(state.cart);
}

//Cart Handling
export function addToCart(state, { product, quantity }) {
  let productInCart = state.cart.find((item) => {
    return item.product.id === product.id;
  });

  if (productInCart) {
    Notify.create({
      message: "Item Already in cart",
      color: "primary",
      position: "top",
    });
  } else {
    let cartCopy = [...state.cart];
    cartCopy.push({
      product,
      quantity,
    });
    state.cart = cartCopy;
  }

  updateLocalStorage(state.cart);
}

//Seller Token Handling
export function saveSellerToken(state, payload) {
  console.log(state);
  state.sellerToken = payload.token;
}

export function logout(state) {
  console.log("Logout commited");
  state.sellerToken = null;
}

//Seller Products
export function sellerProducts(state, products) {
  state.sellerProducts = products;
}

export function setSingleSellerProduct(state, product) {
  state.singleSellerProduct = product;
}

export function ADD_TO_CART(state, { product, quantity }) {
  state.cart.push({
    product,
    quantity,
  });
}

export function saveBuyerToken(state, payload) {
  console.log(state);
  state.buyerToken = payload.token;
}
