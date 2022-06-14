<template>
  <q-img
    style=""
    class="rounded-borders img"
    :src="`Homepage/${product.image}`"
  >
  </q-img>
  <div class="q-pa-sm">
    <div class="justify-between">
      <div class="text-subtitle1 text-bold product-title">
        {{ product.title }}
      </div>
      <div class="column">
        <q-rating
          class=""
          v-model="stars"
          :max="5"
          size="0.7rem"
          color="orange-7"
        />
        <span class="q-my-auto text-right text-caption">4.8</span>
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
    <div class="row justify-between">
      <q-checkbox
        v-model="val"
        checked-icon="favorite"
        keep-color
        unchecked-icon="favorite_border"
        class="favorite-btn"
      />
      <q-btn
        outline
        rounded
        size="0.6rem"
        color="primary"
        class="q-py-none add-btn"
      >
        <q-icon name="add" />
        Cart
      </q-btn>
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
};
</script>

<style scoped>
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
