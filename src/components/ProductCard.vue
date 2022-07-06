<template>
  <div class="main" @click="this.$router.push('/details')">
    <q-img
      loading="eager"
      style=""
      class="rounded-borders img"
      :src="product.img"
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
          <span class="q-my-auto text-right text-caption q-ml-xs">(4.8)</span>
        </div>
      </div>
      <div class="text-caption text-weight-bold text-grey ellipsis-2-lines">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam repellat
        consequuntur, laudantium eum, voluptate nam nemo minima qui aspernatur
        mollitia tenetur velit, esse maxime sapiente? Id iste placeat molestiae
        ipsam!
      </div>
      <div class="q-my-xs">
        <span class="text-bold">N2000</span
        ><span class="q-ml-sm text-grey-6" style="text-decoration: line-through"
          >N4000</span
        >
      </div>
    </div>
  </div>
</template>

<script>
import { ref } from "vue";

export default {
  props: ["product"],
  data() {
    return {
      stars: 4,
      val: ref(false),
    };
  },
  mounted() {
    // console.log(this.imageUrl);
    // let arr = [];
    // arr = this.product.img;
    // this.imageUrl = arr[0].url;
  },
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
</style>
