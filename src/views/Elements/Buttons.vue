<template>
  <div class="buttons">
    <div class="primary-header">Buttons</div>
    <section class="section">
      <!-- Component list -->
      <component-box
        class="wrapper"
        v-for="(component, index) in componentsList"
        :key="index"
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
    </section>
  </div>
</template>

<script>
import ComponentBox from "@general/ComponentBox.vue";
import PrimaryButtons from "@buttons/PrimaryButtons.vue";
import SecondaryButtons from "@buttons/SecondaryButtons.vue";
import WhiteButtons from "@buttons/WhiteButtons.vue";
import RoundedButtons from "@buttons/RoundedButtons.vue";
import CircularButtons from "@buttons/CircularButtons.vue";

export default {
  data() {
    return {
      componentsList: [
        {
          title: "Primary Buttons",
          componentName: "PrimaryButtons",
        },
        {
          title: "Secondary Buttons",
          componentName: "SecondaryButtons",
        },
        {
          title: "white Buttons",
          componentName: "WhiteButtons",
        },
        {
          title: "Rounded Buttons",
          componentName: "RoundedButtons",
        },
        {
          title: "Circular Buttons",
          componentName: "CircularButtons",
        },
      ],
    };
  },
  components: {
    ComponentBox,
    PrimaryButtons,
    SecondaryButtons,
    WhiteButtons,
    RoundedButtons,
    CircularButtons,
  },
};
</script>

<style lang="scss">
// Container css
.buttons {
  .wrapper {
    .component-box-body > * {
      max-width: 100%;
      justify-content: center;
    }
  }
}
</style>
