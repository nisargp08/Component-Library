<template>
<div>
    <div class="primary-header">Modals</div>
    <p>
        Using <a style="color : #e91d62" href="https://animate.style/" target="_blank">animate.css</a> for animations
    </p>
    <section class="section">
        <!-- Simple Modal -->
        <component-box>
            <template v-slot:header>
                Simple Modal
                <span class="badge badge-red ml-1">requires js</span>
            </template>
            <template v-slot:body>
                <simple-modal></simple-modal>
            </template>
        </component-box>
        <!-- Centered Modal with single action-->
        <component-box>
            <template v-slot:header>
                Centered with single action
                <span class="badge badge-red ml-1">requires js</span>
            </template>
            <template v-slot:body>
                <single-action-modal></single-action-modal>
            </template>
        </component-box>
    </section>
</div>
</template>

<script>
import ComponentBox from "@general/ComponentBox.vue";
//Modals
import SimpleModal from "@modals/SimpleModal.vue";
import SingleActionModal from "@modals/SingleActionModal.vue";

export default {
    components: {
        ComponentBox,
        SimpleModal,
        SingleActionModal,
    },
};
</script>

<style></style>
