<template>
<div class="notification">
    <div class="primary-header">Notifications</div>
    <p>
        Using <a style="color : #e91d62" href="https://animate.style/" target="_blank">animate.css</a> for animations
    </p>
    <section class="section">
        <!-- Simple notification -->
        <component-box class="height-sm">
            <template v-slot:header>
                Simple Notification
            </template>
            <template v-slot:body>
                <simple-notification></simple-notification>
            </template>
        </component-box>
        <!-- Condensed notification -->
        <component-box class="height-sm">
            <template v-slot:header>
                Condensed Notification
            </template>
            <template v-slot:body>
                <condensed-notification></condensed-notification>
            </template>
        </component-box>
        <!-- action notification -->
        <component-box class="height-sm">
            <template v-slot:header>
                action Notification
            </template>
            <template v-slot:body>
                <action-notification></action-notification>
            </template>
        </component-box>
    </section>
</div>
</template>

<script>
import ComponentBox from "@general/ComponentBox.vue";
// Notifications
import SimpleNotification from "@notifications/SimpleNotification.vue";
import CondensedNotification from "@notifications/CondensedNotification.vue";
import ActionNotification from "@notifications/ActionNotification.vue";

export default {
    components: {
        ComponentBox,
        SimpleNotification,
        CondensedNotification,
        ActionNotification
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
