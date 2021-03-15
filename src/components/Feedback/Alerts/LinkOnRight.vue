<template>
  <!-- Alert with a link on right -->
  <div>
    <div class="alert">
      <div class="alert-icon">
        <svg
          class="w-5 h-5"
          style="margin-top : 0.15rem"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
      </div>
      <div class="alert-content">
        <p class="title">
          A new software update is available. See what's new in version 2.0.4
        </p>
        <a href="#" class="link">
          Details
          <svg
            class="w-5 h-5 ml-2"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M17 8l4 4m0 0l-4 4m4-4H3"
            />
          </svg>
        </a>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
// Variables
$bg-color: #f0f9ff;
$svg-color: #0369a1;
$font-title-color: #0369a1;
$font-description-color: #0284c7;

// Component css
.w-5 {
  width: 1.25rem;
}

.h-5 {
  height: 1.25rem;
}

.ml-2 {
  margin-left: 0.5rem;
}

.alert {
  display: flex;
  background-color: $bg-color;
  padding: 1.25rem 1.5rem;
  border-radius: 0.375rem;
  width: 100%;

  .alert-icon {
    color: $svg-color;
    flex-shrink: 0;
  }

  .alert-content {
    display: flex;
    flex-wrap: wrap;
    row-gap: 1rem;
    align-items: center;
    justify-content: space-between;
    flex: 1;
    margin-left: 0.75rem;
    font-size: 0.875rem;
    line-height: 1.25rem;

    @media (min-width: 640px) {
      font-size: 1rem;
      line-height: 1.5rem;
    }
  }

  .title {
    font-weight: 600;
    color: $font-title-color;
  }

  .link {
    font-weight: 600;
    display: flex;
    align-items: center;
    color: $font-description-color;
    transition: color 0.15s ease-in-out;

    &:hover {
      color: darken($color: $font-description-color, $amount: 15);
    }
  }
}
</style>
