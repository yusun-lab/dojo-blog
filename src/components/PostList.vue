<template>
  <div class="post-list">
    <div v-for="post in posts" :key="post.id">
      <SinglePost :post="post" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { defineProps } from "vue";
import SinglePost from "./SinglePost.vue";

interface Post {
  title: string;
  id: string | number;
  body: string;
}

const props = defineProps<{
  posts: Post[];
}>();

console.log(props.posts);
</script>
