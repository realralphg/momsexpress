<template>
  <div class="category bg-white border_radius">
    <nav @mouseleave="show = false" class="primary-navigation">
      <div class="q-pl-sm" v-for="n in 13" :key="n">
        <div class="row items-center" v-if="skeleton">
          <q-skeleton type="QAvatar" size="1rem" animation="fade" />
          <q-skeleton type="text" width="70%" class="text-subtitle1" />
        </div>
      </div>

      <ul v-for="item in categories" :key="item.id">
        <li class="q-pl-sm">
          <a
            @mouseenter="show = true"
            @click="this.$router.push(`/category/${item.name}`)"
            class="text-primary text-bold text-subtitle2 row items-center ellipsis"
          >
            <img :src="item.icon" class="q-mr-xs" />
            {{ item.name }}
          </a>
        </li>
      </ul>
    </nav>
  </div>
</template>

<script>
import { ref } from "vue";

export default {
  name: "Categories",
  data() {
    return {
      skeleton: ref(true),
      categories: [],
    };
  },
  methods: {
    getCategories() {
      this.$store.dispatch("moduleExample/getCategories").then((response) => {
        this.skeleton = false;
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
ul {
  padding: 0;
}

li {
  margin: auto 0;
}

.category {
  height: 100%;
  position: relative;
  margin: 0;
  padding: 0;
}

nav.primary-navigation {
  margin: 0 auto;
  text-align: left;
}

.primary-navigation ul {
  padding: 0;
  margin: auto 0;
}
nav.primary-navigation ul li {
  margin: 3% 0;
  display: inline-block;
  text-decoration: none;
}
nav.primary-navigation li a {
  color: black;
}

nav.primary-navigation li:hover {
  cursor: pointer;
}

.dropdown {
  visibility: visible;
  opacity: 0.9;
  display: flex;
  height: 100%;
  position: absolute;
  top: 0;
  left: 100%;
  width: 285%;
  text-align: left;
  padding-top: 20px;
  box-shadow: 0px 1px 2px -1px #ccc;
  background-color: white;
  z-index: 1;
}
.dropdown li {
  clear: both;
  width: 100%;
  text-align: left;
  margin-bottom: 20px;
  border-style: none;
}
.dropdown li a:hover {
  padding-left: 10px;
  border-left: 2px solid #3ca0e7;
  transition: all 0.3s ease;
}
a {
  text-decoration: none;
}
a:hover {
  color: #3ca0e7;
}
.dropdown li a {
  transition: all 0.5s ease;
}
</style>
