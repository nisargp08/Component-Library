<template>
  <div>
    <transition-zoom>
      <div class="notification" v-if="!isClose">
        <div class="rounded-avatar">
          <img src="@/assets/images/zeke-yeager.jpg" alt="" />
        </div>
        <div class="text">
          <h4 class="text-title">Zeke Yeager</h4>
          <p class="text-data">Sent you an invite to connect.</p>
          <div class="actions">
            <button class="btn btn-indigo" @click="isClose = true">Accept</button>
            <button class="btn decline" @click="isClose = true">
              Decline
            </button>
          </div>
        </div>
        <div class="dismiss">
          <button class="reset-btn" @click="isClose = true">
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
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>
      </div>
    </transition-zoom>
  </div>
</template>

<script>
import TransitionZoom from "@general/TransitionZoom.vue";

export default {
  data() {
    return {
      // To close notification
      isClose: false,
    };
  },
  components: {
    TransitionZoom,
  },
  watch: {
    // To make notification reappear after close - Just for user interaction
    isClose(value) {
      if (value) {
        setTimeout(() => {
          this.isClose = false;
        }, 1000);
      }
    },
  },
};
</script>

<style lang="scss" scoped>
// Component css
$notification-bg: white;
$shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);

.notification {
  position: absolute;
  z-index: 10;
  // bottom: 10px;
  bottom: 0;
  margin-bottom: 0.75rem;
  display: flex;
  max-width: 18rem;
  background-color: $notification-bg;
  border-radius: 0.375rem;
  padding: 1rem 1rem;
  box-shadow: $shadow;
  width: 100%;
  // Change position to top at 640
  @media (min-width: 640px) {
     // top: 1.25rem;
    // right: 1.25rem;
    top : 0;
    right : 0;
    margin-top : 1.25rem;
    margin-right: 1.25rem;
    bottom: auto;
    max-width: 24rem;
  }
}
// Content design - Not required for component design
$action-color: #6366f1;
.notification {
  --animate-duration: 500ms;
}
.text-gray-400 {
  color: $text-gray-400;
}
.rounded-avatar {
  img {
    width: 2.5rem;
    height: 2.5rem;
    border-radius: 0.5rem;
    object-fit: cover;
  }
}
.text {
  flex: 1;
  -ms-flex: 1;
  padding-left: 0.75rem;
  padding-right: 0.75rem;
  .text-title {
    margin: 0;
    font-size: 1rem;
  }
  .text-data {
    font-size: 0.875rem;
    font-weight: 500;
    color: $text-gray-400;
    line-height: 1.25rem;
    padding-top: 0.25rem;
  }
  .actions {
    display: flex;
    margin-top: 1rem;
    button {
      margin: 0;
      padding: 0;
      font-weight: 600;
      padding: 0.4rem 0.75rem;
      font-size: 0.875rem;
    }
    .btn-indigo {
      color: white;
      background-color: rgba($action-color, 1);
      border: 1px solid rgba($action-color, 1);
      &:hover {
        background-color: darken($color: rgba($action-color, 1), $amount: 3%);
      }
      &:focus {
        outline: none;
        box-shadow: 0 0 0 0.25rem rgba($color: rgba($action-color, 1), $alpha: 0.5);
      }
    }
    .decline {
      margin-left: 0.75rem;
    }
  }
}
</style>
