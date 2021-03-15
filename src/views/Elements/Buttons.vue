<template>
  <component-layout class="buttons">
    <template v-slot:page-header>
      <p>Buttons</p>
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
// Buttons
import PrimaryButtons from "@buttons/PrimaryButtons.vue";
import SecondaryButtons from "@buttons/SecondaryButtons.vue";
import WhiteButtons from "@buttons/WhiteButtons.vue";
import RoundedButtons from "@buttons/RoundedButtons.vue";
import CircularButtons from "@buttons/CircularButtons.vue";

export default {
  data() {
    return {
      componentsList: [
        {
          title: "Primary Buttons",
          componentName: PrimaryButtons,
        },
        {
          title: "Secondary Buttons",
          componentName: SecondaryButtons,
        },
        {
          title: "white Buttons",
          componentName: WhiteButtons,
        },
        {
          title: "Rounded Buttons",
          componentName: RoundedButtons,
        },
        {
          title: "Circular Buttons",
          componentName: CircularButtons,
        },
      ],
    };
  },
  components: {
    ComponentLayout,
    ComponentBox,
    PrimaryButtons,
    SecondaryButtons,
    WhiteButtons,
    RoundedButtons,
    CircularButtons,
  },
};
</script>

<style lang="scss" scoped>
// Css for containers - not required for component function
/deep/ .component-box-body {
  * {
    box-sizing: border-box;
  }

  > * {
    padding: 3rem 2rem;
    justify-content: center;
  }
}
</style>
