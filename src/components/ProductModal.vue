<template>
  <!-- Product Modal  -->
  <q-dialog v-model="icon" >
      <q-card style="width: 90%; max-width: 70%;">
        <q-card-section class="row items-center q-pb-none">
          <q-space />
          <q-btn icon="close" flat round dense v-close-popup />
        </q-card-section>

        <q-card-section>
          <!-- <Viewproduct /> -->
        </q-card-section>
      </q-card>
    </q-dialog>
</template>

<script>
import { ref } from 'vue'
// import Viewproduct from '../components/Viewproduct'

export default {
  name: 'Productmodal',
  components:{
    // Viewproduct
  },
}
</script>

<style scoped>

</style>
