<template>
  <q-page class="q-px-xl q-py-sm bg-grey-2">
    <div class="secondary text-h4 text-bold q-my-sm">Add New Product</div>

    <div class="main">
      <div class="column q-gutter-y-md">
        <div class="border-radius bg-white">
          <div class="images q-py-md q-px-lg">
            <div
              class="input border-radius column flex-center relative-position"
            >
              <input type="file" ref="userAvatar" style="display: none" />
              <q-icon
                name="add"
                size="3.5rem"
                @click="$refs.userAvatar.click()"
                color="primary"
              />
              <div class="text-primary absolute-bottom text-center q-mb-md">
                Upload Images
              </div>
            </div>

            <div class="image border-radius flex flex-center">Main Image</div>
            <div class="image border-radius flex flex-center">
              Different Angle
            </div>
            <div class="image border-radius flex flex-center">Close Up</div>
            <div class="image border-radius flex flex-center">Detailed</div>
          </div>
        </div>

        <div class="border-radius bg-white q-pa-md">
          <div class="product-input">
            <div>
              <label class="text-grey-9">Name</label>
              <q-input class="q-mt-xs" outlined dense />
            </div>
            <div>
              <label class="text-grey-9">Quantity</label>
              <q-input class="q-mt-xs" outlined dense />
            </div>
            <div>
              <label class="text-grey-9">Weight</label>
              <q-input class="q-mt-xs" outlined dense />
            </div>
          </div>

          <div class="q-mt-lg">
            <label for="">Description</label>
            <q-input
              type="textarea"
              placeholder="Please describe the product with details information..."
              outlined
            />
          </div>
        </div>
      </div>

      <div class="column q-gutter-y-md">
        <div class="product-price border-radius bg-white q-pa-md">
          <div class="text-h5 text-bold q-my-sm">Pricing</div>
          <q-input outlined>
            <template v-slot:prepend>
              N <q-separator class="q-ml-md" vertical
            /></template>
          </q-input>
        </div>

        <div class="product-price border-radius bg-white q-pa-md">
          <div class="text-h5 text-bold q-my-sm">Category</div>
          <div class="text-caption">
            Please select a cetegpry that fits this product
          </div>
          <q-select
            outlined
            v-model="model"
            :options="options"
            label="Categories..."
          />
        </div>

        <div class="product-price border-radius bg-white q-pa-md">
          <div class="text-h5 text-bold q-my-sm">Discount</div>
          <q-input outlined>
            <template v-slot:append>
              <q-separator class="q-mr-md" vertical />
              %
            </template>
          </q-input>
        </div>
      </div>
    </div>
  </q-page>
</template>

<script>
export default {};
</script>

<style scoped>
.main {
  display: grid;
  grid-template-columns: 3fr 1fr;
  gap: 25px;
}
.border-radius {
  border-radius: 10px;
}

.product-input {
  display: grid;
  grid-template-columns: 2fr 1fr 1fr;
  gap: 8px;
}
.product-price {
  /* width: 30%; */
}

.images {
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 15px;
}

.input,
.image {
  /* width: 150px; */
  height: 150px;
}
.input {
  border: 2px dashed #d56c33;
  cursor: pointer;
}
.input:hover {
  background: rgb(128, 128, 128, 0.1) !important;
}
.image {
  border: 2px solid rgb(128, 128, 128, 0.5);
  color: rgb(128, 128, 128, 0.5);
}
</style>
