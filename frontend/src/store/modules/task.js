import axiosService from "../../services/axios";

const state = {
  tasks: [],
};

const getters = {
  todoTask: state => state.tasks.filter(task => task.status === 'todo'),
  inProgressTask: state => state.tasks.filter(task => task.status === 'inProgress'),
  completedTask: state => state.tasks.filter(task => task.status === 'completed'),
};

const mutations = {
  setTasks(state, tasks) {
    state.tasks = tasks;
  },
};

const actions = {
  async fetchTasks({ commit }) {
    const response = await axiosService.get("/tasks");

    commit("setTasks", response.data?.data.docs);
  }
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations,
};
