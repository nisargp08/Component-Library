<template>
  <nav class="navbar dark">
    <div class="wrapper">
      <div class="sub-wrapper">
        <div class="button-wrapper">
          <button @click="isMenuOpen = !isMenuOpen" class="btn btn-transparent">
            <!-- When menu is closed -->
            <svg
              v-if="!isMenuOpen"
              class="w-6 h-6 text-gray-300"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
            <!-- When menu is opened -->
            <svg
              v-if="isMenuOpen"
              class="w-6 h-6 text-gray-300"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>
        <div class="multi-wrapper">
          <div class="logo-wrapper">
            <img src="@/assets/images/brand-logo-white.png" alt="Logo" />
          </div>
          <div class="links-wrapper">
            <a href="#" class="active">Dashboard</a>
            <a href="#">Team</a>
            <a href="#">Projects</a>
            <a href="#">Calendar</a>
          </div>
        </div>
        <div class="action-wrapper pr-2">
          <div class="action-item">
            <button class="btn btn-transparent btn-round">
              <svg
                class="w-6 h-6 text-gray-300"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
                />
              </svg>
            </button>
          </div>
          <div class="action-item avatar-action-item ml-2">
            <div>
              <button
                @click="isUserDropdown = !isUserDropdown"
                class="btn btn-transparent btn-avatar"
                :class="{ 'avatar-ring': isUserDropdown }"
              >
                <img src="@/assets/images/eren-kruger.png" alt="" />
              </button>
              <div
                class="dropdown-overlay"
                @click="isUserDropdown = false"
                v-if="isUserDropdown"
              ></div>
            </div>
            <transition-fade>
              <div class="action-item-dropdown" v-if="isUserDropdown">
                <a href="#">Your Profile</a>
                <a href="#">Settings</a>
                <a href="#">Sign out</a>
              </div>
            </transition-fade>
          </div>
        </div>
      </div>
      <!-- Mobile links menu -->
      <div class="links-wrapper mobile" v-if="isMenuOpen">
        <a href="#" class="active">Dashboard</a>
        <a href="#">Team</a>
        <a href="#">Projects</a>
        <a href="#">Calendar</a>
      </div>
    </div>
  </nav>
</template>

<script>
import TransitionFade from "@general/TransitionFade.vue";
export default {
  data() {
    return {
      isUserDropdown: false,
      isMenuOpen: false,
    };
  },
  components: {
    TransitionFade,
  },
};
</script>

<style lang="scss" scoped>
* {
  --animate-duration: 250ms;
}
// Variables
$bg-color: $text-gray-800;
$font-color: $text-gray-300;
// Utilities
.text-gray-300 {
  color: $text-gray-300;
}
.ml-2 {
  margin-left: 0.5rem;
}
.pr-2 {
  padding-right: 0.5rem;
}
// Component css
.navbar {
  display: block;
  width: 100%;
  max-width: 100%;

  // Buttons
  .btn-transparent {
    background-color: transparent;
    border: none;
    padding: 0.5rem;
    &:focus {
      box-shadow: 0 0 0 0.15rem rgba($color: $font-color, $alpha: 1);
    }
  }
  .btn-round {
    border-radius: 9999px;
  }
  .btn-avatar {
    padding: 0;
    border-radius: 9999px;
    img {
      width: 2rem;
      height: 2rem;
      border-radius: 9999px;
      object-fit: cover;
    }
    &:focus {
      box-shadow: none;
    }
    // When active
    &.avatar-ring {
      box-shadow: 0 0 0 0.15rem rgba($color: $font-color, $alpha: 1);
    }
  }

  // Scheme
  &.dark {
    background-color: $bg-color;
    color: $font-color;
  }

  // Wrapper
  .wrapper {
    padding-left: 0.5rem;
    padding-right: 0.5rem;
  }
  //SubWrapper
  .sub-wrapper {
    display: flex;
    align-items: center;
    justify-content: space-between;
    position: relative;
    height: 4rem;
  }
  // Logo & Links wrapper
  .multi-wrapper{
    display: flex;
    align-items: center;
    > :not(:first-child){
      margin-left: 0.75rem;
    }
  }
  // Collapse button
  .button-wrapper {
    @media (min-width: 640px) {
      display: none;
    }
  }
  // Logo
  .logo-wrapper {
    display: flex;
    align-items: center;
    flex-shrink: 0;
    img {
      height: 3rem;
      display: block;
      width: auto;
    }
  }
  // Action Buttons
  .action-wrapper {
    display: flex;
    align-items: center;
  }
  // Avatar action button
  .avatar-action-item {
    position: relative;
    // Dropdown overlay
    .dropdown-overlay {
      position: fixed;
      top: 0;
      right: 0;
      left: 0;
      bottom: 0;
      background-color: transparent;
    }
    // Dropdown
    .action-item-dropdown {
      display: flex;
      flex-direction: column;
      position: absolute;
      right: 0;
      transform-origin: top right;
      width: 12rem;
      background-color: white;
      border-radius: 0.375rem;
      padding-top: 0.25rem;
      padding-bottom: 0.25rem;
      margin-top: 0.25rem;
      box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1),
        0 4px 6px -2px rgba(0, 0, 0, 0.05);
      > * {
        color: $text-gray-700;
        padding: 0.5rem 1rem;
        font-size: 0.875rem;
        cursor: pointer;
        font-weight: 500;
        &:hover {
          background-color: $text-gray-100;
        }
      }
    }
  }
  //Links menu
  .links-wrapper {
    display: none;
    // Mobile
    &.mobile {
      display: flex;
      flex-direction: column;
      background: $bg-color;
      padding-top: 0.5rem;
      padding-bottom: 0.75rem;
      @media(min-width : 640px){
        display: none;
      }
    }
    // Individual links
    > * {
      padding: 0.75rem 0.5rem;
      font-size: 0.875rem;
      border-radius: 0.375rem;
      font-size: 1rem;
      font-weight: 600;
      color: $font-color;
      &:hover {
        background: $text-gray-700;
        color: white;
      }
      // Active
      &.active {
        background: $text-gray-900;
        color: white;
      }
    }
    // After 640px
    @media(min-width : 640px){
        display: block;
        > :not(:first-child){
          margin-left: 0.75rem;
        }
        > * {
          padding: 0.5rem 1rem;
        }
    }
  }
}
</style>
