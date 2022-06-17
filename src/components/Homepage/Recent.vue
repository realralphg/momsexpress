<template>
  <div class="master">
    <div
      class="row justify-between q-mx-auto q-my-md q-pl-md q-py-sm"
      style="border-bottom: 2px solid #003348"
    >
      <h5
        class="text-h5 text-bold q-my-auto text-primary homepage_heading_font"
      >
        Newly Added
      </h5>
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

    <div class="q-py-md card-container">
      <div
        class="bg-white card text-left"
        v-for="product in products"
        :key="product._id"
      >
        <!-- <q-card flat style="max-width: 300px">
          <q-skeleton height="150px" square />

          <q-card-section>
            <q-skeleton type="text" class="text-subtitle1" />
            <q-skeleton type="text" width="50%" class="text-subtitle1" />
            <q-skeleton type="text" class="text-caption" />
          </q-card-section>
        </q-card> -->
        <div class="main" @click="this.$router.push(`/details/${product._id}`)">
          <q-img style="" class="rounded-borders img" :src="product.img[0].url">
          </q-img>
          <div class="q-pa-sm">
            <div class="justify-between">
              <div class="text-subtitle1 text-bold product-title">
                {{ product.name }}
              </div>
              <div class="row">
                <q-rating
                  class=""
                  v-model="stars"
                  :max="5"
                  size="0.7rem"
                  color="orange-7"
                />
                <span class="q-my-auto text-right text-caption q-ml-xs"
                  >(4.8)</span
                >
              </div>
            </div>
            <div
              class="text-caption text-weight-bold text-grey ellipsis-2-lines"
            >
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam
              repellat consequuntur, laudantium eum, voluptate nam nemo minima
              qui aspernatur mollitia tenetur velit, esse maxime sapiente? Id
              iste placeat molestiae ipsam!
            </div>
            <div class="q-my-xs">
              <span class="text-bold">N2000</span
              ><span
                class="q-ml-sm text-grey-6"
                style="text-decoration: line-through"
                >N4000</span
              >
            </div>
          </div>
        </div>
        <!-- <ProductCard :product="product" /> -->
      </div>
    </div>
  </div>
</template>

<script>
import { ref } from "vue";
import ProductCard from "../../components/ProductCard.vue";

export default {
  name: "Recent",
  components: { ProductCard },
  data() {
    return {
      products: [],
      stars: 5,
    };
  },
  methods: {
    getProducts() {
      this.$store.dispatch("moduleExample/getProducts").then((response) => {
        this.products = response.docs;
      });
    },
  },
  mounted() {
    this.getProducts();
  },
};
</script>

<style scoped>
.main {
  cursor: pointer;
}
.add-btn {
  height: 15px;
  margin: auto 0;
}

.card {
  border-radius: 10px;
}
.img {
  height: 150px;
  width: 100%;
}
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
