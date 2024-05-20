<script setup>
import Task from "./Task.vue";
import { useStore } from "vuex";
import axiosService from "../../services/axios";
import { computed, onMounted, ref } from "vue";

const { status } = defineProps({
  status: String,
});
const store = useStore();

const tasks = computed(() => store.getters[`task/${status}Task`]);

const headingTitle = computed(() => {
  if (status === "todo") {
    return "Todo";
  } else if (status === "inProgress") {
    return "In Progress";
  } else {
    return "Completed";
  }
});

const startTitle = computed(() => {
  if (status === "todo") {
    return "Start";
  } else if (status === "inProgress") {
    return "Complete";
  } else {
    return "Reopen";
  }
});

const nextStatus = computed(() => {
  if (status === "todo") {
    return "inProgress";
  } else if (status === "inProgress") {
    return "completed";
  } else {
    return "inProgress";
  }
});

const fetchTasks = () => {
  store.dispatch('task/fetchTasks')
};

const startTask = async (id) => {
  await axiosService.put(`/tasks/${id}`, {
    status: nextStatus.value,
  });

  fetchTasks();
};

const removeTask = async (id) => {
  await axiosService.delete(`/tasks/${id}`);

  fetchTasks()
};

const handleStart = (id) => {
  startTask(id);
};

const handleRemove = (id) => {
  removeTask(id);
};
</script>

<template>
  <div>
    <div class="container-xxl mx-auto row align-items-stretch">
      <h2>{{ headingTitle }}</h2>
      <div class="text-center text-black-50" v-if="tasks.length === 0">
        Empty
      </div>
      <template v-for="task in tasks" :key="task._id">
        <Task :id="task._id" :banner="task.banner" :title="task.title" :description="task.description"
          :createdAt="task.createdAt" :startActionTitle="startTitle" @start="handleStart" @remove="handleRemove" />
      </template>
    </div>
  </div>
</template>

<style scoped></style>
