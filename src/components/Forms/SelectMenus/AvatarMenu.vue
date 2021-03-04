<template>
  <div>
    <div class="wrapper">
      <label id="assignedTo">Assigned to</label>
      <div class="select-menu">
        <!-- First visible option / By default/selected option -->
        <button
          @click="isMenuOpen = !isMenuOpen"
          class="btn"
          aria-haspopup="listbox"
          aria-labelledby="assignedTo assignedButton"
          id="assignedButton"
        >
          <span class="selected-value">
            <img :src="imgPath(this.selectedUser.photo)" alt="" />
            <span class="truncate">{{ this.selectedUser.name }}</span>
          </span>
          <span class="toggle-icon">
            <svg
              class="h-5 w-5 text-gray-400"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              aria-hidden="true"
            >
              <title>Open select menu</title>
              <path
                fill-rule="evenodd"
                d="M10 3a1 1 0 01.707.293l3 3a1 1 0 01-1.414 1.414L10 5.414 7.707 7.707a1 1 0 01-1.414-1.414l3-3A1 1 0 0110 3zm-3.707 9.293a1 1 0 011.414 0L10 14.586l2.293-2.293a1 1 0 011.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z"
                clip-rule="evenodd"
              />
            </svg>
          </span>
        </button>
        <!-- Option list -->
        <transition-fade>
          <div aria-expanded="false" role="list" class="select-options-wrapper" v-show="isMenuOpen">
            <ul
              id="assignedToList"
              tabindex="-1"
              role="listbox"
              aria-labelledby="assignedTo"
              :aria-activedescendant="'listbox-item-' + selectedUser.id"
              class="select-options"
            >
              <!-- Loop through user list -->
              <li
                @click="updateSelectedUser(user)"
                v-for="(user, index) in userList"
                :key="index"
                :id="'listbox-item-' + index"
                role="option"
                class="option"
                tabindex="0"
                :class="{ selected: user.id === selectedUser.id }"
              >
                <div class="flex items-center">
                  <img :src="imgPath(user.photo)" alt="" />
                  <span>{{ user.name }}</span>
                </div>
                <div class="check-icon">
                  <svg
                    class="w-5 h-5"
                    viewBox="0 0 16 16"
                    fill="currentColor"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M12.207 4.793a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0l-2-2a1 1 0 011.414-1.414L6.5 9.086l4.293-4.293a1 1 0 011.414 0z"
                    />
                  </svg>
                </div>
              </li>
            </ul>
          </div>
        </transition-fade>
      </div>
    </div>
  </div>
</template>

<script>
import TransitionFade from "@general/TransitionFade.vue";

export default {
  data() {
    return {
      isMenuOpen: true,
      selectedUser: {},
      userList: [
        {
          id: 1,
          name: "Erwin Smith",
          photo: "erwin-smith.png",
        },
        {
          id: 2,
          name: "Zeke Yeager",
          photo: "zeke-yeager.jpg",
        },
        {
          id: 3,
          name: "Eren Yeager",
          photo: "eren-yeager.jpg",
        },
        {
          id: 4,
          name: "Eren Kruger",
          photo: "eren-kruger.png",
        },
        {
          id: 5,
          name: "Levi Ackerman",
          photo: "levi-ackerman.png",
        },
        {
          id: 6,
          name: "Reiner Braun",
          photo: "reiner-braun.jpg",
        },
        {
          id: 7,
          name: "Mikasa Ackerman",
          photo: "mikasa-ackerman.jpg",
        },
        {
          id: 8,
          name: "Jean Kirstein",
          photo: "jean-kirstein.png",
        },
        {
          id: 9,
          name: "Armin Arlert",
          photo: "armin-arlert.jpg",
        },
        {
          id: 10,
          name: "Sasha Braus",
          photo: "sasha-braus.jpg",
        },
        {
          id: 11,
          name: "Annie Leonhart",
          photo: "annie-leonhart.png",
        },
      ],
    };
  },
  created() {
    // To set the default menu selection item on creation
    this.setSelectedUser();
  },
  mounted() {
    //Escape key event listener
    window.addEventListener("keyup", (e) => {
      // If escape key
      if (e.code == "Escape") {
        this.isMenuOpen = false;
      }
    });
  },
  beforeDestroy() {
    // Remove event listener
    window.removeEventListener("keyup");
  },
  methods: {
    // Function to resolve image path when fetching dynamically
    imgPath(path) {
      return require(`@/assets/images/${path}`);
    },
    // Update selected user from the user
    updateSelectedUser(user) {
      // Set this.selectedUser to the passed user
      this.selectedUser = user;
      // Close the menu once the user is updated
      this.isMenuOpen = false;
    },
    // Fetch and return currently selected user
    setSelectedUser() {
      // If object empty then set the first index object from the array as the default value
      if (!Object.keys(this.selectedUser).length) {
        this.selectedUser = this.userList[0];
        return this.userList[0];
      }
    },
  },
  components: {
    TransitionFade,
  },
};
</script>

