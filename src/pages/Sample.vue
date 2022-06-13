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

  <div class="row checkout">
    <div
      class="column q-col-gutter-sm col-lg-8 col-md-8 col-sm-12 col-xs-12"
      style="margin: 0 auto; min-height: 70vh"
    >
      <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
        <div class="shit column q-py-lg bg-grey-1">
          <div class="text-center text-bold text-h5 text-uppercase">
            Checkout
          </div>

          <div class="q-pa-md">
            <q-stepper
              v-model="step"
              ref="stepper"
              color="primary"
              animated
              style="max-width: 100%"
            >
              <q-step
                :name="1"
                title=" Shipping"
                icon="delivery_dining"
                :done="step > 1"
              >
                <div>
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
                    Lorem street, ipsium area, lorem and ipsium region. ipsium
                    state, Nigeria
                  </div>
                </div>
              </q-step>

              <q-step
                :name="2"
                title="Payment"
                icon="payments"
                :done="step > 2"
              >
                <q-form class="q-gutter-md">
                  <div class="row justify-between">
                    <div class="q-my-auto text-subtitle1 text-bold">
                      {{ email }}
                    </div>
                    <div class="text-right text-bold text-h5 q-my-md">
                      N {{ amount }}
                    </div>
                  </div>

                  <div class="q-mb-md">
                    <label for="" class="text-primary text-bold text-caption">
                      Name on Card</label
                    >
                    <q-input
                      v-model="fullName"
                      outlined
                      color="primary"
                      bg-color=""
                    />
                  </div>

                  <q-btn
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
                  </q-btn>

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

                  <label for="" class="text-primary text-caption text-bold"
                    >Card Information</label
                  >
                  <q-input
                    outlined
                    color="primary"
                    square
                    placeholder="1234 1234 1234 1234"
                    bg-color=""
                  />
                  <div class="row q-mb-md justify-between">
                    <div class="card-input">
                      <q-input
                        placeholder="MM/YY"
                        square
                        outlined
                        color="primary"
                        bg-color=""
                      />
                    </div>

                    <div class="card-input">
                      <q-input
                        placeholder="CVV"
                        square
                        outlined
                        color="primary"
                        bg-color=""
                      >
                        <template v-slot:append>
                          <q-icon name="credit_card" />
                        </template>
                      </q-input>
                    </div>
                  </div>
                  <div>
                    <div class="tick_box row text-primary">
                      <div class="q-gutter-sm">
                        <q-checkbox
                          v-model="customModel"
                          color="primary"
                          true-value="yes"
                          false-value="no"
                        />
                      </div>
                      <div class="q-ml-xs q-my-auto text-caption text-bold">
                        Save card info
                      </div>
                    </div>

                    <!-- <div class="row">
                      <q-space />
                      <q-btn
                        label="Pay"
                        no-caps
                        style="width: 60%"
                        size="1.15rem"
                        class="button q-my-lg"
                        color="primary"
                      />
                      <q-space />
                    </div> -->
                  </div>
                </q-form>
              </q-step>

              <!-- <q-step :name="3" title="Order Summary" icon="summarize">
                Try out different ad text to see what brings in the most
                customers, and learn how to enhance your ads using features like
                ad extensions. If you run into any problems with your ads, find
                out how to tell if they're running and how to resolve approval
                issues.
              </q-step> -->

              <template v-slot:navigation>
                <q-stepper-navigation>
                  <q-btn
                    v-if="step === 1"
                    @click="$refs.stepper.next()"
                    color="secondary"
                    text-color="white"
                    label="Next"
                  />
                  <q-btn
                    v-if="step === 2"
                    @click="paystackPayment() || $refs.stepper.next()"
                    color="secondary"
                    text-color="white"
                    label="Pay Now"
                  />
                  <q-btn
                    v-if="step === 3"
                    @click="
                      step === 2
                        ? paystackPayment() || $refs.stepper.next()
                        : $refs.stepper.next()
                    "
                    color="secondary"
                    text-color="white"
                    label="Finish"
                  />
                  <q-btn
                    v-if="step > 1"
                    flat
                    color="primary"
                    @click="$refs.stepper.previous()"
                    label="Back"
                    class="q-ml-sm"
                  />
                </q-stepper-navigation>
              </template>
            </q-stepper>
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
.checkout {
  width: 90%;
  margin: 0 auto;
  position: relative;
}
.row > div {
  padding: 0.5%;
}

.row + .row {
  margin-top: 1rem;
}

.shit {
  border-radius: 4px;
}
.card-input {
  width: 48%;
  margin: auto 0;
}
@media screen and (max-width: 400px) {
  .checkout {
    width: 100%;
  }
}
</style>
