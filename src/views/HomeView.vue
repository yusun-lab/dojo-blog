<template>
  <div class="home">
    <h1>Home</h1>
    <input type="text" v-model="search" />
    <p>search term - {{ search }}</p>
    <ol>
      <li v-for="name in matchingNames" :key="name">{{ name }}</li>
    </ol>
    <button @click="handleClick">stop watching</button>
  </div>
</template>

<script setup lang="ts">
import { computed, ref, watch, watchEffect } from "vue";

const search = ref("");
const names = ref([
  "Haaland",
  "Mbappé",
  "Bellingham",
  "Yamal",
  "Zabiri",
  "Vinicius",
  "Dembele",
]);

// watch() returns a stop function that can be called to stop watching
// The variable name 'stopwatch' is arbitrary - you could name it anything
const stopwatch = watch(search, () => {
  console.log("watch function ran");
});

// watchEffect() also returns a stop function that can be called to stop the effect
// The variable name 'cleanupEffect' is arbitrary - you could name it anything
const cleanupEffect = watchEffect(() => {
  console.log("watch effect function ran", search.value);
});

const matchingNames = computed(() => {
  return names.value.filter((name) => name.includes(search.value));
});

const handleClick = () => {
  stopwatch(); // stops the watch function - permanently stops the watcher
  cleanupEffect(); // stops the watch effect function - permanently stops the effect
};
</script>
