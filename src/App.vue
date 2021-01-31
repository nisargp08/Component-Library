<template>
  <div id="app">
    <main>
      <transition-fade>
      <router-view />
      </transition-fade>
    </main>
  </div>
</template>

<script>
import TransitionFade from '@general/TransitionFade.vue'

export default{
  name : 'App',
  components : {
    TransitionFade
  }
}
</script>
<style lang="scss">
body,#app{
  min-height: 100vh;
}
#app {
  font-family: $primaryFont;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  word-break: break-word;
  box-sizing: border-box;
  color: $text-gray-900;
  padding: 1rem;
  max-width: 1440px;
  width: 100%;
  height: 100%;
  margin: 0 auto;
}
.border-t{
    border-top: 1px solid $text-gray-200;
}
main {
  --animate-duration: 150ms;
}
</style>
