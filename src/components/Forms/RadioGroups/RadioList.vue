<template>
  <!-- Radio group as a list -->
  <div>
    <div class="radio-group">
      <div
        :class="toggleSelected(list.value)"
        v-for="(list, index) in radioList"
        :key="index"
        class="flex items-start transition-15"
      >
        <div class="input-wrapper">
          <input
            v-model="checkedValue"
            class="mt-1"
            type="radio"
            :name="list.name"
            :id="list.value"
            :value="list.value"
          />
        </div>
        <label :for="list.value">
          <span class="title">{{ list.title }}</span>
          <span class="description">{{ list.description }}</span>
        </label>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      checkedValue: "public",
      radioList: [
        {
          title: "Public access",
          description:
            "This project would be available to anyone who has the link",
          value: "public",
          name: "access",
        },
        {
          title: "Private to Project Members",
          description: "Only members of this project would be able to access",
          value: "private-mem",
          name: "access",
        },
        {
          title: "Private to you",
          description: "You are the only one able to access this project",
          value: "private",
          name: "access",
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
$card-bg: white;
$card-border-color: $text-gray-200;
$description-color: $text-gray-500;
$max-width: 48rem;

// Component CSS
.flex {
  display: flex;
}

.items-start {
  align-items: start;
}
.transition-15 {
  transition: background-color 0.15s ease-in-out;
}
.mt-1 {
  margin-top: 0.25rem;
}

.radio-group {
  background: $card-bg;
  border-radius: 0.375rem;
  border: 1px solid $card-border-color;
  max-width: $max-width;
  width: 100%;

  // ALl children except the first one
  > * + * {
    border-top: 1px solid $card-border-color;
  }

  // First child rounded border radius on top
  > :first-child {
    border-top-left-radius: 0.375rem;
    border-top-right-radius: 0.375rem;
  }

  // Last child rounded border radius on bottom
  > :last-child {
    border-bottom-left-radius: 0.375rem;
    border-bottom-right-radius: 0.375rem;
  }
  .input-wrapper {
    padding: 1rem 0 1rem 1.25rem;
  }
  label {
    font-size: 0.875rem;
    line-height: 1.25rem;
    width: 100%;
    cursor: pointer;
    padding: 1rem 1.25rem 1rem 0.75rem;
  }

  .title {
    font-weight: 600;
    display: block;
  }

  .description {
    display: block;
    color: $description-color;
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
      color: darken($color: $action-color, $amount: 0);
    }

    .description {
      color: lighten($color: $action-color, $amount: 5);
    }
  }

  .selected {
    background: lighten($color: $action-color, $amount: 30);
    border: 1px solid lighten($color: $action-color, $amount: 15);
    margin: -1px;
    position: relative;
    z-index: 1;
  }
}
</style>
