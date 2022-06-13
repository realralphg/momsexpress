<template>
  <q-page v-if="!products[0]" class="column flex-center">
    <div class="text-center text-primary text-h5 text-bold">
      No Item in cart
    </div>
    <q-icon name="shopping_cart" size="3rem" color="primary" />
  </q-page>

  <div
    v-if="products[0]"
    class="row"
    style="width: 90%; margin: 0 auto; position: relative"
  >
    <div
      class="column q-col-gutter-sm col-lg-8 col-md-8 col-sm-12 col-xs-12"
      style="margin: 0 auto"
    >
      <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
        <div class="column q-py-lg bg-grey-1">
          <CartItem
            v-for="item in products"
            :key="item.id"
            :item="item"
            @delete="() => deleteProduct(item.product.id)"
            @increment="() => increment(item.product.id)"
            @decrement="() => decrement(item.product.id)"
          />
        </div>
      </div>
    </div>

    <div
      class="column q-col-gutter-sm col-lg-4 col-md-4 col-sm-12 col-xs-12"
      style="margin: 0 auto; position: sticky; top: 16%"
    >
      <div class="col-lg-8 col-md-6 col-sm-6 col-xs-12">
        <div class="q-py-md q-px-xl shit bg-grey-1">
          <div class="text-h6 text-center text-bold q-my-xs">
            Total Price Details
          </div>
          <div class="row justify-between">
            <span>No. of Items</span> <span> {{ numberOfItemsInCart }}</span>
          </div>
          <!-- <div class="row justify-between"> <span>Price</span> <span> N2000 </span> </div>                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             -->
          <div class="row justify-between">
            <span>Shipping Fee</span> <span> N0 </span>
          </div>
          <q-separator spaced />
          <div class="row justify-between">
            <span>Total Amount</span> <span> {{ total }} </span>
          </div>
          <q-btn
            label="Checkout"
            to="/checkout"
            @click="setPriceToLocal(total)"
            push
            color="primary"
            text-color="secondary"
            style="width: 100%"
            class="q-my-sm"
          />
          <div class="text-caption">
            Lorem ipsium and estimated delivery date or period
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { ref } from "vue";
import CartItem from "src/components/CartItem.vue";

export default {
  name: "Cart",
  props: ["num"],
  components: {
    CartItem,
  },
  data() {
    return {
      products: [],
    };
  },
  computed: {
    total() {
      return this.products.reduce(function (sum, item) {
        return sum + item.product.price * item.quantity;
      }, 0);
    },
    numberOfItemsInCart() {
      return this.products.length;
    },
  },
  methods: {
    increment(id) {
      this.products = this.products.map((item) => {
        return item.product.id === id
          ? { ...item, quantity: item.quantity + 1 }
          : item;
      });
      this.setCart();
    },
    decrement(id) {
      this.products = this.products.map((item) => {
        return item.product.id === id
          ? { ...item, quantity: item.quantity - 1 }
          : item;
      });
      this.setCart();
    },
    setCart() {
      this.$store.dispatch("moduleExample/setCart", this.products);
    },
    setPriceToLocal() {
      localStorage.setItem("total", this.total);
    },
    deleteProduct(id) {
      console.log(id);
      let products = this.$store.state.moduleExample.cart.filter(
        (item) => item.product.id !== id
      );
      this.products = products;
      this.setCart();
    },
  },
  mounted() {
    this.products = this.$store.getters["moduleExample/getCartItems"];
  },
};
</script>

<style scoped>
.row > div {
  padding: 0.5%;
}

.row + .row {
  margin-top: 1rem;
}

.shit {
  /* height: 100%; */
  /* background: red; */
  border-radius: 4px;
}
</style>
