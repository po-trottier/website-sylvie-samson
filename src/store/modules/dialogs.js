const state = {
  successMail: false,
  failMail: false,
};

const getters = {
  successMail: s => s.successMail,
  failMail: s => s.failMail,
};

const mutations = {
  mutateSuccessMail: (s, payload) => {
    s.successMail = payload;
  },
  mutateFailMail: (s, payload) => {
    s.failMail = payload;
  },
};

const actions = {
  setSuccessMail: (context, payload) => {
    context.commit('mutateSuccessMail', payload);
  },
  setFailMail: (context, payload) => {
    context.commit('mutateFailMail', payload);
  },
};

export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions,
};
