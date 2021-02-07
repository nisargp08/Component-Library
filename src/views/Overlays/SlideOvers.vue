<template>
  <div class="slide-overs">
    <div class="primary-header">Slide Overs</div>
    <p>
      Using
      <a style="color : #e91d62" href="https://animate.style/" target="_blank"
        >animate.css</a
      >
      for animations
    </p>
    <section class="section">
      <!-- Component list -->
      <component-box v-for="(component, index) in componentsList" :key="index">
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
    </section>
  </div>
</template>

<script>
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
          componentName: "SimpleSlideOver",
          needJS: true,
        },
        {
          title: "Branded Header Slide over",
          componentName: "BrandedHeader",
          needJS: true,
        },
        {
          title: "Sticky Footer slide over",
          componentName: "StickyFooter",
          needJS: true,
        },
        {
          title: "Create Project Form Example",
          componentName: "CreateProjectForm",
          needJS: true,
        },
        {
          title: "Create Project Form Wide Example",
          componentName: "CreateProjectFormWide",
          needJS: true,
        },
        {
          title: "User Profile Example",
          componentName: "UserProfile",
          needJS: true,
        },
        {
          title: "Wide User Profile Example",
          componentName: "WideUserProfile",
          needJS: true,
        },
        {
          title: "Contact List Example",
          componentName: "ContactList",
          needJS: true,
        },
      ],
    };
  },
  components: {
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

<style lang="scss"></style>
