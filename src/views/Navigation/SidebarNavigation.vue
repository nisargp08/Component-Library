<template>
  <component-layout class="sidebar-navigation-container">
    <template v-slot:page-header>
      <p>Sidebar Navigation</p>
    </template>
    <template v-slot:page-description>
      <p>
        Using
        <a style="color : #e91d62" href="https://animate.style/" target="_blank"
          >animate.css</a
        >
        for animations
      </p>
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
// Sidebar Navigation
import SimpleWithIconsAndBadges from "@sidebarNavigation/SimpleWithIconsAndBadges.vue";
import SimpleWithBrandColor from "@sidebarNavigation/SimpleWithBrandColor.vue";
import SimpleWithProfileSection from "@sidebarNavigation/SimpleWithProfileSection.vue";
import DarkWithProfileSection from "@sidebarNavigation/DarkWithProfileSection.vue";
import BrandedSidebar from "@sidebarNavigation/BrandedSidebar.vue";
import SecondaryNavigation from "@sidebarNavigation/SecondaryNavigation.vue";
import ExpandableSection from "@sidebarNavigation/ExpandableSection.vue";

export default {
  data() {
    return {
      componentsList: [
        {
          title: "Simple Sidebar Navigation with Icons & Badges",
          componentName: SimpleWithIconsAndBadges,
        },
        {
          title: "Simple with icons and brand color",
          componentName: SimpleWithBrandColor,
        },
        {
          title: "Simple with icons, badges, and profile section",
          componentName: SimpleWithProfileSection,
        },
        {
          title: "Dark with icons, badges, and profile section",
          componentName: DarkWithProfileSection,
        },
        {
          title: "Brand with icons, badges, and profile section",
          componentName: BrandedSidebar,
        },
        {
          title: "Sidebar with Secondary Navigation",
          componentName: SecondaryNavigation,
        },
        {
          title: "Simple with Expandable sections",
          componentName: ExpandableSection,
          needJS: true,
        },
      ],
    };
  },
  components: {
    ComponentLayout,
    ComponentBox,
    SimpleWithIconsAndBadges,
    SimpleWithBrandColor,
    SimpleWithProfileSection,
    DarkWithProfileSection,
    BrandedSidebar,
    SecondaryNavigation,
    ExpandableSection,
  },
};
</script>

<style lang="scss" scoped>
/deep/ .component-box-body {
  * {
    box-sizing: border-box;
  }
  > * {
    justify-content: flex-start;
    background-color: whitesmoke;
    align-items: flex-start;
    flex-direction: column-reverse;
    flex-wrap: nowrap;

    @media (min-width: 640px) {
      flex-direction: row;
    }
  }
}
</style>
