<template>
  <div class="text-bold text-h6 q-mb-lg">Change of Password</div>
  <q-form class="q-gutter-md">
    <q-input filled v-model="oldPassword" placeholder="Old Password" />

    <q-input filled v-model="newPassword1" placeholder="New Password" />

    <q-input filled v-model="newPassword2" placeholder="Retype New Password" />

    <div>
      <q-btn
        label="Change Password"
        @click="changePassword()"
        color="primary"
      />
    </div>
  </q-form>
</template>

<script>
export default {
  data() {
    return {
      newPassword1: "",
      newPassword2: "",
      oldPassword: "",
    };
  },
  methods: {
    changePassword() {
      let data = {
        password: this.newPassword1,
        password2: this.newPassword2,
        oldPassword: this.oldPassword,
      };
      console.log(data);
      this.$store.dispatch("moduleExample/changePassword", data).then(() => {
        this.newPassword1 = "";
        this.newPassword2 = "";
        this.oldPassword = "";
      });
    },
  },
};
</script>

<style scoped></style>
