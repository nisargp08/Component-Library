<template>
  <!-- Circular Avatars -->
  <div class="circular-avatars">
    <div class="circular-avatar circular-avatar-xs">
      <img src="@/assets/images/eren-kruger.png" alt="" />
    </div>
    <div class="circular-avatar circular-avatar-sm">
      <img src="@/assets/images/eren-kruger.png" alt="" />
    </div>
    <div class="circular-avatar circular-avatar-md">
      <img src="@/assets/images/eren-kruger.png" alt="" />
    </div>
    <div class="circular-avatar circular-avatar-lg">
      <img src="@/assets/images/eren-kruger.png" alt="" />
    </div>
    <div class="circular-avatar circular-avatar-xl">
      <img src="@/assets/images/eren-kruger.png" alt="" />
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.circular-avatar {
  display: inline-flex;

  img {
    width: 3rem;
    height: 3rem;
    border-radius: 9999px;
    object-fit: cover;
  }
}

.circular-avatar-xs {
  img {
    width: 2rem;
    height: 2rem;
  }
}

.circular-avatar-sm {
  img {
    width: 2.5rem;
    height: 2.5rem;
  }
}

.circular-avatar-md {
  img {
    width: 3rem;
    height: 3rem;
  }
}

.circular-avatar-lg {
  img {
    width: 3.5rem;
    height: 3.5rem;
  }
}

.circular-avatar-xl {
  img {
    width: 4rem;
    height: 4rem;
  }
}
</style>
