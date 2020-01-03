export default {
  namespaced: true,
  state: {
    isCollapse: false,
  },
  mutations: {
    setIsCollapse(state) {
      state.isCollapse = !state.isCollapse;
    },
  },
  actions: {
  },
  getters: {
  },
};
