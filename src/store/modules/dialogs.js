const state = {
  successMail: false,
  failMail: false,
  retirement: false,
};

const getters = {
  successMail: s => s.successMail,
  failMail: s => s.failMail,
  retirement: s => s.retirement,
};

const mutations = {
  mutateSuccessMail: (s, payload) => {
    s.successMail = payload;
  },
  mutateFailMail: (s, payload) => {
    s.failMail = payload;
  },
  mutateRetirement: (s, payload) => {
    s.retirement = payload;
  },
};

const actions = {
  setSuccessMail: (context, payload) => {
    context.commit('mutateSuccessMail', payload);
  },
  setFailMail: (context, payload) => {
    context.commit('mutateFailMail', payload);
  },
  setRetirement: (context, payload) => {
    context.commit('mutateRetirement', payload);
  },
};

export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions,
};
