<template>
  <!-- Simple vertical navigation with secondary navigation -->
  <div>
    <div class="vertical-navigation">
      <a class="nav-links active" href="#">
        <div class="flex align-center">
          <svg
            class="w-6 h-6"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
            />
          </svg>
          <span class="ml-3">Dashboard</span>
        </div>
        <div></div>
      </a>
      <a class="nav-links" href="#">
        <div class="flex align-center">
          <svg
            class="w-6 h-6"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
            />
          </svg>
          <span class="ml-3">Team</span>
        </div>
      </a>
      <a class="nav-links" href="#">
        <div class="flex align-center">
          <svg
            class="w-6 h-6"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z"
            />
          </svg>
          <span class="ml-3">Projects</span>
        </div>
      </a>
      <a class="nav-links" href="#">
        <div class="flex align-center">
          <svg
            class="w-6 h-6"
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
          <span class="ml-3">Calendar</span>
        </div>
      </a>
      <a class="nav-links" href="#">
        <div class="flex align-center">
          <svg
            class="w-6 h-6"
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
          <span class="ml-3">Documents</span>
        </div>
      </a>
      <a class="nav-links" href="#">
        <div class="flex align-center">
          <svg
            class="w-6 h-6"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M16 8v8m-4-5v5m-4-2v2m-2 4h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
            />
          </svg>
          <span class="ml-3">Reports</span>
        </div>
      </a>
      <div class="secondary-navigation">
        <p class="heading">projects</p>
        <a class="nav-links" href="#">Website redesign</a>
        <a class="nav-links active" href="#">GraphQL API</a>
        <a class="nav-links" href="#">Customer migration guides</a>
        <a class="nav-links" href="#">Profit sharing program</a>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
// Variables
$font-color: $text-gray-500;
$active-bg-color: lighten($theme-color, 30%);
$active-font-color: $theme-color;
$border-color: $text-gray-200;

// Utilities
.w-6 {
  width: 1.5rem;
}

.h-6 {
  height: 1.5rem;
}

.flex {
  display: flex;
}

.align-center {
  align-items: center;
}

.ml-3 {
  margin-left: 0.75rem;
}

.vertical-navigation {
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 16rem;

  .nav-links {
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    justify-content: space-between;
    font-size: 0.875rem;
    line-height: 1.25rem;
    font-weight: 500;
    color: $font-color;
    border-radius: 4px;
    padding: 0.5rem 1rem;
    margin-top: 0.25rem;
    transition: all 0.15s ease-in-out;

    // Active state
    &.active {
      background-color: $active-bg-color;
      color: $active-font-color;
      font-weight: 600;
    }

    // Hover State
    &:hover,&:focus {
      outline: none;
      color: $active-font-color;
      background-color: $active-bg-color;
    }
  }

  .secondary-navigation {
    margin-top: 1rem;
    border-top: 1px solid $border-color;

    .heading {
      text-transform: uppercase;
      font-weight: 600;
      font-size: 0.75rem;
      line-height: 1rem;
      letter-spacing: 0.05em;
      padding: 1rem;
      padding-bottom: 0.5rem;
    }

    .nav-links {
      padding-top: 0.25rem;
      padding-bottom: 0.25rem;

      // Active state
      &.active {
        background-color: transparent;
      }

      // Hover State
      &:hover,&:focus {
        background-color: transparent;
      }
    }
  }
}
</style>
