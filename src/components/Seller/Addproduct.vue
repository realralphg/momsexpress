<template>
  <!-- Dialog for Adding products  -->
  <div class="heading text-center">
    <p style="font-size: 1.5rem" class="text-bold">New Product</p>
  </div>

  <div class="form q-pt-lg q-mx-auto" style="width: 80%">
    <div class="q-mb-md">
      <label for="">Name of Product *</label>
      <q-input
        outlined
        dense="dense"
        v-model="productName"
        placeholder="Lorem Item1"
      />
    </div>

    <div class="q-mb-md" style="width: 100%">
      <label for="">Price *</label>
      <q-input outlined dense="dense" v-model="price" placeholder="N2000" />
    </div>

    <div class="q-mb-md">
      <label for="">Quantity *</label>
      <q-input
        v-model.number="quantity"
        dense="dense"
        type="number"
        outlined
        style="width: 100%"
      />
    </div>

    <div class="q-mb-md" style="width: 100%">
      <label for="">Category *</label>
      <q-select
        v-model="category"
        :options="categories"
        style="width: 100%"
        outlined
        class="q-mb-md"
      />
    </div>

    <div class="q-mb-md" style="width: 100%">
      <label for="">Discount *</label>
      <q-input v-model="discount" dense="dense" outlined />
    </div>

    <div class="q-mb-md" style="width: 100%">
      <label for="">Description *</label>
      <q-input v-model="description" dense="dense" outlined type="textarea" />
    </div>

    <q-file
      v-model="img"
      label="Attach File"
      square
      flat
      use-chips
      clearable
      accept=".jpeg,.jpg,.png"
      max-files="1"
      max-file-size="5120000"
      class="q-mb-md"
    >
      <template v-slot:prepend>
        <q-icon name="attach_file" />
      </template>
    </q-file>
    <!-- <label for="">Upload Images *</label>
          <q-input type="file"  v-model="product.img" dense="dense" outlined /> -->
    <!-- <div class="q-mb-md">
            <q-file
              v-model="img"
              label="Pick files"
              multiple
              max-files="3"
              outlined
              dense
            />
          </div> -->

    <div class="row">
      <q-space />
      <q-btn
        style="width: 50%; background: #4949e6; color: white"
        label="Upload"
        @click="addProduct()"
      />
      <q-space />
    </div>
  </div>
</template>

<script>
import { ref } from "vue";
import { Notify } from "quasar";

export default {
  name: "AddProduct",
  props: ["icon"],
  data() {
    return {
      images: [],
      colors: [],
      categories: [],
      productName: ref(""),
      price: ref(""),
      quantity: ref(""),
      category: ref(""),
      subcategory: ref("nothing"),
      img: ref(null),
      description: ref(""),
      discount: ref(""),
    };
  },
  methods: {
    addProduct() {
      let formData = new FormData();
      formData.append("productName", this.productName);
      formData.append("price", this.price);
      formData.append("quantity", this.quantity);
      formData.append("category", this.category);
      formData.append("subcategory", this.subcategory);
      formData.append("img", this.img);
      formData.append("color", this.description);
      formData.append("size", this.discount);
      console.log(formData);
      if (
        this.productName !== "" &&
        this.price !== "" &&
        this.quantity !== ""
      ) {
        this.$emit("addProduct", { formData });
      } else {
        Notify.create({
          message: "You can't leave any field empty.",
          color: "red",
        });
      }
    },
    getCategories() {
      this.$store.dispatch("moduleExample/getCategories").then((response) => {
        for (let item of response.categories) {
          this.categories.push(item.name);
        }
      });
    },
  },
  mounted() {
    this.getCategories();
  },
};
</script>

<style scoped>
.btn {
  border: 1px solid black;
  border-radius: 50%;
}
</style>
