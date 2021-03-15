<template>
  <!-- Bullet steps with text -->
  <div>
    <div class="steps">
      <div class="step-marker-wrapper">
        <div class="step-marker-item finished">
          <span class="step-marker">
            <!-- Show when step is finished -->
            <svg
              class="w-point-80 h-point-80"
              xmlns="http://www.w3.org/2000/svg"
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
          </span>
          <p class="step-text">Create account</p>
        </div>
        <div class="step-marker-item active">
          <span class="step-marker">
            <!-- Show when step is finished -->
            <svg
              class="w-point-80 h-point-80"
              xmlns="http://www.w3.org/2000/svg"
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
          </span>
          <p class="step-text">Profile Information</p>
        </div>
        <div class="step-marker-item">
          <span class="step-marker">
            <!-- Show when step is finished -->
            <svg
              class="w-point-80 h-point-80"
              xmlns="http://www.w3.org/2000/svg"
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
          </span>
          <p class="step-text">Theme</p>
        </div>
        <div class="step-marker-item">
          <span class="step-marker">
            <!-- Show when step is finished -->
            <svg
              class="w-point-80 h-point-80"
              xmlns="http://www.w3.org/2000/svg"
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
          </span>
          <p class="step-text">Preview</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
//Variables
$steps-finished: $theme-color;
$steps-unfinished: $text-gray-200;
$svg-color: white;
$font-color-primary: black;
$font-color-secondary: $text-gray-500;

// Components css
.w-point-80 {
  width: 0.8rem;
}

.h-point-80 {
  height: 0.8rem;
}

.steps * {
  box-sizing: border-box;
}

.steps {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  padding: 1rem;
  align-items: center;

  .step-marker-item {
    display: flex;
    align-items: center;

    .step-marker {
      width: 1rem;
      height: 1rem;
      display: flex;
      align-items: center;
      justify-content: center;
      border-radius: 9999px;
      background: $steps-unfinished;

      // Hiding checkmark svg by default
      svg {
        display: none;
      }
    }

    .step-text {
      margin-left: 0.75rem;
      font-size: 0.875rem;
      color: $font-color-secondary;
      font-weight: 600;
    }
  }

  .step-marker-item:not(:first-of-type) {
    margin-top: 1.25rem;
  }

  // Finished state
  .step-marker-item.finished {
    .step-marker {
      background: $steps-finished;

      svg {
        display: block;
        color: $svg-color;
      }
    }
    .step-text {
      color: $font-color-primary;
    }
  }

  // Active state
  .step-marker-item.active {
    .step-marker {
      background: $steps-finished;
      box-shadow: 0 0 0 0.2rem
        rgba($color: lighten($steps-finished, 15%), $alpha: 0.6);
    }
    .step-text {
      color: $steps-finished;
    }
  }
}
</style>
