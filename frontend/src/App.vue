<script setup>
import Header from "./components/Header.vue";
import CompanyNewSection from "./components/CompanyNew/CompanyNewSection.vue";
import { RouterView } from "vue-router";
import { useStore } from "vuex";
import { useRouter } from "vue-router"
import { computed, onMounted, watch, watchEffect } from "vue";

const store = useStore();
const router = useRouter()

const token = computed(() => store.state.auth.token);

const getTasks = () => {
  store.dispatch("task/fetchTasks");
};

watchEffect(() => {
  if (!token.value) {
    router.push("/login");
    return;
  }

  getTasks();
});

</script>

<template>
  <template v-if="token">
    <Header />
    <router-view />
    <CompanyNewSection />
  </template>
  <template v-else>
    <router-view />
  </template>
</template>

<style scoped></style>
