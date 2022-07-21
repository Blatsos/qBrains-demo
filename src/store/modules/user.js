export default {
  namespaced: true,
  state: {
    user: {},
  },
  mutations: {
    setUser(state, user) {
      state.user = user;
    },
  },
  actions: {
    loginUser({ commit }, user) {
      commit("setUser", user);
    },
  },
  getters: {
    getUser(state) {
      return state.user;
    },
  },
};
