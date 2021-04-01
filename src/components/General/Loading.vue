<template>
  <div class="loading-gif">
    <svg
      class="w-16 h-16"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 90 90"
      preserveAspectRatio="xMidYMid"
      display="block"
    >
      <path
        fill="none"
        stroke="#e90c59"
        stroke-width="6.4"
        stroke-dasharray="42.76482137044271 42.76482137044271"
        d="M19.44 24C9.12 24 4 34.64 4 40s5.12 16 15.44 16c15.44 0 25.68-32 41.12-32C70.88 24 76 34.64 76 40s-5.12 16-15.44 16c-15.44 0-25.68-32-41.12-32z"
        stroke-linecap="round"
        style="transform-origin:50px 50px"
      >
        <animate
          attributeName="stroke-dashoffset"
          repeatCount="indefinite"
          dur="1s"
          keyTimes="0;1"
          values="0;256.58892822265625"
        />
      </path>
    </svg>
    <!-- <svg
      v-if="currentTheme == 'theme-light'"
      class="w-16 h-16"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 90 90"
      preserveAspectRatio="xMidYMid"
      display="block"
    >
      <path
        fill="none"
        stroke="#f7df94"
        stroke-width="6.4"
        stroke-dasharray="42.76482137044271 42.76482137044271"
        d="M19.44 24C9.12 24 4 34.64 4 40s5.12 16 15.44 16c15.44 0 25.68-32 41.12-32C70.88 24 76 34.64 76 40s-5.12 16-15.44 16c-15.44 0-25.68-32-41.12-32z"
        stroke-linecap="round"
        style="transform-origin:50px 50px"
      >
        <animate
          attributeName="stroke-dashoffset"
          repeatCount="indefinite"
          dur="1s"
          keyTimes="0;1"
          values="0;256.58892822265625"
        />
      </path>
    </svg> -->
    <p>Loading...</p>
  </div>
</template>

<style lang="scss" scoped>
.w-16 {
  width: 4rem;
}
.h-16 {
  height: 4rem;
}
.loading-gif {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  padding: 4rem;
}
</style>
