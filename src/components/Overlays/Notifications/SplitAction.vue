<template>
  <div>
    <transition-zoom>
      <div class="notification" v-if="!isClose">
        <div class="message">
          <div class="text">
            <h4 class="text-title">Receive notifications</h4>
            <p ref="userMsg" class="text-data">{{ msg | trimText }}</p>
          </div>
        </div>
        <div class="action">
          <button class="reset-btn reply" @click="isClose = true">Allow</button>
          <button class="reset-btn dismiss" @click="isClose = true">
            Don't allow
          </button>
        </div>
      </div>
    </transition-zoom>
  </div>
</template>

<script>
import TransitionZoom from "@general/TransitionZoom.vue";

export default {
  filters: {
    trimText(value) {
      // Trim message
      if (value.length > 50) {
        return value.substring(0, 50) + "...";
      }
      return value;
    },
  },
  data() {
    return {
      // To close notification
      isClose: false,
      //User message
      msg: "Notifications may include alerts,sounds, and badges.",
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
@import url("https://fonts.googleapis.com/css2?family=Inter&display=swap");
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
  box-shadow: $shadow;
  width: 100%;

  // Change position to top at 640
  @media (min-width: 640px) {
    // top: 1.25rem;
    // right: 1.25rem;
    top: 0;
    right: 0;
    margin-top: 1.25rem;
    margin-right: 1.25rem;
    bottom: auto;
    max-width: 30rem;
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

.message {
  padding: 1rem 0.5rem;
  padding-right: 0;
  display: flex;
  align-items: flex-start;
  flex: 1;
  -ms-flex: 1;
  align-items: center;
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
    color: $text-gray-400;
    font-weight: 500;
    line-height: 1.25rem;
    padding-top: 0.25rem;
  }
}

.action {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  border-left: 1px solid $text-gray-200;
  > * {
    flex: 1;
    -ms-flex: 1;
  }
  > :not(:first-child) {
    border-top: 1px solid $text-gray-200;
  }
  button {
    font-weight: 700;
    font-size: 0.875rem;
    padding: 0 1rem;
    width: 100%;
  }
  .reply {
    color: $text-color;
  }
}
</style>
