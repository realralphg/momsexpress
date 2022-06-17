<template>
  <h4 class="text-center text-bold q-px-sm">What Other Sellers are saying</h4>
  <div class="testimonial row justify-evenly">
    <q-card
      class="col-lg-3 col-md-3 col-sm-12 col-xs-12 card q-my-md q-mx-xs q-px-md q-py-lg"
    >
      <div class="row q-my-sm">
        <q-avatar square>
          <img src="https://cdn.quasar.dev/img/avatar.png" />
        </q-avatar>
        <div class="q-ml-md">
          <div>lorem Dude</div>
          <div class="text-primary">Occupation</div>
        </div>
      </div>
      <!-- <q-avatar>
        <q-icon name="chat_bubble_outline" size="2rem" color="secondary" />
      </q-avatar> -->

      <p>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptate
        quisquam soluta id! Neque harum vitae similique.
      </p>
    </q-card>

    <q-card
      class="col-lg-3 col-md-3 col-sm-12 col-xs-12 card q-my-md q-mx-xs q-px-md q-py-lg"
    >
      <div class="row q-my-sm">
        <q-avatar square>
          <img src="https://cdn.quasar.dev/img/avatar.png" />
        </q-avatar>
        <div class="q-ml-md">
          <div>lorem Dude</div>
          <div class="text-primary">Occupation</div>
        </div>
      </div>
      <!-- <q-avatar>
        <q-icon name="chat_bubble_outline" size="2rem" color="secondary" />
      </q-avatar> -->

      <p>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptate
        quisquam soluta id! Neque harum vitae similique.
      </p>
    </q-card>

    <q-card
      class="col-lg-3 col-md-3 col-sm-12 col-xs-12 card q-my-md q-mx-xs q-px-md q-py-lg"
    >
      <div class="row q-my-sm">
        <q-avatar square>
          <img src="https://cdn.quasar.dev/img/avatar.png" />
        </q-avatar>
        <div class="q-ml-md">
          <div>lorem Dude</div>
          <div class="text-primary">Occupation</div>
        </div>
      </div>
      <!-- <q-avatar>
        <q-icon name="chat_bubble_outline" size="2rem" color="secondary" />
      </q-avatar> -->

      <p>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptate
        quisquam soluta id! Neque harum vitae similique.
      </p>
    </q-card>
  </div>
</template>

<script>
import { ref } from "vue";

export default {
  data() {
    return {
      stars: ref(5),
    };
  },
};
</script>

<style scoped>
.testimonial {
  padding: 0 10%;
}

.card {
  border: 1px solid rgb(6, 17, 60, 0.3);
}
</style>
