<template>
  <div class="become text-center q-py-xl">
    <p class="text-dark text-bold text-h3 q-mx-auto q-my-lg">
      Become a Shop Owner On MOMS Today
    </p>
    <q-btn
      color="white"
      class="bg-secondary button q-mt-md"
      to="/seller/Signup"
      flat
      rounded
      label="SIGN UP"
      size="1.2rem"
    />
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.become {
  width: 100%;
  margin-bottom: 3%;
}

p {
  width: 50%;
  line-height: 1.3;
}

.button {
  width: 20%;
}

.button:hover {
  background-color: #d56c33 !important;
  color: white !important;
}

@media screen and (max-width: 770px) {
  p {
    width: 70%;
    font-size: 2.5rem;
  }

  .button {
    width: 40%;
  }
}

@media screen and (max-width: 500px) {
  .button {
    width: 40%;
    font-size: 0.9rem !important;
  }
}
</style>
