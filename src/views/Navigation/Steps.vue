<template>
  <component-layout class="steps-container">
    <template v-slot:page-header>
      <p>Steps</p>
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
// Steps
import SimpleSteps from "@steps/SimpleSteps.vue";
import PanelSteps from "@steps/PanelSteps.vue";
import BulletSteps from "@steps/BulletSteps.vue";
import BorderedPanelSteps from "@steps/BorderedPanelSteps.vue";
import CircleSteps from "@steps/CircleSteps.vue";
import BulletWithText from "@steps/BulletWithText.vue";
import CirclesWithText from "@steps/CirclesWithText.vue";

export default {
  data() {
    return {
      componentsList: [
        {
          title: "Simple Steps",
          componentName: SimpleSteps,
          class: "wrapper",
        },
        {
          title: "Steps in Panels",
          componentName: PanelSteps,
          class: "wrapper",
        },
        {
          title: "Bullet Steps",
          componentName: BulletSteps,
        },
        {
          title: "Panels with border",
          componentName: BorderedPanelSteps,
          class: "wrapper",
        },
        {
          title: "Circle Steps",
          componentName: CircleSteps,
          class: "wrapper",
        },
        {
          title: "Bullets With Text",
          componentName: BulletWithText,
        },
        {
          title: "Circles With Text",
          componentName: CirclesWithText,
        },
      ],
    };
  },
  components: {
    ComponentLayout,
    ComponentBox,
    SimpleSteps,
    PanelSteps,
    BulletSteps,
    BorderedPanelSteps,
    CircleSteps,
    BulletWithText,
    CirclesWithText,
  },
};
</script>

<style lang="scss" scoped>
/deep/ .wrapper {
  .component-box-body > * {
    padding: 0;
    justify-content: flex-start;
  }
}
/deep/ .component-box-body {
  * {
    box-sizing: border-box;
  }

  > * {
    padding: 3rem 2rem;
  }
}
</style>
