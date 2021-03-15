<template>
  <component-layout class="alerts-container">
    <template v-slot:page-header>
      <p>Alerts</p>
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
// Alerts
import DescriptionAlert from "@alerts/DescriptionAlert.vue";
import ListAlert from "@alerts/ListAlert.vue";
import ActionAlert from "@alerts/ActionAlert.vue";
import LinkOnRight from "@alerts/LinkOnRight.vue";
import AccentBorder from "@alerts/AccentBorder.vue";
import DismissAlert from "@alerts/DismissAlert.vue";

export default {
  data() {
    return {
      componentsList: [
        {
          title: "Alert with Description",
          componentName: DescriptionAlert,
        },
        {
          title: "Alert with List",
          componentName: ListAlert,
        },
        {
          title: "Alert with Action",
          componentName: ActionAlert,
        },
        {
          title: "Alert with Link on Right",
          componentName: LinkOnRight,
        },
        {
          title: "Alert with Accent Border",
          componentName: AccentBorder,
        },
        {
          title: "Alert with Dismiss",
          componentName: DismissAlert,
        },
      ],
    };
  },
  components: {
    ComponentLayout,
    ComponentBox,
    DescriptionAlert,
    ListAlert,
    ActionAlert,
    LinkOnRight,
    AccentBorder,
    DismissAlert,
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
    padding: 1rem;
    justify-content: center;

    @media(min-width : 640px){
        padding: 3rem 2rem;
    }
  }
}
</style>
