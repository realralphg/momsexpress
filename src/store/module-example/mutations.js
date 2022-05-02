export function someMutation (/* state */) {
}


export function saveSellerToken (state, payload) {
  console.log(state);
  state.sellerToken = payload.token;
}

export function logout(state){
  console.log("Logout commited")
  state.sellerToken = null
}









export function ADD_TO_CART (state, {product, quantity}) {
  state.cart.push({
    product,
    quantity
  })
}


export function saveBuyerToken (state, payload) {
  console.log(state);
  state.buyerToken = payload.token;
}
