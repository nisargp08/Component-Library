<template>
  <!-- Narrow stacked list with avatar group -->
  <div>
    <div class="stacked-list">
      <div
        v-for="(record, index) in userList"
        :key="index"
        class="flex items-center py-4 px-6"
      >
        <div class="avatar">
          <img :src="resolveImagePath(record.photoUrl)" alt="" />
        </div>
        <div class="ml-4">
          <p class="text">{{ record.name }}</p>
          <p class="description">{{ record.email }}</p>
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
// Utilities
.flex {
  display: flex;
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
}
</style>
