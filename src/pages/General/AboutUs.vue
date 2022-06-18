<template>
  <q-page style="padding: 2% 15%">
    <div>
      <div class="text-h5 text-primary text-bold q-my-sm">About Us</div>
      <div>
        We are the number one marketplace in Nigeria that brings both sellers
        and buyers nearby all without any middlemen interfering. We believe in a
        singular marketplace where all sellers and buyers have unhindered access
        to each other.
      </div>
    </div>

    <div class="grid">
      <div class="text-center q-my-md">
        <q-icon name="fa-regular fa-bags-shopping" size="2.5rem" />
        <div class="text-bold text-subtitle1 q-my-sm">
          Great Shopping Experience
        </div>
        <div>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum
          asperiores excepturi quasi animi assumenda
        </div>
      </div>

      <div class="text-center q-my-md">
        <q-icon name="add" size="2.5rem" />
        <div class="text-bold text-subtitle1 q-my-sm">Variety of products</div>
        <div>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum
          asperiores excepturi quasi animi assumenda
        </div>
      </div>

      <div class="text-center q-my-md">
        <q-icon name="add" size="2.5rem" />
        <div class="text-bold text-subtitle1 q-my-sm">Fast Delivery</div>
        <div>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum
          asperiores excepturi quasi animi assumenda
        </div>
      </div>

      <div class="text-center q-my-md">
        <q-icon name="add" size="2.5rem" />
        <div class="text-bold text-subtitle1 q-my-sm">Easy Payment</div>
        <div>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum
          asperiores excepturi quasi animi assumenda
        </div>
      </div>
    </div>

    <div>
      <div class="text-h5 text-primary text-bold q-mt-lg">Connect with Us</div>
      <div class="row q-mt-md">
        <q-icon
          class="q-mr-sm cursor-pointer icon"
          size="2.5rem"
          color="secondary"
          name="facebook"
        />
        <q-icon
          class="q-mr-sm cursor-pointer icon"
          size="2.5rem"
          color="secondary"
          name="eva-twitter"
        />
        <q-icon
          class="q-mr-sm cursor-pointer icon"
          size="2.5rem"
          color="secondary"
          name="eva-linkedin"
        />
      </div>
    </div>

    <div class="q-my-md">
      <div class="text-h5 text-primary text-bold q-mt-lg text-center">
        Frequently Asked Questions
      </div>
      <div class="text-bold q-my-sm">What are my payment options?</div>
      <div>
        There are two primary modes of payment and that is payment on delivery
        either by cash or with a card, or you can pay ahead of delivery and
        collect your item once it gets to your doorstep.
      </div>

      <div class="text-bold q-my-sm">Are there any pick-up stations?</div>
      <div>
        We have pick-up stations all over Nigeria and all you have to do to find
        one is input your location and select the “a pickup station near you
        option” before checking out.
      </div>

      <div class="text-bold q-my-sm">Is there a return policy?</div>
      <div>
        Yes, we do click here to read out our full out return and refund policy,
        but all in all, if a product is found to be defective there is a
        seven-day return window and it should take about five working days for
        you to receive a refund on your purchase.
      </div>
    </div>

    <div style="width: 50%; margin: 0 auto">
      <div class="text-h5 text-primary text-bold q-mt-lg text-center">
        Contact Us
      </div>
      <div class="text-center q-mb-md">Send Us Message Today</div>
      <div class="">
        <div class="q-pb-sm">
          <div class="row justify-between">
            <q-input
              class="q-mb-lg"
              outlined
              v-model="text"
              type="text"
              placeholder="First Name"
              style="width: 100%"
            />

            <q-input
              class="q-mb-lg"
              outlined
              v-model="text"
              type="email"
              placeholder="E-mail"
              style="width: 100%"
            />
            <q-input
              class="q-mb-lg"
              type="textarea"
              outlined
              v-model="text"
              placeholder="Message"
              style="width: 100%"
            />
          </div>
          <!-- Submit Button -->
          <div class="row q-pb-lg">
            <q-space />
            <q-btn class="q-px-xl btn" outline rounded color="primary"
              >Send us message</q-btn
            >
            <q-space />
          </div>
        </div>
      </div>
    </div>
  </q-page>
</template>

<script>
export default {
  data() {},
};
</script>

<style scoped>
.grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 15px;
}
</style>
