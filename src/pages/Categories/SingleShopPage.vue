<template>
  <div class="row">
    <div
      class="col-lg-2 col-md-2 col-sm-12 col-xs-12"
      style="border-right: 1px solid lightgrey"
    >
      <q-card class="q-mr-sm no-shadow">
        <q-expansion-item
          expand-separator
          label="Filter By"
          class="text-grey-8 q-pa-md"
          :default-opened="value"
        >
          <q-scroll-area class="scroll">
            <q-card>
              <q-card-section>
                <transition-group
                  appear
                  enter-active-class="animated fadeInLeft"
                >
                  <q-list v-for="item in filters_list" :key="item.label">
                    <q-item-label
                      class="text-weight-bolder text-grey-9 q-pt-md q-pb-sm"
                      header
                      >{{ item.label }}</q-item-label
                    >
                    <q-item
                      class="q-pa-none"
                      v-for="it in item.items"
                      :key="it.model"
                      tag="label"
                      v-ripple
                      dense
                    >
                      <q-item-section side class="q-px-md text-caption">
                        <q-checkbox
                          @input="
                            (searched_results = []),
                              (show_load_more = false),
                              (log_offset = 0),
                              do_search()
                          "
                          dense
                          v-model="it[it.model]"
                        >
                          {{ it.label }}({{ it.count }})
                        </q-checkbox>
                      </q-item-section>
                    </q-item>
                    <q-item
                      class="q-py-none text-weight-bold text-indigo text-caption cursor-pointer"
                      style="min-height: 10px"
                    >
                      View All
                    </q-item>
                  </q-list>
                </transition-group>
              </q-card-section>
            </q-card>
          </q-scroll-area>
        </q-expansion-item>
      </q-card>
    </div>

    <div class="bg-grey-2 col-lg-10 col-md-10 col-sm-12 col-xs-12">
      <div class="shop_img relative-position">
        <div
          class="text-primary text-h4 text-bold text-center shop_name bg-white absolute-top"
        >
          <p class="q-my-auto absolute-center">Lorem Shop</p>
        </div>
      </div>
      <div class="q-py-md card-container" style="margin: 0 auto">
        <div
          class="bg-white col-lg-2 col-md-2 col-sm-3 col-xs-4 card text-left"
          v-for="product in products"
          :key="product.id"
        >
          <div
            class="main"
            @click="this.$router.push(`/details/${product._id}`)"
          >
            <q-img
              style=""
              class="rounded-borders img"
              :src="product.img[0].url"
            >
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
          <!-- <DetailedProductCard :product="product" /> -->
        </div>

        <!-- <q-card
          class="my-card col-lg-2 col-md-2 col-sm-3 col-xs-6 q-my-md"
          v-for="product in products"
          :key="product.id"
          style="cursor: pointer"
        >
          <q-img
            :src="`Homepage/${product.image}`"
            class="image"
            @click="$router.push('/details')"
          />
          <q-card-section class="card">
            <q-btn
              fab
              color="primary"
              icon="eva-shopping-cart-outline"
              class="absolute"
              style="top: 0; right: 12px; transform: translateY(-50%)"
              @click="addToCart(product.id)"
            />

            <div class="row no-wrap items-center">
              <div
                class="col text-subtitle2 ellipsis-2-lines text-grey-10"
                style="max-width: 80%"
                @click="$router.push('/details')"
              >
                {{ product.title }}
              </div>
            </div>
            <q-rating v-model="stars" :max="1" size="17px" color="orange-7" />
            <span class="q-ml-sm">4.8</span>
          </q-card-section>

          <q-card-section class="q-pt-none">
            <div class="row q-my-sm justify-between">
              <div class="row">
                <p class="q-my-auto text-bold text-h6">{{ product.price }}</p>
                <span
                  class="q-my-auto text-subtitle3 text-grey-6 q-mx-sm"
                  style="text-decoration: line-through"
                >
                  {{ product.price + product.price }}</span
                >
              </div>

            </div>
          </q-card-section>
        </q-card> -->
      </div>
    </div>
  </div>
