<template>
  <!-- Slide over with a user profile -->
  <div>
    <button class="btn" @click="isOpen = true">Open User Profile</button>
    <div class="slide-over" :class="{ 'is-open': isOpen }">
      <div role="button" @click="isOpen = false" class="slide-overlay"></div>
      <transition-slide>
        <div class="slide-over-panel" v-if="isOpen">
          <div class="slide-over-heading">
            <h2>User Profile</h2>
            <div class="dismiss">
              <button class="reset-btn" @click="isOpen = false">
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
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>
          </div>
          <div class="slide-over-content">
            <div
              v-for="(member, index) in userProfile"
              :key="index"
              class="user-profile"
            >
              <div class="avatar">
                <img
                  :src="imagePathResolve(member.profilePic)"
                  :alt="member.firstName + member.lastName"
                />
              </div>
              <div class="details">
                <div class="name">
                  <div class="head">
                    <h3>{{ member.firstName }} {{ member.lastName }}</h3>
                    <span class="status"></span>
                  </div>
                  <h4>@{{ member.handle }}</h4>
                </div>
                <div class="operations">
                  <button class="btn btn-theme">Message</button>
                  <button class="btn">Call</button>
                  <div class="dropdown">
                    <button
                      @click="isDropdownOpen = !isDropdownOpen"
                      class="btn"
                    >
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
                          d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z"
                        />
                      </svg>
                    </button>
                    <transition-fade>
                      <div class="dropdown-menu" v-if="isDropdownOpen">
                        <a class="menu-items" href="#">Account settings</a>
                        <a class="menu-items" href="#">Support</a>
                        <a class="menu-items" href="#">License</a>
                        <a class="menu-items" href="#">Sign out</a>
                      </div>
                    </transition-fade>
                  </div>
                </div>
                <div class="info">
                  <h5>Bio</h5>
                  <div class="info-text" v-html="member.bio"></div>
                </div>
                <div class="info">
                  <h5>Quotes</h5>
                  <div class="info-text" v-html="member.quote"></div>
                </div>
                <div class="info">
                  <h5>website</h5>
                  <div class="info-text" v-html="member.website"></div>
                </div>
                <div class="info">
                  <h5>Birthday</h5>
                  <div class="info-text" v-html="member.dob"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </transition-slide>
    </div>
  </div>
</template>

<script>
import TransitionSlide from "@general/TransitionSlide.vue";
import TransitionFade from "@general/TransitionFade.vue";

export default {
  mounted() {
    // Modal close on escape key
    window.addEventListener("keyup", (e) => {
      // If escape key
      if (e.code == "Escape") {
        this.isOpen = false;
      }
    });
  },
  data() {
    return {
      isOpen: false,
      isDropdownOpen: false,
      userProfile: [
        {
          profilePic: "erwin-smith.png",
          firstName: "Erwin",
          lastName: "Smith",
          handle: "theGambler",
          bio: `
          Erwin Smith (エルヴィン・スミス Eruvin Sumisu) was the 13th commander (団長 Danchō) of the Survey Corps. Discerning, intelligent, and widely respected, Erwin was an able commander. While he cared deeply for his men, he did not hesitate to sacrifice them for the good and prosperity of mankind, and his men proved more than willing to stake their lives at his order. During Erwin's career he developed the Long-Distance Enemy Scouting Formation, and due to uncertainty about his future, he later named Hange Zoë as his successor.
          `,
          quote: `<em>&quot; If we only focus on making the best moves, we will never get the better of our opponent. When necessary, we must be willing to take big risks, and be prepared to lose everything. Unless we change how we fight, we cannot win. &quot;</em>`,
          website: `<a style="color : #6366F1" href="https://attackontitan.fandom.com/wiki/Erwin_Smith" target="_blank">Erwin Smith</a>`,
          dob: "October 14th",
        },
      ],
    };
  },
  components: {
    TransitionSlide,
    TransitionFade,
  },
  methods: {
    imagePathResolve(image) {
      if (image.length > 0) {
        return require(`@/assets/images/${image}`);
      } else {
        return "";
      }
    },
  },
};
</script>

<style lang="scss" scoped>
// Variables
$bg-color: white;
$bg-tint: rgba(0, 0, 0, 0.09);
$shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1),
  0 10px 10px -5px rgba(0, 0, 0, 0.04);

