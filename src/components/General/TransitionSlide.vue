<template>
  <transition
    mode="out-in"
    enter-active-class="animate__animated animate__slideInRight"
    leave-active-class="animate__animated animate__slideOutRight"
  >
    <slot></slot>
  </transition>
</template>

