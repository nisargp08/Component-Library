<template>
  <!-- Simple vertical navigation -->
  <div>
    <div class="vertical-navigation">
      <a class="nav-links active" href="#">Dashboard</a>
      <a class="nav-links" href="#">Team</a>
      <a class="nav-links" href="#">Projects</a>
      <a class="nav-links" href="#">Calendar</a>
      <a class="nav-links" href="#">Documents</a>
      <a class="nav-links" href="#">Reports</a>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
// Variables
$font-color: $text-gray-500;
$active-bg-color: lighten($theme-color, 30%);
$active-font-color: $theme-color;

.vertical-navigation {
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 16rem;

  .nav-links {
    font-size: 0.875rem;
    line-height: 1.5rem;
    font-weight: 600;
    color: $font-color;
    border-radius: 4px;
    padding: 0.5rem 1rem;
    margin-top: 0.25rem;
    transition: all 0.15s ease-in-out;

    // Active state
    &.active {
      background-color: $active-bg-color;
      color: $active-font-color;
      font-weight: 700;
    }

    // Hover State
    &:hover {
      color: $active-font-color;
      background-color: $active-bg-color;
    }
  }
}
</style>
