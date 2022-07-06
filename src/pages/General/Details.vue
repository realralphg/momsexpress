<template>
  <q-page class="bg-grey-2 q-pt-lg padding-footer">
    <div class="row" style="padding: 0 4%" v-if="skeleton">
      <q-skeleton
        class="col-lg-5 col-md-5 col-sm-12 col-xs-12"
        height="350px"
      />
      <div class="col-lg-7 col-md-7 col-sm-12 col-xs-12 q-px-lg">
        <q-skeleton type="text" width="50%" height="50px" />
        <q-skeleton type="text" width="30%" height="30px" />
        <q-skeleton type="text" width="30%" height="30px" />
        <q-skeleton type="text" width="70%" height="180px" />
        <q-skeleton type="text" width="30%" height="30px" />
      </div>
    </div>

    <div class="row" v-if="!skeleton" style="padding: 0 4%">
      <div class="col-lg-5 col-md-5 col-sm-12 col-xs-12">
        <q-carousel
          swipeable
          animated
          v-model="slide"
          thumbnails
          infinite
          class="carousel"
        >
          <q-carousel-slide
            v-for="image in product.img"
            :key="image.key"
            :name="index"
            :img-src="image.url"
          />
        </q-carousel>
      </div>

      <div class="col-lg-7 col-md-7 col-sm-12 col-xs-12 q-px-lg details">
        <div class="row">
          <div
            class="center-details"
            :class="$q.platform.is.desktop ? '' : 'q-px-md'"
          >
            <div class="text-h6 text-grey-10 q-mt-sm q-pt-xs">
              {{ product.name }}
            </div>
            <div>
              <q-chip
                size="10px"
                class="text-weight-bold q-px-xs"
                square
                color="secondary"
                text-color="primary"
                icon-right="star"
              >
                4.4
              </q-chip>
              <span class="text-caption text-weight-bold text-grey-6"
                >6 Ratings & 2 Reviews</span
              >
            </div>

            <div
              class="text-subtitle2 text-grey text-secondary text-weight-bolder q-my-sm"
            >
              Description
            </div>

            <div
              class="text-subtitle2 q-mb-md q-pr-md text-justify description"
            >
              {{ description }}
            </div>

            <div>
              <div
                class="text-subtitle2 text-grey text-secondary text-weight-bolder q-mt-sm"
              >
                Price
              </div>
              <div class="row items-center">
                <span class="text-subtitle1">N{{ product.price }}</span
                ><span
                  class="q-ml-sm text-grey-6 text-subtitle1"
                  style="text-decoration: line-through"
                  v-if="discount !== 0"
                  >N{{ calDiscount }}</span
                >
                <q-chip
                  v-if="discount !== 0"
                  color="primary"
                  size="0.6rem"
                  class="text-bold text-white q-my-auto"
                >
                  {{ discount }}%
                </q-chip>
              </div>
            </div>

            <div class="q-mt-sm">
              <div class="text-caption text-secondary text-weight-bold">
                <span class="text-weight-light text-subtitle1"
                  >{{ product.qtyInStore }}
                </span>
                Items in stock.
              </div>
            </div>
            <div class="q-mt-md row items-center">
              <q-space />
              <q-btn
                rounded
                outline
                size="1rem"
                class="q-my-md cart-btn"
                color="primary"
                no-caps=""
                @click="addToCart(product)"
                icon="shopping_cart"
                label="Add to Cart"
              />
              <q-space />
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Comments -->
    <div class="row q-mt-sm">
      <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
        <div class="row">
          <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
            <q-list class="rounded-borders" style="padding: 0 4%">
              <div
                class="row justify-between q-mx-auto q-my-md q-pl-md q-py-sm"
                style="border-bottom: 2px solid #003348"
              >
                <h5
                  class="text-h5 text-bold q-my-auto text-primary homepage_heading_font"
                >
                  Reviews
                </h5>
              </div>

              <q-item
                v-ripple
                v-for="item in comments"
                :key="item._id"
                class="q-my-sm"
              >
                <q-item-section avatar>
                  <q-avatar>
                    <img src="https://cdn.quasar.dev/img/boy-avatar.png" />
                  </q-avatar>
                </q-item-section>

                <q-item-section>
                  <q-item-label lines="1">
                    <div>
                      {{ item.person.fullname }}
                    </div>
                  </q-item-label>
                  <q-item-label caption lines="2">
                    <div>
                      {{ item.comment }}
                    </div>
                  </q-item-label>
                </q-item-section>

                <q-item-section side top class="text-caption">
                  {{ item.time }}
                </q-item-section>
              </q-item>

              <div class="column q-mt-sm q-mb-xl">
                <div class="q-px-lg q-pt-lg q-pb-xs">
                  <q-input
                    bottom-slots
                    v-model="comment"
                    placeholder="Leave a comment about this product..."
                    type="textarea"
                    outlined
                  >
                  </q-input>
                </div>
                <div class="row q-px-lg justify-between">
                  <q-space />
                  <div>
                    <q-btn
                      unelevated
                      rounded
                      outline=""
                      color="primary"
                      @click="commentOnProduct()"
                      label="Post a  Comment"
                      no-caps
                    />
                  </div>
                </div>
              </div>
            </q-list>
          </div>
        </div>
      </div>
    </div>

    <Trending />
    <MoreProducts />
  </q-page>
