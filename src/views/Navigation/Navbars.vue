<template>
  <component-layout class="navbars">
    <template v-slot:page-header>
      <p>Navbars</p>
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
// Navbars
import SimpleDarkLeft from "@navbars/SimpleDarkMenu_Left.vue";
import DarkWithAction from "@navbars/DarkWithAction.vue";
import SimpleDark from "@navbars/SimpleDark.vue";
import SimpleLight from "@navbars/SimpleLight.vue";
import SimpleLightSearch from "@navbars/SimpleLightSearch.vue";
import SimpleDarkSearch from "@navbars/SimpleDarkSearch.vue";

export default {
  data() {
    return {
      componentsList: [
        {
          title: "Simple Dark",
          componentName: SimpleDark,
          needJS: true,
        },
        {
          title: "Simple Light",
          componentName: SimpleLight,
          needJS: true,
        },
        {
          title: "Simple Dark Search",
          componentName: SimpleDarkSearch,
          needJS: true,
        },
        {
          title: "Simple Light Search",
          componentName: SimpleLightSearch,
          needJS: true,
        },
        {
          title: "Simple dark with menu button on left",
          componentName: SimpleDarkLeft,
          needJS: true,
        },
        {
          title: "Dark with quick action",
          componentName: DarkWithAction,
          needJS: true,
        },
      ],
    };
  },
  components: {
    ComponentLayout,
    ComponentBox,
    SimpleDarkLeft,
    DarkWithAction,
    SimpleDark,
    SimpleLight,
    SimpleLightSearch,
    SimpleDarkSearch,
  },
};
</script>

<style lang="scss" scoped>
/deep/ .component-box-body {
  min-height: 16rem;
  align-items: flex-start;

  * {
    box-sizing: border-box;
  }
}
</style>