</template>

<script>
import { ref } from "vue";
import DetailedProductCard from "../../components/DetailedProductCard.vue";

export default {
  name: "category.vue",
  data() {
    return {
      value: window.innerWidth >= 1024 ? true : false,
      products: [],

      class_val: "shadow-1 my-card",
      filters_list: [
        {
          label: "Discount",
          items: [
            {
              Product: false,
              count: 51,
              label: "50% or more",
              model: "Product",
            },
            {
              Product: false,
              count: 3,
              label: "40% or more",
              model: "Product",
            },
            {
              Product: false,
              count: 41,
              label: "30% or more",
              model: "Product",
            },
            {
              Product: false,
              count: 16,
              label: "20% or more",
              model: "Product",
            },
            {
              Product: false,
              count: 16,
              label: "10% or more",
              model: "Product",
            },
          ],
        },
        {
          label: "Sleeve",
          items: [
            {
              Period: false,
              count: 51,
              label: "3/4 Sleeve",
              model: "Period",
            },
            {
              Period: false,
              count: 3,
              label: "Full Sleeve",
              model: "Period",
            },
            {
              Period: false,
              count: 23,
              label: "Half Sleeve",
              model: "Period",
            },
            {
              Period: false,
              count: 65,
              label: "Short Sleeve",
              model: "Period",
            },
          ],
        },
        {
          label: "Size",
          items: [
            {
              AssetType: false,
              count: 51,
              label: "XXS",
              model: "AssetType",
            },
            {
              AssetType: false,
              count: 3,
              label: "XS",
              model: "AssetType",
            },
            {
              AssetType: false,
              count: 23,
              label: "S",
              model: "AssetType",
            },
            {
              AssetType: false,
              count: 65,
              label: "M",
              model: "AssetType",
            },
            {
              AssetType: false,
              count: 35,
              label: "L",
              model: "AssetType",
            },
            {
              AssetType: false,
              count: 23,
              label: "XL",
              model: "AssetType",
            },
            {
              AssetType: false,
              count: 12,
              label: "XXL",
              model: "AssetType",
            },
          ],
        },
      ],
    };
  },
  methods: {
    addToCart(id) {
      this.$store.dispatch("moduleExample/addProductToCart", {
        product: this.products[id - 1],
        quantity: 1,
      });
    },
    getSeller() {
      this.$store.dispatch("moduleExample/getProducts").then((response) => {
        // this.products = response.docs;
      });
    },
  },
  mounted() {
    // this.$store.dispatch("moduleExample/getProductsLocal");
    // this.getProducts();
  },
  components: { DetailedProductCard },
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
.shop_img {
  border-radius: 8px;
  margin: 0 auto;
  width: 100%;
  height: 20vh;
  background: url("/Homepage/black-friday-elements-assortment.jpg");
  background-size: cover;
  background-position: center;
  z-index: 1;
}
.shop_name {
  height: 100%;
  width: 40%;
  border-radius: 8px 0 0 8px;
  border-top: none;
  opacity: 0.7;
}
.card-container {
  padding: 2%;
  display: grid;
  gap: 8px;
  grid-auto-flow: row;
  grid-template-columns: repeat(5, 1fr);
}

@media screen and (max-width: 830px) {
  .card-container {
    grid-template-columns: repeat(4, 1fr);
  }
}

@media screen and (max-width: 650px) {
  .card-container {
    grid-template-columns: repeat(3, 1fr);
  }

  .add-btn {
    height: 10px;
    margin: auto 0;
  }
}

@media screen and (max-width: 470px) {
  .card-container {
    grid-template-columns: repeat(2, 1fr);
  }

  .product-title {
    font-size: 0.9rem !important;
  }
}

.scroll {
  height: 60vh;
}
</style>
