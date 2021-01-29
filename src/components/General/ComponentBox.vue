<template>
  <div class="component-box">
    <div class="component-box-head">
      <slot name="header"></slot>
    </div>
    <div class="component-box-body">
      <slot name="body"></slot>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.component-box {
  border: 1px solid $text-gray-200;
  border-radius: 0.375rem;
}
.component-box-head {
  padding: 1.25rem 1rem;
  border-bottom: 1px solid $text-gray-200;
  font-size: 1rem;
  line-height: 1.75rem;
  font-weight: 500;
  text-transform: capitalize;
  letter-spacing: -0.025rem;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  @media (min-width: 768px) {
    font-size: 1.125rem;
  }
}
.component-box-body {
  padding: 3rem 2rem;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;

  //   Immediate childs
  > * {
    display: flex;
    align-items: center;
    justify-content: space-around;
    gap: 0.5rem;
    width: 100%;
    max-width: 32rem;
    margin: 0 auto;
    flex-wrap: wrap;
    @media (min-width: 768px) {
      gap: 1rem;
    }
  }
}
.badge{
  display: inline-block;
  padding: 0 0.75rem;
  border-radius: 9999px;
  font-size: 0.875rem;
  font-weight: 700;
  background-color: #f4f4f5;
  color: #71717a;
  text-transform: uppercase;
}
.badge-red {
  background-color: #fee2e2;
  color: #ef4444;
}
</style>
