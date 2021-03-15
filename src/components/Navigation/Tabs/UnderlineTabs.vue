<template>
  <!-- Underlined tabs -->
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
      // tabs: ['My Account', 'Company', 'Team Members', 'Billing'],
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
$active-color: $theme-color;
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
    border-bottom: 1px solid $border-color;

    > * {
      margin: 0.5rem 1.25rem;
    }

    > :first-child {
      @media (min-width: 640px) {
        margin-left: 0;
      }
    }
    .tab-head {
      font-size: 1rem;
      line-height: 1.25rem;
      font-weight: 600;
      padding-bottom: 1rem;
      padding-top: 1rem;
      color: $font-color;
      margin-bottom: -1px;
      border-bottom: 2px solid transparent;
      transition: all 0.15s ease-in-out;

      &:hover {
        color: $active-color;
      }
    }

    .tab-active {
      color: $active-color;
      border-bottom-color: $active-color;
    }
  }
  .tab-body {
    padding-top: 2rem;
    padding-bottom: 2rem;
  }
}
</style>
