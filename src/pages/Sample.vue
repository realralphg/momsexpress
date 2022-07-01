<template>
  <q-page v-if="!cartItems[0]" class="column flex-center">
    <div class="text-center text-primary text-h5 text-bold">
      No Item in cart
    </div>
    <q-icon name="shopping_cart" size="3rem" color="primary" />
  </q-page>

  <div
    v-if="cartItems[0]"
    class="row"
    style="width: 90%; margin: 0 auto; position: relative"
  >
    <div
      class="column q-col-gutter-sm col-lg-8 col-md-8 col-sm-12 col-xs-12"
      style="margin: 0 auto"
    >
      <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
        <div class="column q-py-lg bg-grey-1">
          <div v-for="item in cartItems[0]" :key="item._id"></div>
          <div class="test row q-mt-sm q-py-xs q-px-sm">
            <q-img
              class="col-4 image"
              :src="`Homepage/${item.product.image}`"
            />

            <div class="col-8 column q-pb-md justify-between">
              <div>
                <div
                  class="q-pl-md text-bold text-subtitle1 row items-center align-items justify-between"
                >
                  <div>{{ item.product.title }}</div>
                  <q-btn
                    icon="close"
                    flat
                    round
                    dense
                    @click="deleteProduct()"
                  />
                </div>

                <div class="q-pl-md reduce_text" style="width: 80%">
                  {{ item.product.description }}
                </div>
              </div>

              <div class="two row justify-between q-pl-md">
                <div class="col-3 reduce_text">
                  <div>Price</div>
                  <div class="text-bold">
                    {{ item.product.price * item.quantity }}
                  </div>
                  <!-- <p>{{ item.quantity }}</p> -->
                </div>

                <div class="row col-9 justify-end">
                  <q-btn
                    icon="remove"
                    @click="decrement()"
                    size="1rem"
                    :disable="item.quantity <= 1"
                    class="q-mr-sm button"
                    round
                    dense
                    flat
                    color="primary"
                  />
                  <input v-model="item.quantity" class="text-center" />
                  <q-btn
                    icon="add"
                    @click="increment()"
                    size="1rem"
                    class="q-ml-sm button"
                    round
                    dense
                    flat
                    color="primary"
                  />
                </div>
              </div>
            </div>
          </div>
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
            @click="setTotalLocal(total)"
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
import paystack from "vue-paystack";

export default {
  name: "Cart",
  components: {
    paystack,
  },
  data() {
    return {
      amount: ref(null),
      fullname: ref(""),
      email: ref(""),
      step: ref(1),
      inception: ref(false),
      secondDialog: ref(false),
      group: ref("op1"),

      options: [
        {
          label: "Address 1",
          value: "op1",
        },
        {
          label: "Address 2",
          value: "op2",
        },
        {
          label: "Address 3",
          value: "op3",
        },
      ],
    };
  },
  computed: {
    reference() {
      let text = "";
      let possible =
        "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
      for (let i = 0; i < 10; i++)
        text += possible.charAt(Math.floor(Math.random() * possible.length));
      return text;
    },
  },
  methods: {
    paystackPayment() {
      console.log("For paystack");
    },
    processPayment: () => {
      window.alert("Payment recieved");
    },
    close: () => {
      console.log("You closed checkout page");
    },
  },
  mounted() {
    this.amount = localStorage.getItem("total");
    this.email = localStorage.getItem("buyerEmail");
    console.log(this.amount);
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
</style>
