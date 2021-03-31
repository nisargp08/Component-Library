<template>
  <!-- Contact cards with small portraits -->
  <div>
    <div class="grid-wrapper">
      <div v-for="(record, index) in userList" :key="index" class="grid-card">
        <div class="grid grid-cols-4 p-6 flex-1">
          <div class="col-span-3">
            <div class="flex flex-wrap items-center">
              <p class="title">{{ record.name }}</p>
              <span class="tag ml-2">{{ record.role }}</span>
            </div>
            <p class="description">{{ record.title }}</p>
          </div>
          <div class="avatar">
            <img :src="resolveImagePath(record.photoUrl)" :alt="record.name" />
          </div>
        </div>
        <div class="grid grid-cols-2 footer">
          <a class="action-link" href="#">
            <div class="flex items-center justify-center">
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
                  d="M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0h-2.586a1 1 0 00-.707.293l-2.414 2.414a1 1 0 01-.707.293h-3.172a1 1 0 01-.707-.293l-2.414-2.414A1 1 0 006.586 13H4"
                />
              </svg>
              <p class="ml-2">Email</p>
            </div>
          </a>
          <a class="action-link" href="#">
            <div class="flex items-center justify-center">
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
                  d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                />
              </svg>
              <p class="ml-2">Call</p>
            </div>
          </a>
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
          title: "Commander",
          role: "Master Admin",
          photoUrl: "erwin-smith.png",
        },
        {
          name: "Zeke Yeager",
          title: "War chief",
          role: "Master Admin",
          photoUrl: "zeke-yeager.jpg",
        },
        {
          name: "Reiner Braun",
          title: "Armoured Titan",
          role: "Admin",
          photoUrl: "reiner-braun.jpg",
        },
        {
          name: "Eren Yeager",
          title: "Fouding + Attack + Warhammer Titan",
          role: "Master Admin",
          photoUrl: "eren-yeager.jpg",
        },
        {
          name: "Levi Ackerman",
          title: "The Annihilator",
          role: "Admin",
          photoUrl: "levi-ackerman.png",
        },
        {
          name: "Eren Kruger",
          title: "The OG Undercover",
          role: "Admin",
          photoUrl: "eren-kruger.png",
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
$tag-bg: rgb(209, 250, 229);
$tag-color: rgb(6, 95, 70);
// Utilities
.grid {
  display: grid;
}
.grid-cols-2 {
  grid-template-columns: repeat(2, minmax(0, 1fr));
}
.grid-cols-4 {
  grid-template-columns: repeat(4, minmax(0, 1fr));
}
.col-span-3 {
  grid-column: span 3 / span 3;
}
.p-6 {
  padding: 1.5rem;
}
.w-4 {
  width: 1rem;
}
.h-4 {
  height: 1rem;
}
.text-gray-500 {
  color: $text-gray-500;
}
.flex {
  display: flex;
}
.flex-wrap{
    flex-wrap: wrap;
}
.items-center {
  align-items: center;
}
.justify-center {
  justify-content: center;
}
.flex-1 {
  flex: 1 1 0%;
}
.ml-2 {
  margin-left: 0.5rem;
}
// Component
.grid-wrapper {
  display: grid;
  gap: 1rem;

  @media (min-width: 768px) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
  @media (min-width: 1024px) {
    grid-template-columns: repeat(3, minmax(0, 1fr));
  }

  .grid-card {
    display: flex;
    flex-direction: column;
    background-color: $card-bg;
    box-shadow: $card-shadow;
    border-radius: 0.375rem;
  }
  .avatar {
    height: 2.5rem;
    width: 2.5rem;
    flex-shrink: 0;
    justify-self: flex-end;

    img {
      height: 2.5rem;
      width: 2.5rem;
      object-fit: cover;
      border-radius: 9999px;
    }
  }
  .title {
    font-size: 0.875rem;
    line-height: 1.25rem;
    font-weight: 600;
    color: $text-gray-900;
  }
  .tag {
    font-size: 0.75rem;
    line-height: 1.25rem;
    display: inline-flex;
    font-weight: 600;
    text-transform: capitalize;
    border-radius: 9999px;
    padding: 0 0.5rem;
    background-color: $tag-bg;
    color: $tag-color;
  }
  .description {
    font-size: 0.875rem;
    line-height: 1.25rem;
    padding-top: 0.25rem;
    font-weight: 500;
    color: $text-gray-500;
  }
  .footer {
    border-top: 1px solid $text-gray-200;
    font-size: 0.875rem;

    // Left border
    > * + * {
      border-left: 1px solid $text-gray-200;
    }
    .action-link {
      padding: 1rem 0;
      font-size: 0.875rem;
      line-height: 1.25rem;
      font-weight: 600;
      color: $text-gray-500;
    }
  }
}
</style>
