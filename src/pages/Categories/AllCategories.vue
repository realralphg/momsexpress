<template>
  <q-page class="bg-grey-2 padding-footer">
    <div class="card text-center">
      <div
        v-show="skeleton"
        v-for="n in 13"
        :key="n"
        class="q-my-md"
        :class="skeleton === false ? 'hide-skeleton' : ''"
      >
        <q-skeleton type="circle" class="q-mx-auto" size="50px" />
        <q-skeleton width="70px" class="q-my-xs q-mx-auto" height="12px" />
      </div>
      <div
        class="q-my-sm"
        v-for="item in categories"
        :key="item.id"
        style="cursor: pointer"
      >
        <div class="column justify-between">
          <q-btn flat class="avatar-container" :to="`/category/${item.name}`">
            <q-avatar class="avatar" size="30px">
              <img :src="item.icon" />
            </q-avatar>
          </q-btn>
        </div>
        <q-space />
        <div class="text-center item-bottom text-primary cat-text">
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
      skeleton: true,
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
@media screen and (max-width: 830px) {
  .padding-footer {
    padding-bottom: 12%;
  }
}

@media screen and (max-width: 530px) {
  .padding-footer {
    padding-bottom: 15%;
  }
}

@media screen and (max-width: 410px) {
  .padding-footer {
    padding-bottom: 19%;
  }
}

@media screen and (max-width: 345px) {
  .padding-footer {
    padding-bottom: 23%;
  }
}
.card {
  display: grid;
  gap: 5px;
  grid-auto-flow: row;
  grid-template-columns: repeat(5, 1fr);
  padding: 2% 5%;
}
@media screen and (max-width: 540px) {
  .card {
    grid-template-columns: repeat(3, 1fr);
  }
  .cat-text {
    font-size: 0.8rem !important;
  }
}

@media screen and (max-width: 420px) {
  .avatar {
    font-size: 25px !important;
  }
}
</style>
