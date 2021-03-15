<template>
  <!-- Pagination as simple card footer -->
  <div>
    <div class="pagination">
      <div class="pagination-stats">
        <p>Showing <b>1</b> to <b>10</b> of <b>20</b> results</p>
      </div>
      <div class="pagination-buttons">
        <button class="btn">Previous</button>
        <button class="btn ml-3">Next</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
$box-shadow: $shadow;

.ml-3 {
  margin-left: 0.75rem;
}
.pagination {
  display: flex;
  align-items: center;
  max-width: 100%;
  width: 100%;
  align-self: flex-end;
  flex-wrap: wrap;
  padding: 0.5rem 1rem;
  justify-content: space-between;
  border-radius: 0.375rem;
  background-color: white;
  box-shadow: $box-shadow;
}

// Component css
.pagination-buttons {
  display: flex;
  margin-top: 0.5rem;
  margin-bottom: 0.5rem;
}
</style>
