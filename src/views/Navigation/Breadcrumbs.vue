<template>
  <component-layout class="breadcrumbs-container">
    <template v-slot:page-header>
      <p>Breadcrumbs</p>
    </template>
    <template v-slot:page-body>
      <!-- Component list -->
      <component-box
        :class="component.class"
        v-for="(component, index) in componentsList"
        :key="index"
        :details="component.componentName"
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
    </template>
  </component-layout>
</template>

<script>
import ComponentLayout from "@v-includes/ComponentLayout.vue";
import ComponentBox from "@general/ComponentBox.vue";
// Breadcrumbs
import ContainedBreadcrumbs from "@breadcrumbs/Contained.vue";
import FullWidth from "@breadcrumbs/FullWidth.vue";
import SimpleChevron from "@breadcrumbs/SimpleChevron.vue";
import SimpleSlashes from "@breadcrumbs/SimpleSlashes.vue";

export default {
  data() {
    return {
      componentsList: [
        {
          title: "Contained Breadcrumbs",
          componentName: ContainedBreadcrumbs,
        },
        {
          title: "Full width Breadcrumbs",
          componentName: FullWidth,
        },
        {
          title: "Simple Chevron Breadcrumbs",
          componentName: SimpleChevron,
          class: "white-bg",
        },
        {
          title: "Simple Slashes Breadcrumbs",
          componentName: SimpleSlashes,
          class: "white-bg",
        },
      ],
    };
  },
  components: {
    ComponentLayout,
    ComponentBox,
    ContainedBreadcrumbs,
    FullWidth,
    SimpleChevron,
    SimpleSlashes,
  },
};
</script>

<style lang="scss" scoped>
/deep/ .component-box-body {
  background: whitesmoke;
  * {
    box-sizing: border-box;
  }
  > * {
    padding: 3rem 2rem;
    justify-content: flex-start;
  }
}
/deep/ .white-bg .component-box-body {
  background: white;
  > * {
    justify-content: center;
  }
}
</style>
