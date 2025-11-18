<template>
  <div class="home">
    <h1>Home</h1>
    <h2>Refs</h2>
    <p>{{ playerOne.name }} - {{ playerOne.age }}</p>
    <button @click="updatePlayerOne">Update player one</button>

    <h2>Reactive</h2>
    <p>{{ playerTwo.name }} - {{ playerTwo.age }} - {{ nameTwo }}</p>
    <button @click="updatePlayerTwo">Update player two</button>
  </div>
</template>

<script setup lang="ts">
import { reactive, ref } from "vue";

const playerOne = ref({ name: "Haaland", age: 24 });
const playerTwo = reactive({ name: "Mbappé", age: 25 });

const nameOne = ref("Haaland");
const nameTwo = reactive("Mbappé"); // it's a  string, primitive value, not an object. We can't use primitive values with reactive.

const updatePlayerOne = () => {
  playerOne.value.age = 58;
};

const updatePlayerTwo = () => {
  playerTwo.age = 59;
  nameTwo = reactive("Yamal"); // nameTwo is a constant, it can't be changed.
};
</script>
