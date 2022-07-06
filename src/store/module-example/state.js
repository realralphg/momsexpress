function getCartFromStorage() {
  let cart = localStorage.getItem("cart");
  cart = cart === null ? [] : JSON.parse(cart);
  return cart;
}

// function getWishlistFromStorage() {
//   let wishlist = localStorage.getItem("wishlist");
//   wishlist = wishlist === null ? [] : JSON.parse(wishlist);
//   return wishlist;
// }
const userDetails = localStorage.getItem("user");

export default {
  user: JSON.parse(userDetails),
  seller: null,
  cart: getCartFromStorage(),
  // wishlist: getWishlistFromStorage(),
  sellerToken: null,
  sellerProducts: [],
  singleSellerProduct: null,
  buyerToken: null,
  overview: null,
};
