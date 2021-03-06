<template>
  <div class="home">
    <h2 class="primary-header">Application UI</h2>

    <section class="section">
      <div
        v-for="(item, index) in getUniqueSubtype"
        :key="index"
        class="component-section"
      >
        <div>
          <h3 class="component-section-header">{{ item.subtype }}</h3>
        </div>
        <div class="component-group">
          <component-group-item
            v-for="(component, index) in componentListBySubtype(item.subtype)"
            :key="index"
            :linkedTo="component.linkedTo"
            :image="component.image"
            :title="component.title"
            :total="component.total"
          ></component-group-item>
        </div>
      </div>
    </section>

    <site-footer></site-footer>
  </div>
</template>

<script>
import ComponentGroupItem from "@general/ComponentGroupItem.vue";
import SiteFooter from "@general/Footer.vue";

export default {
  name: "Home",
  components: {
    ComponentGroupItem,
    SiteFooter,
  },
  mounted() {
    //Function to calculate total number of components on the website
    function countTotalComponents(obj) {
      let result = 0;
      obj.forEach((component) => {
        result += component.total;
      });
      console.log(`Website currently has ${result} components`);
    }
    countTotalComponents(this.componentList);
  },
  data() {
    return {
      componentList: [
        // Elements
        {
          subtype: "Elements",
          linkedTo: "Avatars",
          image: "elements-avatars.svg",
          title: "Avatars",
          total: 10,
        },
        {
          subtype: "Elements",
          title: "Dropdowns",
          image: "elements-dropdowns.svg",
          total: 4,
          linkedTo: "Dropdowns",
        },
        {
          subtype: "Elements",
          title: "Badges",
          image: "elements-badges.svg",
          total: 7,
          linkedTo: "Badges",
        },
        {
          subtype: "Elements",
          title: "Buttons",
          image: "elements-buttons.svg",
          total: 5,
          linkedTo: "Buttons",
        },
        // Overlays
        {
          subtype: "Overlays",
          title: "Modals",
          image: "overlays-modals.svg",
          total: 2,
          linkedTo: "Modals",
        },
        {
          subtype: "Overlays",
          title: "Notifications",
          image: "overlays-notifications.svg",
          total: 6,
          linkedTo: "Notifications",
        },
        {
          subtype: "Overlays",
          title: "Slide Overs",
          image: "overlays-slide-overs.svg",
          total: 8,
          linkedTo: "SlideOvers",
        },
        // Navigation
        {
          subtype: "Navigation",
          title: "Navbars",
          image: "navigation-navbars.svg",
          total: 6,
          linkedTo: "Navbars",
        },
        {
          subtype: "Navigation",
          title: "Pagination",
          image: "navigation-pagination.svg",
          total: 3,
          linkedTo: "Pagination",
        },
        {
          subtype: "Navigation",
          title: "Tabs",
          image: "navigation-tabs.svg",
          total: 6,
          linkedTo: "Tabs",
        },
        {
          subtype: "Navigation",
          title: "Vertical Navigation",
          image: "navigation-vertical-navigation.svg",
          total: 5,
          linkedTo: "VerticalNavigation",
        },
        {
          subtype: "Navigation",
          title: "Sidebar Navigation",
          image: "navigation-sidebar-navigation.svg",
          total: 7,
          linkedTo: "SidebarNavigation",
        },
        {
          subtype: "Navigation",
          title: "Breadcrumbs",
          image: "navigation-breadcrumbs.svg",
          total: 4,
          linkedTo: "Breadcrumbs",
        },
        {
          subtype: "Navigation",
          title: "Steps",
          image: "navigation-steps.svg",
          total: 7,
          linkedTo: "Steps",
        },
        // Feedback
        {
          subtype: "Feedback",
          title: "Alerts",
          image: "feedback-alerts.svg",
          total: 6,
          linkedTo: "Alerts",
        },
        // Forms
        {
          subtype: "Forms",
          title: "Form Layouts",
          image: "forms-form-layouts.svg",
          total: 5,
          linkedTo: "FormLayouts",
        },
        {
          subtype: "Forms",
          title: "Select Menus",
          image: "forms-select-menus.svg",
          total: 5,
          linkedTo: "SelectMenus",
        },
        {
          subtype: "Forms",
          title: "Sign-in and registration",
          image: "forms-sign-in-forms.svg",
          total: 3,
          linkedTo: "SignInForms",
        },
        {
          subtype: "Forms",
          title: "Radio Groups",
          image: "forms-radio-groups.svg",
          total: 3,
          linkedTo: "RadioGroups",
        },
        {
          subtype: "Forms",
          title: "Toggles",
          image: "forms-toggles.svg",
          total: 5,
          linkedTo: "Toggles",
        },
        {
          subtype: "Forms",
          title: "Action Panels",
          image: "forms-action-panels.svg",
          total: 6,
          linkedTo: "ActionPanels",
        },
        // Lists
        {
          subtype: "Lists",
          title: "Tables",
          image: "lists-tables.svg",
          total: 3,
          linkedTo: "Tables",
        },
        {
          subtype: "Lists",
          title: "Stacked Lists",
          image: "lists-stacked-lists.svg",
          total: 6,
          linkedTo: "StackedLists",
        },
        {
          subtype: "Lists",
          title: "Grid Lists",
          image: "lists-grid-lists.svg",
          total: 6,
          linkedTo: "GridLists",
        },
      ],
    };
  },
  computed: {
    // To return unique subtype from componentlist
    getUniqueSubtype() {
      let unique = [];
      this.componentList.forEach((item) => {
        var result = unique.findIndex((x) => x.subtype == item.subtype);
        if (result <= -1) {
          unique.push({ subtype: item.subtype });
        }
      });
      // Sort object
      return unique.sort(function(a, b) {
        if (a.subtype < b.subtype) {
          return -1;
        }
        if (a.subtype > b.subtype) {
          return 1;
        }
        return 0;
      });
    },
  },
  methods: {
    // To return components by subtypes
    componentListBySubtype(type) {
      let result = this.componentList.filter((item) => item.subtype == type);
      return result;
    },
  },
};
</script>

