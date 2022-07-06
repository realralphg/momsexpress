<template>
  <q-page v-if="!cartItems[0]" class="column flex-center">
    <div class="text-center text-primary text-h5 text-bold">
      No Item in cart
    </div>
    <q-icon name="shopping_cart" size="3rem" color="primary" />
  </q-page>
  <div class="q-pa-md bg-grey-2 padding-footer">
    <div v-if="cartItems[0]" class="">
      <div
        class="row justify-center cart_item q-mb-lg"
        v-for="item in cartItems"
        :key="item._id"
      >
        <q-img
          loading="eager"
          :src="item.product.img[0].url"
          class="cart_item_image"
        />
        <div class="cart-detail bg-white q-px-xs text-black relative-position">
          <div
            class="q-pl-sm text-bold text-subtitle1 row items-center align-items justify-between"
          >
            <div class="text-bold item-name">{{ item.product.name }}</div>
            <q-btn
              icon="delete"
              flat
              round
              dense
              color="primary"
              size="0.8rem"
              class="fixed-right-top"
              @click="deleteProduct(item.product)"
            />
          </div>
          <div class="q-pl-sm text-caption item-price">
            N{{ item.product.price * item.quantity }}
          </div>

          <div class="row q-pl-sm absolute-bottom q-my-sm">
            <q-btn
              icon="remove"
              @click="decrement(item.product)"
              :disable="item.quantity <= 1"
              size="0.7rem"
              class="q-mr-sm button"
              round
              dense
              flat
              color="primary"
            />
            <input v-model="item.quantity" class="text-center input" />
            <q-btn
              icon="add"
              @click="increment(item.product)"
              size="0.7rem"
              class="q-ml-sm button"
              round
              dense
              flat
              color="primary"
            />
          </div>
        </div>
        <!-- <q-btn
            label="Remove"
            @click="deleteProduct(item.product)"
            no-caps
            style="width: 100%"
            size="0.8rem"
            icon="delete"
            outline
            color="primary"
            class="q-mx-auto"
          /> -->
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
</template>

<script>
import { ref } from "vue";
import { mapGetters } from "vuex";

export default {
  name: "Cart",
  props: ["num"],
  components: {},
  data() {
    return {
      // products: [],
    };
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
  mounted() {
    this.products = this.$store.getters["moduleExample/getCartItems"];
  },
};
</script>

<style scoped>
.input {
  width: 15%;
}
.cart-item {
  padding: 0 5%;
}
.cart_item_image {
  height: 200px;
  width: 40%;
  border-radius: 2% 0 0 0;
}
.cart-detail {
  width: 40%;
}

.item-name {
  font-size: 1.4rem;
  max-width: 70%;
  line-height: 1.1;
}
.item-price {
  font-size: 1.1rem;
  margin-top: 2%;
}

@media screen and (max-width: 600px) {
  .cart-item {
    /* padding: 0 5%; */
  }
  .cart_item_image {
    height: 150px;
    width: 40%;
  }

  .item-name {
    font-size: 1.2rem;
  }
  .item-price {
    font-size: 1rem;
  }
}

@media screen and (max-width: 485px) {
  .cart-item {
    /* padding: 0 5%; */
  }
  .cart_item_image {
    height: 110px;
    width: 40%;
  }

  .item-name {
    font-size: 1rem;
  }
  .item-price {
    font-size: 0.8rem;
  }
}

@media screen and (max-width: 370px) {
  .cart-item {
    /* padding: 0 5%; */
  }
  .cart_item_image {
    height: 100px;
  }

  .cart-detail {
    width: 50%;
  }

  .input {
    width: 20%;
    font-size: 0.7rem;
    position: static;
    margin: 1% 0 0;
    height: 20px !important;
  }

  .button {
    font-size: 0.6rem !important;
  }

  .item-name {
    font-size: 0.8rem;
  }
  .item-price {
    font-size: 0.7rem;
    margin: 0.5% 0 0;
  }
}
.row > div {
  padding: 0.5%;
}

.row + .row {
  margin-top: 1rem;
}
@media screen and (max-width: 830px) {
  .padding-footer {
    padding-bottom: 15%;
  }
}

@media screen and (max-width: 550px) {
  .padding-footer {
    padding-bottom: 19%;
  }
}

@media screen and (max-width: 410px) {
  .padding-footer {
    padding-bottom: 25%;
  }
}

@media screen and (max-width: 320px) {
  .padding-footer {
    padding-bottom: 28%;
  }
}
</style>
