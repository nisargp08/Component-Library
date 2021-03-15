<template>
  <!-- Rounded dot badges -->
  <div>
    <span class="rounded-dot-badge badge-sm">Small</span>
    <span class="rounded-dot-badge badge-lg">Large</span>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.rounded-dot-badge {
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  position: relative;
  border-radius: 4px;
  font-size: 0.875rem;
  padding: 0.25rem 0.75rem;
  font-weight: 600;
  background-color: #dbeafe;
  color: #3b82f6;
  &::before {
    /* Middot and space css */
    content: "";
    height: 0.375rem;
    width: 0.375rem;
    margin-right: 0.5rem;
    background-color: #60a5fa;
    border-radius: 50%;
    display: inline-block;
  }
}
.badge-sm {
  font-size: 0.875rem;
  padding: 0.25rem 0.75rem;
}
.badge-lg {
  font-size: 1rem;
  padding: 0.25rem 1rem;
}
</style>
