<template>
  <div class="story-super-container">
    <div class="row justify-between q-mx-auto q-py-sm">
      <q-btn
        color="primary"
        to="/allCategory"
        class="q-pr-none text-bold"
        label="All categories"
        icon-right="chevron_right"
        flat
        size="0.7rem"
      />
      <q-space />
    </div>

    <div class="story-container">
      <div class="story-item">
        <div
          v-show="skeleton"
          v-for="n in 8"
          :key="n"
          class="q-mr-md"
          :class="skeleton === false ? 'hide-skeleton' : ''"
        >
          <q-skeleton type="circle" class="q-mx-auto" size="50px" />
          <q-skeleton width="70px" class="q-my-xs q-mx-auto" height="12px" />
        </div>
        <div
          class="story text-center"
          v-for="item in categories"
          :key="item.id"
        >
          <div>
            <q-btn
              round
              flat
              color="primary"
              class="avatar-container"
              :to="`/category/${item.name}`"
            >
              <q-avatar class="avatar bg-transparent" size="30px">
                <img :src="item.icon" />
              </q-avatar>
            </q-btn>
          </div>
          <div class="cat-name text-primary q-py-xs q-px-sm">
            {{ item.name }}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Stories",
  components: {},
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
.hide-skeleton {
  display: none;
}
.cat-name {
  /* display: inline; */
  height: 55px;
  align-items: center;
  display: flex;
}
.story {
  width: 15% !important;
  margin: 0 1%;
}

.story-container {
  width: 100%;
  /* height: 120px; */
  /* white-space: nowrap; */
  position: relative;
  overflow-x: scroll;
  overflow-y: hidden;
  -webkit-overflow-scrolling: touch;
  -ms-overflow-style: none; /* hiding the scrollbar for Internet Explorer, Edge */
  scrollbar-width: none; /* hiding the scrollbar for Firefox */
}

.story-container::-webkit-scrollbar {
  display: none; /* hiding the scrollbar for Chrome, Safari, and Opera */
}

.story-super-container {
  border-radius: 3px;
  margin-top: 25px;
  padding: 0 4%;
  display: none;
}

.story-item {
  float: none;
  display: flex;
  zoom: 1;
}

@media screen and (max-width: 830px) {
  .story-super-container {
    display: block;
  }
}

@media screen and (max-width: 600px) {
  .avatar {
    font-size: 25px !important;
  }
  .cat-name {
    font-size: 0.75rem;
  }
}

@media screen and (max-width: 500px) {
  .story {
    width: 50% !important;
    margin: 0 3% 0 1% !important;
  }
}
</style>
