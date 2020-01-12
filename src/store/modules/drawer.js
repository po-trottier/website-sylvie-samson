const state = {
  drawer: false,
};

const getters = {
  isOpened: s => s.drawer,
};

const mutations = {
  mutateDrawer: (s, payload) => {
    s.drawer = payload;
  },
};

const actions = {
  setDrawer: (context, payload) => {
    context.commit('mutateDrawer', payload);
  },
};

export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions,
};
