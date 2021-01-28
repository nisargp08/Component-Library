<template>
  <div class="buttons">
    <div class="primary-header">Buttons</div>
    <section class="section">
      <!-- Primary Buttons -->
      <component-box class="wrapper">
        <template v-slot:header>Primary Buttons</template>
        <template v-slot:body>
          <primary-buttons></primary-buttons>
        </template>
      </component-box>
       <!-- Secondary Buttons -->
      <component-box class="wrapper">
        <template v-slot:header>Secondary Buttons</template>
        <template v-slot:body>
          <secondary-buttons></secondary-buttons>
        </template>
      </component-box>
      <!-- White Buttons -->
      <component-box class="wrapper">
        <template v-slot:header>white Buttons</template>
        <template v-slot:body>
          <white-buttons></white-buttons>
        </template>
      </component-box>
      <!-- Rounded Buttons -->
      <component-box class="wrapper">
        <template v-slot:header>Rounded Buttons</template>
        <template v-slot:body>
          <rounded-buttons></rounded-buttons>
        </template>
      </component-box>
      <!-- Circular Buttons -->
      <component-box class="wrapper">
        <template v-slot:header>circular Buttons</template>
        <template v-slot:body>
          <circular-buttons></circular-buttons>
        </template>
      </component-box>
    </section>
  </div>
</template>

<script>
import ComponentBox from "@general/ComponentBox.vue";
import PrimaryButtons from "@buttons/PrimaryButtons.vue";
import SecondaryButtons from "@buttons/SecondaryButtons.vue";
import WhiteButtons from "@buttons/WhiteButtons.vue";
import RoundedButtons from "@buttons/RoundedButtons.vue";
import CircularButtons from "@buttons/CircularButtons.vue";

export default {
  components: {
    ComponentBox,
    PrimaryButtons,
    SecondaryButtons,
    WhiteButtons,
    RoundedButtons,
    CircularButtons,
  },
};
</script>

<style lang="scss">
// Container css
.buttons {
  .wrapper {
    .component-box-body > * {
      max-width: 100%;
      justify-content: center;
    }
  }
}
</style>
