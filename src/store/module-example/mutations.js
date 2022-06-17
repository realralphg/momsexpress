import { Notify } from "quasar";

//Local storage function for storing cart
function updateLocalStorage(cart) {
  localStorage.setItem("cart", JSON.stringify(cart));
}

function wishlistLocalStorage(wishlist) {
  localStorage.setItem("wishlist", JSON.stringify(wishlist));
}

//Products Handling
export function setProducts(state, products) {
  state.products = products;
}

export function setCart(state, cart) {
  state.cart = cart;
  updateLocalStorage(state.cart);
}

export function setWishlist(state, wishlist) {
  state.wishlist = wishlist;
  updateLocalStorage(state.wishlist);
}

//Cart Handling
export function addToCart(state, { product, quantity }) {
  let productInCart = state.cart.find((item) => {
    return item.product._id === product._id;
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

export function cartItemIncrement(state, { product }) {
  let productInCart = state.cart.find((item) => {
    return item.product._id === product._id;
  });

  let products = [];
  if (productInCart) {
    products = state.cart.map((item) => {
      return item.product._id === product._id
        ? { ...item, quantity: item.quantity + 1 }
        : item;
    });
    state.cart = products;
  }

  updateLocalStorage(state.cart);
}

export function cartItemDecrement(state, { product }) {
  let productInCart = state.cart.find((item) => {
    return item.product._id === product._id;
  });

  let products = [];
  if (productInCart) {
    products = state.cart.map((item) => {
      return item.product._id === product._id
        ? { ...item, quantity: item.quantity - 1 }
        : item;
    });
    state.cart = products;
  }

  updateLocalStorage(state.cart);
}

export function deleteCartItem(state, { product }) {
  let productInCart = state.cart.find((item) => {
    return item.product._id === product._id;
  });

  let products = [];
  if (productInCart) {
    products = state.cart.filter((item) => item.product._id !== product._id);
    console.log(products);
    state.cart = products;
  }

  updateLocalStorage(state.cart);
}

export function addToWishlist(state, { product }) {
  let productInCart = state.wishlist.find((item) => {
    return item.product._id === product._id;
  });

  if (productInCart) {
    Notify.create({
      message: "Item Already in wishlist",
      color: "primary",
      position: "top",
    });
  } else {
    let wishlistCopy = [...state.wishlist];
    wishlistCopy.push({
      product,
    });
    console.log(wishlistCopy);
    state.wishlist = wishlistCopy;
  }

  wishlistLocalStorage(state.wishlist);
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
