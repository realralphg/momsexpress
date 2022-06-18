<template>
  <q-page class="bg-grey-2" style="padding-bottom: 8%">
    <div style="padding: 2% 5%" class="row text-center">
      <div
        class="col-lg-1 col-md-1 col-sm-2 col-xs-2 q-my-md q-mx-sm"
        v-for="item in categories"
        :key="item.id"
        style="cursor: pointer"
      >
        <div class="column justify-between">
          <q-btn flat class="avatar-container" :to="`/category/${item.name}`">
            <q-avatar size="30px">
              <img :src="item.icon" />
            </q-avatar>
          </q-btn>
        </div>
        <q-space />
        <div class="text-center item-bottom text-primary text-bold">
          {{ item.name }}
        </div>
      </div>
    </div>
    <Trending />
  </q-page>
</template>
<script>
import Trending from "components/Homepage/Trending.vue";
export default {
  components: {
    Trending,
  },
  data() {
    return {
      categories: [],
    };
  },
  methods: {
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

<style scoped></style>
