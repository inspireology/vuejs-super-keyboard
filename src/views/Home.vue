<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
    <vue-super-keyboard></vue-super-keyboard>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
import VueSuperKeyboard from '@/components/VueSuperKeyboard/VueSuperKeyboard.vue'

export default {
  name: 'Home',
  components: {
    HelloWorld,
    VueSuperKeyboard
  }
}
</script>
