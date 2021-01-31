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
      <component-box>
        <template v-slot:header>
          Simple Slide Over
          <span class="badge badge-red ml-1">requires js</span>
        </template>
        <template v-slot:body>
          <simple-slide-over></simple-slide-over>
        </template>
      </component-box>
    </section>
  </div>
</template>

<script>
import ComponentBox from "@general/ComponentBox";
// Slide overs
import SimpleSlideOver from "@slideOvers/SimpleSlideOver.vue";
export default {
  components: {
    ComponentBox,
    SimpleSlideOver,
  },
};
</script>

<style lang="scss"></style>
