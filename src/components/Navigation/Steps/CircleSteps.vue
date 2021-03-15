<template>
  <!-- Circle steps -->
  <div>
    <div class="steps">
      <div class="step-marker-wrapper">
        <div class="step-marker-item finished">
          <span class="step-marker">
            <!-- Show when step is finished -->
            <svg
              class="w-5 h-5"
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
        </div>
        <div class="step-marker-item finished">
          <span class="step-marker">
            <!-- Show when step is finished -->
            <svg
              class="w-5 h-5"
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
        </div>
        <div class="step-marker-item active">
          <span class="step-marker">
            <!-- Show when step is finished -->
            <svg
              class="w-5 h-5"
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
        </div>
        <div class="step-marker-item">
          <span class="step-marker">
            <!-- Show when step is finished -->
            <svg
              class="w-5 h-5"
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
        </div>
        <div class="step-marker-item">
          <span class="step-marker">
            <!-- Show when step is finished -->
            <svg
              class="w-5 h-5"
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

// Component css
.w-5 {
  width: 1.25rem;
}

.h-5 {
  height: 1.25rem;
}

.steps * {
  box-sizing: border-box;
}

.steps {
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: center;

  svg {
    display: none;
  }

  .step-marker-wrapper {
    display: inline-flex;
    align-items: center;
    flex-wrap: wrap;
    padding: 2rem;
    row-gap: 1rem;
  }

  .step-marker-item {
    width: 3rem;
    position: relative;
    @media (min-width: 640px) {
      width: 6rem;
    }
  }

  // Connecting lines
  .step-marker-item {
    &::after {
      content: "";
      position: absolute;
      width: 100%;
      height: 2px;
      background-color: $steps-unfinished;
      top: 50%;
      left: -50%;
      z-index: -1;
    }
  }

  // Hide line for first elements
  .step-marker-item:first-of-type {
    &::after {
      content: none;
    }
  }

  .step-marker {
    display: flex;
    position: relative;
    align-items: center;
    justify-content: center;
    margin: 0 auto;
    color: $svg-color;
    height: 2rem;
    width: 2rem;
    background-color: white;
    border-radius: 9999px;
    border: 2px solid $steps-unfinished;
  }

  .step-marker-item.finished {
    .step-marker {
      border-color: $steps-finished;
      background-color: $steps-finished;

      svg {
        display: inline-block;
      }
    }

    // Connecting lines color
    &::after {
      background-color: $steps-finished;
    }
  }

  .step-marker-item.active {
    .step-marker {
      border-color: $steps-finished;
      position: relative;

      &::before {
        content: "";
        display: inline-block;
        background-color: $steps-finished;
        position: absolute;
        width: 0.75rem;
        height: 0.75rem;
        border-radius: 9999px;
      }
    }

    // Connecting lines color
    &::after {
      background-color: $steps-finished;
    }
  }
}
</style>
