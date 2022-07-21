import WooCommerceRestApi from "@woocommerce/woocommerce-rest-api";

const api = new WooCommerceRestApi({
  url: "https://demomaster.gr",
  consumerKey: "ck_5b09fad59743925a301bacc32b38d0b59c0b954f",
  consumerSecret: "cs_bf715004408cc3d54199c1d9e9bcb647dddb1f32",
  version: "wc/v3",
});

// api
//   .get("products", {
//     per_page: 20, // 20 products per page
//   })
//   .then((response) => {
//     // Successful request
//     console.log("Response Status:", response.status);
//     console.log("Response Headers:", response.headers);
//     console.log("Response Data:", response.data);
//     console.log("Total of pages:", response.headers["x-wp-totalpages"]);
//     console.log("Total of items:", response.headers["x-wp-total"]);
//   })
//   .catch((error) => {
//     // Invalid request, for 4xx and 5xx statuses
//     console.log("Response Status:", error.response.status);
//     console.log("Response Headers:", error.response.headers);
//     console.log("Response Data:", error.response.data);
//   })
//   .finally(() => {
//     // Always executed.
//   });

export default api;
