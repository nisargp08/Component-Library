<template>
  <div class="notification">
    <div class="primary-header">Notifications</div>
    <section class="section">
      <component-box class="height-sm">
        <template v-slot:header>
          Simple Notification
        </template>
        <template v-slot:body>
          <simple-notification></simple-notification>
        </template>
      </component-box>
    </section>
  </div>
</template>

<script>
import ComponentBox from "@general/ComponentBox.vue";
// Notifications
import SimpleNotification from "@notifications/SimpleNotification.vue";

export default {
  components: {
    ComponentBox,
    SimpleNotification,
  },
};
</script>

<style lang="scss">
.notification {
  .component-box-body {
    background-color: $text-gray-100;
  }
  .height-sm .component-box-body {
    min-height: 12rem;
  }
}
</style>
