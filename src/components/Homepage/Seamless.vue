<template>
  <div class="main">
    <div class="column items-center container">
      <h3 class="text-white text-center q-my-auto text-bold">
        Fast and Seamless shopping <br />
        <span class=""> on MOMS Express</span>
      </h3>
    </div>
  </div>
</template>

<script>
export default {
  name: "Seamless",
};
</script>

<style scoped>
.main {
  background: url("/Homepage/card2.jpg");
  background-size: cover;
  background-position: center;
  height: 30vh;
  position: relative;
  padding: 0;
}

.container {
  position: absolute;
  background: hsl(0, 0%, 100%, 20%);
  height: 100%;
  width: 100% !important;
}

@media screen and (max-width: 661px) {
  h3 {
    font-size: 2.5rem;
  }
}

@media screen and (max-width: 551px) {
  h3 {
    font-size: 2rem;
  }
}

@media screen and (max-width: 451px) {
  h3 {
    font-size: 1.8rem;
  }
}
</style>
