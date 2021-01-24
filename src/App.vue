<template>
  <div id="app">
    <main>
      <router-view />
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
</style>
