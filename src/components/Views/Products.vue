<template>
  <div>
    <h2 class="pageTitle">Product Details</h2>
    <v-data-table
      :headers="headers"
      :items="items"
      item-key="name"
      class="elevation-1"
    ></v-data-table>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";

export default {
  data() {
    return {
      products: [],
      items: [],
      headers: [
        { text: "Id", value: "id", align: "start" },
        {
          text: "Name",
          value: "name",
        },
        { text: "Price", value: "price" },
      ],
    };
  },
  methods: {
    ...mapActions("products", ["fillProducts"]),
  },
  computed: {
    ...mapGetters("products", ["getProducts"]),
  },
  beforeMount() {
    this.fillProducts();
    this.products = this.getProducts;
    this.products.forEach((product) =>
      this.items.push({
        id: product.id,
        name: product.name,
        price: `${product.price}€`,
      })
    );
  },
};
</script>

<style>
</style>