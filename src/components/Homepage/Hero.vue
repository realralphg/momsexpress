<template>
  <div class="hero" style="padding: 2% 5% 1%">
    <!-- Categories Section -->
    <Categories class="q-pa-none border_radius hide_me height" />

    <!-- Carousel two  -->
    <q-carousel
      v-model="slide"
      infinite
      transition-prev="slide-right"
      transition-next="slide-left"
      animated
      navigation
      :autoplay="5000"
      class="bg-white border_radius height"
    >
      <q-carousel-slide
        :name="1"
        img-src="/Homepage/glasses.jpg"
        class="q-pa-none"
      >
        <!-- <div style="background:rgb(0, 0, 0, 0.4);height:100%">
             <div class="absolute-left custom-caption" style="width:50%;">
                <div class="text-h2 text-bold text-white">Get 30% off Glass Purchase.</div>
                <div class="text-subtitle1 text-white q-my-xl " style="width:70%">
                  Get into the Glass Store to get nice and Fittings Eye-glasses of your choice
                </div>
                 <q-btn bordered  color="primary" class="">SHOP NOW</q-btn>

              </div>
          </div> -->
      </q-carousel-slide>

      <q-carousel-slide
        :name="2"
        img-src="/Homepage/black-headphones-digital-device.jpg"
        class="q-pa-none"
      >
        <!-- <div style="background:hwb(0 100% 0% 70%);height:100%">
             <div class="absolute-left custom-caption" style="width:50%;">
                <div class="text-h2 text-bold text-white">Feel the Heat <br> be The Beat </div>
                <div class="text-subtitle1 text-white q-my-xl " style="width:70%">Offer customers personalized service,
              flexible shopping, and painless returns.</div>
                <q-btn bordered  color="primary" class="">SHOP NOW</q-btn>
              </div>
          </div> -->
      </q-carousel-slide>

      <q-carousel-slide
        :name="3"
        img-src="/Homepage/bracelet.jpg"
        class="q-pa-none"
      >
        <!-- <div style="background:hwb(0 100% 0% 70%);height:100%">
             <div class="absolute-left custom-caption" style="width:50%;">
                <div class="text-h2 text-bold text-white">Feel the Heat <br> be The Beat </div>
                <div class="text-subtitle1 text-white q-my-xl " style="width:70%">Offer customers personalized service,
              flexible shopping, and painless returns.</div>
                <q-btn bordered  color="primary" class="">SHOP NOW</q-btn>
              </div>
          </div> -->
      </q-carousel-slide>

      <q-carousel-slide
        :name="4"
        img-src="/Homepage/lights.jpg"
        class="q-pa-none"
      >
        <!-- <div style="background:hwb(0 100% 0% 70%);height:100%">
             <div class="absolute-left custom-caption" style="width:50%;">
                <div class="text-h2 text-bold text-white">Feel the Heat <br> be The Beat </div>
                <div class="text-subtitle1 text-white q-my-xl " style="width:70%">Offer customers personalized service,
              flexible shopping, and painless returns.</div>
                <q-btn bordered  color="primary" class="">SHOP NOW</q-btn>
              </div>
          </div> -->
      </q-carousel-slide>
    </q-carousel>

    <!-- Advertisement  -->
    <div class="q-pa-none border_radius hide_me height">
      <q-img
        loading="eager"
        src="/Homepage/watch4.jpg"
        class="border_radius height"
      />
    </div>
  </div>
</template>

<script>
import { defineComponent } from "vue";
import { ref } from "vue";
import Categories from "./Categories.vue";
export default {
  name: "Hero",
  setup() {
    return {
      slide: ref(1),
      autoplay: ref(true),
    };
  },
  components: { Categories },
};
</script>

<style scoped>
.hero {
  display: grid;
  grid-template-columns: 20% 55% 25%;
  grid-gap: 15px;
}

.border_radius {
  border-radius: 8px;
}

.height {
  /* height: 60vh; */
  height: 100%;
}

@media screen and (max-width: 830px) {
  .height {
    height: 40vh !important;
  }

  .hide_me {
    display: none;
  }

  .hero {
    display: block;
  }
}

@media screen and (max-width: 441px) {
  .height {
    height: 27vh;
  }
}
</style>
