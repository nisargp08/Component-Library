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
      <!-- Rounded Avatars with Top notification-->
      <component-box>
          <template v-slot:header>
              rounded Avatars with top notification
          </template>
          <template v-slot:body>
              <rounded-top-notification></rounded-top-notification>
          </template>
      </component-box>
      <!-- Circular Avatars with bottom notification-->
      <component-box>
          <template v-slot:header>
              Circular Avatars with bottom notification
          </template>
          <template v-slot:body>
              <circular-bottom-notification></circular-bottom-notification>
          </template>
      </component-box>
      <!-- Rounded Avatars with Bottom notification-->
      <component-box>
          <template v-slot:header>
              rounded Avatars with bottom notification
          </template>
          <template v-slot:body>
              <rounded-bottom-notification></rounded-bottom-notification>
          </template>
      </component-box>
      <!-- Circular Avatars with placeholder-->
      <component-box>
          <template v-slot:header>
              Circular Avatars with placeholder
          </template>
          <template v-slot:body>
              <circular-avatars-placeholder></circular-avatars-placeholder>
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
import RoundedTopNotification from "@avatars/RoundedTopNotification.vue";
import CircularBottomNotification from "@avatars/CircularBottomNotification.vue";
import RoundedBottomNotification from "@avatars/RoundedBottomNotification.vue";
import CircularAvatarsPlaceholder from "@avatars/CircularAvatarsPlaceholder.vue";

export default {
  name: "Avatars",
  components: {
    ComponentBox,
    GroupedStacked,
    CircularAvatars,
    RoundedAvatars,
    CircularTopNotification,
    RoundedTopNotification,
    CircularBottomNotification,
    RoundedBottomNotification,
    CircularAvatarsPlaceholder
  },
};
</script>

<style lang="scss" scoped>

</style>
