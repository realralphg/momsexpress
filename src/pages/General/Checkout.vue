<template>
  <q-dialog v-model="inception">
    <q-card style="width: 70%">
      <q-card-section>
        <div class="text-h6">Select Addreess</div>
      </q-card-section>

      <q-card-section class="q-pt-none">
        <q-option-group v-model="group" :options="options" color="primary" />
      </q-card-section>

      <q-card-actions align="right" class="text-primary">
        <!-- <q-space/> -->
        <q-btn flat label="Create New Address" @click="secondDialog = true" />
        <q-btn flat label="Save" v-close-popup />
      </q-card-actions>
    </q-card>
  </q-dialog>

  <!-- Create New Address  -->
  <q-dialog
    v-model="secondDialog"
    persistent
    transition-show="scale"
    transition-hide="scale"
  >
    <q-card class="">
      <q-card-section>
        <div class="text-h6">New Address</div>
      </q-card-section>

      <q-card-section class="q-pt-none">
        <div class="row">
          <div class="col-6">
            <label for="" class="text-caption"> Full Contact Name</label>
            <q-input dense outlined class="col-6" />
          </div>

          <div class="col-6">
            <label for="" class="text-caption"> Phone Number</label>
            <q-input dense outlined class="col-6" />
          </div>

          <div class="col-12">
            <label for="" class="text-caption"> Delivery Address</label>
            <q-input dense outlined class="col-6" />
          </div>

          <div class="col-4">
            <label for="" class="text-caption"> Region/City</label>
            <q-input dense outlined class="col-6" />
          </div>

          <div class="col-4">
            <label for="" class="text-caption"> State</label>
            <q-input dense outlined class="col-6" />
          </div>

          <div class="col-4">
            <label for="" class="text-caption"> Country</label>
            <q-input dense outlined class="col-6" />
          </div>
        </div>
      </q-card-section>

      <q-card-actions align="right" class="">
        <q-btn label="Save" flat v-close-popup />
      </q-card-actions>
    </q-card>
  </q-dialog>

  <q-page class="bg-grey-2">
    <div class="q-py-lg column flex-center q-pt-lg">
      <div class="text-center text-bold text-h6 text-uppercase q-my-md">
        Confirmation of Order
      </div>

      <q-card class="q-pa-lg">
        <div class="text-subtitle1">
          <div class="row">
            <div class="text-bold text-h6 text-primary">Address</div>
            <q-space />
            <q-btn
              icon="edit"
              flat
              size="0.8rem"
              color="secondary"
              @click="inception = true"
              round
            >
              <q-tooltip anchor="bottom middle" self="center middle">
                Select Address
              </q-tooltip>
            </q-btn>
          </div>
          <div class="row text-bold text-subtitle1">
            <div>Tobi Ikupolati</div>
            <div class="q-mx-md">(09012345678)</div>
          </div>

          <div>Sabon Tasha, Kaduna South. Kaduna state, Nigeria</div>
        </div>
        <q-separator class="q-my-md" />

        <div class="">
          <div class="text-subtitle1 text-bold">Items</div>
          <div v-for="item in itemsInCart" :key="item.id">
            {{ item.quantity }} {{ item.product.name }}
          </div>
        </div>

        <q-separator class="q-my-md" />

        <div class="q-my-md text-bold text-h6 row items-center justify-between">
          <div>TOTAL:</div>
          <div class="text-subtitle1 text-bold">N {{ amount }}</div>
        </div>

        <div class="row">
          <q-space />
          <paystack
            style="width: 40%; border-radius: 8px; border: 1px solid #d56c33"
            class="q-pa-sm text-subtitle1 text-primary"
            buttonClass="'button-class  btn btn-primary'"
            buttonText="Make Payment"
            :publicKey="publicKey"
            :email="email"
            :amount="amount"
            :reference="reference"
            :onSuccess="onSuccessfulPayment"
            :onCanel="onCancelledPayment"
            :metadata="metadata"
          ></paystack>
          <q-space />
        </div>
      </q-card>
    </div>
  </q-page>
</template>
<script>
import paystack from "vue3-paystack";

export default {
  components: {
    paystack,
  },
  data() {
    return {
      itemsInCart: [],
      sellerId: "",
      discount: "0",
      //Paystack
      publicKey: "pk_test_285bb7525b2d3876efffce201f7a271d7c809839",
      amount: 1000000, //Expressed in lowest demonitation, so 1000kobo is equivalent to 10Naira
      email: "momsexpress@gmail.com",
      firstname: "MomS",
      lastname: "Express",
      metadata: {
        custom_fields: [
          {
            display_name: "Country",
            variable_name: "country_name",
            value: "Nigeria",
          },
          // {
          //   display_name: "Cart Items",
          //   variable_name: "cart_items",
          //   value: "",
          // },
          {
            display_name: "Delivery Address",
            variable_name: "address",
            value: "Sabon Tasha",
          },
        ],
      },
    };
  },

  computed: {
    reference: function () {
      let text;
      let randomRef = "";
      let characters =
        "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

      for (let i = 0; i < 15; i++)
        text += characters.charAt(
          Math.floor(Math.random() * characters.length)
        );

      return randomRef;
    },
  },
  methods: {
    channels() {
      return ["card"];
    },
    onSuccessfulPayment: function (response) {
      console.log(response);
      let data = {
        cart: JSON.stringify(this.itemsInCart),
        sellerId: this.sellerId,
        totalPrice: "100000",
        txnId: response.trans,
        txnReference: response.trxref,
        txnMessage: response.message,
        txnStatus: response.status,
        discount: this.discount,
        shippingAddress: this.metadata.custom_fields[1].value,
        trackingId: "1001111",
        trackingUrl: "https://www.google.com",
      };
      console.log(data.cart);
      console.log(JSON.parse(data.cart));
      this.$store.dispatch("moduleExample/createOrder", data);
      console.log("hello success");
      // localStorage.removeItem("cart");
    },
    onCancelledPayment: function () {
      console.log("Payment cancelled by user");
    },
    getCartDetailsLocalStorage() {
      let cart = localStorage.getItem("cart");
      cart = JSON.parse(cart);
      this.itemsInCart = cart;
      // let cartItemsStr = "";
      cart.forEach((item) => {
        this.sellerId = item.product.seller;
      });

      // cart.forEach((item, i) => {
      //   cartItemsStr +=
      //     item.product.name +
      //     `${
      //       i === cart.length - 2 ? " and " : i === cart.length - 1 ? "." : ", "
      //     }`;
      // });
      // this.metadata.custom_fields[1].value = cartItemsStr;
    },
  },
  mounted() {
    this.getCartDetailsLocalStorage();
    let cart = localStorage.getItem("cart");
    console.log(JSON.parse(cart));
  },
};
</script>
