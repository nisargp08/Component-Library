<template>
  <!-- Buttoned Action Panel -->
  <div>
    <div class="action-panel">
      <div class="col-span-3">
        <h3 class="title">Manage Subscription</h3>
        <p class="description">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quia aut
          facere voluptatum, nostrum dolores eum.
        </p>
      </div>
      <div class="operations col-span-1">
        <button class="btn btn-theme">Change Plan</button>
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

.col-span-1 {
  grid-column: span 1 / span 1;
}
.col-span-3 {
  grid-column: span 3 / span 3;
}

.action-panel {
  border-radius: 6px;
  background-color: $card-bg;
  box-shadow: $card-shadow;
  padding: 1rem;
  max-width: $card-max-width;
  width: 100%;

  @media (min-width: 640px) {
    padding: 1.75rem;
    display: grid;
    grid-template-columns: repeat(4, minmax(0, 1fr));
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
    padding-top: 0.5rem;
  }

  .operations {
    margin-top: 1.5rem;
    @media(min-width : 640px){
        text-align: right;
        margin-top: 0;
    }
  }
}
</style>
