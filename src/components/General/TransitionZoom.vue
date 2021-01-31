<template>
  <transition
    mode="out-in"
    enter-active-class="animate__animated animate__zoomIn"
    leave-active-class="animate__animated animate__zoomOut"
  >
    <slot></slot>
  </transition>
</template>

