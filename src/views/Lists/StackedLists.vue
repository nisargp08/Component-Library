<template>
  <component-layout class="stacked-lists-container">
    <template v-slot:page-header>
      <p>Stacked Lists</p>
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
import NarrowWithAvatarGroup from "@stackedLists/NarrowWithAvatarGroup.vue";
import AvatarGroupWithActions from "@stackedLists/AvatarGroupWithActions.vue";
import ContentLinksWithAction from '@stackedLists/ContentLinksWithAction';
import WithHeadings from '@stackedLists/WithHeadings';
import TwoColumnsWithAvatar from '@stackedLists/TwoColumnsWithAvatar';

export default {
  data() {
    return {
      componentsList: [
        {
          title: "Narrow Stacked list with avatar group",
          componentName: NarrowWithAvatarGroup,
        },
        {
          title: "Avatar Groups with Actions",
          componentName: AvatarGroupWithActions,
        },
        {
          title: "Content links with action",
          componentName: ContentLinksWithAction,
        },
        {
          title: "Avatar Groups with headings",
          componentName: WithHeadings,
        },
        {
          title: "Two-column with avatar",
          componentName: TwoColumnsWithAvatar,
          class : "bg-whitesmoke w-100"
        },
      ],
    };
  },
  components: {
    ComponentLayout,
    ComponentBox,
    NarrowWithAvatarGroup,
    AvatarGroupWithActions,
    ContentLinksWithAction,
    WithHeadings,
    TwoColumnsWithAvatar
  },
};
</script>

<style lang="scss" scoped>
/deep/ .component-box-body {
  * {
    box-sizing: border-box;
  }

  > * {
    padding: 1rem;
    max-width: 32rem;
    @media (min-width: 640px) {
      padding: 3rem 1rem;
    }
  }
}
/deep/ .bg-whitesmoke .component-box-body{
  background-color: whitesmoke;
}
/deep/ .w-100 .component-box-body > *{
  max-width: 100%;
}
</style>
