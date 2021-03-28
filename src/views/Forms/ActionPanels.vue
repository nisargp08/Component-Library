<template>
  <component-layout class="action-panels-container">
    <template v-slot:page-header>
      <p>Action Panels</p>
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
import SimplePanel from "@actionPanels/SimpleActionPanel.vue";
import LinkActionPanel from "@actionPanels/LinkActionPanel.vue";
import ButtonActionPanel from "@actionPanels/ButtonActionPanel.vue";
import ToggleActionPanel from "@actionPanels/ToggleActionPanel.vue";
import InputActionPanel from "@actionPanels/InputActionPanel.vue";
import WellActionPanel from "@actionPanels/WellActionPanel.vue";

export default {
  data() {
    return {
      componentsList: [
        {
          title: "Simple Action Panel",
          componentName: SimplePanel,
        },
        {
          title: "Link Action Panel",
          componentName: LinkActionPanel,
        },
        {
          title: "Action panel with button on right",
          componentName: ButtonActionPanel,
        },
        {
          title: "Action panel with toggle on right",
          componentName: ToggleActionPanel,
        },
        {
          title: "Action panel with a input field",
          componentName: InputActionPanel,
        },
        {
          title: "Action panel with a well",
          componentName: WellActionPanel,
        },
      ],
    };
  },
  components: {
    ComponentLayout,
    ComponentBox,
    SimplePanel,
    LinkActionPanel,
    ButtonActionPanel,
    ToggleActionPanel,
    InputActionPanel,
    WellActionPanel
  },
};
</script>

<style lang="scss" scoped>
/deep/ .component-box-body {
  background-color: whitesmoke;

  * {
    box-sizing: border-box;
  }

  > * {
    padding: 1rem;
    @media (min-width: 640px) {
      padding: 3rem 1rem;
    }
  }
}
</style>
