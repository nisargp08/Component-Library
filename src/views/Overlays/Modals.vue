<template>
 <component-layout class="modal">
    <template v-slot:page-header>
      <p>Modals</p>
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
        class="height-sm"
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
    </template>
  </component-layout>
</template>

<script>
import ComponentLayout from "@v-includes/ComponentLayout.vue";
import ComponentBox from "@general/ComponentBox.vue";
//Modals
import SimpleModal from "@modals/SimpleModal.vue";
import SingleActionModal from "@modals/SingleActionModal.vue";

export default {
  data() {
    return {
      componentsList: [
        {
          title: "Simple Modal",
          componentName: "SimpleModal",
          needJS: true,
        },
        {
          title: "Centered with single action",
          componentName: "SingleActionModal",
          needJS: true,
        },
      ],
    };
  },
  components: {
    ComponentLayout,
    ComponentBox,
    SimpleModal,
    SingleActionModal,
  },
};
</script>

<style></style>
