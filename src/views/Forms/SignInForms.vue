<template>
  <component-layout class="sign-in-forms-container">
    <template v-slot:page-header>
      <p>Sign-in and Registration</p>
    </template>
    <template v-slot:page-body>
      <!-- Component list -->
      <component-box
        v-for="(component, index) in componentsList"
        :key="index"
        :class="component.class"
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
// Sign in forms
import SimpleForm from "@signInForms/SimpleForm.vue";
import SimpleCard from "@signInForms/SimpleCard.vue";
import SplitScreen from "@signInForms/SplitScreen.vue";

export default {
  data() {
    return {
      componentsList: [
        {
          title: "Simple form",
          componentName: SimpleForm,
        },
        {
          title: "Form in a card",
          componentName: SimpleCard,
        },
        {
          title: "Split Screen",
          componentName: SplitScreen,
        },
      ],
    };
  },
  components: {
    ComponentLayout,
    ComponentBox,
    SimpleForm,
    SimpleCard,
    SplitScreen,
  },
};
</script>

<style lang="scss" scoped>
/deep/ .component-box-body {
  * {
    box-sizing: border-box;
  }
}
</style>
