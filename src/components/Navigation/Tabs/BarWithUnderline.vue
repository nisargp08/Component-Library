<template>
  <!-- Tabs bar with underline -->
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
$tabs-bg: white;
$border-color: $text-gray-200;
$box-shadow : $shadow;
// /deep/ for applying css to child component as it is scoped
/deep/ .tabs {
  display: flex;
  width: 100%;
  flex-direction: column;

  .tab-heads {
    display: flex;
    flex-wrap: wrap;
    background-color: $tabs-bg;
    box-shadow: $box-shadow;
    border-radius: 0.375rem;
    align-items: center;
    margin: 0 auto;

    > * {
      padding: 0.75rem 3rem;
      padding-left: 1rem;
      width: 100%;
      @media (min-width: 640px) {
        width: auto;
        padding-left: 3rem;
      }
    }

    > :not(:first-child) {
      border-top: 1px solid $border-color;
      @media (min-width: 640px) {
        border-left: 1px solid $border-color;
        border-top: none;
      }
    }

    > :first-child {
      margin-left: 0.25rem;
    }

    > :last-child {
      margin-right: 0.25rem;
    }
    .tab-head {
      font-size: 0.875rem;
      line-height: 1.25rem;
      font-weight: 500;
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
    margin-top: 2rem;
    margin-bottom: 2rem;
    padding: 1rem;
    border-radius: 0.375rem;
    background-color: white;
  }
}
</style>
