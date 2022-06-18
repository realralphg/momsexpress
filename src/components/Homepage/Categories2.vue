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
        <!-- <Story  /> -->
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
          <div class="cat-name text-primary ellipsis q-mx-sm">
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

<style scoped>
.cat-name {
  /* display: inline; */
}
.story {
  width: 15% !important;
}
.avatar-container {
  margin: 5px 10px;
  padding: 2px;
}
.story-container {
  width: 100%;
  height: 120px;
  white-space: nowrap;
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
    font-size: 20px !important;
  }
  .cat-name {
    font-size: 0.7rem;
  }
}

@media screen and (max-width: 501px) {
  .story-container {
    height: 80px;
  }
}
</style>
