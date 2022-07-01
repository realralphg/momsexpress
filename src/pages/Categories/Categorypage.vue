<template>
  <q-page class="bg-grey-2 padding-footer">
    <div class="row" style="height: 100%">
      <!-- <div
        class="col-lg-2 col-md-2 col-sm-12 col-xs-12"
        style="border-right: 1px solid lightgrey"
      >
        <q-card class="q-mr-sm no-shadow">
          <q-expansion-item
            expand-separator
            label="Filter "
            class="text-grey-8 q-pa-md"
            :default-opened="value"
          >
            <div>
              <q-card-section>
                <transition-group
                  appear
                  enter-active-class="animated fadeInLeft"
                >
                  <q-list v-for="item in filters_list" :key="item.label">
                    <q-item-label
                      class="text-weight-bolder text-grey-9 q-px-none q-pt-md q-pb-sm"
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
                      <q-item-section side class="text-caption">
                        <q-checkbox
                          @input="filterProduct(it.label)"
                          dense
                          v-model="it[it.model]"
                        >
                          {{ it.label }}
                        </q-checkbox>
                      </q-item-section>
                    </q-item>
                  </q-list>
                </transition-group>
              </q-card-section>
            </div>
          </q-expansion-item>
        </q-card>
      </div> -->

      <div class="bg-grey-2 col-lg-10 col-md-10 col-sm-12 col-xs-12">
        <div
          class="text-h5 text-primary text-capitalize text-bold q-px-md q-py-md"
        >
          {{
            categoryName[0] +
            " " +
            (categoryName[1] !== undefined ? categoryName[1] : "") +
            " " +
            (categoryName[2] !== undefined ? categoryName[2] : "") +
            " " +
            (categoryName[3] !== undefined ? categoryName[3] : "")
          }}
        </div>
        <div class="q-py-md card-container" style="margin: 0 auto">
          <Skeleton :skeleton="skeleton" />
          <div
            class="bg-white q-mb-md card text-left"
            v-for="product in products"
            :key="product.id"
          >
            <DetailedProductCard :product="product" />
          </div>
        </div>
      </div>
    </div>
  </q-page>
</template>

<script>
import { ref } from "vue";
import DetailedProductCard from "../../components/DetailedProductCard.vue";
import Skeleton from "src/components/Skeleton.vue";

export default {
  name: "category.vue",
  components: { DetailedProductCard, Skeleton },
  data() {
    return {
      value: window.innerWidth >= 1024 ? true : false,
      products: [],
      categoryName: "",
      skeleton: ref(true),
      filter: ref(""),

      class_val: "shadow-1 my-card",
      filters_list: [
        {
          label: "Price Range",
          items: [
            {
              Product: false,
              // count: 51,
              label: "50,000 - 100,000",
              model: "Product",
            },
            {
              Product: false,
              // count: 3,
              label: "35,000 - 49,000",
              model: "Product",
            },
            {
              Product: false,
              // count: 41,
              label: "20,000 - 34,000",
              model: "Product",
            },
            {
              Product: false,
              // count: 16,
              label: "6,000 - 19,000",
              model: "Product",
            },
            {
              Product: false,
              // count: 16,
              label: "< 5,000",
              model: "Product",
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
    getProducts() {
      this.$store
        .dispatch("moduleExample/getSingleCategory", this.categoryName)
        .then((response) => {
          console.log(response);
          this.skeleton = false;
          this.products = response;
        });
    },
    getEasyBudgetProducts() {
      this.$store
        .dispatch("moduleExample/getEasyBudgetCategory", 16000)
        .then((response) => {
          this.skeleton = false;
          this.products = response;
        });
    },
    getNewlyAdded() {
      this.$store.dispatch("moduleExample/getProducts").then((response) => {
        this.skeleton = false;
        this.products = response.docs;
        // console.log(this.products);
      });
    },
    getTrending() {
      this.$store
        .dispatch("moduleExample/getTrendingCategory")
        .then((response) => {
          this.skeleton = false;
          this.products = response;
        });
    },
    getMoreProducts() {
      this.$store.dispatch("moduleExample/getProducts").then((response) => {
        this.skeleton = false;
        this.products = response.docs.reverse();
      });
    },
    filterProduct(range) {
      console.log(range);
      let a = this.products.filter((item) => {
        if (item.price <= 25000) {
          return item;
        }
      });
      console.log(a);
    },
  },
  mounted() {
    let route = location.href.split("category/");
    this.categoryName = route[1];

    if (this.categoryName === "easy_budget") this.getEasyBudgetProducts();
    if (this.categoryName === "newly_added") this.getNewlyAdded();
    if (this.categoryName === "trending") this.getTrending();
    if (this.categoryName === "more_products") this.getMoreProducts();
    else this.getProducts();
    if (this.categoryName.includes("%20")) {
      this.categoryName = this.categoryName.split("%20");
    } else {
      this.categoryName = this.categoryName.split("_");
    }
  },
};
</script>

<style scoped>
@media screen and (max-width: 830px) {
  .padding-footer {
    padding-bottom: 12%;
  }
}

@media screen and (max-width: 530px) {
  .padding-footer {
    padding-bottom: 15%;
  }
}

@media screen and (max-width: 385px) {
  .padding-footer {
    padding-bottom: 20%;
  }
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
