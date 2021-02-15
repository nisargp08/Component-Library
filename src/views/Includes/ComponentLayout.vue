<template>
  <div class="my-4">
      <!-- Page Title and description -->
      <section>
          <div class="primary-header">
            <slot name="page-header"></slot>
          </div>
            <slot name="page-description"></slot>
      </section>
      <!-- Page Content -->
      <section class="section">
          <slot name="page-body"></slot>
      </section>
      <!-- Page footer -->
  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
.my-4{
    margin-top: 1rem;
    margin-bottom: 1rem;
}
</style>