</template>

<script>
import Trending from "src/components/Homepage/Trending.vue";
import MoreProducts from "src/components/Homepage/MoreProducts.vue";

export default {
  name: "details.vue",
  props: ["id"],
  components: { Trending, MoreProducts },
  data() {
    return {
      productId: this.$route.params.productId,
      product: {},
      description: "",
      discount: "",
      comment: "",
      comments: [],
      skeleton: true,

      slide: 1,
      tab: "Ratings",
      rating_point: 3.5,
      rat_5: 5,
      rat_4: 4,
      rat_3: 3,
      rat_2: 2,
      rat_1: 1,
    };
  },
  computed: {
    index() {
      for (let image of this.product.img) {
        return this.product.img.indexOf(image) + 1;
      }
    },
    win_width() {
      return this.$q.screen.width - 59;
    },
    win_height() {
      return this.$q.screen.height - 0;
    },
    calDiscount() {
      return this.product.price * (this.discount / 100) + this.product.price;
    },
    a() {
      return this.$route.params.productId;
    },
  },
  methods: {
    getSingleProduct() {
      let id = this.$router.currentRoute.value.params.productId;
      this.$store
        .dispatch("moduleExample/getSingleProduct", id)
        .then(async (response) => {
          if (response) {
            this.skeleton = false;
            this.product = response;
            this.description = response.desc.color;
            this.discount = response.desc.size;
            let userObject = await Promise.all(
              response.reviews.map(async (item) => {
                return await this.getSinglePerson(item.user);
              })
            );
            let commentArr = response.reviews.map((val, idx) => {
              return {
                comment: val.comments,
                time: val.createdAt.split("T")[0],
                person: userObject[idx],
              };
            });
            this.comments = commentArr;
          }
        });
    },
    async getSinglePerson(id) {
      return await this.$store.dispatch("moduleExample/getSingleSeller", id);
    },
    addToCart(product) {
      this.$store.dispatch("moduleExample/addProductToCart", {
        product: product,
        quantity: 1,
      });
    },
    commentOnProduct() {
      if (this.comment !== "") {
        this.$store.dispatch("moduleExample/commentOnProduct", {
          comment: this.comment,
          id: this.productId,
        });
      }
      this.comment = "";
    },
  },

  watch: {
    a: function () {
      this.getSingleProduct();
    },
  },
  created() {
    this.getSingleProduct();
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

@media screen and (max-width: 410px) {
  .padding-footer {
    padding-bottom: 19%;
  }
}

@media screen and (max-width: 345px) {
  .padding-footer {
    padding-bottom: 23%;
  }
}
.description {
  overflow: hidden;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 7;
}

.carousel {
  border-radius: 7px;
  height: 100%;
}

.center-details {
  width: 100% !important;
}

/* .cart-btn {
  width: 40%;
} */

@media screen and (min-width: 1024px) {
  .card-btn {
    width: 80% !important;
  }
}
@media screen and (max-width: 1024px) {
  .carousel {
    height: 50vh;
  }
  .details {
    padding: 0 !important;
  }
}
</style>
