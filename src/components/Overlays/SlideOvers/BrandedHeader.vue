<template>
  <!-- Branded slide over -->
  <div>
    <button class="btn" @click="isOpen = true">
      Branded Header Slide Over
    </button>
    <div class="slide-over" :class="{ 'is-open': isOpen }">
      <div role="button" @click="isOpen = false" class="slide-overlay"></div>
      <transition-slide>
        <div class="slide-over-panel" v-if="isOpen">
          <div class="slide-over-heading">
            <div class="text-wrapper mr-2">
              <h2>Panel Heading</h2>
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Ratione, distinctio corrupti facere incidunt tempora doloribus.
              </p>
            </div>
            <div class="dismiss">
              <button class="reset-btn" @click="isOpen = false">
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
$banner-color: $theme-color;
$shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1),
  0 10px 10px -5px rgba(0, 0, 0, 0.04);

.slide-over {
  display: none;
  z-index: 10;
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  justify-content: flex-end;

  &.is-open {
    //   When slide bar opened
    display: flex;
  }

  .slide-overlay {
    position: fixed;
    z-index: 10;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
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
    box-shadow: $shadow;
    // height: 100%;
  }
}

// Element design css - Not required for component
.text-gray-300 {
  color: $text-gray-300;
}

.slide-over-heading {
  display: flex;
  align-items: flex-start;
  background-color: darken($banner-color, 3%);
  padding: 1.25rem;

  .text-wrapper {
    flex: 1;
    -ms-flex: 1;
  }

  h2 {
    flex: 1;
    -ms-flex: 1;
    margin: 0;
    font-size: 1.125rem;
    line-height: 1.75rem;
    font-weight: 600;
    color: white;
  }

  p {
    color: $text-gray-300;
    font-size: 0.875rem;
    line-height: 1.25rem;
  }
}

.slide-over-content {
  position: relative;
  padding: 1rem;
  flex: 1;
  -ms-flex: 1;
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
     color: black;
   }
 }
}
</style>
