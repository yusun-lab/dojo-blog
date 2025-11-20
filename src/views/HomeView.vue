<template>
  <div class="home">
    <h1>Home</h1>
    <!-- :posts="posts" - Pass the 'posts' ref array as a prop named 'posts' to PostList component.
         The prop name (left side) must match what the child component defines in its props.
         The value (right side) is the data from this component being passed down. -->
    <PostList :posts="articles" />
  </div>
</template>

<script setup lang="ts">
import PostList from "../components/PostList.vue";
import { ref } from "vue";

const articles = ref([
  {
    title: "welcome to the blog",
    body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam auctor, nisl eget ultricies tincidunt, nunc nisl aliquam nunc, vitae aliquam nisl nunc vitae nisl. Sed vitae nisl eget nisl aliquam tincidunt. Nullam auctor, nisl eget ultricies tincidunt, nunc nisl aliquam nunc, vitae aliquam nisl nunc vitae nisl. Sed vitae nisl eget nisl aliquam tincidunt.",
    id: 1,
  },
  { title: "top 5 CSS tips", body: "Lorem ipsum", id: 2 },
]);
</script>
