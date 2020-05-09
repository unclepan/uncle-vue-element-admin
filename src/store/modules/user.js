export default {
  namespaced: true,
  state: {
    userInfo: null,
  },
  mutations: {
    setUser(state, val) {
      state.userInfo = val;
    },
  },
  actions: {
  },
  getters: {
  },
};
