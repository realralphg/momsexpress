<template>
  <div>
    <!-- Specification and Reviews  -->
    <div class="row q-mt-sm">
      <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
        <q-tabs
          v-model="tab"
          dense
          align="left"
          class="bg-primary text-white shadow-2"
          :breakpoint="0"
        >
          <q-tab name="Specifications" label="Specifications" />
          <q-tab name="Ratings & Reviews" label="Ratings & Reviews" />
        </q-tabs>
        <q-tab-panels style="border: 1px solid lightgrey" v-model="tab">
          <q-tab-panel name="Specifications">
            <!-- Product Image Carousel  -->
            <div
              style="margin-left: 5%"
              class="row"
              v-for="image in images"
              :key="image._id"
            >
              <div class="column col-lg-2 col-md-2 col-sm-3 col-xs-3 q-mr-lg">
                <img :src="image.url" style="width: 100%; height: 64px" />
                <q-btn
                  label="Change"
                  @click="imageModal = !imageModal"
                  no-caps
                  flat
                  color="white"
                  class="bg-blue"
                />

                <!-- Dialog for changing Image  -->
                <q-dialog v-model="imageModal">
                  <q-card>
                    <q-card-section>
                      <div class="text-h6">Upload new Image</div>
                    </q-card-section>

                    <q-card-section class="q-pt-none">
                      <!-- Pick images  -->
                      <q-file
                        v-model="newImage"
                        label="Attach File"
                        square
                        flat
                        use-chips
                        clearable
                        accept=".jpeg,.jpg,.png"
                        max-files="1"
                        max-file-size="5120000"
                      >
                        <template v-slot:prepend>
                          <q-icon name="attach_file" />
                        </template>
                      </q-file>
                    </q-card-section>

                    <q-card-actions align="right">
                      <q-btn
                        flat
                        label="Upload"
                        @click="changeImage(product._id, image.key)"
                        color="primary"
                        v-close-popup
                      />
                    </q-card-actions>
                  </q-card>
                </q-dialog>
              </div>
            </div>

            <!-- Specification  Section  -->
            <q-form
              style="width: 90%"
              class="q-gutter-md q-mx-auto q-my-lg"
              @submit.prevent="updateProductData()"
            >
              <div>
                <label for="">Product Name</label>
                <q-input filled lazy-rules v-model="product.name" />
              </div>

              <div>
                <label for="">Price</label>
                <q-input filled lazy-rules v-model="product.price" />
              </div>

              <div>
                <label for="">Discount</label>
                <q-input filled lazy-rules v-model="discount" />
              </div>

              <div>
                <label for="">Quantity</label>
                <q-input filled lazy-rules v-model="product.qtyInStore" />
              </div>

              <div>
                <label for="">Category</label>
                <q-input filled lazy-rules v-model="product.categories" />
              </div>

              <div class="q-mb-md" style="width: 100%">
                <label for="">Description *</label>
                <q-input
                  v-model="product.desc"
                  dense="dense"
                  outlined
                  type="textarea"
                />
              </div>

              <div class="row">
                <q-space />
                <q-btn
                  label="Update"
                  outline
                  type="submit"
                  style="width: 30%"
                  color="primary"
                />
              </div>
            </q-form>
          </q-tab-panel>

          <q-tab-panel name="Ratings & Reviews">
            <div
              class="col-lg-5 col-md-5 col-sm-12 col-xs-12 q-mt-md q-pt-xs q-pl-lg"
            >
              <div class="text-subtitle2">Customer rating</div>
              <div class="text-h3">{{ rating_point }}</div>
              <div>
                <q-rating
                  v-model="rating_point"
                  max="5"
                  size="2em"
                  color="orange"
                  icon="star_border"
                  icon-selected="star"
                  icon-half="star_half"
                  no-dimming
                  readonly
                />
              </div>
              <div class="text-subtitle2 text-grey-8">(300 reviews)</div>
              <div class="text-subtitle2 text-grey-10 q-mt-sm">
                93% of lorem customers would recommend
              </div>

              <q-list dense bordered padding class="no-border q-mt-lg q-pr-xl">
                <q-item style="padding-left: 0 !important" v-ripple>
                  <span class="text-subtitle2 q-mr-xs">5</span>
                  <q-icon name="star" size="1.5em" color="orange"></q-icon>
                  <q-linear-progress
                    class="q-ml-sm q-mr-sm"
                    style="margin-top: 5px"
                    size="13px"
                    :value="0.9"
                  />
                  <span
                    style="margin-top: 2px"
                    class="text-caption text-weight-bold text-grey-8"
                    >216</span
                  >
                </q-item>

                <q-item style="padding-left: 0 !important" v-ripple>
                  <span class="text-subtitle2 q-mr-xs">4</span>
                  <q-icon name="star" size="1.5em" color="orange"></q-icon>
                  <q-linear-progress
                    class="q-ml-sm q-mr-sm"
                    style="margin-top: 5px"
                    size="13px"
                    :value="0.6"
                  />
                  <span
                    style="margin-top: 2px"
                    class="text-caption text-weight-bold text-grey-8"
                    >&nbsp;&nbsp;69</span
                  >
                </q-item>

                <q-item style="padding-left: 0 !important" v-ripple>
                  <span class="text-subtitle2 q-mr-xs">3</span>
                  <q-icon name="star" size="1.5em" color="orange"></q-icon>
                  <q-linear-progress
                    class="q-ml-sm q-mr-sm"
                    style="margin-top: 5px"
                    size="13px"
                    :value="0.1"
                  />
                  <span
                    style="margin-top: 2px"
                    class="text-caption text-weight-bold text-grey-8"
                    >&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;6</span
                  >
                </q-item>

                <q-item style="padding-left: 0 !important" v-ripple>
                  <span class="text-subtitle2 q-mr-xs">2</span>
                  <q-icon name="star" size="1.5em" color="orange"></q-icon>
                  <q-linear-progress
                    class="q-ml-sm q-mr-sm"
                    style="margin-top: 5px"
                    size="13px"
                    :value="0.1"
                  />
                  <span
                    style="margin-top: 2px"
                    class="text-caption text-weight-bold text-grey-8"
                    >&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;3</span
                  >
                </q-item>

                <q-item style="padding-left: 0 !important" v-ripple>
                  <span class="text-subtitle2 q-mr-xs">1</span>
                  <q-icon name="star" size="1.5em" color="orange"></q-icon>
                  <q-linear-progress
                    class="q-ml-sm q-mr-sm"
                    style="margin-top: 5px"
                    size="13px"
                    :value="0.1"
                  />
                  <span
                    style="margin-top: 2px"
                    class="text-caption text-weight-bold text-grey-8"
                    >&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;6</span
                  >
                </q-item>
              </q-list>
            </div>
          </q-tab-panel>
        </q-tab-panels>
      </div>
    </div>
  </div>
