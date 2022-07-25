import api from "@/plugins/woocommerceRestAPI";

export default {
  namespaced: true,
  state: {
    attributes: [],
  },
  mutations: {
    setAttributes(state, attributes) {
      state.attributes = attributes;
    },
  },
  actions: {
    async fillAttributes({ commit }) {
      let attributes;
      await api
        .get("products/attributes", {
          per_page: 20, // 20 products per page
        })
        .then((response) => {
          if (response.status === 200) {
            console.log(response.data);
            attributes = response.data;
          } else {
            return;
          }
        })
        .catch((error) => {
          console.log(error);
        });
      commit("setAttributes", attributes);
    },
  },
  getters: {
    getAttributes(state) {
      return state.attributes;
    },
  },
};
