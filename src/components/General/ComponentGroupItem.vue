<template>
  <router-link @click.native="scrollToTop()" :to="{ name: linkedTo }" class="component-item-wrapper">
    <figure class="m-0">
      <div class="component-item transition transform">
        <img class="w-full h-auto rounded-md" :src="imagePath" alt="Avatars" />
        <div class="abs-image transition"></div>
        <!-- <div class="abs-group-image transition"></div> -->
      </div>
    </figure>
    <figcaption class="mt-3">
      <p class="figcaption">{{ title }}</p>
      <p class="figcaption-description">{{ description }}</p>
    </figcaption>
  </router-link>
</template>

<script>
export default {
  props: {
    linkedTo: {
      type: String,
      required: true,
    },
    image: String,
    title: String,
    description: String,
  },
  computed: {
    // To fetch image path from the directory dynamically
    imagePath() {
      if (this.image.length > 0)
        return require(`@/assets/images/${this.image}`);
      else return "";
    },
  },
  methods : {
    scrollToTop(){
      window.scrollTo(0,0);
    }
  }
};
</script>

<style></style>