.slide-over {
  display: none;
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 10;
  justify-content: flex-end;

  &.is-open {
    //   When slide bar opened
    display: flex;
  }

  .slide-overlay {
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: 10;
    background-color: $bg-tint;
  }

  .slide-over-panel {
    position: relative;
    z-index: 10;
    display: flex;
    flex-direction: column;
    max-width: 28rem;
    width: calc(100vw - 4rem);
    background-color: $bg-color;
    overflow-y: hidden;
    padding-top: 1.5rem;
    padding-bottom: 1.5rem;
    box-shadow: $shadow;
  }
}

// Element design css - Not required for component
.text-gray-400 {
  color: $text-gray-400;
}
// Reset all heading tags
h1,
h2,
h3,
h4,
h5,
h6 {
  margin: 0;
  padding: 0;
}

.slide-over-heading {
  display: flex;
  align-items: center;
  padding-left: 1rem;
  padding-right: 1rem;

  h2 {
    flex: 1;
    -ms-flex: 1;
    margin: 0;
    font-size: 1.125rem;
    line-height: 1.75rem;
    font-weight: 600;
    color: $text-gray-900;
  }
}

.slide-over-content {
  position: relative;
  margin-top: 1.25rem;
  overflow-y: auto;
  // padding: 1rem;
  flex: 1;
  -ms-flex: 1;
  border-top: 1px solid $text-gray-200;
}

.slide-over {
  --animate-duration: 250ms;
}

// User Profile
.user-profile {
  .avatar {
    img {
      width: 100%;
      object-fit: cover;
      height: 16rem;
    }
  }

  .details {
    padding: 1.5rem;

    .name {
      //   Firstname and lastname
      .head {
        display: flex;
        align-items: center;
      }

      h3 {
        font-size: 1.75rem;
        letter-spacing: -0.025rem;
        line-height: 2.5rem;
        font-weight: 700;
        display: inline-block;
      }

      .status {
        display: inline-block;
        margin-left: 0.75rem;
        height: 0.5rem;
        width: 0.5rem;
        border-radius: 9999px;
        background-color: #22c55e;
        border: 1px solid transparent;
      }

      //   Handle
      h4 {
        font-size: 0.875rem;
        line-height: 1.25rem;
        color: $text-gray-400;
        font-weight: 600;
      }
    }

    .operations {
      margin-top: 1.5rem;

      display: grid;
      grid-template-columns: repeat(2, minmax(0, 1fr));
      grid-template-rows: repeat(2, minmax(0, 1fr));
      gap: 0.5rem;

      :first-child {
        grid-column: 1 / span 3;
      }
      :nth-child(2) {
        grid-column: 1 / 3;
      }
      @media (min-width: 640px) {
        display: flex;
        gap: 0;
        > :not(:last-child) {
          flex: 1;
          -ms-flex: 1;
          margin-right: 0.75rem;
        }
      }
      .dropdown {
        $dropdown-bg: white;
        color: $text-gray-700;
        $ring-offset-shadow: 0 0 #0000;
        $ring-shadow: 0 0 #0000;
        $shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1),
          0 4px 6px -2px rgba(0, 0, 0, 0.05);

        display: inline-block;
        position: relative;
        text-align: right;
        button {
          height: 100%;
        }
        .dropdown-menu {
          position: absolute;
          right: 0;
          margin-top: 0.25rem;
          text-align: left;
          background: $dropdown-bg;
          padding: 0.25rem 0;
          width: 14rem;
          border-radius: 0.375rem;
          box-shadow: $ring-offset-shadow, 0 0 #0000, $ring-shadow, 0 0 #0000,
            $shadow;

          .menu-items {
            display: block;
            padding: 0.5rem 1rem;
            font-size: 0.875rem;
            line-height: 1.25rem;
            font-weight: 500;

            &:hover {
              background-color: $text-gray-100;
            }
          }
        }
      }
    }

    .info {
      margin-top: 1.5rem;

      // Heading
      h5 {
        font-size: 1rem;
        line-height: 1.25rem;
        color: $text-gray-500;
        font-weight: 600;
        text-transform: capitalize;
      }

      .info-text {
        font-size: 0.875rem;
        padding-top: 0.5rem;
        line-height: 1.25rem;

        @media (min-width: 640px) {
          font-size: 1rem;
        }
      }
    }
  }
}
</style>
