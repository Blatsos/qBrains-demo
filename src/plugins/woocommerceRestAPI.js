import WooCommerceRestApi from "@woocommerce/woocommerce-rest-api";

// The proper way of connecting with the appropriate customer's api
// key would be to store the secret key and the customer's key in a
// state object using vuex and then connect this object with this file
// so the values would be dynamic and of course can be changed to connect
// to any store

const api = new WooCommerceRestApi({
  url: "https://demomaster.gr",
  consumerKey: "ck_5b09fad59743925a301bacc32b38d0b59c0b954f",
  consumerSecret: "cs_bf715004408cc3d54199c1d9e9bcb647dddb1f32",
  version: "wc/v3",
});

export default api;
