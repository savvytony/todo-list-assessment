import axiosService from "../../services/axios";

const state = {
  posts: [],
};

const mutations = {
  setPosts(state, post) {
    state.posts = post;
  },
};

const actions = {
  async fetchPosts({ commit }) {
    const response = await axiosService.get("/posts");

    commit("setPosts", response.data?.data.docs);
  }
}

export default {
  namespaced: true,
  state,
  actions,
  mutations,
};
