<template>
  <div class="post">
    <h2>{{ post.title }}</h2>
    <p>{{ snippet }}</p>
  </div>
</template>

<script setup lang="ts">
import { computed, defineProps } from "vue";

interface Post {
  title: string;
  id: string | number;
  body: string;
}

const props = defineProps<{
  post: Post;
}>();

const snippet = computed(() => {
  return props.post.body.substring(0, 100) + "...";
});
</script>
