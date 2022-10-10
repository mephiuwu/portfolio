<template>
  <div>
    <h1>App</h1>
    <nav>
      <router-link to="/">Home</router-link>  |
      <router-link to="/about-me">Sobre mí</router-link>  |
      <router-link to="/experience">Mi experiencia</router-link>  |
    </nav>
    <router-view></router-view>
  </div>
</template>

<script setup>
</script>