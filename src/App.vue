<template>
  <div id="app">
    <main>
      <transition
      mode="out-in"
      enter-active-class="animate__animated animate__fadeIn animate__delay-150ms"
      leave-active-class="animate__animated animate__fadeOut animate__delay-150ms"
    >
      <router-view />
      </transition>
    </main>
  </div>
</template>

<style lang="scss">

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
  margin: 0 auto;
}
.border-t{
    border-top: 1px solid $text-gray-200;
}
.animate__delay-150ms {
  --animate-duration: 150ms;
}
</style>
