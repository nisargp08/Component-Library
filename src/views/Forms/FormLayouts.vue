<template>
  <component-layout class="form-layouts-container">
    <template v-slot:page-header>
      <p>Form Layouts</p>
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
// Form Layouts
import TwoColumnForm from "@formLayouts/TwoColumnForm.vue";
import LabelsOnLeft from "@formLayouts/LabelsOnLeft.vue";
import SimpleStacked from "@formLayouts/SimpleStacked.vue";
import FullWidthCards from "@formLayouts/FullWidthCards.vue";
import FormWithSidebar from "@formLayouts/FormWithSidebar.vue";

export default {
  data() {
    return {
      componentsList: [
        {
          title: "Two-column cards with separate submit actions",
          componentName: TwoColumnForm,
          class: "bg-whitesmoke",
        },
        {
          title: "Labels on Left",
          componentName: LabelsOnLeft,
        },
        {
          title: "Simple Stacked Form",
          componentName: SimpleStacked,
        },
        {
          title: "Two-column in full-width cards",
          componentName: FullWidthCards,
          class: "bg-whitesmoke",
        },
        {
          title: "Two-column cards with sidebar",
          componentName: FormWithSidebar,
          class: "bg-whitesmoke",
        },
      ],
    };
  },
  components: {
    ComponentLayout,
    ComponentBox,
    TwoColumnForm,
    LabelsOnLeft,
    SimpleStacked,
    FullWidthCards,
    FormWithSidebar,
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
    border-bottom-left-radius: 0.375rem;
    border-bottom-right-radius: 0.375rem;
  }
}
/deep/ .bg-whitesmoke {
  background-color: $text-gray-50;
}
</style>
