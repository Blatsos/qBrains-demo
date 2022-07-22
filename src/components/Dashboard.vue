<template>
  <v-container fluid>
    <v-row>
      <v-col class="ma-0 pa-0" cols="2" sm="2" md="2">
        <v-navigation-drawer permanent>
          <v-list-item>
            <v-list-item-content>
              <v-list-item-title class="text-h6">
                Welcome {{ user.userName }}
              </v-list-item-title>
              <v-list-item-subtitle>
                Store: {{ user.storeName }}
              </v-list-item-subtitle>
            </v-list-item-content>
          </v-list-item>

          <v-divider></v-divider>

          <v-list dense nav>
            <v-list-item v-for="item in items" :key="item.title" link>
              <v-list-item-icon>
                <v-icon>{{ item.icon }}</v-icon>
              </v-list-item-icon>

              <v-list-item-content @click="navHandler(item.title)">
                <v-list-item-title>{{ item.title }}</v-list-item-title>
              </v-list-item-content>
            </v-list-item>
          </v-list>
        </v-navigation-drawer>
      </v-col>

      <v-col cols="10" sm="10" md="10">
        <v-row>
          <v-container v-if="settings">
            <Settings />
          </v-container>
          <v-container v-if="categories">
            <Categories />
          </v-container>
          <v-container v-if="attributes">
            <Attributes />
          </v-container>
          <v-container v-if="products">
            <Products />
          </v-container>
        </v-row>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import "@mdi/font/css/materialdesignicons.css";
import { mapGetters } from "vuex";
import Settings from "./Views/Settings.vue";
import Categories from "./Views/Categories.vue";
import Attributes from "./Views/Attributes.vue";
import Products from "./Views/Products.vue";

export default {
  comments: {
    Settings,
    Categories,
    Products,
    Attributes,
  },
  data() {
    return {
      settings: true,
      categories: false,
      attributes: false,
      products: false,
      user: {},
      items: [
        { title: "Settings", icon: "mdi-cog" },
        { title: "Categories", icon: "mdi-view-dashboard" },
        { title: "Products", icon: "mdi-cart" },
        { title: "Attributes", icon: "mdi-palette" },
        { title: "Logout", icon: "mdi-exit-to-app" },
      ],
      right: null,
    };
  },
  methods: {
    makeAllFalse() {
      this.settings = false;
      this.categories = false;
      this.products = false;
      this.attributes = false;
    },
    navHandler(title) {
      switch (title) {
        case "Logout":
          this.$router.push("/");
          break;
        case "Settings":
          this.makeAllFalse();
          this.settings = true;
          break;
        case "Categories":
          this.makeAllFalse();
          this.categories = true;
          break;
        case "Products":
          this.makeAllFalse();
          this.products = true;
          break;
        case "Attributes":
          this.makeAllFalse();
          this.attributes = true;
          break;
        default:
      }
      console.log(title);
    },
  },
  computed: {
    ...mapGetters("user", ["getUser"]),
  },
  beforeMount() {
    this.user = this.getUser;
  },
  components: { Settings, Categories, Attributes, Products },
};
</script>

<style>
</style>