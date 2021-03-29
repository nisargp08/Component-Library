<template>
  <!-- Radio group as a stacked card -->
  <div>
    <div class="radio-group">
      <div
        :class="toggleSelected(list.value)"
        v-for="(list, index) in radioList"
        :key="index"
        class="flex items-center transition-15"
      >
        <input
          class="sr-only"
          v-model="checkedValue"
          type="radio"
          :name="list.name"
          :id="list.value"
          :value="list.value"
        />
        <label :for="list.value">
          <div class="sm:col-span-3">
            <span class="title">{{ list.title }}</span>
            <span class="description">
              {{ list.ram }}GB / {{ list.cpu }} CPUs &middot; {{ list.ssd }} GB
              SSD disk
            </span>
          </div>
          <span class="price sm:col-span-1">
            <span class="monthly">${{ list.monthly }} </span>
            /mo
          </span>
        </label>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      checkedValue: "r-business",
      radioList: [
        {
          title: "Hobby",
          monthly: 40,
          ram: 8,
          cpu: 4,
          ssd: 160,
          value: "r-hobby",
          name: "rentals",
        },
        {
          title: "Startup",
          monthly: 80,
          ram: 12,
          cpu: 6,
          ssd: 256,
          value: "r-startup",
          name: "rentals",
        },
        {
          title: "Business",
          monthly: 160,
          ram: 16,
          cpu: 8,
          ssd: 512,
          value: "r-business",
          name: "rentals",
        },
        {
          title: "Enterprise",
          monthly: 240,
          ram: 32,
          cpu: 12,
          ssd: 1024,
          value: "r-enterprise",
          name: "rentals",
        },
      ],
    };
  },
  methods: {
    // Toggle class 'selected' on parent based on selection
    toggleSelected(value) {
      if (this.checkedValue === value) {
        return "selected";
      }
    },
  },
};
</script>

<style lang="scss" scoped>
// Variables
$action-color: $theme-color;
$font-color: $text-gray-900;
$card-bg: white;
$card-border-color: $text-gray-300;
$description-color: $text-gray-500;
$shadow-sm: 0 1px 2px 0 rgba(0, 0, 0, 0.05);
$max-width: 38rem;

// Component CSS
.flex {
  display: flex;
}

.block {
  display: block;
}

.sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  border: 0;
  clip: rect(0, 0, 0, 0);
}

.items-center {
  align-items: center;
}

.transition-15 {
  transition: all 0.15s ease-in-out;
}
// Responsive utilities
.sm\:col-span-3 {
  @media (min-width: 640px) {
    grid-column: span 3 / span 3;
  }
}
.sm\:col-span-1 {
  @media (min-width: 640px) {
    grid-column: span 1 / span 1;
  }
}
.radio-group {
  background: $card-bg;
  color: $font-color;
  border-radius: 0.375rem;
  max-width: $max-width;
  width: 100%;

  // All children
  > * {
    border: 1px solid $card-border-color;
    border-radius: 0.375rem;
    box-shadow: $shadow-sm;
  }
  // ALl children except the first one
  > * + * {
    margin-top: 1rem;
  }

  label {
    font-size: 0.875rem;
    line-height: 1.25rem;
    width: 100%;
    cursor: pointer;
    padding: 1rem 1.25rem;

    @media (min-width: 640px) {
      display: grid;
      grid-template-columns: repeat(4, minmax(0, 1fr));
      gap: 1rem;
      padding: 1rem 1.5rem;
    }
  }

  .title {
    font-weight: 600;
    display: block;
  }
  .price {
    padding-top: 0.25rem;
    @media (min-width: 640px) {
      padding-top: 0;
      text-align: right;
    }
  }
  .price,
  .description {
    display: block;
    color: $description-color;
  }

  .monthly {
    font-weight: 600;
    color: $font-color;

    @media (min-width: 640px) {
      display: block;
    }
  }

  [type="radio"] {
    // Simple resets
    appearance: none;
    -webkit-appearance: none;
    -moz-appearance: none;

    user-select: none;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;

    color-adjust: exact;
    -webkit-print-color-adjust: exact;

    display: inline-block;
    padding: 0;
    vertical-align: middle;
    background-origin: border-box;

    flex-shrink: 0;
    height: 1rem;
    width: 1rem;
    background-color: #fff;

    // Applying style
    border-radius: 100%;
    border: 1px solid $text-gray-300;
    color: $action-color;

    // Checked state
    &:checked {
      border-color: transparent;
      background-image: url("../../../assets/images/white-radio.svg");
      background-color: currentColor;
      background-size: 100% 100%;
      background-position: center;
      background-repeat: no-repeat;

      &:hover,
      &:focus {
        border-color: transparent;
        background-color: currentColor;
      }
    }

    // Focused state
    &:focus {
      outline: 2px solid transparent;
      --tw-ring-inset: var(--tw-empty, /*!*/ /*!*/);
      --tw-ring-offset-width: 2px;
      --tw-ring-offset-color: #fff;
      --tw-ring-color: currentColor;
      --tw-ring-offset-shadow: var(--tw-ring-inset) 0 0 0
        var(--tw-ring-offset-width) var(--tw-ring-offset-color);
      --tw-ring-shadow: var(--tw-ring-inset) 0 0 0
        calc(2px + var(--tw-ring-offset-width)) var(--tw-ring-color);
      box-shadow: var(--tw-ring-offset-shadow), var(--tw-ring-shadow),
        var(--tw-shadow, 0 0 #0000);
    }
  }

  // When check
  [type="radio"]:checked + label {
    .title {
      color: darken($color: $action-color, $amount: 5);
    }
    .description {
      color: darken($color: $action-color, $amount: 10);
    }
  }

  .selected {
    background: lighten($color: $action-color, $amount: 30);
    border: 1px solid lighten($color: $action-color, $amount: 15);
    // margin: -1px;
    // position: relative;
    // z-index: 1;
  }
}
</style>
