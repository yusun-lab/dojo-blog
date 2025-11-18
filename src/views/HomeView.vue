<template>
  <div class="home">Home</div>
  <p>My name is {{ name }} and my age is {{ age }}</p>
  <button @click="handleClick">Click me</button>
</template>

<script setup lang="ts">
import { ref } from "vue";

console.log("setup");

const name = ref("mario");
const age = ref(30);

const handleClick = () => {
  console.log("button clicked");
};
</script>
