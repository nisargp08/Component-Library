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
        <!-- Simple Slide over -->
      <component-box>
        <template v-slot:header>
          Simple Slide Over
          <span class="badge badge-red ml-1">requires js</span>
        </template>
        <template v-slot:body>
          <simple-slide-over></simple-slide-over>
        </template>
      </component-box>
       <!-- Branded Header Slide over -->
      <component-box>
        <template v-slot:header>
          Branded Header Slide Over
          <span class="badge badge-red ml-1">requires js</span>
        </template>
        <template v-slot:body>
          <branded-header></branded-header>
        </template>
      </component-box>
      <!-- Sticky Footer slide over -->
      <component-box>
        <template v-slot:header>
          Sticky Footer slide over
          <span class="badge badge-red ml-1">requires js</span>
        </template>
        <template v-slot:body>
          <sticky-footer></sticky-footer>
        </template>
      </component-box>
      <!-- Create Project Form Example -->
      <component-box>
        <template v-slot:header>
          Create Project Form Example
          <span class="badge badge-red ml-1">requires js</span>
        </template>
        <template v-slot:body>
          <create-project-form></create-project-form>
        </template>
      </component-box>
      <!-- Create Project Form Wide Example -->
      <component-box>
        <template v-slot:header>
          Wide Create Project Form Example
          <span class="badge badge-red ml-1">requires js</span>
        </template>
        <template v-slot:body>
          <create-project-form-wide></create-project-form-wide>
        </template>
      </component-box>
       <!-- User Profile Example -->
      <component-box>
        <template v-slot:header>
          User Profile in a sidebar
          <span class="badge badge-red ml-1">requires js</span>
        </template>
        <template v-slot:body>
          <user-profile></user-profile>
        </template>
      </component-box>
      <!-- Wide User Profile Example -->
      <component-box>
        <template v-slot:header>
          Wide User Profile in a sidebar
          <span class="badge badge-red ml-1">requires js</span>
        </template>
        <template v-slot:body>
          <wide-user-profile></wide-user-profile>
        </template>
      </component-box>
      <!-- Contact List Example -->
      <component-box>
        <template v-slot:header>
          Contact List in a sidebar
          <span class="badge badge-red ml-1">requires js</span>
        </template>
        <template v-slot:body>
          <contact-list></contact-list>
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
