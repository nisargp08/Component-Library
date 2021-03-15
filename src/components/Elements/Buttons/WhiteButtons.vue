<template>
  <!-- White buttons -->
  <div>
    <button class="btn btn-white btn-xs" role="button">
      Button text
    </button>
    <button class="btn btn-white btn-sm" role="button">
      Button text
    </button>
    <button class="btn btn-white btn-md" role="button">
      Button text
    </button>
    <button class="btn btn-white btn-lg" role="button">
      Button text
    </button>
    <button class="btn btn-white btn-xl" role="button">
      Button text
    </button>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
// Variables
$bg-color: white;
$text-color: black;
$ring-offset-shadow: 0 0 #0000;
$ring-shadow: 0 0 #0000;
$shadow: $shadow-sm;

/* Button */
.btn {
  display: inline-flex;
  cursor: pointer;
  justify-content: center;

  padding: 0.55rem 1rem;
  font-size: 0.85rem;
  line-height: 1.25rem;
  font-weight: 600;

  border-radius: 0.375rem;
  transition: background-color 0.15s ease-in-out;
  box-shadow: $ring-offset-shadow, 0 0 #0000, $ring-shadow, 0 0 #0000, $shadow;
}
// Colors
.btn-white {
  color: $text-color;
  background-color: $bg-color;
  border: 1px solid #ddd;
  &:hover {
    background-color: darken($color: $bg-color, $amount: 3%);
  }
  &:focus {
    outline: none;
    box-shadow: 0 0 0 0.15rem rgba($color: $bg-color, $alpha: 0.5);
  }
}
// Sizes
.btn-xs {
  padding: 0.25rem 0.5rem;
  font-size: 0.65rem;
}
.btn-sm {
  padding: 0.4rem 0.75rem;
  font-size: 0.75rem;
}
.btn-md {
  padding: 0.55rem 1rem;
  font-size: 0.85rem;
}
.btn-lg {
  padding: 0.7rem 1.25rem;
  font-size: 0.95rem;
}
.btn-xl {
  padding: 0.85rem 1.5rem;
  font-size: 1.05rem;
}
</style>
