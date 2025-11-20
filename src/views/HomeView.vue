<template>
  <div class="home">
    <h1>Home</h1>
    <PostList v-if="showPosts" :posts="posts" />
    <button @click="showPosts = !showPosts">toggle posts</button>
    <!-- .pop() is a JavaScript array method that removes the last element from the array and returns it -->
    <button @click="posts.pop()">delete a post</button>
  </div>
</template>

<script setup lang="ts">
import PostList from "../components/PostList.vue";
import { ref } from "vue";

const posts = ref([
  {
    title: "welcome to the blog",
    body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam auctor, nisl eget ultricies tincidunt, nunc nisl aliquam nunc, vitae aliquam nisl nunc vitae nisl. Sed vitae nisl eget nisl aliquam tincidunt. Nullam auctor, nisl eget ultricies tincidunt, nunc nisl aliquam nunc, vitae aliquam nisl nunc vitae nisl. Sed vitae nisl eget nisl aliquam tincidunt.",
    id: 1,
  },
  { title: "top 5 CSS tips", body: "Lorem ipsum", id: 2 },
]);

const showPosts = ref(true);
</script>
