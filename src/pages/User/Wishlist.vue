<template>
  <q-page class="q-mb-md">
    <div class="wishlist-main">
      <div class="heading text-primary text-bold text-center q-mt-md">
        WISHLISTS
      </div>
      <div
        class="row justify-center q-mt-md q-mx-md bg-grey-3"
        v-for="n in 4"
        :key="n"
      >
        <q-img
          class="col-lg-4 col-md-4 col-sm-3 col-xs-4"
          src="Homepage/speaker.jpg"
        />
        <div
          class="col-lg-8 col-md-8 col-sm-9 col-xs-8 q-py-sm body_text column justify-between"
        >
          <div>
            <div
              class="q-pl-sm text-bold text-subtitle1 row items-center align-items justify-between"
            >
              <div>Lorem</div>
              <q-btn icon="close" flat round dense />
            </div>
            <div class="q-pl-sm">Lorem description</div>
          </div>
          <div class="two row justify-between q-px-sm">
            <div class="">
              <div>Price</div>
              <div class="text-bold">N3000</div>
            </div>
            <q-btn
              label="Add to cart"
              flat
              class="button bg-primary"
              color="white"
              icon="shopping_cart"
              dense
            />
          </div>
        </div>
      </div>
    </div>

    <Trending class="hide" />
  </q-page>
</template>

<script>
import Trending from "src/components/Homepage/Trending.vue";
export default {
  components: { Trending },
  data() {
    return {};
  },
};
</script>

<style scoped>
.heading {
  font-size: 1.3rem;
}

.wishlist-main {
  padding: 0 15%;
}

.hide {
  display: none;
}
@media screen and (max-width: 851px) {
  .wishlist-main {
    padding: 0 12%;
  }
}

@media screen and (max-width: 771px) {
  .button {
    font-size: 0.8rem !important;
  }
  .hide {
    display: block;
  }
}

@media screen and (max-width: 651px) {
  .wishlist-main {
    padding: 0;
  }
  .button {
    font-size: 0.7rem !important;
  }
}

@media screen and (max-width: 500px) {
  .button {
    font-size: 0.6rem !important;
  }
}

@media screen and (max-width: 370px) {
  .body_text {
    font-size: 0.7rem !important;
  }
}
</style>
