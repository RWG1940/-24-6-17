
<template>
  <div class="App">
    <div class="login">
        <button @click="loginButton">登录</button>
    </div>
    <RouterView />
  </div>
</template>
<script setup lang="ts">
import router from '@/router/router'
const loginButton = () => {
    router.replace('login')
}
</script>
<style scoped>

</style>
