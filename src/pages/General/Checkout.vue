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

  <div class="q-py-lg bg-grey-1 column flex-center q-mt-lg">
    <div class="text-center text-bold text-h5 text-uppercase q-my-md">
      Checkout
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

        <div>
          Lorem street, ipsium area, lorem and ipsium region. ipsium state,
          Nigeria
        </div>
      </div>
      <div class="text-bold text-h5 q-my-md">N {{ amount }}</div>

      <div class="text-center">
        <q-btn
          color="primary"
          class="text-center"
          :amount="amount * 100"
          :email="email"
          :paystackkey="PUBLIC_KEY"
          :reference="reference"
          :callback="processPayment"
          :close="close"
          :embed="false"
        >
          <i class="fas fa-money-bill-alt q-mr-xl"></i>
          Make Payment
        </q-btn>
      </div>

      <!-- <paystack
          :amount="amount * 100"
          :email="email"
          :paystackkey="PUBLIC_KEY"
          :reference="reference"
          :callback="processPayment"
          :close="close"
          :embed="false"
        >
          <i class="fas fa-money-bill-alt"></i>
          Make Payment
        </paystack> -->
    </q-card>
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
      customModel: ref("no"),
      PUBLIC_KEY: "pk_test_285bb7525b2d3876efffce201f7a271d7c809839",

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
