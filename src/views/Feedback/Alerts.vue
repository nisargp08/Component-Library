<template>
<component-layout class="alerts-container">
    <template v-slot:page-header>
        <p>Alerts</p>
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
import DescriptionAlert from "@alerts/DescriptionAlert.vue";
import ListAlert from "@alerts/ListAlert.vue";
import ActionAlert from "@alerts/ActionAlert.vue";
import LinkOnRight from "@alerts/LinkOnRight.vue";
import AccentBorder from "@alerts/AccentBorder.vue";
import DismissAlert from "@alerts/DismissAlert.vue";

export default {
    data() {
        return {
            componentsList: [{
                title: "Alert with Description",
                componentName: "DescriptionAlert",
                class : "wrapper",
            }, 
            {
                title: "Alert with List",
                componentName: "ListAlert",
                class : "wrapper",
            },
            {
                title: "Alert with Action",
                componentName: "ActionAlert",
                class : "wrapper",
            }, 
            {
                title: "Alert with Link on Right",
                componentName: "LinkOnRight",
                class : "wrapper",
            },
            {
                title: "Alert with Accent Border",
                componentName: "AccentBorder",
                class : "wrapper",
            },
            {
                title: "Alert with Dismiss",
                componentName: "DismissAlert",
                class : "wrapper",
            },
        ],
        }
    },
    components : {
        ComponentLayout,
        ComponentBox,
        DescriptionAlert,
        ListAlert,
        ActionAlert,
        LinkOnRight,
        AccentBorder,
        DismissAlert,
    }
}
</script>

<style lang="scss" scoped>
.alerts-container *{
    box-sizing: border-box;
}
/deep/ .wrapper{
    .component-box-body > *{
        max-width: 100%;
    }
}
</style>
