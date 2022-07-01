<template>
  <div class="text-bold text-h6 q-mb-lg">Seller Details</div>
  <q-form class="q-gutter-md">
    <q-input filled v-model="bvn" label="BVN No." />

    <q-input filled v-model="nin" label="NIN" />

    <q-file
      v-model="ninImg"
      label="Upload NIN image here"
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

    <q-input filled v-model="cac" label="CAC Number" />

    <q-file
      v-model="cacImg"
      label="Upload CAC Document here"
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

    <div>
      <!-- <q-btn label="Update" @click="verifyShop()" color="primary" /> -->
      <q-btn label="Update" color="primary" />
    </div>
  </q-form>
</template>

<script>
import { ref } from "vue";
export default {
  data() {
    return {
      bvn: null,
      nin: null,
      cac: null,
      cacImg: ref(null),
      ninImg: ref(null),
    };
  },
  methods: {
    verifyShop() {
      let a = [{ img1: this.cacImg }, { img2: this.ninImg }];
      console.log(a);
      let formData = new FormData();
      formData.append("bvn", this.bvn);
      formData.append("cac", this.cac);
      formData.append("nin", this.nin);
      formData.append("img", a);

      console.log(this.bvn, this.cac, this.nin, a);
      console.log(formData);

      this.$store.dispatch("moduleExample/verificationDetails", { formData });
    },
  },
};
</script>

<style scoped></style>
