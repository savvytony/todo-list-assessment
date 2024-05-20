<script setup>
import { computed, ref } from "vue";
import { useStore } from "vuex";

const store = useStore();

const user = computed(() => {
  return store.state.auth.user;
});

const todoCount = computed(() => {
  return store.getters[`task/todoTask`].length;
});

const inProgressCount = computed(() => {
  return store.getters[`task/inProgressTask`].length;
});

const completedCount = computed(() => {
  return store.getters[`task/completedTask`].length;
});

defineProps({
  msg: String,
});

const handleLogout = () => {
  store.commit("auth/setToken", null);
  store.commit("auth/setUser", null);
};
</script>

<template>
  <nav class="navbar navbar-expand-lg bg-black text-white mb-3" data-bs-theme="dark">
    <div class="container-fluid">
      <a class="nav-link text-white" href="#">{{ user }}</a>
      <button class="navbar-toggler text-white" type="button" data-bs-toggle="collapse"
        data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false"
        aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <li class="nav-item">
            <RouterLink to="/todo" class="nav-link"><span>Todo</span> <span class="badge rounded-pill text-bg-danger">{{
                todoCount }}</span>
            </RouterLink>
          </li>
          <li class="nav-item">
            <RouterLink to="/inprogress" class="nav-link"><span>In Progress</span> <span
                class="badge rounded-pill text-bg-danger">{{
                inProgressCount
                }}</span>
            </RouterLink>
          </li>
          <li class="nav-item">
            <RouterLink to="/completed" class="nav-link"><span>Completed</span></RouterLink> <span
              class="badge rounded-pill text-bg-danger">{{
              completedCount
              }}</span>
          </li>
        </ul>
        <a class="nav-link text-white mx-2" href="#">{{ user }}</a>
        <button class="nav-link" @click="handleLogout">Logout</button>
      </div>
    </div>
  </nav>
</template>

<style scoped lang="scss">
.navbar-toggler-icon {
  color: white;
}

.nav-item {
  display: flex;
  align-items: center;

  .nav-link {
    .span {
      color: rgba(255, 255, 255, 0.5);
    }

  }

  .router-link-active {
    color: white;
  }

}
</style>
