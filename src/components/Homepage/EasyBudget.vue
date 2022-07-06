<template>
  <div v-if="products[0]" class="master">
    <div
      class="row justify-between q-mx-auto q-my-md q-pl-md q-py-sm"
      style="border-bottom: 2px solid #003348"
    >
      <h5
        class="text-h5 text-bold q-my-auto text-primary homepage_heading_font"
      >
        Easy Budget
      </h5>
      <q-btn
        color="primary"
        to="/category/easy_budget"
        class="q-pr-none"
        label="View all"
        icon-right="chevron_right"
        flat
        size="0.7rem"
      />
    </div>

    <div class="q-py-md card-container">
      <Skeleton :skeleton="skeleton" />
      <div
        class="bg-white card text-left"
        v-for="product in products"
        :key="product._id"
      >
        <div class="main" @click="this.$router.push(`/details/${product._id}`)">
          <q-img
            loading="eager"
            style=""
            class="rounded-borders img"
            :src="product.img[0].url"
          >
          </q-img>
          <div class="q-pa-sm">
            <div class="justify-between">
              <div class="text-subtitle1 ellipsis text-bold product-title">
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
              {{ product.desc.color }}
            </div>
            <div class="q-my-xs price">
              <span class="text-bold"
                >N{{
                  product.price - product.price * (product.desc.size / 100)
                }}</span
              >
              <span
                class="q-ml-sm text-grey-6"
                style="text-decoration: line-through"
                v-if="product.desc.size !== 0"
                >N{{ product.price }}</span
              >
              <q-chip
                size="0.5rem"
                color="primary"
                class="text-white q-ml-xs q-my-auto"
              >
                {{ product.desc.size }}%
              </q-chip>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { ref } from "vue";
import ProductCard from "../../components/ProductCard.vue";
import Skeleton from "../Skeleton.vue";

export default {
  name: "Recent",
  components: { ProductCard, Skeleton },
  data() {
    return {
      products: [],
      stars: 5,
      skeleton: ref(true),
    };
  },
  computed: {
    discount(product) {
      let discount = this.product.price * (this.product.desc.size / 100);
      return discount;
    },
  },
  methods: {
    getProducts() {
      this.$store
        .dispatch("moduleExample/getEasyBudgetCategory", 16000)
        .then((response) => {
          this.skeleton = false;
          this.products = response;
          this.products.splice(6, response.length - 1);
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
  .product-title {
    font-size: 0.9rem;
  }
  .price {
    font-size: 0.7rem;
  }
}

@media screen and (max-width: 415px) {
  .card-container {
    grid-template-columns: repeat(6, 47%);
  }
}

@media screen and (max-width: 330px) {
  .card-container {
    grid-template-columns: repeat(6, 47%);
  }
}
</style>
