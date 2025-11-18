<template>
  <div class="home">
    <h1>Home</h1>
    <input type="text" v-model="search" />
    <p>search term - {{ search }}</p>
    <ul>
      <li v-for="name in matchingNames" :key="name">{{ name }}</li>
    </ul>
  </div>
</template>

<script setup lang="ts">
import { computed, ref } from "vue";

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

const matchingNames = computed(() => {
  return names.value.filter((name) => name.includes(search.value));
});
</script>
