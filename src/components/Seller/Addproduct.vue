<template>
  <!-- Dialog for Adding products  -->
  <div class="heading text-center">
    <p style="font-size: 1.5rem" class="text-bold">New Product</p>
  </div>

  <div class="form q-pt-lg q-mx-auto" style="width: 80%">
    <!-- Product Name  -->
    <div class="q-mb-md">
      <label for="">Name of Product *</label>
      <q-input
        outlined
        dense="dense"
        v-model="productName"
        placeholder="Lorem Item1"
      />
    </div>

    <!-- Price -->
    <div class="q-mb-md" style="width: 100%">
      <label for="">Price *</label>
      <q-input outlined dense="dense" v-model="price" placeholder="N2000" />
    </div>

    <!-- Quantity  -->
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

    <!-- Category -->
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

    <!--Description  -->
    <div class="q-mb-md" style="width: 100%">
      <label for="">Description *</label>
      <q-input v-model="description" dense="dense" outlined type="textarea" />
    </div>

    <!-- Pick images  -->
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

export default {
  name: "AddProduct",
  data() {
    return {
      images: [],
      colors: [],
      categories: [],
      // product:{
      productName: ref(""),
      price: ref(""),
      quantity: ref(""),
      category: ref(""),
      subcategory: ref("nothing"),
      img: ref(null),
      description: ref(""),
      discount: ref(""),
      // },
      // Categories: [
      //   'Shoes', 'Clothings', 'Caps', 'Belts', 'Stuff'
      // ],
      // Subcategory: [
      //   'Google', 'Facebook', 'Twitter', 'Apple', 'Oracle'
      // ],
      // Colors: [
      //   'red', 'blue', 'yellow', 'green', 'orange'
      // ],
      // Sizes: [
      //   '1', '2', '3', '4', '5'
      // ]
    };
  },
  methods: {
    addProduct() {
      // let ref = `NA/2022/${Math.floor(Math.random() * 1000)}/${Math.floor(Math.random() * 4000.93)}`;
      let formData = new FormData();
      formData.append("productName", this.productName);
      formData.append("price", this.price);
      formData.append("quantity", this.quantity);
      formData.append("category", this.category);
      formData.append("subcategory", this.subcategory);
      formData.append("img", this.img);
      formData.append("color", this.description);
      formData.append("size", this.discount);
      // formData.append("subcategory", this.product.subcategory);
      console.log(formData);
      if (
        this.productName !== "" &&
        this.price !== "" &&
        this.quantity !== ""
      ) {
        this.$store
          .dispatch("moduleExample/addProduct", {
            formData,
            // productName: this.product.productName,
            // price: this.product.price,
            // quantity: this.product.quantity,
            // category: this.product.category,
            // subcategory: this.product.subcategory,
            // img: this.product.img,
            // color: this.product.color,
            // size: this.product.size,
          })
          .then(() => {
            // window.location.reload();
            // this.$q.loading.hide();
          });
      } else {
        // this.$q.loading.hide();
        // Notify.create({
        //   message: 'You can\'t leave the "to", "title" and "Comments" fields empty.',
        //   color: 'red'
        // })
      }
    },
    getCategories() {
      this.$store.dispatch("moduleExample/getCategories").then((response) => {
        // console.log(response.categories);
        this.categories = response.categories;
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
