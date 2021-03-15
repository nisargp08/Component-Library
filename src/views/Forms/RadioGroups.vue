<template>
  <component-layout class="radio-groups-container">
    <template v-slot:page-header>
      <p>Radio Groups</p>
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
// Radio Groups
import RadioList from "@radioGroups/RadioList.vue";
import RadioTable from "@radioGroups/RadioTable.vue";
import StackedCard from "@radioGroups/StackedCard.vue";

export default {
  name: "RadioGroup",
  data() {
    return {
      componentsList: [
        {
          title: "Radio List with description",
          componentName: RadioList,
          needJS: true,
        },
        {
          title: "Radio List in a table",
          componentName: RadioTable,
          needJS: true,
        },
        {
          title: "Radio List in a Stacked Card",
          componentName: StackedCard,
          needJS: true,
        },
      ],
    };
  },
  components: {
    ComponentLayout,
    ComponentBox,
    RadioList,
    RadioTable,
    StackedCard,
  },
};
</script>

<style lang="scss" scoped>
/deep/ .component-box-body {
  * {
    box-sizing: border-box;
  }
  > * {
    padding: 2rem;

    @media (min-width: 640px) {
      padding: 3rem 2rem;
    }
  }
}
</style>
