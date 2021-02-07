<template>
  <div class="badges">
    <div class="primary-header">Badges</div>
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
import BasicBadges from "@badges/BasicBadges.vue";
import LargeBadges from "@badges/LargeBadges.vue";
import DotBadges from "@badges/DotBadges.vue";
import RoundedBadges from "@badges/RoundedBadges.vue";
import LargeRoundedBadges from "@badges/LargeRoundedBadges.vue";
import RoundedDotBadges from "@badges/RoundedDotBadges.vue";
import BadgeWithRemove from "@badges/BadgeWithRemove.vue";

export default {
  data() {
    return {
      componentsList: [
        {
          title: "Basic Badges",
          componentName: "BasicBadges",
        },
        {
          title: "Large Badges",
          componentName: "LargeBadges",
        },
        {
          title: "Dot Badges",
          componentName: "DotBadges",
        },
        {
          title: "Rounded Badges",
          componentName: "RoundedBadges",
        },
        {
          title: "Large Rounded Badges",
          componentName: "LargeRoundedBadges",
        },
        {
          title: "Rounded Dot Badges",
          componentName: "RoundedDotBadges",
        },
        {
          title: "Badge With Remove",
          componentName: "BadgeWithRemove",
        },
      ],
    };
  },
  components: {
    ComponentBox,
    BasicBadges,
    LargeBadges,
    DotBadges,
    RoundedBadges,
    LargeRoundedBadges,
    RoundedDotBadges,
    BadgeWithRemove,
  },
};
</script>

<style lang="scss">
// Container css
.badges {
  .wrapper {
    .component-box-body > * {
      max-width: 100%;
      justify-content: center;
    }
  }
}
</style>
