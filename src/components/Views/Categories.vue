<template>
  <div>
    <h2 class="pageTitle">Categories Details</h2>
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
      categories: [],
      items: [],
      headers: [
        { text: "Id", value: "id", align: "start" },
        {
          text: "Name",
          value: "name",
        },
        { text: "Count", value: "count" },
      ],
    };
  },
  methods: {
    ...mapActions("categories", ["fillCategories"]),
  },
  computed: {
    ...mapGetters("categories", ["getCategories"]),
  },
  beforeMount() {
    this.fillCategories();
    this.categories = this.getCategories;
    this.categories.forEach((category) =>
      this.items.push({
        id: category.id,
        name: category.name,
        count: category.count,
      })
    );
  },
};
</script>

<style>
</style>