<template>
  <transition
    mode="out-in"
    enter-active-class="animate__animated animate__slideInLeft"
    leave-active-class="animate__animated animate__slideOutLeft"
  >
    <slot></slot>
  </transition>
</template>