<style lang="scss" scoped>
// Variables
$action-color: $theme-color;
$action-hover-color: white;
$shadow-sm: 0 1px 2px 0 rgba(0, 0, 0, 0.05);
$shadow-lg: 0 10px 15px -3px rgba(0, 0, 0, 0.1),
  0 4px 6px -2px rgba(0, 0, 0, 0.05);
$select-bg: white;
$max-height: 14rem;
$option-color: $text-gray-900;

// Components css
.h-5 {
  height: 1.25rem;
}

.w-5 {
  width: 1.5rem;
}

.text-gray-400 {
  color: $text-gray-400;
}

.flex {
  display: flex;
}

.items-center {
  align-items: center;
}

.wrapper {
  width: 100%;
  --animate-duration: 150ms;
}

label {
  display: block;
  font-size: 0.875rem;
  color: $text-gray-700;
  font-weight: 600;
  line-height: 1.25rem;
}

.btn {
  width: 100%;
  position: relative;
  justify-content: flex-start;
  padding: 0.5rem 2.5rem 0.5rem 0.75rem;
  font-weight: 500;

  &:hover {
    background-color: white;
  }
}

.select-menu {
  margin-top: 0.5rem;
  position: relative;

  // Selected value button and options
  .selected-value,
  .option {
    display: flex;
    align-items: center;

    img {
      width: 1.5rem;
      height: 1.5rem;
      flex-shrink: 0;
      border-radius: 9999px;
    }

    span {
      margin-left: 0.75rem;
      display: block;
      text-overflow: ellipsis;
      overflow: hidden;
      white-space: nowrap;
    }
  }

  // Toggle icon
  .toggle-icon {
    position: absolute;
    right: 0;
    top: 0;
    bottom: 0;
    display: flex;
    align-items: center;
    padding-right: 0.5rem;
    margin-left: 0.75rem;
    pointer-events: none;
  }

  // Containers
  .select-options-wrapper {
    position: absolute;
    margin-top: 0.25rem;
    background: $select-bg;
    width: 100%;
    box-shadow: $shadow-lg;
    border-radius: 0.375rem;
  }

  .select-options {
    font-size: 0.875rem;
    line-height: 1.25rem;
    padding: 0.25rem 0;
    max-height: $max-height;
    list-style: none;
    margin: 0;
    overflow: auto;
  }

  // Options
  .option {
    color: $option-color;
    cursor: pointer;
    position: relative;
    user-select: none;
    padding-top: 0.5rem;
    padding-bottom: 0.5rem;
    padding-left: 0.75rem;
    padding-right: 2.5rem;
    font-weight: 500;

    // Check icon
    .check-icon {
      display: none;
      align-items: center;
      position: absolute;
      right: 0;
      top: 0;
      bottom: 0;
      padding-right: 1rem;
      pointer-events: none;
    }

    // Hover state
    &:hover {
      background: $action-color;
      color: $action-hover-color;
    }

    // Selected state
    &.selected {
      font-weight: 600;

      // Show checkmark
      .check-icon {
        display: flex;
        color: $action-color;
      }

      // Hover state
      &:hover {
        .check-icon {
          color: $action-hover-color;
        }
      }
    }
  }
}
</style>
