<template>
  <!-- Dropdown with icons -->
  <div class="parent">
    <div class="dropdown" id="icons-dropdown">
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
          <div class="py-1">
            <a class="menu-items" href="#">
              <svg
                class="w-5 h-5"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"
                />
              </svg>
              Edit
            </a>
            <a class="menu-items" href="#">
              <svg
                class="w-5 h-5"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z"
                />
              </svg>
              Duplicate</a
            >
          </div>
          <div class="py-1">
            <a class="menu-items" href="#">
              <svg
                class="w-5 h-5"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4"
                />
              </svg>
              Archive</a
            >
            <a class="menu-items" href="#">
              <svg
                class="w-5 h-5"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M13 9l3 3m0 0l-3 3m3-3H8m13 0a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              Move</a
            >
          </div>
          <div class="py-1">
            <a class="menu-items" href="#">
              <svg
                class="w-5 h-5"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z"
                />
              </svg>
              Share</a
            >
            <a class="menu-items" href="#">
              <svg
                class="w-5 h-5"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                />
              </svg>
              Add to favorites</a
            >
          </div>
          <div class="py-1">
            <a class="menu-items" href="#">
              <svg
                class="w-5 h-5"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                />
              </svg>
              Delete</a
            >
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
    this.detectClickOutside("icons-dropdown", this.hideMenu);
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
// Svg icons height and width - Change according to need
.w-5 {
  width: 1.125rem;
}
.h-5 {
  height: 1.125rem;
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
      display: flex;
      align-items: center;
      column-gap: 0.75rem;
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
}
</style>
