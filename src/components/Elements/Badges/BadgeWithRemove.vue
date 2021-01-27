<template>
  <div>
      <div class="remove-badge badge-sm">
          <span>Small</span>
          <a href="#" title="Remove">
            <svg class="w-4 h-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </a>
      </div>
      <div class="remove-badge badge-lg">
          <span>Large</span>
          <a href="#" title="Remove">
            <svg class="w-4 h-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </a>
      </div>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
// SVG height/width css - Adjust as needed
.w-4{
    width: 1rem;
}
.h-4{
    height: 1rem;
}
.remove-badge a{
    display: flex;
    align-items: center;
}
// Component css
.remove-badge{
  display: flex;
  align-items: center;
  column-gap: 0.25rem;
  flex-wrap: wrap;
  position: relative;
  border-radius: 9999px;
  font-size: 0.875rem;
  padding: 0.25rem 0.75rem;
  font-weight: 600;
  background-color: #dbeafe;
  color: #3b82f6;
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