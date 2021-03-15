<template>
  <component-layout class="dropdowns">
    <template v-slot:page-header>
      <p>Dropdowns</p>
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
// Dropdown Components
import SimpleDropdown from "@dropdowns/Simple.vue";
import DividerDropdown from "@dropdowns/DividerDropdown.vue";
import IconsDropdown from "@dropdowns/IconsDropdown.vue";
import HeaderDropdown from "@dropdowns/HeaderDropdown.vue";

export default {
  name: "Avatars",
  data() {
    return {
      componentsList: [
        {
          title: "Simple Dropdown",
          componentName: SimpleDropdown,
          needJS: true,
          class: "height-sm",
        },
        {
          title: "Dropdown With Dividers",
          componentName: DividerDropdown,
          needJS: true,
          class: "height-lg",
        },
        {
          title: "Dropdown With Icons ",
          componentName: IconsDropdown,
          needJS: true,
          class: "height-lg",
        },
        {
          title: "Dropdown With Header",
          componentName: HeaderDropdown,
          needJS: true,
          class: "height-md",
        },
      ],
    };
  },
  components: {
    ComponentLayout,
    ComponentBox,
    SimpleDropdown,
    DividerDropdown,
    IconsDropdown,
    HeaderDropdown,
  },
};
</script>

<style lang="scss" scoped>
// Css for containers - not required for component function
/deep/ .component-box-body {
  background-color: $text-gray-100;
  align-items: flex-start;

  * {
    box-sizing: border-box;
  }

  > * {
    padding: 3rem 2rem;
  }
}

/deep/ .height-sm .component-box-body {
  min-height: 18rem;
}
/deep/ .height-md .component-box-body {
  min-height: 24rem;
}
/deep/ .height-lg .component-box-body {
  min-height: 26rem;
}
</style>
