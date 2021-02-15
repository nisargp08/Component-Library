<template>
<component-layout class="avatars">
    <template v-slot:page-header>
        <p>Avatars</p>
    </template>
    <template v-slot:page-body>
        <!-- Component list -->
        <component-box v-for="(component, index) in componentsList" :key="index">
            <template v-slot:header>
                {{ component.title }}
                <span v-if="component.needJS" class="badge badge-red ml-1">requires js</span>
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
// Avatar components
import GroupedStacked from "@avatars/GroupStacked.vue";
import CircularAvatars from "@avatars/CircularAvatars.vue";
import RoundedAvatars from "@avatars/RoundedAvatars.vue";
import CircularTopNotification from "@avatars/CircularTopNotification.vue";
import RoundedTopNotification from "@avatars/RoundedTopNotification.vue";
import CircularBottomNotification from "@avatars/CircularBottomNotification.vue";
import RoundedBottomNotification from "@avatars/RoundedBottomNotification.vue";
import CircularAvatarsPlaceholder from "@avatars/CircularAvatarsPlaceholder.vue";
import CircularInitials from "@avatars/CircularInitials.vue";
import AvatarWithText from "@avatars/AvatarWithText.vue";

export default {
    name: "Avatars",
    data() {
        return {
            componentsList: [{
                    title: "Avatar Group Stacked Bottom To Top",
                    componentName: "GroupedStacked",
                },
                {
                    title: "Circular Avatars",
                    componentName: "CircularAvatars",
                },
                {
                    title: "Rounded Avatars",
                    componentName: "RoundedAvatars",
                },
                {
                    title: "Circular Avatars With Top Notification",
                    componentName: "CircularTopNotification",
                },
                {
                    title: "Rounded Avatars With Top Notification",
                    componentName: "RoundedTopNotification",
                },
                {
                    title: "Circular Avatars With Bottom Notification",
                    componentName: "CircularBottomNotification",
                },
                {
                    title: "Rounded Avatars With Bottom Notification",
                    componentName: "RoundedBottomNotification",
                },
                {
                    title: "Circular Avatars With Placeholder",
                    componentName: "CircularAvatarsPlaceholder",
                },
                {
                    title: "Circular Avatars With Initials",
                    componentName: "CircularInitials",
                },
                {
                    title: "Avatar With Text",
                    componentName: "AvatarWithText",
                },
            ],
        };
    },
    components: {
        ComponentLayout,
        ComponentBox,
        GroupedStacked,
        CircularAvatars,
        RoundedAvatars,
        CircularTopNotification,
        RoundedTopNotification,
        CircularBottomNotification,
        RoundedBottomNotification,
        CircularAvatarsPlaceholder,
        CircularInitials,
        AvatarWithText,
    },
};
</script>

<style lang="scss" scoped></style>
