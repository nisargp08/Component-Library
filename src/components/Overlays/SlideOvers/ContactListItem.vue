<template>
  <div class="contact-list-item">
    <div class="avatar">
      <img :src="imagePath(contact.photoUrl)" :alt="contact.name" />
      <span class="notification-dot" :class="contact.status"></span>
    </div>
    <div class="details">
      <div class="details-title">{{ contact.name }}</div>
      <div class="details-description">@{{ contact.handle }}</div>
    </div>
    <div class="operations">
      <div class="dropdown">
        <button @click="isDropdownOpen = !isDropdownOpen" class="btn">
          <svg
            class="w-4 h-4 text-gray-400"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z"
            />
          </svg>
        </button>
        <transition-fade>
          <div class="dropdown-menu dropdown-divide" v-if="isDropdownOpen">
            <div class="py-1">
               <a class="menu-items" href="#">
                <svg class="w-5 h-5 theme-color" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
</svg>
                Profile
              </a>
              <a class="menu-items" href="#">
                <svg
                  class="w-5 h-5 theme-color"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z"
                  />
                </svg>
                Chat
              </a>
              <a class="menu-items" href="#">
                <svg
                  class="w-5 h-5 theme-color"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M16 3h5m0 0v5m0-5l-6 6M5 3a2 2 0 00-2 2v1c0 8.284 6.716 15 15 15h1a2 2 0 002-2v-3.28a1 1 0 00-.684-.948l-4.493-1.498a1 1 0 00-1.21.502l-1.13 2.257a11.042 11.042 0 01-5.516-5.517l2.257-1.128a1 1 0 00.502-1.21L9.228 3.683A1 1 0 008.279 3H5z"
                  />
                </svg>
                Call</a
              >
              <a class="menu-items" href="#">
                <svg
                  class="w-5 h-5 theme-color"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z"
                  />
                </svg>
                Video Call</a
              >
            </div>
          </div>
        </transition-fade>
      </div>
    </div>
  </div>
</template>

<script>
import TransitionFade from "@general/TransitionFade.vue";

export default {
  data() {
    return {
      isDropdownOpen: false,
    };
  },
  props: ["contact"],
  components: {
    TransitionFade,
  },
  methods: {
    imagePath(url) {
      return require(`@/assets/images/${url}`);
    },
  },
};
</script>

<style lang="scss" scoped>
// Contact list Variables
$bg-gray: #ccc;
$bg-green: #28a745;
$bg-red: #dc3545;
$ringColor: white;

.contact-list-item {
  display: flex;
  align-items: center;
  padding: 1rem 1.5rem;
  border-top: 1px solid $text-gray-200;
  .avatar {
    position: relative;
    flex-shrink: 0;
    img {
      width: 3rem;
      height: 3rem;
      border-radius: 0.5rem;
      object-fit: cover;
    }
    .notification-dot {
      position: absolute;
      right: -5px;
      top: -5px;
      width: 0.65rem;
      height: 0.65rem;
      border-radius: 9999px;
      border: 2px solid $ringColor;
      &.on {
        background: $bg-green;
      }
      &.off {
        background: $bg-gray;
      }
    }
  }
  .details {
    flex: 1;
    -ms-flex: 1;
    padding-left: 1rem;
    padding-right: 1rem;

    .details-title {
      font-weight: 700;
      font-size: 1rem;
      line-height: 1.5rem;
    }

    .details-description {
      font-size: 0.875rem;
      font-weight: 500;
      color: $text-gray-500;
    }
  }
  .operations {
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
    //   Dropdown
    .dropdown {
      $dropdown-bg: white;
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
        z-index: 10;
        margin-top: 0.25rem;
        text-align: left;
        background: $dropdown-bg;
        padding: 0.25rem 0;
        width: 14rem;
        border-radius: 0.375rem;
        box-shadow: $ring-offset-shadow, 0 0 #0000, $ring-shadow, 0 0 #0000,
          $shadow;

        .menu-items {
          display: flex;
          align-items: center;
          column-gap: 0.75rem;
          padding: 0.5rem 1rem;
          font-size: 0.875rem;
          line-height: 1.25rem;
          font-weight: 500;

          &:hover {
            background-color: $text-gray-100;
          }
        }
      }

      .dropdown-divide {
        > :not(:first-child) {
          border-top: 1px solid $text-gray-100;
        }
      }
    }
  }
}
</style>
