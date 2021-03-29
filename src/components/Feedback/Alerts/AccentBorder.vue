<template>
  <!-- Accent border alert -->
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
            d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
          />
        </svg>
      </div>
      <div class="alert-content">
        <p class="title">
          You have no credits left.
          <a href="#" class="link">
            Upgrade your account to add more credits.
          </a>
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
// Variables
$bg-color: #fefce8;
$svg-color: #a16207;
$font-title-color: #a16207;

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
  border-radius: 0 0.375rem 0.375rem 0;
  width: 100%;
  border-left: 4px solid $font-title-color;

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
    font-weight: 400;
    color: $font-title-color;
  }

  .link {
    font-weight: 500;
    text-decoration: underline;
    color: $font-title-color;
    transition: color 0.15s ease-in-out;

    &:hover {
      color: darken($color: $font-title-color, $amount: 10);
    }
  }
}
</style>
