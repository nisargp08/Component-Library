<template>
  <div class="tabs">
    <ul class="tab-heads">
      <li
        v-for="(tab, index) in tabs"
        @click="switchTab(tab)"
        :key="index"
        class="tab-head"
        :class="{ 'tab-active': activeTab == tab }"
      >
        <!-- Tab Heading in named slot -->
        <slot :name="tabHeadName(tab)">{{ tab }}</slot>
      </li>
    </ul>
    <div class="tab-body">
      <!-- For fade animation -->
      <transition-fade>
        <!-- Tab body/content in a named slot -->
        <slot :name="tabBodySlot"></slot>
      </transition-fade>
    </div>
  </div>
</template>

<script>
import TransitionFade from "@general/TransitionFade.vue";

export default {
  data() {
    return {
      activeTab: this.initialTab,
    };
  },
  components: {
    TransitionFade,
  },
  props: {
    tabs: {
      type: Array,
      required: true,
    },
    initialTab: {
      required: true,
    },
  },
  methods: {
    tabHeadName(name) {
      return `tab-head-${name}`;
    },
    switchTab(tab) {
      this.activeTab = tab;
    },
  },
  computed: {
    tabBodySlot() {
      return `tab-body-${this.activeTab}`;
    },
  },
};
</script>

<style lang="scss">
.tab-heads {
  list-style: none;
  cursor: pointer;
  margin: 0;
  padding: 0;
}
.tab-head {
  text-transform: lowercase;
  text-transform: capitalize;
}
</style>
