<template>
  <!-- Two-column with Avatar -->
  <div>
    <div class="stacked-list">
      <div
        v-for="(record, index) in userList"
        :key="index"
        class="flex flex-wrap gap-4 items-center space-between py-4 px-6"
      >
        <div class="flex items-center flex-1">
          <div class="avatar">
            <img :src="resolveImagePath(record.photoUrl)" alt="" />
          </div>
          <div class="ml-4">
            <p class="text">{{ record.name }}</p>
            <div class="description flex">
              <div class="flex pt-2px">
                <svg
                  class="w-4 h-4"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207"
                  />
                </svg>
              </div>
              <p class="ml-1">{{ record.email }}</p>
            </div>
          </div>
        </div>
        <div class="flex items-center text-right gap-4">
          <div class="hidden md:block">
            <p class="text-sm font-weight-500">Applied on January 7, 2020</p>
            <div class="flex items-center mt-1">
              <span class="flex items-center">
                <svg
                  class="w-4 h-4"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="#33c48e"
                >
                  <path
                    fill-rule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clip-rule="evenodd"
                  />
                </svg>
              </span>
              <p class="description ml-1">Completed phone screening</p>
            </div>
          </div>
          <div class="flex items-center">
            <svg
              class="w-4 h-4 text-gray-400"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fill-rule="evenodd"
                d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                clip-rule="evenodd"
              />
            </svg>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      userList: [
        {
          name: "Erwin Smith",
          email: "OG_gambler@surveycorps.com",
          photoUrl: "erwin-smith.png",
        },
        {
          name: "Zeke Yeager",
          email: "wonderkid@eldia.com",
          photoUrl: "zeke-yeager.jpg",
        },
        {
          name: "Reiner Braun",
          email: "letmedieinpiece@eldia.com",
          photoUrl: "reiner-braun.jpg",
        },
        {
          name: "Eren Yeager",
          email: "freedomsupplier@eren.com",
          photoUrl: "eren-yeager.jpg",
        },
      ],
    };
  },
  methods: {
    resolveImagePath(url) {
      return require(`@/assets/images/${url}`);
    },
  },
};
</script>
<style lang="scss" scoped>
// Variables
$card-bg: white;
$card-shadow: $shadow;
$action-color: $theme-color;
// Utilities
.flex {
  display: flex;
}
.flex-wrap {
  flex-wrap: wrap;
}
.flex-1{
    flex: 1 1 0%;
}
.gap-4 {
  gap: 1rem;
}
.items-center {
  align-items: center;
}
.space-between {
  justify-content: space-between;
}
.text-right {
  text-align: right;
}
.w-4 {
  width: 1rem;
}
.h-4 {
  height: 1rem;
}
.ml-1 {
  margin-left: 0.25rem;
}
.ml-4 {
  margin-left: 1rem;
}
.mt-1 {
  margin-top: 0.25rem;
}
.pt-2px{
    padding-top: 2px;
}
.py-4 {
  padding-top: 1rem;
  padding-bottom: 1rem;
}
.px-6 {
  padding-left: 1.5rem;
  padding-right: 1.5rem;
}
.text-sm {
  font-size: 0.875rem;
  line-height: 1.25rem;
}
.text-gray-400 {
  color: $text-gray-400;
}
.font-weight-500 {
  font-weight: 500;
}
.hidden{
    display: none;
}
.md\:block {
  @media (min-width: 768px) {
    display: block;
  }
}
// Component css
.stacked-list {
  width: 100%;
  background-color: $card-bg;
  box-shadow: $card-shadow;
  border-radius: 0.375rem;

  > * + * {
    border-top: 1px solid $text-gray-200;
  }
  .avatar {
    height: 2.5rem;
    width: 2.5rem;
    flex-shrink: 0;

    img {
      height: 2.5rem;
      width: 2.5rem;
      object-fit: cover;
      border-radius: 9999px;
    }
  }
  .text {
    font-size: 0.875rem;
    line-height: 1.25rem;
    color: $action-color;
    font-weight: 600;
  }
  .description {
    font-size: 0.875rem;
    line-height: 1.25rem;
    color: $text-gray-500;
  }
}
</style>
