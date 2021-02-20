<template>
  <div class="circular-top-notifications">
    <div class="circular-top-notification circular-top-notification-xs">
      <img
        src="https://images.unsplash.com/photo-1569913486515-b74bf7751574?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=256&q=80"
        alt=""
      />
      <span class="notification-dot"></span>
    </div>
    <div class="circular-top-notification circular-top-notification-sm">
      <img
        src="https://images.unsplash.com/photo-1569913486515-b74bf7751574?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=256&q=80"
        alt=""
      />
      <span class="notification-dot"></span>
    </div>
    <div class="circular-top-notification circular-top-notification-md">
      <img
        src="https://images.unsplash.com/photo-1569913486515-b74bf7751574?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=256&q=80"
        alt=""
      />
      <span class="notification-dot"></span>
    </div>
    <div class="circular-top-notification circular-top-notification-lg">
      <img
        src="https://images.unsplash.com/photo-1569913486515-b74bf7751574?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=256&q=80"
        alt=""
      />
      <span class="notification-dot"></span>
    </div>
    <div class="circular-top-notification circular-top-notification-xl">
      <img
        src="https://images.unsplash.com/photo-1569913486515-b74bf7751574?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=256&q=80"
        alt=""
      />
      <span class="notification-dot"></span>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
// Variables
$bg-gray: #ccc;
$bg-green: #28a745;
$bg-red: #dc3545;
$ringColor: white;

.circular-top-notification {
  position: relative;
  img {
    width: 3rem;
    height: 3rem;
    border-radius: 9999px;
    object-fit: cover;
  }
  .notification-dot {
    position: absolute;
    right: 1px;
    top: -2px;
    width: 0.65rem;
    height: 0.65rem;
    border-radius: 9999px;
    background: $bg-green;
    border: 2px solid $ringColor;
  }
}
.circular-top-notification-xs {
  img {
    width: 2rem;
    height: 2rem;
  }
  .notification-dot {
    width: 0.45rem;
    height: 0.45rem;
    background: $bg-gray;
  }
}
.circular-top-notification-sm {
  img {
    width: 2.5rem;
    height: 2.5rem;
  }
  .notification-dot {
    width: 0.55rem;
    height: 0.55rem;
    background: $bg-green;
  }
}
.circular-top-notification-md {
  img {
    width: 3rem;
    height: 3rem;
  }
  .notification-dot {
    width: 0.65rem;
    height: 0.65rem;
    background: $bg-red;
  }
}
.circular-top-notification-lg {
  img {
    width: 3.5rem;
    height: 3.5rem;
  }
  .notification-dot {
    width: 0.75rem;
    height: 0.75rem;
    background: $bg-gray;
  }
}
.circular-top-notification-xl {
  img {
    width: 4rem;
    height: 4rem;
  }
  .notification-dot {
    width: 0.90rem;
    height: 0.90rem;
    background: $bg-green;
  }
}
</style>
