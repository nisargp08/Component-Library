<template>
  <component-layout class="vertical-navigation-container">
    <template v-slot:page-header>
      <p>Vertical Navigation</p>
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
// Vertical Navigation
import SimpleVerticalNavigation from "@verticalNavigation/SimpleVerticalNavigation.vue";
import SimpleWithBadges from "@verticalNavigation/SimpleWithBadges.vue";
import SimpleWithIcons from "@verticalNavigation/SimpleWithIcons.vue";
import SimpleWithIconsAndBadges from "@verticalNavigation/SimpleWithIconsAndBadges.vue";
import SimpleWithSecondaryNavigation from "@verticalNavigation/SimpleWithSecondaryNavigation.vue";

export default {
  data() {
    return {
      componentsList: [
        {
          title: "Simple Vertical Navigation",
          componentName: SimpleVerticalNavigation,
        },
        {
          title: "Simple With badges",
          componentName: SimpleWithBadges,
        },
        {
          title: "Simple With Icons",
          componentName: SimpleWithIcons,
        },
        {
          title: "Simple With Icons And Badges",
          componentName: SimpleWithIconsAndBadges,
        },
        {
          title: "Simple With Secondary Navigation",
          componentName: SimpleWithSecondaryNavigation,
        },
      ],
    };
  },
  components: {
    ComponentLayout,
    ComponentBox,
    SimpleVerticalNavigation,
    SimpleWithBadges,
    SimpleWithIcons,
    SimpleWithIconsAndBadges,
    SimpleWithSecondaryNavigation,
  },
};
</script>

<style lang="scss" scoped>
/deep/ .component-box-body {
  * {
    box-sizing: border-box;
  }

  > * {
    padding: 3rem 2rem;
  }
}
</style>
