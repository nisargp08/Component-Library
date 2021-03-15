<template>
  <!-- Slide over with a wide user profile -->
  <div>
    <button class="btn" @click="isOpen = true">Open Wide User Profile</button>
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
              <div class="banner"></div>
              <div class="details">
                <div class="head-wrapper">
                  <div class="avatar">
                    <img
                      :src="imagePathResolve(member.profilePic)"
                      :alt="member.firstName + member.lastName"
                    />
                  </div>
                  <div class="wrapper">
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
                  </div>
                </div>
                <div class="info">
                  <div class="info-title"><h5>Bio</h5></div>
                  <div class="info-text" v-html="member.bio"></div>
                </div>
                <div class="info">
                  <div class="info-title"><h5>Quotes</h5></div>
                  <div class="info-text" v-html="member.quote"></div>
                </div>
                <div class="info">
                  <div class="info-title"><h5>website</h5></div>
                  <div class="info-text" v-html="member.website"></div>
                </div>
                <div class="info">
                  <div class="info-title"><h5>Birthday</h5></div>
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
          profilePic: "eren-yeager.jpg",
          firstName: "Eren",
          lastName: "Yeager",
          handle: "theDevil",
          bio: `
            <p>Eren Jaeger (エレン・イェーガー Eren Yēgā) is a member of the Scout Regiment and the main protagonist of Attack on Titan. He is the only son of Grisha and Carla Jaeger, the adoptive brother of Mikasa Ackermann, the younger paternal half brother of Zeke Jaeger and the current holder of the Attack Titan, Founding Titan, and the War Hammer Titan.</p><br>
            <p>Eren was born and raised in Shiganshina District, which is located on the southern edge of Wall Maria. He lived there until the year 845, when the Colossal and Armored Titans breached the Wall, allowing a flood of Titans to invade and destroy the city. During the incident, Eren witnessed his mother being murdered and eaten by a smiling Titan. This event aroused in Eren an intense hatred towards the Titans, and he swore to wipe all of them off the face of the earth.</p><br>
            <p>Soon afterward, his father, Grisha Jaeger, found him and gave him the key to his basement, instructing Eren to find it at all costs and retake Wall Maria. He then injected Eren with a Titan injection.</p><br>
            <p>Two years later, Eren along with his adoptive sister Mikasa Ackermann and his best friend Armin Arlelt joined the 104th Cadet Corps.The three successfully graduated, with Eren ranking as the 5th best cadet, and they joined the Scout Regiment following the struggle for Trost.</p><br>
            <p>After finding the basement and unlocking his father's memories, Eren learned about the truth of what the Titans are, as well as the history of Eldia and Marley. Eren then vowed to free his home from their true enemy: the rest of humanity that lives across the sea.</p><br>
            <p>Eren currently possesses the power of three Titans. From his father, Eren inherited the Attack and Founding Titan. After eating Lara Tybur during the Raid on Liberio, he gained the War Hammer Titan as well.</p><br>
          `,
          quote: `
            <em>&quot; If you win, you live. If you lose, you die. If you don't fight, you can't win! &quot;</em><br>
            <em>&quot; What is the point if those with the means and power do not fight ? &quot;</em>
          `,
          website: `<a style="color : #6366F1" href="https://attackontitan.fandom.com/wiki/Eren_Jaeger_(Anime)" target="_blank">Eren Yeager</a>`,
          dob: "March 30th",
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
    max-width: 40rem;
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
  $ring-color: white;
  .banner {
    width: 100%;
    height: 12rem;
    background-color: $theme-color;
  }

  .details {
    padding-bottom: 1.5rem;
    .head-wrapper {
      // padding: 0 1.5rem 1rem 1.5rem;
      padding: 0 1.25rem;
      @media (min-width: 640px) {
        padding: 0 1.5rem;
      }
      .wrapper {
        flex: 1;
        -ms-flex: 1;
        padding-top: 1rem;
        @media (min-width: 640px) {
          margin-left: 1rem;
        }
      }
      @media (min-width: 640px) {
        display: flex;
        align-items: flex-end;
      }
    }
    .avatar {
      display: inline-flex;
      border-radius: 0.5rem;
      border: 5px solid $ring-color;
      background-color: $ring-color;
      margin-top: -5rem;
      box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1),
        0 2px 4px -1px rgba(0, 0, 0, 0.06);
      img {
        width: 12rem;
        height: 12rem;
        object-fit: cover;
        border-radius: 0.5rem;
      }
    }

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
        color: $text-gray-500;
        font-weight: 600;
      }
    }

    .operations {
      margin-top: 1rem;

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
      padding: 1.25rem 1.25rem 0 1.25rem;
      border-top: 1px solid $text-gray-200;
      @media (min-width: 640px) {
        display: flex;
        align-items: flex-start;
        padding: 1.5rem 1.5rem 0 1.5rem;
      }
      // Heading
      .info-title {
        @media (min-width: 640px) {
          flex: 0 0 auto;
          width: 25%;
        }
        > * {
          font-size: 1rem;
          line-height: 1.25rem;
          color: $text-gray-500;
          font-weight: 600;
          text-transform: capitalize;
        }
      }

      .info-text {
        font-size: 0.875rem;
        padding-top: 0.5rem;
        line-height: 1.25rem;

        @media (min-width: 640px) {
          font-size: 1rem;
          flex: 0 0 auto;
          padding-top: 0;
          width: 75%;
        }
      }
    }
  }
}
</style>
