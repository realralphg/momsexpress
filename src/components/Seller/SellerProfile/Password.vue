<template>
  <div class="text-bold text-h6 q-mb-lg">Change of Password</div>
  <q-form
    class="q-gutter-md"
    @click="changePassword()"
  >

    <q-input
      filled
      v-model="oldPassword"
      placeholder="Old Password"
      lazy-rules

    />


    <q-input
      filled
      v-model="newPassword1"
      placeholder="New Password"
      lazy-rules

    />

    <q-input
      filled
      v-model="newPassword2"
      placeholder="Retype New Password"
      lazy-rules

    />

    <div>
      <q-btn label="Change Password" type="submit" color="primary"/>
    </div>
  </q-form>
</template>

<script>
export default {
  data() {
      return {
       password: "",
       newPassword1: "",
       newPassword2: ""
    }
  },
  methods:{
    changePassword(){
      // function of changing password
    }
  }
}
</script>

<style scoped>

</style>
