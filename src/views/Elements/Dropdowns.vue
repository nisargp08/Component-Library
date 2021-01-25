<template>
  <div class="dropdowns">
    <h2 class="primary-header mb-0">Dropdowns</h2>
    <p>
        Using <a style="color : #e91d62" href="https://animate.style/" target="_blank">animate.css</a> for animations
    </p>
    <section class="section">
      <!-- Simple Dropdown -->
      <component-box>
        <template v-slot:header>
          Simple Dropdown
        </template>
        <template v-slot:body>
          <simple-dropdown></simple-dropdown>
        </template>
      </component-box>
    </section>
  </div>
</template>

<script>
import ComponentBox from "@general/ComponentBox.vue";
// Dropdown Components
import SimpleDropdown from "@dropdowns/Simple.vue";

export default {
  name: "Avatars",
  components: {
    ComponentBox,
    SimpleDropdown,
  },
};
</script>

<style lang="scss">
.dropdowns {
  .component-box-body {
    background-color: $text-gray-100;
    min-height : 12rem;
    align-items: flex-start;
  }
}
</style>
