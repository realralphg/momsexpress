<template>
  <div class="q-my-lg" style="padding: 0 4%">
    <div
      class="main row q-gutter-sm q-col-gutter no-wrap"
      style="overflow-x: hidden"
    >
      <div class="col-lg-6 col-md-6 col-sm-12 col-xs-12">
        <div
          class="row justify-between q-mx-auto q-my-md q-py-sm q-pl-md"
          style="border-bottom: 2px solid #003348"
        >
          <h5
            class="text-h5 text-bold q-my-auto text-primary homepage_heading_font"
          >
            Trending Products
          </h5>
          <q-btn
            color="primary"
            to="/category"
            class="q-pr-xs"
            label="View all"
            icon-right="chevron_right"
            flat
            size="0.7rem"
          />
        </div>
        <q-carousel
          v-model="latest_slides"
          transition-prev="slide-right"
          transition-next="slide-left"
          swipeable
          animated
          control-color="secondary"
          arrows
          height="40vh"
          class="rounded-borders"
        >
          <q-carousel-slide
            v-for="(val, idx) in [1, 2, 3]"
            :name="val"
            :key="idx"
            class="column no-wrap"
          >
            <div
              class="row fit justify-start items-center q-gutter-xs q-col-gutter no-wrap"
            >
              <div
                @click="$router.push('/details')"
                class="col-lg-4 col-md-4 col-sm-4 col-xs-4 cursor-pointer hover_border_grey text-left"
                v-for="n in 3"
                :key="n"
              >
                <q-img
                  style=""
                  class="rounded-borders"
                  src="/Homepage/shirts.jpg"
                  loading="eager"
                >
                </q-img>
                <div>Lorem Item</div>
                <div class="text-caption text-weight-bold text-primary">
                  Product Description
                </div>
                <div>
                  <span>N2000</span
                  ><span
                    class="q-ml-sm text-grey-6"
                    style="text-decoration: line-through"
                    >N4000</span
                  >
                </div>
              </div>
            </div>
          </q-carousel-slide>
        </q-carousel>
      </div>

      <div class="col-lg-6 col-md-6 col-sm-12 col-xs-12">
        <div
          class="row justify-between q-mx-auto q-pl-md q-my-md q-py-sm"
          style="border-bottom: 2px solid #003348"
        >
          <p class="text-h5 text-bold q-my-auto text-primary">
            Trending Products
          </p>
          <q-btn
            color="primary"
            to="/category"
            class="q-pr-none"
            label="View all"
            icon-right="chevron_right"
            flat
            size="0.7rem"
          />
        </div>
        <q-carousel
          v-model="latest_slide"
          transition-prev="slide-right"
          transition-next="slide-left"
          swipeable
          animated
          control-color="secondary"
          arrows
          height="40vh"
          class="rounded-borders"
        >
          <q-carousel-slide
            v-for="(val, idx) in [1, 2, 3]"
            :name="val"
            :key="idx"
            class="column no-wrap"
          >
            <div
              class="row fit justify-start items-center q-gutter-xs q-col-gutter no-wrap"
            >
              <div
                @click="$router.push('/details')"
                class="col-lg-4 col-md-4 col-sm-4 col-xs-4 cursor-pointer hover_border_grey text-left"
                v-for="n in 3"
                :key="n"
              >
                <q-img
                  style=""
                  class="rounded-borders"
                  src="/Homepage/laptop.jpg"
                  loading="eager"
                >
                </q-img>
                <div>Lorem Item</div>
                <div class="text-caption text-weight-bold text-primary">
                  Product Description
                </div>
                <div>
                  <span>N2000</span
                  ><span
                    class="q-ml-sm text-grey-6"
                    style="text-decoration: line-through"
                    >N4000</span
                  >
                </div>
              </div>
            </div>
          </q-carousel-slide>
        </q-carousel>
      </div>
    </div>
  </div>
</template>

<script>
import { ref } from "vue";

const images = [
  {
    name: "Suit",
    image: "/Homepage/books.jpg",
  },
  {
    name: "Female shoe",
    image: "/Homepage/camera.jpg",
  },
  {
    name: "MacBook",
    image: "/Homepage/laptop.jpg",
  },
  {
    name: "T-shirts",
    image: "/Homepage/shirts.jpg",
  },
  {
    name: "Watch",
    image: "/Homepage/watch.jpg",
  },
  //  {
  //   name: 'Suit',
  //   image: '/Homepage/suit.jpg',
  // },
  //  {
  //   name: 'Wardrobe',
  //   image: '/Homepage/wardrobe.jpg',
  // },
  //  {
  //   name: 'Television',
  //   image: '/Homepage/television.jpg',
  // },
  //  {
  //   name: 'Socks',
  //   image: '/Homepage/socks.jpg',
  // },
  //  {
  //   name: 'Light',
  //   image: '/Homepage/Lights.jpg',
  // },
  {
    name: "Speaker",
    image: "/Homepage/speaker.jpg",
  },
  //  {
  //   name: 'Pods',
  //   image: '/Homepage/pods.jpg',
  // },
];

export default {
  name: "Rename",
  components: {},
  data() {
    return {
      pictures: images,
      icon: ref(false),
      latest_slide: 1,
      latest_slides: 1,
    };
  },
};
</script>

<style scoped>
.lol {
  white-space: nowrap;
}
</style>
