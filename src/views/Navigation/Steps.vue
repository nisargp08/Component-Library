<template>
<component-layout class="steps-container">
    <template v-slot:page-header>
        <p>Steps</p>
    </template>
    <template v-slot:page-body>
        <!-- Component list -->
        <component-box v-for="(component, index) in componentsList" :key="index" class="wrapper" :class="component.class">
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
// Steps
import SimpleSteps from "@steps/SimpleSteps.vue";

export default {
    data() {
        return {
            componentsList: [{
                title: "Simple",
                componentName: "SimpleSteps",
            }, ],
        }
    },
    components: {
        ComponentLayout,
        ComponentBox,
        SimpleSteps,
    }
}
</script>

<style lang="scss" scoped>
/deep/ .wrapper {
    .component-box-body {
        padding: 0;
    }

    .component-box-body>* {
        max-width: 100%;
        justify-content: flex-start;
    }
}
</style>
