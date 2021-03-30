<template>
  <!-- Avatar groups with actions -->
  <div>
    <div class="stacked-list">
      <div
        v-for="(record, index) in userList"
        :key="index"
        class="flex flex-wrap justify-between items-center"
      >
        <div class="flex items-center py-4">
          <div class="avatar">
            <img :src="resolveImagePath(record.photoUrl)" alt="" />
          </div>
          <div class="ml-4">
            <p class="text">{{ record.name }}</p>
            <p class="description">@{{ record.handle }}</p>
          </div>
        </div>
        <div>
          <div><button class="btn action-btn">View</button></div>
        </div>
      </div>
      <div class="border-none">
        <button class="btn all-btn">View All</button>
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
          handle: "OG_gambler",
          photoUrl: "erwin-smith.png",
        },
        {
          name: "Zeke Yeager",
          handle: "wonderkid",
          photoUrl: "zeke-yeager.jpg",
        },
        {
          name: "Reiner Braun",
          handle: "letmedieinpiece",
          photoUrl: "reiner-braun.jpg",
        },
        {
          name: "Eren Yeager",
          handle: "freedomsupplier",
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
// Utilities
.flex {
  display: flex;
}
.flex-wrap {
  flex-wrap: wrap;
}
.justify-between {
  justify-content: space-between;
}
.items-center {
  align-items: center;
}
.ml-4 {
  margin-left: 1rem;
}
.py-4 {
  padding-top: 1rem;
  padding-bottom: 1rem;
}
// Component css
.stacked-list {
  width: 100%;
  > * + * {
    border-top: 1px solid $text-gray-200;
    margin-top: 0.25rem;
    @media (min-width: 640px) {
      margin-top: 0;
    }
  }
  .border-none {
    border-top: none;
  }
  .all-btn {
    width: 100%;
    margin-top: 0.5rem;
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
    color: $text-gray-900;
    font-weight: 600;
  }
  .description {
    font-size: 0.875rem;
    line-height: 1.25rem;
    color: $text-gray-500;
  }
  .action-btn {
    border-radius: 9999px;
    font-size: 0.75rem;
    line-height: 1rem;
    padding-top: 0.25rem;
    padding-bottom: 0.25rem;
  }
}
</style>
