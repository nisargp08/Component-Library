<template>
  <div class="home">
    <h2 class="primary-header">Application UI</h2>

    <section class="section">
      <div v-for="(item,index) in getUniqueSubtype" :key="index" class="component-section">
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
            :description="component.description"
          ></component-group-item>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import ComponentGroupItem from "@general/ComponentGroupItem.vue";

export default {
  name: "Home",
  components: {
    ComponentGroupItem,
  },
  data() {
    return {
      componentList: [
        // Elements
        {
          subtype : "Elements",
          linkedTo: "Avatars",
          image: "elements-avatars.svg",
          title: "Avatars",
          description: "10 components",
        },
        {
          subtype : "Elements",
          title: "Dropdowns",
          image: "elements-dropdowns.svg",
          description: "4 components",
          linkedTo: "Dropdowns",
        },
        {
          subtype : "Elements",
          title: "Badges",
          image: "elements-badges.svg",
          description: "7 components",
          linkedTo: "Badges",
        },
        {
          subtype : "Elements",
          title: "Buttons",
          image: "elements-buttons.svg",
          description: "5 components",
          linkedTo: "Buttons",
        },
        // Overlays
        {
          subtype : "Overlays",
          title: "Modals",
          image: "overlays-modals.svg",
          description: "2 components",
          linkedTo: "Modals",
        },
        {
          subtype : "Overlays",
          title: "Notifications",
          image: "overlays-notifications.svg",
          description: "6 components",
          linkedTo: "Notifications",
        },
        {
          subtype : "Overlays",
          title: "Slide Overs",
          image: "overlays-slide-overs.svg",
          description: "8 components",
          linkedTo: "SlideOvers",
        },
        // Navigation
        {
          subtype : "Navigation",
          title: "Navbars",
          image: "navigation-navbars.svg",
          description: "6 components",
          linkedTo: "Navbars",
        },
        {
          subtype : "Navigation",
          title: "Pagination",
          image: "navigation-pagination.svg",
          description: "3 components",
          linkedTo: "Pagination",
        },
        {
          subtype : "Navigation",
          title: "Tabs",
          image: "navigation-tabs.svg",
          description: "6 components",
          linkedTo: "Tabs",
        },
        {
          subtype : "Navigation",
          title: "Vertical Navigation",
          image: "navigation-vertical-navigation.svg",
          description: "5 components",
          linkedTo: "VerticalNavigation",
        },
        {
          subtype : "Navigation",
          title: "Sidebar Navigation",
          image: "navigation-sidebar-navigation.svg",
          description: "7 components",
          linkedTo: "SidebarNavigation",
        },
        {
          subtype : "Navigation",
          title: "Breadcrumbs",
          image: "navigation-breadcrumbs.svg",
          description: "4 components",
          linkedTo: "Breadcrumbs",
        },
        {
          subtype : "Navigation",
          title: "Steps",
          image: "navigation-steps.svg",
          description: "7 components",
          linkedTo: "Steps",
        },
      ],
    };
  },
  computed : {
    // To return unique subtype from componentlist
    getUniqueSubtype(){
      let unique = [];
      this.componentList.forEach((item) => {
        var result = unique.findIndex(x => x.subtype == item.subtype);
        if(result <= -1){
          unique.push({subtype : item.subtype});
        }
      });
      return unique;
    }
  },
  methods : {
    // To return components by subtypes
    componentListBySubtype(type){
      let result = this.componentList.filter(item => item.subtype == type);
      return result;
    }
  }
};
</script>

<style lang="scss">
/* Global - Common Classes */
.primary-header {
  font-size: 1.875rem;
  line-height: 2.25rem;
  font-weight: 700;
  font-family: $primaryFont;
  letter-spacing: -0.015em;
}
.section {
  display: grid;
  grid-template-columns: repeat(1, minmax(0, 1fr));
  row-gap: 4rem;
  margin-top: 2rem;
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
  font-weight: 600;
  font-size: 1.25rem;
  line-height: 1.75rem;
  margin: 0;
  font-family: $secondaryFont;
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
  font-size: 1rem;
  line-height: 1.25rem;
  font-weight: 600;
}
.figcaption-description {
  font-size: 0.875rem;
  font-weight: 500;
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
    font-size: 1.75rem;
  }
  .component-section {
    grid-template-columns: repeat(4, minmax(0, 1fr));
  }
  .component-group {
    grid-column: span 3 / span 3;
  }
}
</style>