</template>

<script>
import { ref } from "vue";
export default {
  name: "details.vue",
  data() {
    return {
      imageModal: ref(false),
      newImage: null,
      slide: 1,
      tab: "Specifications",
      rating_point: 3.5,
      id: "",
      product: {},
      productName: name,
      // color: "red",
      // size: 15,
      // description: "haaa",
      // Has to be a nested object
      images: [],
    };
  },
  computed: {
    discount() {
      this.product.desc.color, console.log(this.product.desc.color);
    },
    win_width() {
      return this.$q.screen.width - 59;
    },
    win_height() {
      return this.$q.screen.height - 0;
    },
  },
  methods: {
    changeImage(id, imageKey) {
      console.log(imageKey);
      let newImg = this.newImage;
      let formData = new FormData();
      formData.append("oldImgKey", imageKey);
      formData.append("img", newImg);
      this.$store.dispatch("moduleExample/updateImage", { id, formData });
    },
    updateProductData() {
      let product = {
        _id: this.id,
        productName: this.product.name,
        productPrice: this.product.price,
        productQty: this.product.qtyInStore,
        productCategory: this.product.categories,
        productSubcategory: this.product.subCategories,
        productColor: this.color,
        productSize: this.size,
      };
      this.$store.dispatch("moduleExample/updateSellerProductData", product);
      console.log(product);
    },
    getProduct() {
      this.$store
        .dispatch("moduleExample/getSingleSellerProduct", this.id)
        .then((response) => {
          this.product = response;
          // (this.product = detail),
          // (this.images = detail.img),
          // (this.description = detail.desc.color),
          // (this.discount = detail.desc.size)
        });
    },
  },
  mounted() {
    this.id = location.href.split("productDetail/")[1];
    this.getProduct();
    // console.log(this.description, this.discount);
  },
};
</script>

<style scoped></style>
