<template>
  <!-- Circle steps with text -->
  <div>
    <div class="steps">
      <div class="step-marker-wrapper">
        <div class="step-marker-item finished">
          <span class="step-marker">
            <!-- Show when step is finished -->
            <svg
              class="w-6 h-6"
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
          <div class="step-text">
            <p class="step-title">
              Create account
            </p>
            <p class="step-description">
              Lorem ipsum dolor sit amet.
            </p>
          </div>
        </div>
        <div class="step-marker-item active">
          <span class="step-marker">
            <!-- Show when step is finished -->
            <svg
              class="w-6 h-6"
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
          <div class="step-text">
            <p class="step-title">
              Profile information
            </p>
            <p class="step-description">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
            </p>
          </div>
        </div>
        <div class="step-marker-item">
          <span class="step-marker">
            <!-- Show when step is finished -->
            <svg
              class="w-6 h-6"
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
          <div class="step-text">
            <p class="step-title">
              Business information
            </p>
            <p class="step-description">
              Lorem ipsum dolor sit.
            </p>
          </div>
        </div>
        <div class="step-marker-item">
          <span class="step-marker">
            <!-- Show when step is finished -->
            <svg
              class="w-6 h-6"
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
          <div class="step-text">
            <p class="step-title">
              Theme
            </p>
            <p class="step-description">
              Lorem ipsum dolor sit amet.
            </p>
          </div>
        </div>
        <div class="step-marker-item">
          <span class="step-marker">
            <!-- Show when step is finished -->
            <svg
              class="w-6 h-6"
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
          <div class="step-text">
            <p class="step-title">
              Preview
            </p>
            <p class="step-description">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
// Variables
$steps-finished: $theme-color;
$steps-unfinished: $text-gray-200;
$font-color-primary: black;
$font-color-secondary: $text-gray-500;
$svg-color: white;

// Component css
.w-6 {
  width: 1.25rem;
}

.h-6 {
  height: 1.25rem;
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
    padding-top: 2rem;
    position: relative;

    // Connecting lines
    &::after {
      content: "";
      display: inline-block;
      height: 100%;
      width: 2px;
      background-color: $steps-unfinished;
      position: absolute;
      left: 0.94rem; //Half width of the step-marker (Requires minor adjustment)
      top: -10px; //Not sure why top:0 leaves space between elements so using -10 to resolve that
      z-index: -1;
    }
  }
  // Hide connecting line for first item
  .step-marker-item:first-of-type {
    padding-top: 0;
    &::after {
      content: none;
    }
  }
  .step-marker {
    display: flex;
    position: relative;
    align-items: center;
    justify-content: center;
    flex-shrink: 0;
    color: $svg-color;
    height: 2rem;
    width: 2rem;
    background-color: white;
    border-radius: 9999px;
    border: 2px solid $steps-unfinished;

    // Hide checkmark svg by default
    svg {
      display: none;
    }
  }

  .step-text {
    margin-left: 1rem;

    .step-title {
      text-transform: uppercase;
      font-size: 0.75rem;
      font-weight: 800;
      line-height: 1.25rem;
      letter-spacing: 0.025rem;
      color: $font-color-secondary;
    }

    .step-description {
      font-size: 0.875rem;
      font-weight: 500;
      color: $font-color-secondary;
    }
  }

  //Finished state
  .step-marker-item.finished {
    .step-marker {
      background-color: $steps-finished;
      border-color: $steps-finished;

      svg {
        display: block;
      }
    }

    .step-title {
      color: $font-color-primary;
    }
  }

  // Active state
  .step-marker-item.active {
    .step-marker {
      border-color: $steps-finished;

      &::before {
        content: "";
        display: inline-block;
        width: 0.75rem;
        height: 0.75rem;
        background-color: $steps-finished;
        border-radius: 9999px;
      }
    }

    .step-title {
      color: $steps-finished;
    }
  }
}
</style>
