<template>
  <!-- Toggle Action Panel -->
  <div>
    <div class="action-panel">
      <div class="col-span-3">
        <h3 class="title">Renew subscription automatically</h3>
        <p class="description">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quia aut
          facere voluptatum, nostrum dolores eum.
        </p>
      </div>
      <div class="operations col-span-1">
        <simple-toggle></simple-toggle>
      </div>
    </div>
  </div>
</template>

<script>
// This component can be found here - https://ui-component-library.netlify.app/forms/toggles
import SimpleToggle from "@toggles/SimpleToggle.vue"

export default {
    components : {
        SimpleToggle
    }
};
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
  font-family: $ternaryFont;

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
        display: flex;
        justify-content: flex-end;
        margin-top: 0;
    }
  }
}
</style>
