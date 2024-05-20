<script setup>
const { id, createdAt } = defineProps({
  id: String,
  startActionTitle: String,
  banner: String,
  title: String,
  description: String,
  createdAt: String,
})

const emit = defineEmits(["start", "remove"])

const handleStart = () => {
  emit('start', id)
}

const handleRemove = () => {
  emit('remove', id)
}
</script>

<template>
  <div class="task col-sm-6 col-md-4 p-2">
    <div class="card p-1 h-100">
      <img :src=banner class="card-img-top">
      <div class="card-body d-flex flex-column ">
        <h5 class="card-title">{{ title }}</h5>
        <p class="card-text">
        <div>{{ description }}</div>
        <div>Created At: {{ new Date(createdAt)?.toDateString() || '-' }}</div>
        </p>
        <div class="flex-grow-1 "></div>
        <div class="task-action">
          <button href="#" class="btn btn-primary me-2" @click="handleStart">{{ startActionTitle }}</button>
          <button href="#" class="btn btn-outline-secondary" @click="handleRemove">Remove</button>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.task {
  min-height: 400px;
}

.task-action {
  button {
    min-width: 80px;
  }
}
</style>
