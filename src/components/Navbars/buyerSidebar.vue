<template>
  <q-page v-if="!cartItems[0]" class="column flex-center">
    <div class="text-center text-primary text-h5 text-bold">
      No Item in cart
    </div>
    <q-icon name="shopping_cart" size="3rem" color="primary" />
  </q-page>
  <div class="q-pa-md">
    <div class="scroll">
      <div v-if="cartItems[0]">
        <div
          class="row bg-white cart_item q-mb-lg"
          v-for="item in cartItems"
          :key="item._id"
        >
          <q-img
            loading="eager"
            :src="item.product.img[0].url"
            class="col-5 cart_item_image"
          />
          <div class="col-7 q-px-xs text-black relative-position">
            <div class="text-bold">{{ item.product.name }}</div>
            <div class="text-caption">
              N{{ item.product.price * item.quantity }}
            </div>
            <div class="row absolute-bottom q-mb-sm">
              <q-btn
                icon="remove"
                @click="decrement(item.product)"
                :disable="item.quantity <= 1"
                size="0.6rem"
                class="q-mr-sm button"
                round
                dense
                flat
                color="primary"
              />
              <input v-model="item.quantity" class="text-center" />
              <q-btn
                icon="add"
                @click="increment(item.product)"
                size="0.6rem"
                class="q-ml-sm button"
                round
                dense
                flat
                color="primary"
              />
            </div>
          </div>
          <q-btn
            label="Remove"
            @click="deleteProduct(item.product)"
            no-caps
            style="width: 100%"
            size="0.8rem"
            icon="delete"
            outline
            color="primary"
            class="q-mx-auto"
          />
        </div>
        <!-- CheckOut Section -->
        <div
          v-show="cartItems[0]"
          class="bg-grey-1 text-black text-caption q-py-md"
        >
          <div class="text-h6 text-center text-bold">Total Price Details</div>
          <div class="row justify-between q-px-sm">
            <span>No. of Items</span>
            <span class="text-bold"> {{ numberOfItemsInCart }}</span>
          </div>
          <div class="row justify-between q-px-sm">
            <span>Shipping Fee</span> <span class="text-bold"> N0 </span>
          </div>
          <q-separator spaced />
          <div class="row justify-between q-px-sm">
            <span>Total Amount</span>
            <span class="text-bold"> {{ total }} </span>
          </div>
          <q-btn
            label="Checkout"
            :to="!userLoggedIn ? '/login' : '/checkout'"
            @click="setTotalLocal(total)"
            push
            color="primary"
            text-color="secondary"
            style="width: 100%"
            class="q-my-sm"
          />
          <div class="row justify-between q-px-sm">
            <span>Estimated Delivery Date</span> <br />
            <span class="text-bold">4th May 2022 </span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { watch } from "@vue/runtime-core";
import { mapGetters } from "vuex";

export default {
  name: "buyerSidebar",
  data() {
    return {};
  },
  computed: {
    userLoggedIn() {
      return this.$store.getters["moduleExample/user"];
    },
    cartItems() {
      return JSON.parse(JSON.stringify(this.$store.state.moduleExample.cart));
    },
    total() {
      return this.cartItems.reduce(function (sum, item) {
        return sum + item.product.price * item.quantity;
      }, 0);
    },
    numberOfItemsInCart() {
      return this.cartItems.length;
    },
    ...mapGetters(["getCartItems"]),
  },
  methods: {
    increment(product) {
      this.$store.dispatch("moduleExample/cartItemIncrement", { product });
    },
    decrement(product) {
      this.$store.dispatch("moduleExample/cartItemDecrement", { product });
    },

    deleteProduct(product) {
      this.$store.dispatch("moduleExample/deleteCartItem", { product });
    },
    setTotalLocal(total) {
      localStorage.setItem("cartTotal", total);
    },
  },
  created() {
    // console.log(this.products);
  },
};
</script>

<style scoped>
.scroll {
  white-space: nowrap;
  position: relative;
  overflow-y: scroll;
  overflow-x: hidden;
  -webkit-overflow-scrolling: touch;
  -ms-overflow-style: none; /* hiding the scrollbar for Internet Explorer, Edge */
  scrollbar-width: none; /* hiding the scrollbar for Firefox */
}
.cart_item {
  border-radius: 2%;
}
.cart_item_image {
  height: 90px;
  border-radius: 2% 0 0 0;
}
input {
  width: 25%;
  /* height: 25%; */
}
</style>
