<template>
  <q-page class="relative-position bg-grey-2 padding-footer">
    <Hero />
    <Categories2 />
    <Recent />
    <FeaturedShops />
    <Trending />
    <EasyBudgetVue />
    <Seamless />
    <MoreProductsVue />
  </q-page>
</template>

<script>
import { defineComponent } from "vue";
import { Notify } from "quasar";
import Hero from "components/Homepage/Hero";
import Categories from "components/Homepage/Categories";
import Categories2 from "components/Homepage/Categories2";
import Recent from "components/Homepage/Recent";
import Trending from "components/Homepage/Trending";
import Seamless from "components/Homepage/Seamless";
import Doublestuff from "src/components/Homepage/Doublestuff.vue";
import FeaturedShops from "src/components/Homepage/FeaturedShops.vue";
import EasyBudgetVue from "src/components/Homepage/EasyBudget.vue";
import MoreProductsVue from "../../components/Homepage/MoreProducts.vue";

export default defineComponent({
  name: "PageIndex",
  components: {
    Hero,
    Categories,
    Categories2,
    Recent,
    Trending,
    Seamless,
    Doublestuff,
    FeaturedShops,
    EasyBudgetVue,
    MoreProductsVue,
  },
  data() {
    return {};
  },
  methods: {
    getUserDetails() {
      this.$store
        .dispatch("moduleExample/getUser")
        .then((response) => {
          console.log("hello");
          console.log(response);
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
  mounted() {
    let user = localStorage.getItem("buyerName");
    this.getUserDetails();
  },
});
</script>

<style scoped>
@media screen and (max-width: 830px) {
  .padding-footer {
    padding-bottom: 12%;
  }
}

@media screen and (max-width: 530px) {
  .padding-footer {
    padding-bottom: 18%;
  }
}

@media screen and (max-width: 385px) {
  .padding-footer {
    padding-bottom: 23%;
  }
}
</style>
