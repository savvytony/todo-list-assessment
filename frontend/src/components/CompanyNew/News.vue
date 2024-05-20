<script setup>
const { banner } = defineProps({
  banner: String,
  title: String,
  description: String
})

</script>

<template>
  <div class="news">
    <div class="pe-3 pb-3">
      <img :src="banner">
    </div>
    <div class="flex-grow-1 ">
      <h5>{{ title }}</h5>
      <p>{{ description }}</p>
    </div>
  </div>
</template>

<script>
</script>

<style scoped lang="scss">
.news {
  display: flex;
  margin-bottom: 20px;

  &:nth-child(odd) {
    flex-direction: row-reverse;
  }
}
</style>
