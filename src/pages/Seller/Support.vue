<template>
  <q-page class="row flex-center">
    <!-- Contact Us section -->

    <div class="">
      <div class="q-px-lg q-pb-sm">
        <h3 class="">Message Us</h3>
        <div class="row justify-between">
          <q-input
            class="q-mb-lg"
            outlined
            v-model="text"
            type="text"
            placeholder="First Name"
            style="width: 48%"
          />
          <q-input
            class="q-mb-lg"
            outlined
            v-model="text"
            type="text"
            placeholder="Last Name"
            style="width: 48%"
          />
          <q-input
            class="q-mb-lg"
            outlined
            v-model="text"
            type="email"
            placeholder="E-mail"
            style="width: 100%"
          />
          <q-input
            class="q-mb-lg"
            type="textarea"
            outlined
            v-model="text"
            placeholder="Message"
            style="width: 100%"
          />
        </div>
        <!-- Submit Button -->
        <div class="row q-pb-lg">
          <q-space />
          <q-btn class="q-px-xl btn" style="width: 40%" color="primary"
            >Send us message</q-btn
          >
          <q-space />
        </div>
      </div>
    </div>
  </q-page>
</template>

<script>
import { defineComponent } from "vue";
import { ref } from "vue";

export default defineComponent({
  name: "PageIndex",
  components: {},
  setup() {
    return {
      model: ref("one"),
      secondModel: ref("one"),
      tab: ref("Contacts"),
    };
  },
});
</script>

<style scoped>
h6 {
  margin-top: 0;
  margin-bottom: 0;
}
p {
  font-size: 1rem;
}
.random {
  padding-top: 2%;
}
.tabs {
  margin: 0;
}
.log2 {
  /* padding-right: 10%; */
}

.button {
  height: 60px;
  margin: 0 auto;
}
.btn {
  width: 40%;
}

h5 {
  text-align: center;
  margin: 0;
}
</style>
