<template>
  <div class="post">
    <router-link :to="{ name: 'Details', params: { id: post.id } }">
      <h2>{{ post.title }}</h2>
    </router-link>
    <p>{{ snippet }}</p>
    <span v-for="tag in post.tags" :key="tag"> #{{ tag }} </span>
  </div>
</template>

<script setup lang="ts">
import { computed, defineProps } from "vue";

interface Post {
  title: string;
  id: string | number;
  body: string;
  tags: string[];
}

const props = defineProps<{
  post: Post;
}>();

const snippet = computed(() => {
  return props.post.body.substring(0, 100) + "...";
});
</script>
