<template>
  <!-- Dark navbar with Action -->
  <nav class="navbar dark">
    <div class="wrapper">
      <div class="sub-wrapper">
        <div class="flex align-center flex-1">
          <div class="button-wrapper">
            <button
              @click="isMenuOpen = !isMenuOpen"
              class="btn btn-transparent"
            >
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
            <div class="flex align-center flex-1">
              <div class="logo-wrapper">
                <img src="@/assets/images/brand-logo-white.png" alt="Logo" />
              </div>
              <div class="links-wrapper ml-3">
                <a href="#" class="active">Dashboard</a>
                <a href="#">Team</a>
                <a href="#">Projects</a>
                <a href="#">Calendar</a>
              </div>
            </div>
            <div class="action-item mr-3">
              <button class="btn btn-theme">
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
                    d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                  />
                </svg>
                <span class="ml-1">New Job</span>
              </button>
            </div>
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
            <div class="avatar-with-text">
              <button
                @click="isUserDropdown = !isUserDropdown"
                class="btn btn-transparent btn-avatar"
                :class="{ 'avatar-ring': isUserDropdown }"
              >
                <img src="@/assets/images/eren-kruger.png" alt="" />
                <svg
                  class="w-6 h-6 text-gray-300 px-1"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>
              <div class="text-wrapper">
                <p class="text-title">Eren Kruger</p>
                <p class="text-description">Undercover@eldian.com</p>
              </div>
            </div>
            <div
              class="dropdown-overlay"
              @click="isUserDropdown = false"
              v-if="isUserDropdown"
            ></div>
            <transition-fade>
              <div class="action-item-dropdown" v-if="isUserDropdown">
                <a href="#">Signed in as <b>Eren Kruger</b></a>
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
$dropdown-shadow: $shadow-lg;

// Utilities
.text-gray-300 {
  color: $text-gray-300;
}

// Component css
// Utilities for container
.w-6 {
  width: 1.5rem;
}

.h-6 {
  height: 1.5rem;
}

.ml-2 {
  margin-left: 0.5rem;
}

.ml-3 {
  margin-left: 0.75rem;
}

.mr-3 {
  margin-right: 0.75rem;
}

.pr-2 {
  padding-right: 0.5rem;
}

.px-1 {
  padding-left: 0.25rem;
  padding-right: 0.25rem;
}

.flex {
  display: flex;
}

.align-center {
  align-items: center;
}

.justify-center {
  justify-content: center;
}

.flex-1 {
  flex: 1;
  -ms-flex: 1;
}

.flex-col {
  flex-direction: column;
}

// Class css
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
      box-shadow: 0 0 0 0.15rem rgba($color: $font-color, $alpha: 0.5);
    }
  }

  .btn-round {
    border-radius: 9999px;
  }

  .btn-avatar {
    padding: 0;
    border-radius: 9999px;
    flex-shrink: 0;
    display: flex;
    align-items: center;

    img {
      width: 2rem;
      height: 2rem;
      border-radius: 9999px;
      object-fit: cover;
    }

    &:focus {
      box-shadow: 0 0 0 0.15rem rgba($color: $font-color, $alpha: 1);
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
    width: 100%;
    padding-left: 0.5rem;
    padding-right: 0.5rem;
  }

  //SubWrapper
  .sub-wrapper {
    display: flex;
    // align-items: center;
    flex-direction: column;
    justify-content: space-between;
    position: relative;
    min-height: 4rem;

    > * {
      padding-top: 0.5rem;
      padding-bottom: 0.5rem;
    }

    @media (min-width: 640px) {
      flex-direction: row;
      align-items: center;

      > * {
        padding-top: 0rem;
        padding-bottom: 0rem;
      }
    }
  }

  // Logo & Links wrapper
  .multi-wrapper {
    display: flex;
    align-items: center;
    flex: 1;
    -ms-flex: 1;

    > :not(:first-child) {
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
    justify-content: flex-end;
    border-top: 1px solid $text-gray-700;

    @media (min-width: 640px) {
      border: none;
    }
  }

  // Avatar action button
  .avatar-action-item {
    position: relative;
    flex: 1;
    -ms-flex: 1;
    cursor: pointer;

    // Avatar with text - For mobile
    .avatar-with-text {
      display: flex;
      align-items: center;
      flex-flow: row-reverse;
      text-align: right;
    }

    // Avatar-text styling
    .text-wrapper {
      margin-right: 0.75rem;

      @media (min-width: 640px) {
        display: none;
      }

      .text-title {
        color: $font-color;
        font-weight: 500;
        font-size: 0.875rem;
        line-height : 1.25rem;
      }

      .text-description {
        color: $text-gray-400;
        font-size: 0.75rem;
      }
    }

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
      margin-top: 0.5rem;
      box-shadow: $dropdown-shadow;

      &::after {
        position: absolute;
        display: inline-block;
        content: "";
        border: 7px solid transparent;
        border-bottom-color: white;
        top: -14px;
        right: 10px;
        left: auto;
      }

      > :first-child {
        border-bottom: 1px solid $text-gray-200;
        margin-bottom: 0.5rem;
        display: none;

        @media (min-width: 640px) {
          display: block;
        }
      }

      > * {
        color: $text-gray-700;
        padding: 0.5rem 1rem;
        font-size: 0.875rem;
        cursor: pointer;
        font-weight: 400;

        &:hover {
          background-color: $text-gray-100;
        }
      }
    }
  }

  //Links menu
  .links-wrapper {
    display: none;
    flex: 1;
    -ms-flex: 1;

    // Mobile
    &.mobile {
      display: flex;
      flex-direction: column;
      background: $bg-color;
      padding-top: 0.75rem;
      padding-bottom: 0.75rem;
      margin-top: 0.5rem;
      border-top: 1px solid $text-gray-700;

      @media (min-width: 640px) {
        display: none;
      }
    }

    // Individual links
    > * {
      padding: 0.75rem 0.5rem;
      font-size: 0.875rem;
      border-radius: 0.375rem;
      font-size: 1rem;
      font-weight: 500;
      color: $font-color;
      transition: all 0.15s ease-in-out;

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
    @media (min-width: 640px) {
      display: flex;
      flex-wrap: wrap;
      padding-top: 0.5rem;
      padding-bottom: 0.5rem;

      > * {
        padding: 0.5rem 1rem;
        margin: 0.375rem;
      }
    }
  }
}
</style>
