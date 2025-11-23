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
import { ref } from "vue";

const posts = ref([]);
const error = ref<string | null>(null);

const load = async () => {
  try {
    let data = await fetch("http://localhost:3000/posts");
    if (!data.ok) {
      throw new Error("no data available");
    }
    posts.value = await data.json();
  } catch (err) {
    if (err instanceof Error) {
      error.value = err.message;
    } else {
      error.value = "An unknown error occurred";
    }
    console.log(error.value);
  }
};

load();
</script>
