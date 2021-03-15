<template>
  <!-- Pagination in card footer -->
  <div>
    <div class="pagination">
      <div class="pagination-stats">
        <p>Showing <b>1</b> to <b>10</b> of <b>97</b> results</p>
      </div>
      <ul class="pagination-buttons">
        <li>
          <a class="page-link" href="#">
            <svg
              class="w-3 h-3"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 20 20"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M15 19l-7-7 7-7"
              />
            </svg>
          </a>
        </li>
        <li><a class="page-link" href="#">1</a></li>
        <li><a class="page-link" href="#">2</a></li>
        <li><a class="page-link" href="#">3</a></li>
        <li class="active"><a class="page-link" href="#">4</a></li>
        <li><a class="page-link" href="#">5</a></li>
        <li><a class="page-link" href="#">6</a></li>
        <li><a class="page-link" href="#">7</a></li>
        <li>
          <a class="page-link" href="#">
            <svg
              class="w-3 h-3"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 20 20"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M9 5l7 7-7 7"
              />
            </svg>
          </a>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
$font-color: black;
$border-color: $text-gray-300;
$bg-hover: $text-gray-100;
$active-bg-color: $theme-color;
$active-text-color: white;
$box-shadow: $shadow;

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
.w-3 {
  width: 0.75rem;
}

.h-3 {
  height: 0.75rem;
}

.pagination-buttons {
  display: flex;
  list-style: none;
  padding-left: 0;
  margin-top: 0.5rem;
  margin-bottom: 0.5rem;
  color: $font-color;

  > * {
    border-width: 1px 0 1px 1px;
    border-style: solid;
    border-color: $border-color;
    display: none; //When the list is too big to display in mobile
    @media (min-width: 640px) {
      display: block;
    }
    &.active {
      background: $active-bg-color;
      color: $active-text-color;
      border-color: $active-bg-color;
      display: block;

      &:hover {
        background: $active-bg-color;
        color: $active-text-color;
      }
    }

    &:first-child {
      display: block;
      border-top-left-radius: 0.375rem;
      border-bottom-left-radius: 0.375rem;
    }

    &:last-child {
      display: block;
      border-top-right-radius: 0.375rem;
      border-bottom-right-radius: 0.375rem;
      border-right: 1px solid $border-color;
    }

    &:hover {
      background-color: $bg-hover;
    }
  }

  .page-link {
    font-size: 1rem;
    display: block;
    padding: 0.5rem 1rem;
    text-align: center;
  }
}
</style>
