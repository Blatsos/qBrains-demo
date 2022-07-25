import api from "@/plugins/woocommerceRestAPI";

export default {
  namespaced: true,
  state: {
    products: [],
  },
  mutations: {
    setProducts(state, products) {
      state.products = products;
    },
  },
  actions: {
    async fillProducts({ commit }) {
      let products;
      await api
        .get("products", {
          per_page: 20,
        })
        .then((response) => {
          if (response.status === 200) {
            products = response.data;
            return;
          } else {
            return;
          }
        })
        .catch((error) => {
          console.log(error);
        });
      commit("setProducts", products);
    },
  },
  getters: {
    getProducts(state) {
      return state.products;
    },
  },
};
