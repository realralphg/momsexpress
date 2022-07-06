<template>
  <q-page class="padding-footer">
    <div style="height: 70vh" class="container">
      <div class="overlay flex flex-center text-white">
        <div class="text-center">
          <h2 class="text-h2 text-bold q-my-none">Become a seller Today</h2>
          <h4 class="text-h4 q-mb-lg q-mt-md">Get closer to your customers</h4>
          <q-btn
            color="primary"
            class="bg-white button"
            to="/seller/Signup"
            flat
            rounded
            label="SIGN UP"
            size="1.2rem"
          />

          <div class="figures"></div>
        </div>
      </div>
    </div>

    <WhatWeOffer />
    <Testimonial />
    <Faq />
    <Become />
  </q-page>
</template>

<script>
import { ref } from "vue";
import WhatWeOffer from "../../components/SellerLandingPage/HowItWorks.vue";
import Become from "../../components/SellerLandingPage/Become.vue";
import Testimonial from "../../components/SellerLandingPage/Testimonial.vue";
import Faq from "../../components/SellerLandingPage/Faq.vue";

export default {
  components: {
    WhatWeOffer,
    Become,
    Testimonial,
    Faq,
  },
  setup() {
    return {};
  },
};
</script>

<style scoped>
.container {
  position: relative;
  background-image: url("/Seller/mall_image.jpg");
  background-position: center;
  background-size: cover;
}

.overlay {
  position: absolute;
  height: 100%;
  width: 100%;
  background: rgb(0, 0, 0, 0.7);
}

.figures {
  position: absolute;
}

.button {
  width: 30%;
}

.button:hover {
  background-color: #d56c33 !important;
  color: white !important;
}

@media screen and (max-width: 630px) {
  .button {
    width: 40%;
    font-size: 1rem !important;
  }

  h2 {
    font-size: 3rem;
  }

  h4 {
    font-size: 1.8rem;
  }
}

@media screen and (max-width: 400px) {
  h2 {
    font-size: 2.5rem;
  }

  h4 {
    font-size: 1.5rem;
  }
}
@media screen and (max-width: 830px) {
  .padding-footer {
    padding-bottom: 10%;
  }
}

@media screen and (max-width: 500px) {
  .padding-footer {
    padding-bottom: 15%;
  }
}
</style>
