<template>
<div class="tabs-container">
    <div class="primary-header">Tabs</div>
    <section class="section">
        <!-- Component list -->
        <component-box v-for="(component, index) in componentsList" :key="index" class="wrapper" :class="component.class">
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
    </section>
</div>
</template>

<script>
import ComponentBox from "@general/ComponentBox.vue";
// Tabs
import UnderlineTabs from "@tabs/UnderlineTabs.vue";
import UnderlineTabsWithIcon from "@tabs/UnderlineTabsWithIcon.vue";

export default {
    data() {
        return {
            componentsList: [
                {
                    title: "Tabs with underline",
                    componentName: "UnderlineTabs",
                    needJS : true,
                },
                {
                    title: "Tabs with underline and icons",
                    componentName: "UnderlineTabsWithIcon",
                    needJS : true,
                },
            ],
        };
    },
    components: {
        ComponentBox,
        UnderlineTabs,
        UnderlineTabsWithIcon,
    },
};
</script>

<style lang="scss" scoped>
/deep/ .wrapper .component-box-body > *{
    max-width: 100%;
}
</style>
