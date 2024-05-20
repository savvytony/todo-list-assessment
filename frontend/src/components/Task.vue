<script setup>
defineProps({
  banner: String,
  title: String,
  description: String
})
</script>

<template>
  <div class="col-sm-4 p-1 h-100">
    <div class="card p-1 h-100">
      <img :src=banner class="card-img-top">
      <div class="card-body">
        <h5 class="card-title">{{ title }}</h5>
        <p class="card-text">
        <div>Task description</div>
        <div>{{ description }}</div>
        <div>Created At: 01 Jan 2024</div>
        </p>
        <a href="#" class="btn btn-primary me-2">Start</a>
        <a href="#" class="btn btn-light">Remove</a>
      </div>
    </div>
  </div>
</template>

<style scoped></style>