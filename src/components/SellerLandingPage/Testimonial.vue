<template>
      <h4 class="text-center text-bold q-px-sm">What Other Sellers are saying</h4>
  <div class="testimonial row justify-evenly">
      <q-card class="col-lg-3 col-md-3 col-sm-12 col-xs-12 card q-my-md q-mx-xs q-px-md q-py-lg">
        <q-avatar> <q-icon name="chat_bubble_outline" size="2rem" color="secondary" /> </q-avatar>
        <div>
          <q-rating v-model="stars" :max="5" size="17px" class="q-my-md" color="orange-7"/>
        </div>
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptate quisquam soluta id! Neque harum vitae similique.</p>
        <div class="row">
          <q-avatar square>
            <img src="https://cdn.quasar.dev/img/avatar.png">
          </q-avatar>
          <div class="q-ml-md">
            <div>lorem Dude</div>
            <div class="text-primary">Occupation</div>
          </div>
        </div>
      </q-card>

      <q-card class="col-lg-3 col-md-3 col-sm-12 col-xs-12 card q-my-md q-mx-xs q-px-md q-py-lg">
        <q-avatar> <q-icon name="chat_bubble_outline" size="2rem" color="secondary" /> </q-avatar>
        <div>
          <q-rating v-model="stars" :max="5" size="17px" class="q-my-md" color="orange-7"/>
        </div>
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptate quisquam soluta id! Neque harum vitae similique.</p>
        <div class="row">
          <q-avatar square>
            <img src="https://cdn.quasar.dev/img/avatar.png">
          </q-avatar>
          <div class="q-ml-md">
            <div>lorem Dude</div>
            <div class="text-primary">Occupation</div>
          </div>
        </div>
      </q-card>

      <q-card class="col-lg-3 col-md-3 col-sm-12 col-xs-12 card q-my-md q-mx-xs q-px-md q-py-lg">
        <q-avatar> <q-icon name="chat_bubble_outline" size="2rem" color="secondary"/> </q-avatar>
        <div>
          <q-rating v-model="stars" :max="5" size="17px" class="q-my-md" color="orange-7"/>
        </div>
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptate quisquam soluta id! Neque harum vitae similique.</p>
        <div class="row">
          <q-avatar square>
            <img src="https://cdn.quasar.dev/img/avatar.png">
          </q-avatar>
          <div class="q-ml-md">
            <div>lorem Dude</div>
            <div class="text-primary">Occupation</div>
          </div>
        </div>
      </q-card>
</div>
</template>

<script>
export default {

}
</script>

<style scoped>
.testimonial{
  padding: 0 10%;
}

.card{
  /* width: 30%; */
  border: 1px solid rgb(6, 17, 60, 0.3);
}
</style>