<style lang="scss">
/* Global - Common Classes */
.primary-header {
  font-size: 1.5rem;
  line-height: 2rem;
  font-weight: 500;
  font-family: $secondaryFont;
  letter-spacing: -0.05em;
}

.section {
  display: grid;
  grid-template-columns: repeat(1, minmax(0, 1fr));
  row-gap: 4rem;
  margin-top: 1.5rem;
}

.component-section {
  display: grid;
  grid-template-columns: repeat(1, minmax(0, 1fr));
  row-gap: 1.5rem;
  padding-top: 2rem;
  border-top: 1px solid $text-gray-200;
}

.component-section-header {
  letter-spacing: -0.025em;
  font-weight: 500;
  font-size: 1.125rem;
  line-height: 1.75rem;
  margin: 0;
  // font-family: $primaryFont;
}

/* Component Group */
.component-group {
  display: grid;
  grid-template-columns: repeat(1, minmax(0, 1fr));
  row-gap: 2rem;
  column-gap: 1.25rem;
}

.component-item-wrapper {
  figure,
  figcaption {
    &:hover {
      opacity: 0.7;
    }
  }
}

.component-item {
  position: relative;
  border-radius: 0.25rem;
}

.component-item .abs-image {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 3px;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  border-radius: 0.375rem;
  border: 1px solid $text-gray-900;
  opacity: 0.15;
}

// Figures text
.figcaption {
  font-size: 0.875rem;
  line-height: 1.25rem;
  font-weight: 500;
}

.figcaption-description {
  font-size: 0.875rem;
  line-height: 1.25rem;
  color: $text-gray-500;
}

/* Media Queries */
@media (min-width: 640px) {
  .component-group {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
}

@media (min-width: 768px) {
  .component-group {
    grid-template-columns: repeat(3, minmax(0, 1fr));
  }
}

@media (min-width: 1024px) {
  .primary-header {
    font-size: 1.875rem;
    line-height: 2.25rem;
  }

  .component-section {
    grid-template-columns: repeat(4, minmax(0, 1fr));
  }

  .component-group {
    grid-column: span 3 / span 3;
  }
}
</style>
