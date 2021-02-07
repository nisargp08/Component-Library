<template>
  <div class="navbars">
    <div class="primary-header">Navbars</div>
    <section class="section">
      <!-- Simple dark with menu button on left  -->
      <component-box>
        <template v-slot:header>
          Simple dark with menu button on left
          <span class="badge badge-red ml-1">requires js</span>
        </template>
        <template v-slot:body>
          <simple-dark-left></simple-dark-left>
        </template>
      </component-box>
    </section>
  </div>
</template>

<script>
import ComponentBox from "@general/ComponentBox.vue";
// Navbars
import SimpleDarkLeft from "@navbars/SimpleDarkMenu_Left.vue";

export default {
  components: {
    ComponentBox,
    SimpleDarkLeft
  },
};
</script>

<style lang="scss">
.navbars{
  .component-box-body{
    padding: 0;
    min-height: 12rem;
    align-items: flex-start;
    background: $text-gray-700;
  }
}
</style>
