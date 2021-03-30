<template>
  <!-- Simple steps -->
  <div>
    <div class="steps">
      <div class="step-item finished">
        <div class="step-wrapper">
          <div class="step-marker">
            step 1
          </div>
          <div class="step-title">
            <p>Job details</p>
          </div>
        </div>
      </div>
      <div class="step-item finished">
        <div class="step-wrapper">
          <div class="step-marker">
            step 2
          </div>
          <div class="step-title">
            <p>Application Form</p>
          </div>
        </div>
      </div>
      <div class="step-item">
        <div class="step-wrapper">
          <div class="step-marker">
            step 3
          </div>
          <div class="step-title">
            <p>Preview</p>
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
$font-color: $text-gray-900;

// Component css
.steps {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  width: 100%;
  flex-wrap: wrap;

  @media (min-width: 640px) {
    // align-items: center;
    flex-direction: row;
  }
}

.step-item {
  flex-grow: 1;
  cursor: default;
  word-break: break-word;
  box-sizing: border-box;
  max-width: 100%;
  width: 100%;

  @media (min-width: 640px) {
    flex: 0 0 auto;
    width: 33%;
  }

  .step-wrapper {
    margin: 1rem;
    border-left: 3px solid $steps-unfinished;
    padding-left: 1rem;

    @media (min-width: 640px) {
      border-top: 3px solid $steps-unfinished;
      border-left: none;
      padding-top: 1rem;
      padding-left: 0;
    }
  }

  .step-marker {
    text-transform: uppercase;
    font-size: 0.75rem;
    line-height: 1rem;
    font-weight: 600;
    color: $steps-finished;
  }

  .step-title {
    text-transform: capitalize;
    font-size: 0.875rem;
    line-height: 1.25rem;
    font-weight: 600;
  }
}

// Change top border color for finished steps
.step-item.finished {
  .step-wrapper {
    border-color: $steps-finished;
  }
}
</style>
