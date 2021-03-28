<template>
  <!-- Simple Action Panel -->
  <div>
    <div class="action-panel">
      <h3 class="title">Delete your account</h3>
      <p class="description">
        Once your delete your account, you will lose all data associated with
        it.
      </p>
      <div class="operations">
        <button class="btn btn-red">Delete Button</button>
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
$btn-bg: #fee2e2;
$btn-text-color: #dc2626;

.action-panel {
  border-radius: 6px;
  background-color: $card-bg;
  box-shadow: $card-shadow;
  padding: 1rem;
  max-width: $card-max-width;
  width: 100%;
  font-family: $ternaryFont;

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

  .btn-red {
    color: $btn-text-color;
    background-color: rgba($btn-bg, 1);
    border: 1px solid rgba($btn-bg, 1);
    &:hover {
      background-color: darken($color: rgba($btn-bg, 1), $amount: 3%);
    }
    &:focus {
      outline: none;
      box-shadow: 0 0 0 0.15rem rgba($color: rgba($btn-bg, 1), $alpha: 0.5);
    }
  }
}
</style>
