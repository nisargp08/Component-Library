<template>
  <component-layout class="grid-lists-container">
    <template v-slot:page-header>
      <p>Grid Lists</p>
    </template>
    <template v-slot:page-description>
      <div class="warning-alert">
        <p>
          <b>Please note : </b> These components will not render properly in
          browsers not supporting grid.
        </p>
      </div>
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
// Grid List
import SmallContactCards from "@gridLists/SmallContactCards.vue";
import ContactCards from "@gridLists/ContactCards.vue";
import ImageGrid from "@gridLists/ImageGrid.vue";

export default {
  data() {
    return {
      componentsList: [
        {
          title: "Contact Card grid with small portraits",
          componentName: SmallContactCards,
        },
        {
          title: "Contact Cards",
          componentName: ContactCards,
        },
        {
          title: "Image Grid with details",
          componentName: ImageGrid,
          class: "no-padding",
        },
      ],
    };
  },
  components: {
    ComponentLayout,
    ComponentBox,
    SmallContactCards,
    ContactCards,
    ImageGrid,
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
/deep/ .no-padding .component-box-body {
  background-color: white;
  > * {
    padding: 0;
  }
}
</style>
