<template>
<component-layout class="toggles-container">
    <template v-slot:page-header>
        <p>Toggles</p>
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
// Toggles
import SimpleToggle from "@toggles/SimpleToggle.vue";
import ShortToggle from "@toggles/ShortToggle.vue";

export default {
    data() {
        return {
            componentsList: [{
                title: "Simple Toggle",
                componentName: "SimpleToggle",
            },
            {
                title: "Short Toggle",
                componentName: "ShortToggle",
            },
            ],
        };
    },
    components: {
        ComponentLayout,
        ComponentBox,
        SimpleToggle,
        ShortToggle,
    },
};
</script>

<style lang="scss" scoped>
/deep/ .component-box-body {
    // padding: 0;

    // >* {
    //     max-width: 100%;
    //     width: 100%;
    //     align-items: flex-start;
    // }

    * {
        box-sizing: border-box;
    }
}
</style>
