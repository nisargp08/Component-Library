<template>
  <div class="avatars">
    <h2 class="primary-header">Avatars</h2>
    <section class="section">
        <!-- Avatar group stacked bottom to top -->
      <component-box>
          <template v-slot:header>
              Avatar group stacked bottom to top
          </template>
          <template v-slot:body>
              <grouped-stacked></grouped-stacked>
          </template>
      </component-box>
      <!-- Circular Avatars -->
      <component-box>
          <template v-slot:header>
              Circular Avatars
          </template>
          <template v-slot:body>
              <circular-avatars></circular-avatars>
          </template>
      </component-box>
      <!-- Rounded Avatars -->
      <component-box>
          <template v-slot:header>
              rounded Avatars
          </template>
          <template v-slot:body>
              <rounded-avatars></rounded-avatars>
          </template>
      </component-box>
      <!-- Circular Avatars with Top notification-->
      <component-box>
          <template v-slot:header>
              Circular Avatars with top notification
          </template>
          <template v-slot:body>
              <circular-top-notification></circular-top-notification>
          </template>
      </component-box>
    </section>
  </div>
</template>

<script>
import ComponentBox from "@general/ComponentBox.vue";
// Avatar components
import GroupedStacked from "@avatars/GroupStacked.vue";
import CircularAvatars from "@avatars/CircularAvatars.vue";
import RoundedAvatars from "@avatars/RoundedAvatars.vue";
import CircularTopNotification from "@avatars/CircularTopNotification.vue";

export default {
  name: "Avatars",
  components: {
    ComponentBox,
    GroupedStacked,
    CircularAvatars,
    RoundedAvatars,
    CircularTopNotification,
  },
};
</script>

<style lang="scss" scoped>

</style>
