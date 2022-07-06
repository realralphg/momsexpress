<template>
  <q-page class="bg-grey-2">
    <div class="row">
      <!-- <div
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
                  </q-list>
                </transition-group>
              </q-card-section>
            </q-card>
          </q-expansion-item>
        </q-card>
      </div> -->

      <div class="bg-grey-2 col-lg-12 col-md-12 col-sm-12 col-xs-12">
        <div class="shop_img relative-position">
          <div
            class="text-primary text-h4 text-bold text-center shop_name bg-white absolute-top"
          >
            <p class="q-my-auto absolute-center">{{ shopName }}</p>
          </div>
        </div>

        <q-page
          v-if="skeleton === false && noProduct === true"
          style="margin: 0 auto"
          class="column flex-center"
        >
          <div class="text-center text-primary text-h5 text-bold">
            No Item in this Shop
          </div>
          <q-icon name="shopping_cart" size="3rem" color="primary" />
        </q-page>

        <div class="q-py-md card-container" style="margin: 0 5%">
          <div
            v-for="n in 5"
            :key="n"
            :class="skeleton === false ? 'hide-skeleton' : ''"
          >
            <q-card flat v-show="skeleton">
              <q-skeleton height="150px" square />

              <q-card-section>
                <q-skeleton type="text" class="text-subtitle1" />
                <q-skeleton type="text" width="50%" class="text-subtitle1" />
                <q-skeleton type="text" class="text-caption" />
              </q-card-section>
            </q-card>
          </div>
          <div
            class="bg-white col-lg-2 col-md-2 col-sm-3 col-xs-4 card text-left"
            v-for="product in products"
            :key="product._id"
          >
            <div
              class="main"
              @click="this.$router.push(`/details/${product._id}`)"
            >
              <q-img
                loading="eager"
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
                      color="primary"
                      disable=""
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
                <div class="q-my-xs">
                  <span class="text-bold">{{ product.price }}</span
                  ><span
                    class="q-ml-sm text-grey-6"
                    style="text-decoration: line-through"
                    v-if="discount !== 0"
                    >{{ discount }}</span
                  >
                </div>
              </div>
            </div>
            <!-- <DetailedProductCard :product="product" /> -->
          </div>
        </div>
      </div>
    </div>
  </q-page>
</template>

<script>
import { ref } from "vue";
import DetailedProductCard from "../../components/DetailedProductCard.vue";
import axios from "axios";

export default {
  name: "category.vue",
  components: {},
  data() {
    return {
      value: window.innerWidth >= 1024 ? true : false,
      productsIds: [],
      products: [],
      image: "",
      stars: ref(4),
      skeleton: ref(true),
      shopName: "",
      noProduct: ref(false),

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
      ],
    };
  },
  computed: {
    discount() {
      let discount = this.product.price * (this.product.discount / 100);
      return discount;
    },
  },

  methods: {
    addToCart(id) {
      this.$store.dispatch("moduleExample/addProductToCart", {
        product: this.products[id - 1],
        quantity: 1,
      });
    },
    getSeller(id) {
      this.$store
        .dispatch("moduleExample/getSingleSeller", id)
        .then(async (response) => {
          console.log(response);
          this.shopName = response.store.name;
          let a;
          if (await !response.store.products[0]) {
            this.skeleton = false;
            this.noProduct = true;
          }
          a = await response.store.products.map((item) =>
            this.getSingleProduct(item)
          );
          // this.products = a;
          for await (let item of a) {
            this.product = item;
            this.skeleton = false;
            this.products.push(this.product);
            // console.log(this.product);
            for (let image of item.img) {
              this.image = image.url;
            }
          }
        });
    },
    getSingleProduct(id) {
      return new Promise((resolve, reject) => {
        axios({
          method: "GET",
          url: `https://moms-express.herokuapp.com/api/search/${id}`,
        })
          .then((response) => {
            if (response) {
              // this.product = response.data.data;
              // console.log(response.data.data);
              resolve(response.data.data);
            }
          })
          .catch((error) => {
            reject();
          });
      });
    },
  },
  mounted() {
    let route = location.href.split("shop/");
    this.productId = route[1];
    console.log(this.productId);
    this.getSeller(this.productId);
  },
  components: { DetailedProductCard },
};
</script>

<style scoped>
.hide-skeleton {
  display: none;
}
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
</style>
