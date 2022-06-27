<template>
  <div
    v-for="n in 6"
    :key="n"
    :class="skeleton === false ? 'hide-skeleton' : ''"
  >
    <q-card flat v-show="skeleton">
      <q-skeleton height="150px" square />

      <q-card-section>
        <q-skeleton type="text" class="text-subtitle1" />
        <q-skeleton type="text" width="50%" class="text-subtitle1" />
        <q-skeleton type="text" class="text-caption" />
      </q-card-section>
    </q-card>
  </div>
</template>

<script>
export default {
  name: "Skeleton",
  props: ["skeleton"],
  data() {
    return {};
  },
};
</script>

<style scoped>
.hide-skeleton {
  display: none;
}
</style>
