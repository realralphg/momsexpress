<template>
  <q-form
              class="q-gutter-md"
            >
              <q-input
                filled
                v-model="user.first_name"
                label="First Name"
                lazy-rules
              />

              <q-input
                filled
                v-model="user.last_name"
                label="Last Name"
                lazy-rules

              />


              <q-input
                filled
                v-model="user.email"
                label="Email"
                lazy-rules

              />

              <q-input
                filled
                v-model="user.phone"
                label="Phone"
                lazy-rules

              />

              <div>
                <q-btn label="Update" type="submit" color="primary"/>
              </div>
            </q-form>
</template>

<script>
export default {
  data() {
      return {
        user: {
            first_name: 'Ikupolati',
            last_name: 'Tobi',
            email: 'tobi@moms.com',
            phone: '08012345678'
        },
    }
  },
}
</script>

<style scoped>

</style>