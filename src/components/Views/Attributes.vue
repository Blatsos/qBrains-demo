<template>
  <div>
    <h2 class="pageTitle">Attributes Details</h2>
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
      attributes: [],
      items: [],
      headers: [
        { text: "Id", value: "id", align: "start" },
        {
          text: "Name",
          value: "name",
        },
        { text: "Type", value: "type" },
      ],
    };
  },
  methods: {
    ...mapActions("attributes", ["fillAttributes"]),
  },
  computed: {
    ...mapGetters("attributes", ["getAttributes"]),
  },
  beforeMount() {
    this.fillAttributes();
    this.attributes = this.getAttributes;
    this.attributes.forEach((attribute) =>
      this.items.push({
        id: attribute.id,
        name: attribute.name,
        type: attribute.type,
      })
    );
  },
};
</script>

<style>
</style>