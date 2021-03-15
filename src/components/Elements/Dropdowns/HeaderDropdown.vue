<template>
  <!-- Dropdown with header -->
  <div class="parent">
    <div class="dropdown" id="header-dropdown">
      <button
        @click="toggleVisibility()"
        @keydown.shift.tab="hideMenu()"
        type="button"
        class="btn"
      >
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
      <transition-fade>
        <div class="dropdown-menu dropdown-divide" v-if="isOpen">
          <div class="py-1 dropdown-header">
            <p>Signed in as</p>
            <p style="font-size : 0.875rem;color : gray">nisarg@example.com</p>
          </div>
          <div class="py-1">
            <a class="menu-items" href="#">Account settings</a>
            <a class="menu-items" href="#">Support</a>
            <a class="menu-items" href="#">License</a>
          </div>
          <div class="py-1">
            <a class="menu-items" href="#">Sign out</a>
          </div>
        </div>
      </transition-fade>
    </div>
  </div>
</template>

<script>
import TransitionFade from "@general/TransitionFade.vue";
import { detectOutside } from "@general/DetectClickOutside.js";

export default {
  mixins: [detectOutside],
  data() {
    return {
      isOpen: true,
    };
  },
  mounted() {
    // Close on escape key event listener
    window.addEventListener("keyup", (e) => {
      if (e.code == "Escape") {
        this.hideMenu();
      }
    });
    // Clickaway listener - Needs 'id' and action
    this.detectClickOutside("header-dropdown", this.hideMenu);
  },
  methods: {
    // Toggle open/close state
    toggleVisibility() {
      this.isOpen = !this.isOpen;
    },
    // Hide select menu
    hideMenu() {
      this.isOpen = false;
      this.focusedIndex = 0;
    },
  },
  components: {
    TransitionFade,
  },
};
</script>

<style lang="scss" scoped>
div.parent {
  justify-content: flex-end;
  @media (min-width: 640px) {
    justify-content: center;
  }
}
.dropdown {
  --animate-duration: 300ms;
}
// Component css starts
.py-1 {
  padding: 0.25rem 0;
}
.btn {
  // Variables
  $bg-color: white;
  $border-color: rgba(209, 213, 219, 1);
  $focus-border-color: rgba($theme-color, 1);
  $ring-offset-shadow: 0 0 #0000;
  $ring-shadow: 0 0 #0000;
  $shadow: $shadow-sm;

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
    outline: none;
    box-shadow: 0 0 0 0.15rem
      rgba($color: rgba($focus-border-color, 1), $alpha: 0.5);
    border-color: transparent;
  }

  svg {
    width: 1.3rem;
    height: 1.3rem;
    margin-left: 0.5rem;
    margin-right: -0.25rem;
  }
}

div.dropdown {
  $dropdown-bg: white;
  color: $text-gray-700;
  $ring-offset-shadow: 0 0 #0000;
  $ring-shadow: 0 0 #0000;
  $shadow: $shadow-lg;

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
      margin: 0 0.25rem;
      border-radius: 0.375rem;

      &:hover,
      &:focus {
        background-color: $text-gray-100;
      }
      &:focus {
        outline: none;
      }
    }
  }
  .dropdown-divide {
    > :not(:first-child) {
      border-top: 1px solid $text-gray-100;
    }
  }
  .dropdown-header {
    padding: 1rem 1rem;
    font-size: 0.875;
    font-weight: 600;
  }
}
</style>
