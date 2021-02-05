<template>
  <div>
    <button class="btn" @click="isOpen = true">
      Open Contact List Slide Over
    </button>
    <div class="slide-over" :class="{ 'is-open': isOpen }">
      <div role="button" @click="isOpen = false" class="slide-overlay"></div>
      <transition-slide>
        <div class="slide-over-panel" v-if="isOpen">
          <div class="slide-over-heading">
            <h2>Contact List</h2>
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
            <tabs :tabs="tabs" :initialTab="initialTab">
              <template slot="tab-head-all">All</template>
              <template slot="tab-body-all">
                <div class="contact-list">
                  <contact-list-item
                    v-for="(contact, index) in allList"
                    :key="index"
                    :contact="contact"
                  ></contact-list-item>
                </div>
              </template>

              <template slot="tab-head-online">Online</template>
              <template slot="tab-body-online">
                <div class="contact-list">
                  <contact-list-item
                    v-for="(contact, index) in onlineList"
                    :key="index"
                    :contact="contact"
                  ></contact-list-item>
                </div>
              </template>

              <template slot="tab-head-offline">Offline</template>
              <template slot="tab-body-offline">
                <div class="contact-list">
                  <contact-list-item
                    v-for="(contact, index) in offlineList"
                    :key="index"
                    :contact="contact"
                  ></contact-list-item>
                </div>
              </template>
            </tabs>
          </div>
        </div>
      </transition-slide>
    </div>
  </div>
</template>

<script>
import TransitionSlide from "@general/TransitionSlide.vue";
import Tabs from "@general/Tabs.vue";

// Individual contact list item
import ContactListItem from "@slideOvers/ContactListItem.vue";

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
      tabs: ["all", "online", "offline"],
      initialTab: "all",
      allList: [
        {
          name: "Erwin Smith",
          photoUrl: "erwin-smith.png",
          handle: "TheGambler",
          status: "off",
        },
        {
          name: "Zeke Yeager",
          photoUrl: "zeke-yeager.jpg",
          handle: "MrMiscalculation",
          status: "on",
        },
        {
          name: "Eren Yeager",
          photoUrl: "eren-yeager.jpg",
          handle: "TheDevil",
          status: "on",
        },
        {
          name: "Eren Kruger",
          photoUrl: "eren-kruger.png",
          handle: "TheOwl",
          status: "off",
        },
        {
          name: "Levi Ackerman",
          photoUrl: "levi-ackerman.png",
          handle: "FidgetSpinner",
          status: "on",
        },
        {
          name: "Reiner Braun",
          photoUrl: "reiner-braun.jpg",
          handle: "LetMeDieInPiece",
          status: "off",
        },
        {
          name: "Mikasa Ackerman",
          photoUrl: "mikasa-ackerman.jpg",
          handle: "Ereh...",
          status: "on",
        },
        {
          name: "Jean Kirstein",
          photoUrl: "jean-kirstein.png",
          handle: "ErenLookAlike",
          status: "off",
        },
        {
          name: "Armin Arlert",
          photoUrl: "armin-arlert.jpg",
          handle: "Umie",
          status: "off",
        },
        {
          name: "Sasha Braus",
          photoUrl: "sasha-braus.jpg",
          handle: "ONiku",
          status: "off",
        },
        {
          name: "Annie Leonhart",
          photoUrl: "annie-leonhart.png",
          handle: "MissBadass",
          status: "on",
        },
      ],
    };
  },
  components: {
    TransitionSlide,
    Tabs,
    ContactListItem,
  },
  computed : {
    //   Online user lists
      onlineList(){
          return this.allList.filter(x => x.status == 'on');
      },
    //   Offline user lists
      offlineList(){
          return this.allList.filter(x => x.status == 'off');
      }
  }
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
    // height: 100%;
  }
}
// Element design css - Not required for component
.text-gray-400 {
  color: $text-gray-400;
}
.slide-over-heading {
  display: flex;
  align-items: center;
  padding-left: 1.5rem;
  padding-right: 1.5rem;
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
  margin-top: 1.5rem;
  flex: 1;
  -ms-flex: 1;
  overflow-y: auto;
  //   border-top: 1px solid $text-gray-200;
}
.slide-over {
  --animate-duration: 250ms;
}
</style>

<!-- Not scoped as the css is for imported component -->
<style lang="scss">
// Navigation tabs
.tabs {
  .tab-heads {
    display: flex;
    align-items: center;
    padding-left: 1.5rem;
    padding-right: 1.5rem;

    > :not(:first-child) {
      margin-left: 1.5rem;
    }

    .tab-head {
      font-size: 1rem;
      line-height: 1.25rem;
      font-weight: 600;
      padding-bottom: 1rem;
      color: $text-gray-500;
      border-bottom: 2px solid transparent;
    }

    .tab-active {
      color: $theme-color;
      border-bottom-color: $theme-color;
    }
  }
}
</style>
