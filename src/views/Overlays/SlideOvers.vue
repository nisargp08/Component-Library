<template>
  <div class="slide-overs">
    <div class="primary-header">Slide Overs</div>
    <p>
      Using
      <a style="color : #e91d62" href="https://animate.style/" target="_blank"
        >animate.css</a
      >
      for animations
    </p>
    <section class="section">
        <!-- Simple Slide over -->
      <component-box>
        <template v-slot:header>
          Simple Slide Over
          <span class="badge badge-red ml-1">requires js</span>
        </template>
        <template v-slot:body>
          <simple-slide-over></simple-slide-over>
        </template>
      </component-box>
       <!-- Branded Header Slide over -->
      <component-box>
        <template v-slot:header>
          Branded Header Slide Over
          <span class="badge badge-red ml-1">requires js</span>
        </template>
        <template v-slot:body>
          <branded-header></branded-header>
        </template>
      </component-box>
      <!-- Sticky Footer slide over -->
      <component-box>
        <template v-slot:header>
          Sticky Footer slide over
          <span class="badge badge-red ml-1">requires js</span>
        </template>
        <template v-slot:body>
          <sticky-footer></sticky-footer>
        </template>
      </component-box>
    </section>
  </div>
</template>

<script>
import ComponentBox from "@general/ComponentBox";
// Slide overs
import SimpleSlideOver from "@slideOvers/SimpleSlideOver.vue";
import BrandedHeader from "@slideOvers/BrandedHeader.vue";
import StickyFooter from "@slideOvers/StickyFooter.vue";

export default {
  components: {
    ComponentBox,
    SimpleSlideOver,
    BrandedHeader,
    StickyFooter,
  },
};
</script>

<style lang="scss"></style>
