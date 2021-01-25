<template>
  <div class="dropdowns">
    <h2 class="primary-header mb-0">Dropdowns</h2>
    <p>
        Using <a style="color : #e91d62" href="https://animate.style/" target="_blank">animate.css</a> for animations
    </p>
    <section class="section">
      <!-- Simple Dropdown -->
      <component-box class="simple">
        <template v-slot:header>
          Simple Dropdown
        </template>
        <template v-slot:body>
          <simple-dropdown></simple-dropdown>
        </template>
      </component-box>
       <!-- Dropdown with dividers -->
      <component-box class="divider">
        <template v-slot:header>
          Dropdown with dividers
        </template>
        <template v-slot:body>
          <divider-dropdown></divider-dropdown>
        </template>
      </component-box>
    </section>
  </div>
</template>

<script>
import ComponentBox from "@general/ComponentBox.vue";
// Dropdown Components
import SimpleDropdown from "@dropdowns/Simple.vue";
import DividerDropdown from "@dropdowns/DividerDropdown.vue";

export default {
  name: "Avatars",
  components: {
    ComponentBox,
    SimpleDropdown,
    DividerDropdown
  },
};
</script>

<style lang="scss">
// Css for containers - not required for component function
.dropdowns {
  .component-box-body {
    background-color: $text-gray-100;
    align-items: flex-start;
  }
  .simple .component-box-body{
      min-height: 12rem;
  }
  .divider .component-box-body{
      min-height: 20rem;
  }
}
</style>
