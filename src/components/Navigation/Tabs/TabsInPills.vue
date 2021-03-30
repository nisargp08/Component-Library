<template>
  <!-- Tabs in pills -->
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
$font-color: $text-gray-500;
$active-bg-color: $text-gray-200;
$active-font-color: $text-gray-900;
$border-color: $text-gray-200;

// /deep/ for applying css to child component as it is scoped
/deep/ .tabs {
  display: flex;
  width: 100%;
  flex-direction: column;

  .tab-heads {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    padding-top: 1rem;
    padding-bottom: 1rem;
    border-bottom: 1px solid $border-color;

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
