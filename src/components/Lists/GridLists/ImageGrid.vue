<template>
  <!-- Image Grid -->
  <div>
    <template v-if="api.isLoading">
      <loading-svg></loading-svg>
    </template>
    <template v-else-if="api.isDone">
      <div class="image-grid">
        <div v-for="image in imageGallery" :key="image.id">
          <div class="image-aspect">
            <img :src="image.src" :alt="image.alt" />
          </div>
          <div class="mt-2">
            <p class="title">{{ image.name | trim }}</p>
            <div class="description flex items-center">
              <svg
                class="w-4 h-4 text-gray-500"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                />
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                />
              </svg>
              <p class="ml-2">{{ image.views | formatNumber }} Views</p>
            </div>
          </div>
        </div>
      </div>
    </template>
    <template v-else-if="api.isError">
      <div class="pad-container">
        <p>🤯 Oops ! Looks like error occured while fetching images</p>
      </div>
    </template>
  </div>
</template>

<script>
import LoadingSvg from "@general/Loading.vue";
import { unsplashAPI } from "@general/unsplashApi.js";

export default {
  mixins: [unsplashAPI],
  data() {
    return {
      api: {
        isLoading: null,
        isDone: null,
        isError: null,
      },
      imageGallery: [],
    };
  },
  mounted() {
    // Fetch images from unsplash using it's api
    this.getRandomImages();
  },
  filters: {
    // Filter to return a default image name when empty
    trim(value) {
      if (!value) {
        return "Nature image 🌳🌄";
      } else {
        return value;
      }
    },
    // Filter function to format the number
    formatNumber(value) {
      return Number(value).toLocaleString();
    },
  },
  methods: {
    // Get random images from unsplash
    async getRandomImages() {
      // Reset api state
      this.resetApiState();
      //  Set api state to isLoading
      this.api.isLoading = true;

      const numberOfPhotos = 8;
      const category = "nature";
      const api_url = `${this.apiCreds.url}/photos/random/?query=${category}&count=${numberOfPhotos}&client_id=${this.apiCreds.access}`;
      try {
        const response = await fetch(api_url);
        // On success
        if (response.status === 200) {
          // Convert to json and wait for promise to resolve
          const data = await response.json();
          // loop through the data array
          data.forEach((doc) => {
            //   Add needed properties to the imageGallery Array
            this.imageGallery.push({
              id: doc.id,
              alt: doc.alt_description,
              src: doc.urls.regular,
              name: doc.description,
              views: doc.views,
            });
          });
          //   Set api state to isDone
          this.api.isDone = true;
        }
      } catch (error) {
        //   Set api state to isError
        this.api.isError = true;
        console.error(error);
      }
      //   Final state
      this.api.isLoading = false;
    },
    // Reset api state
    resetApiState() {
      this.api.isLoading = false;
      this.api.isDone = false;
      this.api.isError = false;
    },
  },
  components: {
    LoadingSvg,
  },
};
</script>

<style lang="scss" scoped>
// Variables
$img-shadow: $shadow-lg;
// Utilities
.w-4 {
  width: 1rem;
}
.h-4 {
  height: 1rem;
}
.flex {
  display: flex;
}
.items-center {
  align-items: center;
}
.text-gray-500 {
  color: $text-gray-500;
}
.ml-2 {
  margin-left: 0.25rem;
}
.mt-2 {
  margin-top: 0.5rem;
}
.pad-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  padding: 4rem;
}
// Component
.image-grid {
  display: grid;
  gap: 2.5rem 2rem;
  width: 100%;
  padding: 1.5rem 1rem;
  @media (min-width: 640px) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
    padding: 2.5rem 2rem;
  }
  @media (min-width: 1024px) {
    grid-template-columns: repeat(3, minmax(0, 1fr));
  }
  @media (min-width: 1440px) {
    grid-template-columns: repeat(4, minmax(0, 1fr));
  }
  .image-aspect {
    position: relative;
    height: 0;
    padding-bottom: 33.33333%;
    padding-top: 33.33333%;

    img {
      position: absolute;
      left: 0;
      right: 0;
      bottom: 0;
      top: 0;
      border-radius: 0.5rem;
      box-shadow: $img-shadow;
      object-fit: cover;
      height: 100%;
      width: 100%;
    }
  }
  .title {
    font-size: 0.875rem;
    line-height: 1.5rem;
    font-weight: 500;
    color: $text-gray-900;
  }
  .description {
    font-size: 0.875rem;
    line-height: 1.25rem;
    font-weight: 500;
    color: $text-gray-500;
  }
}
</style>
