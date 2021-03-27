<template>
  <component-layout class="toggles-container">
    <template v-slot:page-header>
      <p>Toggles</p>
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
import SimpleToggle from "@toggles/SimpleToggle.vue";
import ShortToggle from "@toggles/ShortToggle.vue";
import ToggleWithIcon from '@toggles/ToggleWithIcon.vue';
import ToggleWithDescription from '@toggles/ToggleWithDescription.vue';
import ToggleWithRightLabel from '@toggles/ToggleWithRightLabel.vue';

export default {
  data() {
    return {
      componentsList: [
        {
          title: "Simple Toggle",
          componentName: SimpleToggle,
        },
        {
          title: "Short Toggle",
          componentName: ShortToggle,
        },
        {
          title: "Toggle with icon",
          componentName: ToggleWithIcon,
        },
        {
          title: "Toggle with left label and description",
          componentName: ToggleWithDescription,
        },
        {
          title: "Toggle with right label",
          componentName: ToggleWithRightLabel,
        },
      ],
    };
  },
  components: {
    ComponentLayout,
    ComponentBox,
    SimpleToggle,
    ShortToggle,
    ToggleWithIcon,
    ToggleWithDescription
  },
};
</script>

<style lang="scss" scoped>
/deep/ .component-box-body {
  * {
    box-sizing: border-box;
  }

  > * {
      padding: 3rem 1rem;
  }
}
</style>
