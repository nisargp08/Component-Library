<template>
  <div class="badges">
    <div class="primary-header">Badges</div>
    <section class="section">
        <!-- Basic Badges -->
      <component-box class="wrapper">
        <template v-slot:header>
          Basic Badges
        </template>
        <template v-slot:body>
          <basic-badges></basic-badges>
        </template>
      </component-box>
      <!-- Large Badges -->
      <component-box class="wrapper">
        <template v-slot:header>
          Large Badges
        </template>
        <template v-slot:body>
          <large-badges></large-badges>
        </template>
      </component-box>
      <!-- Dot Badges -->
      <component-box class="wrapper">
        <template v-slot:header>
          Dot Badges
        </template>
        <template v-slot:body>
          <dot-badges></dot-badges>
        </template>
      </component-box>
      <!-- rounded Badges -->
      <component-box class="wrapper">
        <template v-slot:header>
          rounded Badges
        </template>
        <template v-slot:body>
          <rounded-badges></rounded-badges>
        </template>
      </component-box>
      <!-- Large Rounded Badges -->
      <component-box class="wrapper">
        <template v-slot:header>
          large rounded Badges
        </template>
        <template v-slot:body>
          <large-rounded-badges></large-rounded-badges>
        </template>
      </component-box>
      <!-- Rounded Dot Badges -->
      <component-box class="wrapper">
        <template v-slot:header>
          Rounded Dot badges
        </template>
        <template v-slot:body>
          <rounded-dot-badges></rounded-dot-badges>
        </template>
      </component-box>
      <!-- Badge with remove button -->
      <component-box class="wrapper">
        <template v-slot:header>
          Badge with remove button
        </template>
        <template v-slot:body>
          <badge-with-remove></badge-with-remove>
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
    .component-box-body > *{
      max-width: 100%;
      justify-content: center;
    }
  }
}
</style>
