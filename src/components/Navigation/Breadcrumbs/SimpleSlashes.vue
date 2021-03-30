<template>
  <!-- Breadcrumbs with simple slashes -->
  <div>
    <div class="breadcrumbs">
      <a href="#">
        <svg
          class="w-6 h-6 flex-shrink-0"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
          />
        </svg>
      </a>
      <a href="#">Projects</a>
      <a href="#" class="active">The Rumbling</a>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
// Variables
$font-color: $text-gray-500;
$active-color: $theme-color;

// Component css
.w-6 {
  width: 1.5rem;
}

.h-6 {
  height: 1.5rem;
}

.flex-shrink-0 {
  flex-shrink: 0;
}

.breadcrumbs {
  position: relative;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  color: $font-color;
  font-weight: 500;
  font-size: 0.875rem;
  line-height: 1.25rem;
  border-radius: 8px;
  padding: 0.5rem 1rem;
  row-gap: 0.75rem;

  > :not(:first-child) {
    // margin-left: 2.25rem;
    position: relative;

    &::before {
      content: "/";
      display: inline-block;
      opacity: 0.5;
      margin-left: 1rem;
      margin-right: 1rem;
      color: $font-color;
    }
  }

  > * {
    transition: all 0.15s ease-in-out;

    &:hover {
      color: $active-color;
    }

    &.active {
      color: $active-color;
      font-weight: 600;
    }
  }
}
</style>
