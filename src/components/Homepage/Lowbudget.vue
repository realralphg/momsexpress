<template>
  <div class="">
    <h4 class="text-center text-bold q-mt-xl text-orange">Keep in Touch With Time</h4>
  <div class="relative-position watch">
    <div class="row fit justify-start items-center  no-wrap" >
      <q-img class=" col-6" src="/Homepage/watch2.jpg" style="height:300px"/>
      <q-img class="col-6" src="/Homepage/watch3.jpg" style="height:300px"/>
    </div>
    <div class="absolute-top over-btn column">
      <q-space/>
      <div class="row">
      <q-space/>
      <q-btn label="SHOP NOW" class="q-mb-md" size="1.2rem" color="secondary" />
      <q-space/>
      </div>
    </div>
  </div>
  </div>

</template>

<script>
export default {
  name: 'Lowbudget'
}
</script>

<style scoped>
  .over-btn{
    visibility: hidden;
    width: 100%;
    height: 100%;
    background: rgb(0, 0, 0,0.4);
  }

  .watch:hover .over-btn{
    visibility: visible;
  }
</style>
