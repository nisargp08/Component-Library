<template>
  <!-- Condensed notification -->
  <div>
    <transition-zoom>
      <div class="notification" v-if="!isClose">
        <div class="text">
          <h4 class="text-title">Discussion archived</h4>
        </div>
        <div class="action">
          <button @click="isClose = true" class="reset-btn action-btn">
            Undo
          </button>
        </div>
        <div class="dismiss">
          <button class="reset-btn" @click="isClose = true">
            <svg
              class="w-4 h-4 text-gray-400"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 20 20"
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
  align-items: center;
  max-width: 24rem;
  background-color: $notification-bg;
  border-radius: 0.375rem;
  padding: 1rem 1rem;
  box-shadow: $shadow;
  width: calc(100vw - 6rem);
  // Change position to top at 640
  @media (min-width: 640px) {
    // top: 1.25rem;
    // right: 1.25rem;
    top: 0;
    right: 0;
    margin-top: 1.25rem;
    margin-right: 1.25rem;
    bottom: auto;
  }
}
// Content design - Not required for component design
$text-color: #6366f1;
.notification {
  --animate-duration: 500ms;
}
.text-gray-400 {
  color: $text-gray-400;
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
}
.action-btn {
  color: $text-color;
  font-weight: 600;
}
.reset-btn{
 &:focus{
   svg{
     color: $theme-color;
   }
 }
}
</style>
