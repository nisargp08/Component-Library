<template>
  <!-- Bullet steps -->
  <div>
    <div class="steps">
      <div class="step-counter">
        <p>Step 2 of 4</p>
      </div>
      <div class="step-marker">
        <span class="finished"></span>
        <span class="active"></span>
        <span></span>
        <span></span>
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
// $font-color : $text-gray-900;
// $border-color : $text-gray-200;
// Components css
.steps {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  padding: 1rem;
  align-items: center;

  .step-counter {
    font-weight: 600;
  }

  .step-marker {
    margin-left: 2rem;
    > :not(:first-child) {
      margin-left: 1rem;
    }
    span {
      width: 0.75rem;
      height: 0.75rem;
      display: inline-block;
      border-radius: 9999px;
      background: $steps-unfinished;

      // Finished state
      &.finished {
        background: $steps-finished;
      }

      //Active state
      &.active {
        background: $steps-finished;
        box-shadow: 0 0 0 0.25rem
          rgba($color: lighten($steps-finished, 15%), $alpha: 0.6);
      }
    }
  }
}
</style>
