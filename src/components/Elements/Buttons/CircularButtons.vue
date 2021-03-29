<template>
  <!-- Circular buttons -->
  <div>
    <button class="btn-circle btn-primary btn-circle-xs" role="button">
      <svg
        class="w-4 h-4"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M12 6v6m0 0v6m0-6h6m-6 0H6"
        />
      </svg>
    </button>
    <button class="btn-circle btn-primary btn-circle-sm" role="button">
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
          d="M12 6v6m0 0v6m0-6h6m-6 0H6"
        />
      </svg>
    </button>
    <button class="btn-circle btn-primary btn-circle-md" role="button">
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
          d="M12 6v6m0 0v6m0-6h6m-6 0H6"
        />
      </svg>
    </button>
    <button class="btn-circle btn-primary btn-circle-lg" role="button">
      <svg
        class="w-7 h-7"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M12 6v6m0 0v6m0-6h6m-6 0H6"
        />
      </svg>
    </button>
    <button class="btn-circle btn-primary btn-circle-xl" role="button">
      <svg
        class="w-8 h-8"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M12 6v6m0 0v6m0-6h6m-6 0H6"
        />
      </svg>
    </button>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
// Variables
$bg-color: #3b82f6;
$text-color: white;
$ring-offset-shadow: 0 0 #0000;
$ring-shadow: 0 0 #0000;
$shadow: $shadow-sm;

/* Button */
.btn-circle {
  display: inline-flex;
  cursor: pointer;
  justify-content: center;

  padding: 0.65rem;
  font-size: 0.85rem;
  line-height: 1.25rem;
  font-weight: 500;

  border-radius: 50%;
  transition: background-color 0.15s ease-in-out;
  box-shadow: $ring-offset-shadow, 0 0 #0000, $ring-shadow, 0 0 #0000, $shadow;
}
// Color
.btn-primary {
  color: $text-color;
  background-color: $bg-color;
  border: 1px solid $bg-color;
  &:hover {
    background-color: darken($color: $bg-color, $amount: 3%);
  }
  &:focus {
    outline: none;
    box-shadow: 0 0 0 0.15rem rgba($color: $bg-color, $alpha: 0.5);
  }
}
// Sizes
.btn-circle-xs {
  padding: 0.25rem;
  font-size: 0.65rem;
}
.btn-circle-sm {
  padding: 0.45rem;
  font-size: 0.75rem;
}
.btn-circle-md {
  padding: 0.65rem;
  font-size: 0.85rem;
}
.btn-circle-lg {
  padding: 0.85rem;
  font-size: 0.95rem;
}
.btn-circle-xl {
  padding: 1.05rem;
  font-size: 1.05rem;
}
</style>
