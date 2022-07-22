<template>
  <div class="container">
    <h1 class="title">User Profile Details</h1>
    <div class="sideToSide">
      <h2>Username:</h2>
      <h2>{{ user.userName }}</h2>
    </div>
    <div class="sideToSide">
      <h2>Store Name:</h2>
      <h2>{{ user.storeName }}</h2>
    </div>
    <div class="sideToSide">
      <h2>Password:</h2>
      <h2>{{ user.password }}</h2>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  data() {
    return {
      user: {},
    };
  },
  computed: {
    ...mapGetters("user", ["getUser"]),
  },
  beforeMount() {
    this.user = this.getUser;
  },
};
</script>

<style scoped>
.container {
  padding: 1rem;
  background-color: #f4f1bb;
  border-radius: 2rem;
}
.title {
  text-align: center;
}
.sideToSide {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  padding: 2rem;
}
</style>

