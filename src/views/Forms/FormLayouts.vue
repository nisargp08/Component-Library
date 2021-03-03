<template>
<component-layout class="form-layouts-container">
    <template v-slot:page-header>
        <p>Form Layouts</p>
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
import TwoColumnForm from "@formLayouts/TwoColumnForm.vue"
import LabelsOnLeft from "@formLayouts/LabelsOnLeft.vue"

export default {
    data() {
        return {
            componentsList: [{
                    title: "Two-column cards with separate submit actions",
                    componentName: "TwoColumnForm",
                    class : "bg-whitesmoke",
                },
                {
                    title: "Labels on Left",
                    componentName: "LabelsOnLeft",
                },
            ],
        }
    },
    components: {
        ComponentLayout,
        ComponentBox,
        TwoColumnForm,
        LabelsOnLeft,
    }
}
</script>

<style lang="scss" scoped>
/deep/ .component-box-body {
    padding: 0;

    >* {
        max-width: 100%;
        justify-content: flex-start;
        border-bottom-left-radius: 0.375rem;
        border-bottom-right-radius: 0.375rem;
    }
}
/deep/ .bg-whitesmoke{
        background-color: $text-gray-50;
}
</style>
