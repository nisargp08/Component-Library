<template>
  <div class="my-4">
      <!-- Page Title and description -->
      <section>
          <breadcrumbs />
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
import Breadcrumbs from "@general/Breadcrumbs.vue";

export default {
components : {
  Breadcrumbs,
}
}
</script>

<style lang="scss" scoped>
.my-4{
    margin-top: 1rem;
    margin-bottom: 1rem;
}
</style>