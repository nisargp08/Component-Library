<template>
  <component-layout class="stacked-lists-container">
    <template v-slot:page-header>
      <p>Stacked Lists</p>
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
// Toggles
import NarrowWithAvatarGroup from "@stackedLists/NarrowWithAvatarGroup.vue";

export default {
  data() {
    return {
      componentsList: [
        {
          title: "Narrow Stacked list with avatar group",
          componentName: NarrowWithAvatarGroup,
        },
      ],
    };
  },
  components: {
    ComponentLayout,
    ComponentBox,
    NarrowWithAvatarGroup,
  },
};
</script>

<style lang="scss" scoped>
/deep/ .component-box-body {
  * {
    box-sizing: border-box;
  }

  > * {
    padding: 1rem;
    max-width: 32rem;
    @media (min-width: 640px) {
      padding: 3rem 1rem;
    }
  }
}
</style>
