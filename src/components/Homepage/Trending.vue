<template>
  <div class="master">
    <div
      class="row justify-between q-mx-auto q-my-md q-pl-md q-py-sm"
      style="border-bottom: 2px solid #003348"
    >
      <h5
        class="text-h5 text-bold q-my-auto text-primary homepage_heading_font"
      >
        Trending
      </h5>
      <q-btn
        color="primary"
        to="/shop"
        class="q-pr-none"
        label="View all"
        icon-right="chevron_right"
        flat
        size="0.7rem"
      />
    </div>

    <div class="q-py-md card-container">
      <div
        class="bg-white card text-left"
        v-for="product in products"
        :key="product.id"
      >
        <ProductCard :product="product" />
      </div>
    </div>
  </div>
</template>

<script>
import { ref } from "vue";
import ProductCard from "../../components/ProductCard.vue";

const images = [
  {
    name: "Suit",
    image: "/books.jpg",
  },
  {
    name: "Female shoe",
    image: "/camera.jpg",
  },
  {
    name: "MacBook",
    image: "/laptop.jpg",
  },
  {
    name: "T-shirts",
    image: "/shirts.jpg",
  },
  {
    name: "Watch",
    image: "/watch.jpg",
  },

  {
    name: "Speaker",
    image: "/speaker.jpg",
  },
];

export default {
  name: "Trending",
  components: { ProductCard },
  data() {
    return {
      products: images,
    };
  },
};
</script>

<style>
.master {
  padding: 0 4%;
}
.card-container {
  display: grid;
  gap: 8px;
  grid-auto-flow: row;
  grid-template-columns: repeat(6, 1fr);
  position: relative;
  -ms-overflow-style: none; /* hiding the scrollbar for Internet Explorer, Edge */
  scrollbar-width: none; /* hiding the scrollbar for Firefox */
}

.card-container::-webkit-scrollbar {
  display: none; /* hiding the scrollbar for Chrome, Safari, and Opera */
}
@media screen and (max-width: 830px) {
  .card-container {
    grid-template-columns: repeat(6, 22%);
    width: 100%;
    white-space: nowrap;
    position: relative;
    overflow-x: scroll;
    overflow-y: hidden;
    -webkit-overflow-scrolling: touch;
    -ms-overflow-style: none; /* hiding the scrollbar for Internet Explorer, Edge */
    scrollbar-width: none; /* hiding the scrollbar for Firefox */
  }
}

@media screen and (max-width: 700px) {
  .card-container {
    grid-template-columns: repeat(6, 30%);
  }
}

@media screen and (max-width: 470px) {
  .card-container {
    grid-template-columns: repeat(6, 40%);
  }
}

@media screen and (max-width: 330px) {
  .card-container {
    grid-template-columns: repeat(6, 46%);
  }
}
</style>
