<template>
  <div class="home">
    <h1>Home</h1>
    <div v-if="error">{{ error }}</div>
    <div v-if="posts.length">
      <PostList :posts="posts" />
    </div>
    <div v-else>loading...</div>
  </div>
</template>

<script setup lang="ts">
import PostList from "../components/PostList.vue";
import getPosts from "../composables/getPosts";

const { posts, error, load } = getPosts();
load();
</script>
