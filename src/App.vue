<template>
  <div class="pizzatable" id="app">
    <Pizza />
  </div>
</template>

<script>
import Pizza from "./components/Pizza";

export default {
  name: "App",
  components: {
    Pizza,
  }
};
</script>

<style>
.pizzatable {
  padding: 50px 50px;
}
</style>
