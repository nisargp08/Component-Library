<template>
  <!-- Action panel with link -->
  <div>
    <div class="action-panel">
      <h3 class="title">Continuous Integration</h3>
      <p class="description">
        You can create custom continuous integration (CI) and continuous deployment (CD) workflows directly in your GitHub repository with GitHub Actions.
      </p>
      <div class="operations">
        <a href="#" class="link">Learn more about our CI features -></a>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
$card-bg: white;
$card-shadow: $shadow;
$card-max-width: 48rem;
$action-color : $theme-color;

.action-panel {
  border-radius: 6px;
  background-color: $card-bg;
  box-shadow: $card-shadow;
  padding: 1rem;
  max-width: $card-max-width;
  width: 100%;

  @media (min-width: 640px) {
    padding: 1.75rem;
  }

  .title {
    margin: 0;
    font-size: 1.25rem;
    line-height: 1.75rem;
    font-weight: 600;
  }

  .description {
    color: $text-gray-500;
    font-size: 1rem;
    line-height: 1.5rem;
    padding-top: 0.25rem;
  }

  .operations {
    margin-top: 1.5rem;
  }

  .link{
      font-size: 0.875rem;
      line-height: 1.25rem;
      color : $action-color;
      font-weight: 500;
  }
}
</style>
