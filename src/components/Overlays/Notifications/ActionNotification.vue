<template>
  <div>
    <transition-fade>
      <div class="notification" v-if="!isClose">
        <div class="icon">
          <svg
            class="w-6 h-6 text-gray-400"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0h-2.586a1 1 0 00-.707.293l-2.414 2.414a1 1 0 01-.707.293h-3.172a1 1 0 01-.707-.293l-2.414-2.414A1 1 0 006.586 13H4"
            />
          </svg>
        </div>
        <div class="text">
          <h4 class="text-title">Discussion moved</h4>
          <p class="text-data">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad, ab.</p>
          <div class="actions">
              <button class="reset-btn undo">Undo</button>
              <button class="reset-btn dismiss">Dismiss</button>
          </div>
        </div>
        <div class="dismiss">
          <button class="reset-btn" @click="isClose = true">
            <svg
              class="w-4 h-4 text-gray-500"
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
    </transition-fade>
  </div>
</template>

<script>
import TransitionFade from "@general/TransitionFade.vue";

export default {
  data() {
    return {
      // To close notification
      isClose: false,
    };
  },
  components: {
    TransitionFade,
  },
  watch: {
    // To make notification reappear after close - Just for user interaction
    isClose(value) {
      if (value) {
        setTimeout(() => {
          this.isClose = false;
        }, 2000);
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
  bottom: 10px;
  display: flex;
  max-width: 18rem;
  background-color: $notification-bg;
  border-radius: 0.375rem;
  padding: 1rem 1rem;
  box-shadow: $shadow;
  width: 100%;
  // Change position to top at 640
  @media (min-width: 640px) {
    top: 1.25rem;
    right: 1.25rem;
    bottom: auto;
    max-width: 24rem;
  }
}
// Content design - Not required for component design
$action-color: #6366f1;
.text-gray-400 {
  color: $text-gray-400;
}
.text-gray-500 {
  color: $text-gray-500;
}
.text{
    flex: 1;
    -ms-flex: 1 0 auto;
    padding-left: 0.75rem;
    padding-right: 0.75rem;
    .text-title{
        margin: 0;
        font-size: 1rem;
    }
    .text-data{
        font-size: 0.875rem;
        color: $text-gray-500;
        padding-top: 0.5rem;
    }
    .actions{
        display: flex;
        margin-top: 1rem;
        button{
            margin: 0;
            padding : 0;
            font-weight: 600;
        }
        .undo{
            color: $action-color;
        }
        .dismiss{
            margin-left: 0.75rem;
        }
    }
}
</style>
