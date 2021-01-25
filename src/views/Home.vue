<template>
  <div class="home">
    <h2 class="primary-header">Application UI</h2>

    <section class="section">
      <div class="component-section">
        <div>
          <h3 class="component-section-header">Elements</h3>
        </div>
        <div class="component-group">
          <component-group-item
            v-for="(component, index) in componentList"
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
        {
          linkedTo: "Avatars",
          image: "elements-avatars.svg",
          title: "Avatars",
          description: "10 components",
        },
        {
          title: "Dropdowns",
          image: "elements-dropdowns.svg",
          description: "2 components",
          linkedTo: "Dropdowns",
        },
      ],
    };
  },
};
</script>

<style lang="scss">
/* Global - Common Classes */
.primary-header {
  font-size: 1.5rem;
  line-height: 2rem;
  font-weight: 700;
  font-family: $primaryFont;
  letter-spacing: -0.025em;
}
.section {
  display: grid;
  grid-template-columns: repeat(1, minmax(0, 1fr));
  row-gap: 2rem;
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
// .component-item .abs-group-image {
//   display: absolute;
//   top: 0;
//   right: 0;
//   bottom: 0;
//   left: 0;
//   background: white;
//   opacity: 0;
// }
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
