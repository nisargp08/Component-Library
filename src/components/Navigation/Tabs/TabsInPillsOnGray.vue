<template>
  <!-- Tabs in pills on gray background -->
  <div>
    <tabs :tabs="tabs" :initialTab="initialTab">
      <template slot="tab-head-account">My Account</template>
      <template slot="tab-body-account">My Account tab content</template>

      <template slot="tab-head-company">Company</template>
      <template slot="tab-body-company">Company content</template>

      <template slot="tab-head-members">Team Members</template>
      <template slot="tab-body-members">Team Members content</template>

      <template slot="tab-head-billing">Billing</template>
      <template slot="tab-body-billing">Billing content</template>
    </tabs>
  </div>
</template>

<script>
import Tabs from "@general/Tabs.vue";

export default {
  data() {
    return {
      tabs: ["account", "company", "members", "billing"],
      initialTab: "members",
    };
  },
  components: {
    Tabs,
  },
};
</script>

<style lang="scss" scoped>
$tabs-bg: $text-gray-100;
$font-color: $text-gray-600;
$active-bg-color: $text-gray-200;
$active-font-color: $text-gray-900;

// /deep/ for applying css to child component as it is scoped
/deep/ .tabs {
  display: flex;
  width: 100%;
  flex-direction: column;

  .tab-heads {
    display: flex;
    background-color: $tabs-bg;
    border-radius: 0.375rem;
    flex-wrap: wrap;
    align-items: center;
    padding: 1rem 0.5rem;

    > * {
      padding: 0.5rem 1rem;
      margin: 0.25rem;
    }

    .tab-head {
      font-size: 0.875rem;
      line-height: 1.25rem;
      font-weight: 500;
      color: $font-color;
      border-radius: 0.375rem;
      transition: all 0.15s ease-in-out;

      &:hover {
        color: $active-font-color;
      }
    }

    .tab-active {
      background-color: $active-bg-color;
      color: $active-font-color;
    }
  }

  .tab-body {
    padding-top: 2rem;
    padding-bottom: 2rem;
  }
}
</style>
