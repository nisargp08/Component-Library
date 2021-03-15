<template>
  <!-- Simple slide over -->
  <div>
    <button class="btn" @click="isOpen = true">Open Simple Slide Over</button>
    <div class="slide-over" :class="{ 'is-open': isOpen }">
      <div role="button" @click="isOpen = false" class="slide-overlay"></div>
      <transition-slide>
        <div class="slide-over-panel" v-if="isOpen">
          <div class="slide-over-heading">
            <h2>Panel Heading</h2>
            <div class="dismiss">
              <button class="reset-btn" @click="isOpen = false">
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
          <div class="slide-over-content">
            <!-- Replace with your content -->
            <div class="content-placeholder">
              <p>Content goes here</p>
            </div>
          </div>
        </div>
      </transition-slide>
    </div>
  </div>
</template>

<script>
import TransitionSlide from "@general/TransitionSlide.vue";

export default {
  mounted() {
    // Modal close on escape key
    window.addEventListener("keyup", (e) => {
      // If escape key
      if (e.code == "Escape") {
        this.isOpen = false;
      }
    });
  },
  data() {
    return {
      isOpen: false,
    };
  },
  components: {
    TransitionSlide,
  },
};
</script>

<style lang="scss" scoped>
// Variables
$bg-color: white;
$bg-tint: rgba(0, 0, 0, 0.09);
$shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1),
  0 10px 10px -5px rgba(0, 0, 0, 0.04);
.slide-over {
  display: none;
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 10;
  justify-content: flex-end;
  &.is-open {
    //   When slide bar opened
    display: flex;
  }
  .slide-overlay {
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: 10;
    background-color: $bg-tint;
  }

  .slide-over-panel {
    position: relative;
    z-index: 10;
    display: flex;
    flex-direction: column;
    max-width: 28rem;
    width: calc(100vw - 4rem);
    background-color: $bg-color;
    overflow-y: auto;
    padding-top: 1.5rem;
    padding-bottom: 1.5rem;
    box-shadow: $shadow;
    // height: 100%;
  }
}
// Element design css - Not required for component
.text-gray-400 {
  color: $text-gray-400;
}
.slide-over-heading {
  display: flex;
  align-items: center;
  padding-left: 1rem;
  padding-right: 1rem;
  h2 {
    flex: 1;
    -ms-flex: 1;
    margin: 0;
    font-size: 1.125rem;
    line-height: 1.75rem;
    font-weight: 600;
    color: $text-gray-900;
  }
}
.slide-over-content {
  position: relative;
  margin-top: 1.25rem;
  padding: 1rem;
  flex: 1;
  -ms-flex: 1;
  border-top: 1px solid $text-gray-200;
}
// Just a placeholder
.slide-over {
  --animate-duration: 250ms;
}
.content-placeholder {
  position: absolute;
  margin: 1rem;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  border: 2px dashed $text-gray-200;
  p {
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: 500;
  }
}
.reset-btn{
 &:focus{
   svg{
     color: $theme-color;
   }
 }
}
</style>
