<script setup>
import { computed, onMounted, ref } from "vue";
import { useStore } from "vuex";
import News from "./News.vue";

const store = useStore();

const fetchNews = () => {
  store.dispatch("post/fetchPosts");
};

const news = computed(() => store.state.post.posts);

onMounted(() => {
  fetchNews();
})
</script>

<template>
  <div class="container-xxl mt-5">
    <h2>Company News</h2>
    <template v-for="newsItem in news" :key="newsItem.id">
      <News :banner="newsItem.banner" :title="newsItem.title" :description="newsItem.description" />
    </template>
  </div>
</template>

<script>
</script>
