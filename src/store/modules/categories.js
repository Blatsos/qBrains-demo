import api from "@/plugins/woocommerceRestAPI";

export default {
  namespaced: true,
  state: {
    categories: [],
  },
  mutations: {
    setCategories(state, categories) {
      state.categories = categories;
    },
  },
  actions: {
    async fillCategories({ commit }) {
      let categories;
      await api
        .get("products/categories", {
          per_page: 20, // 20 products per page
        })
        .then((response) => {
          if (response.status === 200) {
            categories = response.data;
          } else {
            return;
          }
        })
        .catch((error) => {
          console.log(error);
        });
      commit("setCategories", categories);
    },
  },
  getters: {
    getCategories(state) {
      return state.categories;
    },
  },
};
