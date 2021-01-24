<template>
  <div class="grouped-stacked">
    <div class="avatar-group avatar-group-sm">
      <img
        src="https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MTB8fGF2YXRhcnN8ZW58MHx8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=256&q=60"
        alt=""
      />
      <img
        src="https://images.unsplash.com/photo-1607746882042-944635dfe10e?ixid=MXwxMjA3fDB8MHxzZWFyY2h8Mzd8fGF2YXRhcnN8ZW58MHx8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=256&q=60"
        alt=""
      />
      <img
        src="https://images.unsplash.com/photo-1599566150163-29194dcaad36?ixid=MXwxMjA3fDB8MHxzZWFyY2h8NDJ8fGF2YXRhcnN8ZW58MHx8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=256&q=60"
        alt=""
      />
      <img
        src="https://images.unsplash.com/photo-1569913486515-b74bf7751574?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=256&q=80"
        alt=""
      />
    </div>
    <div class="avatar-group avatar-group-md">
      <img
        src="https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MTB8fGF2YXRhcnN8ZW58MHx8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=256&q=60"
        alt=""
      />
      <img
        src="https://images.unsplash.com/photo-1607746882042-944635dfe10e?ixid=MXwxMjA3fDB8MHxzZWFyY2h8Mzd8fGF2YXRhcnN8ZW58MHx8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=256&q=60"
        alt=""
      />
      <img
        src="https://images.unsplash.com/photo-1599566150163-29194dcaad36?ixid=MXwxMjA3fDB8MHxzZWFyY2h8NDJ8fGF2YXRhcnN8ZW58MHx8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=256&q=60"
        alt=""
      />
      <img
        src="https://images.unsplash.com/photo-1569913486515-b74bf7751574?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=256&q=80"
        alt=""
      />
    </div>
    <div class="avatar-group avatar-group-lg">
      <img
        src="https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MTB8fGF2YXRhcnN8ZW58MHx8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=256&q=60"
        alt=""
      />
      <img
        src="https://images.unsplash.com/photo-1607746882042-944635dfe10e?ixid=MXwxMjA3fDB8MHxzZWFyY2h8Mzd8fGF2YXRhcnN8ZW58MHx8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=256&q=60"
        alt=""
      />
      <img
        src="https://images.unsplash.com/photo-1599566150163-29194dcaad36?ixid=MXwxMjA3fDB8MHxzZWFyY2h8NDJ8fGF2YXRhcnN8ZW58MHx8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=256&q=60"
        alt=""
      />
      <img
        src="https://images.unsplash.com/photo-1569913486515-b74bf7751574?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=256&q=80"
        alt=""
      />
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
// Container css - not required for component function
.grouped-stacked {
  flex-direction: column;
  align-items: flex-start;
  @media (min-width: 768px) {
    flex-direction: row;
    align-items: center;
  }
}
// Component css - starts
$ringColor: #b5b5b5;
// Default Group
.avatar-group {
  display: flex;
  overflow: hidden;
  > *:not(:first-child) {
    margin-left: -0.5rem;
  }
  img {
    display: inline-block;
    width: 2rem;
    height: 2rem;
    object-fit: cover;
    border-radius: 9999px;
    border: 2px solid $ringColor;
  }
}
// Small Group
.avatar-group-sm {
  img {
    width: 1.5rem;
    height: 1.5rem;
  }
}
// Medium Group
.avatar-group-md {
  img {
    width: 2rem;
    height: 2rem;
  }
}
// Large Group
.avatar-group-lg {
  img {
    width: 2.5rem;
    height: 2.5rem;
  }
}
</style>
