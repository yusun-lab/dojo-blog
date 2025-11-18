<template>
  <div class="home">Home</div>
  <p ref="p">My name is {{ name }} and my age is {{ age }}</p>
  <button @click="handleClick">Click me</button>
</template>

<script setup lang="ts">
import { ref } from "vue";

console.log("setup");

const p = ref<HTMLParagraphElement | null>(null);
// p.value is null here because:
// 1. setup() runs before the component is mounted
// 2. DOM elements are created and bound to refs only after mounting
// 3. The template's ref="p" will bind to this ref only when the component is mounted
// 4. Use onMounted() if you need to access DOM elements during initialization
console.log(p, p.value);

const name = ref("mario");
const age = ref(30);

const handleClick = () => {
  console.log(p, p.value); // p.value is not null here because:
  // 1. handleClick() runs after the component is mounted
  // 2. DOM elements are created and bound to refs only after mounting
  // 3. The template's ref="p" will bind to this ref only when the component is mounted
  p.value?.classList.add("test");
  if (p.value) {
    p.value.textContent = "hello, world";
  }
};
</script>
