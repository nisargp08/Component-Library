<template>
  <div class="simple-dropdown">
    <button @click="isOpen = !isOpen" type="button" class="btn">
      Options
      <!-- Heroicon class: chevron-down -->
      <svg
        class="-mr-1 ml-2 h-5 w-5"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 20 20"
        fill="currentColor"
        aria-hidden="true"
      >
        <path
          fill-rule="evenodd"
          d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
          clip-rule="evenodd"
        />
      </svg>
    </button>
    <transition
      mode="out-in"
      enter-active-class="animate__animated animate__fadeIn animate__delay-300ms"
      leave-active-class="animate__animated animate__fadeOut animate__delay-300ms"
    >
      <div class="dropdown-menu" v-if="isOpen">
        <a class="menu-items" href="#">Account settings</a>
        <a class="menu-items" href="#">Support</a>
        <a class="menu-items" href="#">License</a>
        <a class="menu-items" href="#">Sign out</a>
      </div>
    </transition>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isOpen: true,
    };
  },
};
</script>

<style lang="scss" scoped>
.animate__delay-300ms {
  --animate-duration: 300ms;
}

.btn {
  // Variables
  $bg-color: white;
  $border-color: rgba(209, 213, 219, 1);
  $focus-border-color: rgba(#f97316, 1);
  $ring-offset-shadow: 0 0 #0000;
  $ring-shadow: 0 0 #0000;
  $shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.05);

  display: inline-flex;
  justify-content: center;
  color: $text-gray-700;
  padding: 0.5rem 1rem;
  font-size: 0.875rem;
  line-height: 1.25rem;
  font-weight: 600;
  border: 1px solid $border-color;
  background-color: $bg-color;
  border-radius: 0.375rem;
  transition: background-color 0.15s ease-in-out;
  box-shadow: $ring-offset-shadow, 0 0 #0000, $ring-shadow, 0 0 #0000, $shadow;

  &:hover {
    background-color: darken($color: $bg-color, $amount: 3%);
  }

  &:focus {
    outline: 2px solid transparent;
    border: 2px solid $focus-border-color;
  }

  svg {
    width: 1.3rem;
    height: 1.3rem;
    margin-left: 0.5rem;
    margin-right: -0.25rem;
  }
}

// Component style begins
$dropdown-bg: white;

.simple-dropdown {
  color: $text-gray-700;
  $ring-offset-shadow: 0 0 #0000;
  $ring-shadow: 0 0 #0000;
  $shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1),
    0 4px 6px -2px rgba(0, 0, 0, 0.05);

  display: inline-block;
  position: relative;
  text-align: right;

  .dropdown-menu {
    position: absolute;
    right: 0;
    margin-top: 0.25rem;
    text-align: left;
    background: $dropdown-bg;
    padding: 0.25rem 0;
    width: 14rem;
    border-radius: 0.375rem;
    box-shadow: $ring-offset-shadow, 0 0 #0000, $ring-shadow, 0 0 #0000, $shadow;

    .menu-items {
      display: block;
      padding: 0.5rem 1rem;
      font-size: 0.875rem;
      line-height: 1.25rem;
      font-weight: 500;

      &:hover {
        background-color: $text-gray-100;
      }
    }
  }
}
</style>
