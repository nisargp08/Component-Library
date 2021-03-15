<template>
  <!-- Modal with single action button -->
  <div>
    <button class="btn" @click="isOpen = !isOpen">
      Open Single Action Modal
    </button>
    <div class="modal" :class="{ 'is-open': isOpen }">
      <transition-fade>
        <div
          role="button"
          class="modal-background"
          v-if="isOpen"
          @click="isOpen = !isOpen"
        ></div>
      </transition-fade>
      <button class="modal-dismiss" @click="isOpen = false">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
      </button>
      <div class="modal-content modal-xs">
        <div
          v-for="(value, index) in 1"
          :key="index"
          style="margin-top : 1rem"
          class="card"
        >
          <div class="header">
            <div class="icon">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M5 13l4 4L19 7"
                />
              </svg>
            </div>
            <div class="text">
              <h3 class="text-title">Payment Successful</h3>
              <div class="text-data">
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Nostrum voluptas, blanditiis adipisci excepturi ex maiores.
                </p>
                <button class="btn btn-block btn-indigo action-btn mt-4">
                  Go back to dashboard
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import TransitionFade from "@general/TransitionFade.vue";

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
    TransitionFade,
  },
};
</script>

<style lang="scss" scoped>
// Variables
$bg-tint: rgb(10, 10, 10);
.modal,
.modal-background {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
}
.modal {
  --animate-duration: 250ms;
}
// Component css
.modal {
  display: none;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  overflow: hidden;
  position: fixed;
  z-index: 40;
  //WHen modal is open
  &.is-open {
    display: flex;
  }
  .modal-background {
    background-color: rgba($color: $bg-tint, $alpha: 0.75);
  }
  .modal-content {
    position: relative;
    margin: 0 auto;
    overflow: auto;
    z-index: 40;
    width: 100%;
    max-height: calc(100vh - 3rem);
    max-width: 48rem;
  }
  //   Modal sizes
  .modal-xs {
    max-width: 26rem;
  }
  .modal-sm {
    max-width: 32rem;
  }
  .modal-md {
    //   Default
    max-width: 48rem;
  }
  .modal-lg {
    max-width: 64rem;
  }
  .modal-xl {
    max-width: 80rem;
  }
  .modal-dismiss {
    position: fixed;
    right: 1.25rem;
    top: 1.25rem;
    height: 2.5rem;
    width: 2.5rem;
    background: transparent;
    box-shadow: none;
    border-radius: 9999px;
    border: none;
    cursor: pointer;
    color: white;
    &:focus {
      outline: none;
    }
  }
}
// Content design - Not required for component design
.card {
  background-color: white;
  border-radius: 0.375rem;
  margin: 0 1rem;
  .header {
    padding: 1rem;
  }
  .icon {
    display: flex;
    align-items: center;
    flex-shrink: 0;
    justify-content: center;
    width: 3rem;
    height: 3rem;
    color: rgba(#059669, 1);
    background-color: rgba(#d1fae5, 1);
    border-radius: 9999px;
    margin-left: auto;
    margin-right: auto;
    @media (min-width: 768px) {
      width: 2.5rem;
      height: 2.5rem;
    }
  }
  .text {
    text-align: center;
    .text-title {
      font-size: 1.125rem;
      line-height: 1.5rem;
      font-weight: 600;
      margin-bottom: 0;
    }
    .text-data {
      font-size: 0.875rem;
      line-height: 1.25rem;
      color: $text-gray-500;
      padding-top: 0.5rem;
    }
  }
  .btn-indigo {
    color: white;
    background-color: rgba(#6366f1, 1);
    border: 1px solid rgba(#6366f1, 1);
    &:hover {
      background-color: darken($color: rgba(#6366f1, 1), $amount: 3%);
    }
    &:focus {
      outline: none;
      box-shadow: 0 0 0 0.25rem rgba($color: rgba(#6366f1, 1), $alpha: 0.5);
    }
  }
  .btn-block {
    width: 100%;
  }
}
</style>
