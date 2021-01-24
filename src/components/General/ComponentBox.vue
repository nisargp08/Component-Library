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
  font-size: 1.125rem;
  line-height: 1.75rem;
  font-weight: 500;
  text-transform: capitalize;
  letter-spacing: -0.025rem;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
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
    gap: 1rem;
    width: 100%;
    max-width: 32rem;
    margin: auto;
    flex-wrap: wrap;
  }
}
</style>
