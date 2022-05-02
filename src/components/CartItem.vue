<template>
    <div class="test row q-mt-sm  q-px-sm">
      <q-img class="col-4 image" :src='`Homepage/${item.image}`' />

      <div class="col-8 column q-pb-md justify-between">
        <div>
            <div class="q-pl-md text-bold text-subtitle1 row items-center align-items justify-between">
              <div>{{item.title}}</div>
              <q-btn icon="close" flat round dense @click="()=>deleteProduct(item.id)" />
            </div>

            <div class="q-pl-md q-my-sm reduce_text" style="width:80%">{{item.description}}</div>
            <div class="q-pl-md reduce_text">Shipping Fee: <span> Free</span></div>
        </div>

        <div class="two row justify-between q-pl-md ">
          <div class="col-3 reduce_text">
            <div>Price</div>
            <div class="text-bold">{{item.price * num}}</div>
          </div>

          <div class="row col-9 justify-end ">
            <q-btn icon="remove" @click="--num" size="1rem" :disable="num <= 1" class="q-mr-sm button" round dense flat color="primary" />
            <input  v-model="num" class="text-center" >
            <q-btn icon="add" @click="num++" size="1rem" class="q-ml-sm button" round dense flat color="primary" />
          </div>
        </div>

      </div>
    </div>
</template>

<script>
import { ref } from "vue"

export default {
  name: 'CartItem',
  props: ['item'],
  data(){
    return{
      num: ref(1),
      total: ref(0),
    }
  },
  methods:{


  },
  computed:{

  },
  mounted(){
    this.$emit('hello');

  }

}
</script>

<style scoped>

.image{
    height: 150px;
  }
  .test{
  border: 1px solid rgb(128, 128, 128, 0.3);
  /* height: 25vh; */
}

input{
  width: 25%;
  /* height: 50%; */
  margin: auto 0;
}

@media screen and (max-width: 451px) {
  .button{
    font-size: 0.7rem !important;
  }
  input{
    width: 20%;
  }
  .reduce_text{
    font-size: 0.8rem !important;
  }
}
</style>
