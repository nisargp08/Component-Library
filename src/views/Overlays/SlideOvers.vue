<template>
  <component-layout class="slide-overs">
    <template v-slot:page-header>
      <p>Slide Overs</p>
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
import ComponentBox from "@general/ComponentBox";
// Slide overs
import SimpleSlideOver from "@slideOvers/SimpleSlideOver.vue";
import BrandedHeader from "@slideOvers/BrandedHeader.vue";
import StickyFooter from "@slideOvers/StickyFooter.vue";
import CreateProjectForm from "@slideOvers/CreateProjectForm.vue";
import CreateProjectFormWide from "@slideOvers/CreateProjectFormWide.vue";
import UserProfile from "@slideOvers/UserProfile.vue";
import WideUserProfile from "@slideOvers/WideUserProfile.vue";
import ContactList from "@slideOvers/ContactList.vue";

export default {
  data() {
    return {
      componentsList: [
        {
          title: "Simple Slide Over",
          componentName: SimpleSlideOver,
          needJS: true,
        },
        {
          title: "Branded Header Slide over",
          componentName: BrandedHeader,
          needJS: true,
        },
        {
          title: "Sticky Footer slide over",
          componentName: StickyFooter,
          needJS: true,
        },
        {
          title: "Create Project Form Example",
          componentName: CreateProjectForm,
          needJS: true,
        },
        {
          title: "Create Project Form Wide Example",
          componentName: CreateProjectFormWide,
          needJS: true,
        },
        {
          title: "User Profile Example",
          componentName: UserProfile,
          needJS: true,
        },
        {
          title: "Wide User Profile Example",
          componentName: WideUserProfile,
          needJS: true,
        },
        {
          title: "Contact List Example",
          componentName: ContactList,
          needJS: true,
        },
      ],
    };
  },
  components: {
    ComponentLayout,
    ComponentBox,
    SimpleSlideOver,
    BrandedHeader,
    StickyFooter,
    CreateProjectForm,
    CreateProjectFormWide,
    UserProfile,
    WideUserProfile,
    ContactList,
  },
};
</script>

<style lang="scss" scoped>
/deep/ .component-box-body {
  > * {
    padding: 3rem 2rem;
  }
}
</style>
