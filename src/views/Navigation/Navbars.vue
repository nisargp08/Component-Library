<template>
  <div class="navbars">
    <div class="primary-header">Navbars</div>
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
import ComponentBox from "@general/ComponentBox.vue";
// Navbars
import SimpleDarkLeft from "@navbars/SimpleDarkMenu_Left.vue";
import DarkWithAction from "@navbars/DarkWithAction.vue";

export default {
  data() {
    return {
      componentsList: [
        {
          title: "Simple dark with menu button on left",
          componentName: "SimpleDarkLeft",
          needJS: true,
        },
        {
          title: "Dark with quick action",
          componentName: "DarkWithAction",
          needJS: true,
        },
      ],
    };
  },
  components: {
    ComponentBox,
    SimpleDarkLeft,
    DarkWithAction,
  },
};
</script>

<style lang="scss">
.navbars {
  .component-box-body {
    padding: 0;
    min-height: 12rem;
    align-items: flex-start;
    background: $text-gray-700;
  }
}
</style>
