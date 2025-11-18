<template>
  <div class="home">Home</div>
  <p ref="p">My name is {{ name }} and my age is {{ age }}</p>
  <button @click="handleClick">Click me</button>
  <button @click="age++">add 1 to age</button>
  <input type="text" v-model="name" />
</template>

<script setup lang="ts">
import { ref } from "vue";

console.log("setup");

// const p = ref<HTMLParagraphElement | null>(null);

const name = ref("mario"); // const doesn't mean the value can't be changed, it just means the reference object is a constant and can't be changed
const age = ref(30);

const handleClick = () => {
  name.value = "luigi";
  age.value = 40;
};

const score = ref(5);
</script>
