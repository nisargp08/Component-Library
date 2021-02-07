<template>
  <div class="dropdowns">
    <h2 class="primary-header mb-0">Dropdowns</h2>
    <p>
      Using
      <a style="color : #e91d62" href="https://animate.style/" target="_blank"
        >animate.css</a
      >
      for animations
    </p>
    <section class="section">
      <!-- Component list -->
      <component-box
        :class="component.class"
        v-for="(component, index) in componentsList"
        :key="index"
      >
        <template v-slot:header>
          {{ component.title }}
          <span v-if="component.needJS" class="badge badge-red ml-1"
            >requires js</span
          >
        </template>
        <template v-slot:body>
          <component :is="component.componentName"></component>
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
import IconsDropdown from "@dropdowns/IconsDropdown.vue";
import HeaderDropdown from "@dropdowns/HeaderDropdown.vue";

export default {
  name: "Avatars",
  data() {
    return {
      componentsList: [
        {
          title: "Simple Dropdown",
          componentName: "SimpleDropdown",
          needJS: true,
          class : 'height-sm',
        },
        {
          title: "Dropdown With Dividers",
          componentName: "DividerDropdown",
          needJS: true,
          class : 'height-lg',
        },
        {
          title: "Dropdown With Icons ",
          componentName: "IconsDropdown",
          needJS: true,
          class : 'height-lg',
        },
        {
          title: "Dropdown With Header",
          componentName: "HeaderDropdown",
          needJS: true,
          class : 'height-md',
        },
      ],
    };
  },
  components: {
    ComponentBox,
    SimpleDropdown,
    DividerDropdown,
    IconsDropdown,
    HeaderDropdown,
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
  .height-sm .component-box-body {
    min-height: 12rem;
  }
  .height-md .component-box-body {
    min-height: 16rem;
  }
  .height-lg .component-box-body {
    min-height: 20rem;
  }
}
</style>
