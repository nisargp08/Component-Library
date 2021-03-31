<template>
  <!-- Two-column with Avatar -->
  <div>
    <div class="stacked-list">
      <div
        v-for="(record, index) in userList"
        :key="index"
        class="flex flex-col sm:flex-row flex-wrap gap-4 space-between py-4 px-6"
      >
        <div class="flex items-center flex-1">
          <div>
            <p class="text">
              {{ record.position }}
              <span class="description ml-1">in {{ record.category }}</span>
            </p>
            <div class="description mt-1 flex">
              <div class="flex pt-2px">
                <svg
                  class="w-4 h-4 text-gray-400"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                  />
                </svg>
              </div>
              <p class="ml-1">Closing on January 7, 2021</p>
            </div>
          </div>
        </div>
        <div class="flex items-center text-right gap-4">
          <div class="avatar-group flex-grow-1 sm:flex-grow-0">
            <img src="@/assets/images/eren-kruger.png" alt="" />
            <img src="@/assets/images/zeke-yeager.jpg" alt="" />
            <img src="@/assets/images/eren-yeager.jpg" alt="" />
            <img src="@/assets/images/levi-ackerman.png" alt="" />
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
          position: "Back End Developer",
          category: "Engineering",
        },
        {
          position: "Network Architect",
          category: "Engineering",
        },
        {
          position: "Dev-ops Engineer",
          category: "Engineering",
        },
        {
          position: "Regional Sales Manager",
          category: "Sales",
        },
      ],
    };
  },
};
</script>
<style lang="scss" scoped>
// Variables
$card-bg: white;
$card-shadow: $shadow;
$action-color: $theme-color;
$ringColor: #b5b5b5;

// Utilities
.flex {
  display: flex;
}
.flex-col {
  flex-direction: column;
}
.sm\:flex-row {
  @media (min-width: 640px) {
    flex-direction: row;
  }
}
.flex-wrap {
  flex-wrap: wrap;
}
.flex-1 {
  flex: 1 1 0%;
}
.flex-grow-1{
    flex-grow: 1;
}
.sm\:flex-grow-0{
    @media(min-width : 640px){
        flex-grow: 0;
    }
}
.gap-4 {
  gap: 1rem;
}
.items-center {
  align-items: center;
}
.sm\:items-center {
  @media (min-width: 640px) {
    align-items: center;
  }
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
.mt-1 {
  margin-top: 0.25rem;
}
.pt-2px {
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
.text-gray-400 {
  color: $text-gray-400;
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
    font-weight: 400;
  }
  .avatar-group {
    display: inline-flex;
    overflow: hidden;
    > *:not(:first-child) {
      margin-left: -0.5rem;
    }
    img {
      display: inline-block;
      width: 2rem;
      height: 2rem;
      object-fit: cover;
      border-radius: 9999px;
      border: 2px solid $ringColor;
    }
  }
}
</style>
