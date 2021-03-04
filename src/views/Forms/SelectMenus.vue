<template>
<component-layout class="form-layouts-container">
    <template v-slot:page-header>
        <p>Select Menus</p>
    </template>
    <template v-slot:page-body>
        <!-- Component list -->
        <component-box v-for="(component, index) in componentsList" :key="index" :class="component.class">
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
// Alerts
import AvatarMenu from "@selectMenus/AvatarMenu.vue"

export default {
    data() {
        return {
            componentsList: [{
                title: "Custom Menu with Avatar",
                componentName: "AvatarMenu",
                needJS : true,
            }, ],
        }
    },
    components: {
        ComponentLayout,
        ComponentBox,
        AvatarMenu
    }
}
</script>

<style lang="scss" scoped>
/deep/ .component-box-body {
    background: whitesmoke;

    >* {
        max-width: 20rem;
        width: 100%;
        min-height: 20rem;
        align-items: flex-start;
    }

    * {
        box-sizing: border-box;
    }
}
</style>
