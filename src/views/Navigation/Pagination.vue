<template>
  <div class="paginations">
    <div class="primary-header">Pagination</div>
    <section class="section">
      <!-- Component list -->
      <component-box v-for="(component, index) in componentsList" :key="index" class="wrapper" :class="component.class">
        <template v-slot:header>
          {{ component.title }}
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
          componentName: "CardFooter",
        },
        {
          title: "Centered page numbers",
          componentName: "CenteredPageNumber",
          class : "no_padding",
        },
        {
          title: "Simple Card Footer",
          componentName: "SimpleCardFooter",
        },
      ],
    };
  },
  components: {
    ComponentBox,
    CardFooter,
    CenteredPageNumber,
    SimpleCardFooter,
  },
};
</script>

<style lang="scss">
.paginations .wrapper .component-box-body{
    background-color: whitesmoke;
}
.paginations .no_padding .component-box-body{
    padding-bottom: 0;
    padding-left: 0;
    padding-right: 0;
    min-height: 8rem;
    background-color: white;
}
</style>
