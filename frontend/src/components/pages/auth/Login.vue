<script setup>
import { ref } from "vue";
import axiosService from "../../../services/axios";
import { useRouter } from "vue-router"; import { useStore } from "vuex";

const store = useStore()
const router = useRouter()
const username = ref("");
const password = ref("");

const login = async () => {
  const response = await axiosService.post("/auth/login", {
    username: username.value,
    password: password.value,
  })

  return {
    token: response.data?.data.accessToken,
  }
}

const handleLogin = async () => {
  const { token } = await login();
  localStorage.setItem("token", token);
  store.commit('auth/setToken', token)
  store.commit('auth/setUser', username)

  router.push("/");
};
</script>

<template>
  <div class="container-sm mx-auto">
    <div class="login-card card mx-auto">
      <div class="card-body">
        <h5 class="card-title">Login</h5>
        <div class="mb-3">
          <label for="username" class="form-label">Username</label>
          <input type="text" class="form-control" id="username" v-model="username">
        </div>
        <div class="mb-3">
          <label for="password" class="form-label">Password</label>
          <input type="password" class="form-control" id="password" v-model="password">
        </div>
        <button type="button" class="btn btn-primary" @click="handleLogin">Login</button>
      </div>
    </div>
  </div>
</template>


<style scoped>
.login-card {
  max-width: 400px;
  margin-top: 200px;
}
</style>
