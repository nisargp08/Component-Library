<template>
  <component-layout class="tabs-container">
    <template v-slot:page-header>
      <p>Tabs</p>
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
// Tabs
import UnderlineTabs from "@tabs/UnderlineTabs.vue";
import UnderlineTabsWithIcon from "@tabs/UnderlineTabsWithIcon.vue";
import TabsInPills from "@tabs/TabsInPills.vue";
import TabsInPillsOnGray from "@tabs/TabsInPillsOnGray.vue";
import FullWidthTabs from "@tabs/FullWidthTabs.vue";
import BarWithUnderline from "@tabs/BarWithUnderline.vue";

export default {
  data() {
    return {
      componentsList: [
        {
          title: "Tabs with underline",
          componentName: UnderlineTabs,
          needJS: true,
        },
        {
          title: "Tabs with underline and icons",
          componentName: UnderlineTabsWithIcon,
          needJS: true,
        },
        {
          title: "Tabs in pills",
          componentName: TabsInPills,
          needJS: true,
        },
        {
          title: "Tabs in pills on gray",
          componentName: TabsInPillsOnGray,
          needJS: true,
        },
        {
          title: "Full-width tabs with underline",
          componentName: FullWidthTabs,
          needJS: true,
        },
        {
          title: "Bar with underline",
          componentName: BarWithUnderline,
          class: "smokebg",
          needJS: true,
        },
      ],
    };
  },
  components: {
    ComponentLayout,
    ComponentBox,
    UnderlineTabs,
    UnderlineTabsWithIcon,
    TabsInPills,
    TabsInPillsOnGray,
    FullWidthTabs,
    BarWithUnderline,
  },
};
</script>

<style lang="scss" scoped>
/deep/ .component-box-body {
  * {
    box-sizing: border-box;
  }

  > * {
    padding: 1rem 1.5rem;
  }
}
.smokebg {
  background-color: whitesmoke;
}
</style>
