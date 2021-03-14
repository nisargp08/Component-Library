<template>
  <div class="circular-avatars-placeholder">
    <div class="circular-avatar-placeholder circular-avatar-placeholder-xs">
      <img src="../../../assets/images/placeholder-avatar.svg" alt="" />
    </div>
    <div class="circular-avatar-placeholder circular-avatar-placeholder-sm">
      <img src="../../../assets/images/placeholder-avatar.svg" alt="" />
    </div>
    <div class="circular-avatar-placeholder circular-avatar-placeholder-md">
      <img src="../../../assets/images/placeholder-avatar.svg" alt="" />
    </div>
    <div class="circular-avatar-placeholder circular-avatar-placeholder-lg">
      <img src="../../../assets/images/placeholder-avatar.svg" alt="" />
    </div>
    <div class="circular-avatar-placeholder circular-avatar-placeholder-xl">
      <img src="../../../assets/images/placeholder-avatar.svg" alt="" />
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
// Variables
$bg-color: #e2e8f0;
$icon-color: #94a3b8;

.circular-avatar-placeholder {
  display: inline-flex;
  background: $bg-color;
  border-radius: 9999px;
  padding: 0.5rem;
  img {
    width: 2rem;
    height: 2rem;
    border-radius: 9999px;
    object-fit: cover;
  }
}
.circular-avatar-placeholder-xs {
  img {
    width: 1rem;
    height: 1rem;
  }
}
.circular-avatar-placeholder-sm {
  img {
    width: 1.5rem;
    height: 1.5rem;
  }
}
.circular-avatar-placeholder-md {
  img {
    width: 2rem;
    height: 2rem;
  }
}
.circular-avatar-placeholder-lg {
  img {
    width: 2.5rem;
    height: 2.5rem;
  }
}
.circular-avatar-placeholder-xl {
  img {
    width: 3rem;
    height: 3rem;
  }
}
</style>
