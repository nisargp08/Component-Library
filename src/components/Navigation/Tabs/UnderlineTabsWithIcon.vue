<template>
  <!-- Underlined tabs with icon -->
  <div>
    <tabs :tabs="tabs" :initialTab="initialTab">
      <template slot="tab-head-account">
        <svg
          class="w-5 h-5"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            fill-rule="evenodd"
            d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-6-3a2 2 0 11-4 0 2 2 0 014 0zm-2 4a5 5 0 00-4.546 2.916A5.986 5.986 0 0010 16a5.986 5.986 0 004.546-2.084A5 5 0 0010 11z"
            clip-rule="evenodd"
          />
        </svg>
        <span class="ml-2">My Account</span>
      </template>
      <template slot="tab-body-account">My Account tab content</template>

      <template slot="tab-head-company">
        <svg
          class="w-5 h-5"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            fill-rule="evenodd"
            d="M4 4a2 2 0 012-2h8a2 2 0 012 2v12a1 1 0 110 2h-3a1 1 0 01-1-1v-2a1 1 0 00-1-1H9a1 1 0 00-1 1v2a1 1 0 01-1 1H4a1 1 0 110-2V4zm3 1h2v2H7V5zm2 4H7v2h2V9zm2-4h2v2h-2V5zm2 4h-2v2h2V9z"
            clip-rule="evenodd"
          />
        </svg>
        <span class="ml-2">Company</span>
      </template>
      <template slot="tab-body-company">Company content</template>

      <template slot="tab-head-members">
        <svg
          class="w-5 h-5"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3zM6 8a2 2 0 11-4 0 2 2 0 014 0zM16 18v-3a5.972 5.972 0 00-.75-2.906A3.005 3.005 0 0119 15v3h-3zM4.75 12.094A5.973 5.973 0 004 15v3H1v-3a3 3 0 013.75-2.906z"
          />
        </svg>
        <span class="ml-2">Team Members</span>
      </template>
      <template slot="tab-body-members">Team Members content</template>

      <template slot="tab-head-billing">
        <svg
          class="w-5 h-5"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path d="M4 4a2 2 0 00-2 2v1h16V6a2 2 0 00-2-2H4z" />
          <path
            fill-rule="evenodd"
            d="M18 9H2v5a2 2 0 002 2h12a2 2 0 002-2V9zM4 13a1 1 0 011-1h1a1 1 0 110 2H5a1 1 0 01-1-1zm5-1a1 1 0 100 2h1a1 1 0 100-2H9z"
            clip-rule="evenodd"
          />
        </svg>
        <span class="ml-2">Billing</span></template
      >
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
.w-5 {
  width: 1.25rem;
}

.h-5 {
  height: 1.25rem;
}

.ml-2 {
  margin-left: 0.5rem;
}

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
      margin: 0.5rem 1.5rem;
    }

    > :first-child {
      @media (min-width: 640px) {
        margin-left: 0;
      }
    }

    .tab-head {
      display: flex;
      align-items: center;
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
