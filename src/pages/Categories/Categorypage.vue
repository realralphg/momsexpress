<template>
  <q-page class="bg-grey-2 padding-footer">
    <div class="row" style="height: 100%">
      <div class="hide-cat" style="border-right: 1px solid lightgrey">
        <div class="category bg-white border_radius q-pt-md q-pb-none q-px-md">
          <div class="q-mb-md text-h6 text-primary text-bold">Categories</div>
          <nav @mouseleave="show = false" class="primary-navigation">
            <div class="q-pl-sm" v-for="n in 13" :key="n">
              <div class="row items-center q-my-sm" v-if="skeleton">
                <q-skeleton type="QAvatar" size="1rem" animation="fade" />
                <q-skeleton type="text" width="70%" class="text-subtitle1" />
              </div>
            </div>

            <ul v-for="item in categories" :key="item.id">
              <li class="q-pl-sm">
                <a
                  @mouseenter="show = true"
                  @click="this.$router.push(`/category/${item.name}`)"
                  class="text-primary text-bold text-caption row items-center ellipsis"
                >
                  <img :src="item.icon" class="q-mr-xs image" />
                  {{ item.name }}
                </a>
              </li>
            </ul>
          </nav>
          <div class="bg-grey-3 q-mt-lg border-rad">
            <div class="text-center">
              <div class="text-bold text-h6 q-my-sm">Want to own a Shop?</div>
              <q-btn
                to="/seller/Signup"
                label="Register Now!"
                color="primary"
                outline
                rounded
                class="reg-btn"
              />
            </div>
          </div>
        </div>
      </div>

      <div class="bg-grey-2 products">
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
    getCategories() {
      this.$store.dispatch("moduleExample/getCategories").then((response) => {
        this.skeleton = false;
        this.categories = response.categories;
      });
    },
  },
  mounted() {
    this.getCategories();
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
.border-rad {
  border-radius: 15px;
  padding: 5%;
}

.hide-cat {
  width: 24%;
}

.products {
  width: 75%;
}

.reg-btn {
  animation: beat 1.4s infinite alternate;
  transform-origin: center;
}
.reg-btn:hover {
  background-color: #d56c33 !important;
  color: white !important;
}

@keyframes beat {
  to {
    transform: scale(1.2);
  }
}
.image {
  font-size: 20px !important;
}
@media screen and (max-width: 830px) {
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
  grid-template-columns: repeat(4, 1fr);
}

@media screen and (max-width: 975px) {
  .hide-cat {
    width: 30%;
  }
  .products {
    width: 70%;
  }
  .card-container {
    grid-template-columns: repeat(3, 1fr);
  }
}

@media screen and (max-width: 930px) {
  .card-container {
    grid-template-columns: repeat(3, 1fr);
  }
}

@media screen and (max-width: 830px) {
  .card-container {
    grid-template-columns: repeat(4, 1fr);
  }
  .hide-cat {
    display: none;
  }

  .products {
    width: 100%;
  }
  .padding-footer {
    padding-bottom: 12%;
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

ul {
  padding: 0;
}

li {
  margin: auto 0;
}

.category {
  height: 100%;
  position: relative;
  margin: 0;
}

nav.primary-navigation {
  margin: 0 auto;
  text-align: left;
}

.primary-navigation ul {
  padding: 0;
  margin: auto 0;
}
nav.primary-navigation ul li {
  margin: 3% 0;
  display: inline-block;
  text-decoration: none;
}
nav.primary-navigation li a {
  color: black;
}

nav.primary-navigation li:hover {
  cursor: pointer;
}

.dropdown {
  visibility: visible;
  opacity: 0.9;
  display: flex;
  height: 100%;
  position: absolute;
  top: 0;
  left: 100%;
  width: 285%;
  text-align: left;
  padding-top: 20px;
  box-shadow: 0px 1px 2px -1px #ccc;
  background-color: white;
  z-index: 1;
}
.dropdown li {
  clear: both;
  width: 100%;
  text-align: left;
  margin-bottom: 20px;
  border-style: none;
}
.dropdown li a:hover {
  padding-left: 10px;
  border-left: 2px solid #3ca0e7;
  transition: all 0.3s ease;
}
a {
  text-decoration: none;
}
a:hover {
  color: #3ca0e7;
}
.dropdown li a {
  transition: all 0.5s ease;
}
</style>
