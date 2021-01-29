<template>
  <div>
    <div class="primary-header">Modals</div>
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
    </section>
  </div>
</template>

<script>
import ComponentBox from "@general/ComponentBox.vue";
//Modals
import SimpleModal from "@modals/SimpleModal.vue";

export default {
  components: {
    ComponentBox,
    SimpleModal,
  },
};
</script>

<style></style>
