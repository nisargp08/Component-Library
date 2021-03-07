<template>
  <component-layout class="select-menu-container">
    <template v-slot:page-header>
      <p>Select Menus</p>
    </template>
    <template v-slot:page-body>
      <!-- Component list -->
      <component-box
        v-for="(component, index) in componentsList"
        :key="index"
        :class="component.class"
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
// Select Menus
import AvatarMenu from "@selectMenus/AvatarMenu.vue";
import SimpleNative from "@selectMenus/SimpleNative.vue";
import StatusIndicator from "@selectMenus/StatusIndicator.vue";
import WithSecondaryText from "@selectMenus/WithSecondaryText.vue";
import WithSearch from "@selectMenus/WithSearch.vue";

export default {
  data() {
    return {
      componentsList: [
        {
          title: "Simple Native Menu",
          componentName: "SimpleNative",
          needJS: true,
        },
        {
          title: "Custom Menu with Avatar",
          componentName: "AvatarMenu",
          needJS: true,
        },
        {
          title: "Custom Menu with Status Indicator",
          componentName: "StatusIndicator",
          needJS: true,
        },
        {
          title: "Custom Menu with Secondary Text",
          componentName: "WithSecondaryText",
          needJS: true,
        },
         {
          title: "Custom Menu with Search",
          componentName: "WithSearch",
          needJS: true,
        },
      ],
    };
  },
  components: {
    ComponentLayout,
    ComponentBox,
    AvatarMenu,
    SimpleNative,
    StatusIndicator,
    WithSecondaryText,
    WithSearch
  },
};
</script>

<style lang="scss" scoped>
/deep/ .component-box-body {
  background: whitesmoke;

  > * {
    max-width: 20rem;
    width: 100%;
    min-height: 20rem;
    align-items: flex-start;
  }

  * {
    box-sizing: border-box;
  }
}
</style>
