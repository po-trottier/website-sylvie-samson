const state = {
  width: window.innerWidth,
  height: window.innerHeight,
};

const getters = {
  desktop: s => s.width > 960,
  short: s => s.height < 1100,
};

const mutations = {
  mutateWidth: (s, payload) => {
    s.width = payload;
  },
  mutateHeight: (s, payload) => {
    s.height = payload;
  },
};

const actions = {
  setWidth: (context, payload) => {
    context.commit('mutateWidth', payload);
  },
  setHeight: (context, payload) => {
    context.commit('mutateHeight', payload);
  },
};

export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions,
};
