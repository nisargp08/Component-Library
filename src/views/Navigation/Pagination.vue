<template>
  <component-layout class="paginations">
    <template v-slot:page-header>
      <p>Pagination</p>
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
// Pagination
import CardFooter from "@pagination/CardFooter.vue";
import CenteredPageNumber from "@pagination/CenteredPageNumber.vue";
import SimpleCardFooter from "@pagination/SimpleCardFooter.vue";

export default {
  data() {
    return {
      componentsList: [
        {
          title: "Card footer with page footer",
          componentName: CardFooter,
        },
        {
          title: "Centered page numbers",
          componentName: CenteredPageNumber,
          class: "no_padding",
        },
        {
          title: "Simple Card Footer",
          componentName: SimpleCardFooter,
        },
      ],
    };
  },
  components: {
    ComponentLayout,
    ComponentBox,
    CardFooter,
    CenteredPageNumber,
    SimpleCardFooter,
  },
};
</script>

<style lang="scss" scoped>
/deep/ .component-box-body {
  background-color: whitesmoke;
  * {
    box-sizing: border-box;
  }
  > * {
    padding: 3rem 2rem;
  }
}

/deep/ .no_padding .component-box-body {
  padding-bottom: 0;
  padding-left: 0;
  padding-right: 0;
  min-height: 8rem;
  background-color: white;
}
</style>
