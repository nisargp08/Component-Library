<template>
  <component-layout class="notification">
    <template v-slot:page-header>
      <p>Notifications</p>
    </template>
    <template v-slot:page-description>
      <p>
        Using
        <a style="color : #e91d62" href="https://animate.style/" target="_blank"
          >animate.css</a
        >
        for animations
      </p>
      <div class="message-alert">
        <p>
          Change to <code>{ position : fixed; }</code> when using in your
          project
        </p>
      </div>
    </template>
    <template v-slot:page-body>
      <!-- Component list -->
      <component-box
        class="height-sm"
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
    </template>
  </component-layout>
</template>

<script>
import ComponentLayout from "@v-includes/ComponentLayout.vue";
import ComponentBox from "@general/ComponentBox.vue";
// Notifications
import SimpleNotification from "@notifications/SimpleNotification.vue";
import CondensedNotification from "@notifications/CondensedNotification.vue";
import ActionNotification from "@notifications/ActionNotification.vue";
import AvatarNotification from "@notifications/AvatarNotification.vue";
import SplitAction from "@notifications/SplitAction.vue";
import OperationNotification from "@notifications/OperationNotification.vue";

export default {
  data() {
    return {
      componentsList: [
        {
          title: "Simple Notification",
          componentName: "SimpleNotification",
          needJS: true,
        },
        {
          title: "Condensed notification",
          componentName: "CondensedNotification",
          needJS: true,
        },
        {
          title: "action notification",
          componentName: "ActionNotification",
          needJS: true,
        },
        {
          title: "avatar notification",
          componentName: "AvatarNotification",
          needJS: true,
        },
        {
          title: "split notification",
          componentName: "SplitAction",
          needJS: true,
        },
        {
          title: " button notification",
          componentName: "OperationNotification",
          needJS: true,
        },
      ],
    };
  },
  components: {
    ComponentLayout,
    ComponentBox,
    SimpleNotification,
    CondensedNotification,
    ActionNotification,
    AvatarNotification,
    SplitAction,
    OperationNotification,
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
