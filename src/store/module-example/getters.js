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

// export function getWishlist(state) {
//   return state.wishlist;
// }

export function user(state) {
  return state.user;
}

export function seller(state) {
  return state.seller;
}

export function overview(state) {
  return state.overview;
}
