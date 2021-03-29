<template>
  <component-layout class="tables-container">
    <template v-slot:page-header>
      <p>Tables</p>
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
// Toggles
import TableWithAvatars from "@tables/TableWithAvatars.vue";
import SimpleTable from "@tables/SimpleTable.vue";
import SimpleStriped from "@tables/SimpleStriped.vue";

export default {
  data() {
    return {
      componentsList: [
        {
          title: "Table with avatars and multi-line content",
          componentName: TableWithAvatars,
          needJS : true,
        },
        {
          title: "Simple Table",
          componentName: SimpleTable,
          needJS : true,
        },
        {
          title: "Simple Striped Table",
          componentName: SimpleStriped,
          needJS : true,
        },
      ],
    };
  },
  components: {
    ComponentLayout,
    ComponentBox,
    TableWithAvatars,
    SimpleTable,
    SimpleStriped
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
    padding: 1rem;
    @media (min-width: 640px) {
      padding: 3rem 1rem;
    }
  }
}
</style>
