const state = {
  user: null,
  token: null
};

const getters = {
  getUser: state => state.user,
  getToken: state => state.token
};

const mutations = {
  setUser(state, user) {
    state.user = user;
  },
  setToken(state, token) {
    state.token = token;
  }
};

export default {
  namespaced: true,
  state,
  getters,
  mutations,
};
