<template>
  <div>
    <h2>User Profile Details</h2>
    <v-data-table
      :headers="headers"
      :items="items"
      item-key="name"
      hide-default-footer
      class="elevation-1"
    ></v-data-table>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  data() {
    return {
      user: {},
      headers: [
        {
          text: "Property",
          align: "start",
          value: "name",
        },
        { text: "Value", value: "category" },
      ],
      items: [],
    };
  },
  computed: {
    ...mapGetters("user", ["getUser"]),
  },
  beforeMount() {
    this.user = this.getUser;
    this.items = [
      {
        name: "Store Name",
        category: this.user.storeName,
      },
      {
        name: "User Name",
        category: this.user.userName,
      },
      {
        name: "Password",
        category: this.user.password,
      },
      {
        name: "Consumer Key",
        category: this.user.consumerKey,
      },
      {
        name: "Consumer Secret",
        category: this.user.consumerSecret,
      },
    ];
  },
};
</script>

<style scoped>
</style>

