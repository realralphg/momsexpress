function getCartFromStorage(){
  let cart = localStorage.getItem('cart');
  cart = cart === null ? [] : JSON.parse(cart);
  return cart
}


export default {
    products: [],
    cart: getCartFromStorage(),
    sellerToken: null,
    sellerProducts: [],
    singleSellerProduct: null,
    buyerToken: null,
  }

