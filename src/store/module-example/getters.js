export const getProduct = (state) => {
  return state.products;
};

//Seller Products
export const getSellerProducts = (state) => {
  return state.sellerProducts;
};

export const getSingleSellerProduct = (state) => {
  return JSON.parse(JSON.stringify(state.singleSellerProduct));
};

///Cart System
export function cartItemCounter(state) {
  let cart = state.cart;
  return cart === null ? 0 : cart.length;
}

export function getCartItems(state) {
  return state.cart;
}
