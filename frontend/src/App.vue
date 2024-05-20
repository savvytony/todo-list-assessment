<script setup>
import Header from './components/Header.vue';
import Task from './components/Task.vue'
</script>

<template>
  <Header />

  <div class="container-fluid row align-items-stretch">
    <Task banner="https://fakeimg.pl/320x200/" title="Task 1" description="Test 1" />
    <Task banner="https://fakeimg.pl/320x200/" title="Task 2" description="Test 2" />
    <Task title="Task 3" description="Test 3" />
    <Task banner="https://fakeimg.pl/320x200/" title="Task 4" description="Test 4" />
    <Task banner="https://fakeimg.pl/320x200/" title="Task 5" description="Test 5" />
    <Task banner="https://fakeimg.pl/320x200/" title="Task 6" description="Test 6" />
  </div>
</template>

<style scoped></style>
