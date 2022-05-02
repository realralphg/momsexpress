<template>
    <!-- Seller Navbar -->
      <q-toolbar  class="q-py-md q-pr-xl padding_right bord" style="background-color: white; border-bottom: 1px solid grey">
           <q-btn
                flat
                dense
                icon="menu"
                color="primary"
                size="1rem"
                aria-label="Menu"
                @click="$emit('toggleLeftDrawer')"
                class="button"
              />

              <q-space class="button" />

              <!-- <q-toolbar-title> -->
                <q-input  outlined dense bg-color="white"  class="input" placeholder="Search for your Products"  >
                  <template v-slot:append >
                    <q-icon name="search" class="q-pr-xs search_icon" color="primary" style="cursor:pointer" />
                  </template>
                </q-input>
              <!-- </q-toolbar-title> -->


        <q-space  class="hide_me"/>

        <p class="user text-black text-center q-my-auto q-mx-md hide_me">Hi, <span class="text-bold">{{ username }}</span> </p>

        <q-btn dense color="black" round flat icon="notifications" class=" q-mr-md hide_me">
          <q-badge color="red" floating>4</q-badge>
        </q-btn>

        <q-avatar class="hide_me">
          <img src="https://cdn.quasar.dev/img/boy-avatar.png">
        </q-avatar>

      </q-toolbar>



</template>

<script>
import { ref } from "vue"

export default {
  data(){
    return{
      text: ref(''),
      username: ref('')
    }
  },
  mounted(){
    this.username = localStorage.getItem('sellerFullname')
  }

}
</script>

<style scoped>
.button{
  display: none;
}

.input{
  width: 50%;
}

.bord{
  border-bottom: 1px solid #D56C33
}

@media screen and (max-width:771px) {
  .button{
    display: block;
  }

  .hide_me{
    display: none;
  }

  .padding_right{
    padding-right: 4% !important;
  }

  .input{
    width: 60%
  }

}



</style>
