<template>
  <q-page class="relative-position">
    <Hero />
    <!-- <Categories /> -->
    <Categories2 />
    <Recent />
    <!-- <Doublestuff /> -->
    <Trending />
    <FeaturedShops />
    <Trending />
    <Seamless />
    <Trending />
    <Trending />
    <Trending />
    <!-- <Newlayout /> -->
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
  },
  data() {
    return {};
  },
  methods: {
    getUserDetails() {
      this.$store
        .dispatch("moduleExample/getUser")
        .then((response) => {
          // this.$router.push("/");
          console.log(response);
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
  created() {
    // let user = localStorage.getItem("buyerName");
    // if (user == "") {
    this.getUserDetails();
    // }
  },
});
</script>

<style scoped></style>
