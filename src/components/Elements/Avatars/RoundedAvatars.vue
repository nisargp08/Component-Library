<template>
  <!-- Rounded avatars -->
  <div class="rounded-avatars">
    <div class="rounded-avatar rounded-avatar-xs">
      <img src="@/assets/images/eren-kruger.png" alt="" />
    </div>
    <div class="rounded-avatar rounded-avatar-sm">
      <img src="@/assets/images/eren-kruger.png" alt="" />
    </div>
    <div class="rounded-avatar rounded-avatar-md">
      <img src="@/assets/images/eren-kruger.png" alt="" />
    </div>
    <div class="rounded-avatar rounded-avatar-lg">
      <img src="@/assets/images/eren-kruger.png" alt="" />
    </div>
    <div class="rounded-avatar rounded-avatar-xl">
      <img src="@/assets/images/eren-kruger.png" alt="" />
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.rounded-avatar {
  display: inline-flex;

  img {
    width: 3rem;
    height: 3rem;
    border-radius: 0.5rem;
    object-fit: cover;
  }
}
.rounded-avatar-xs {
  img {
    width: 2rem;
    height: 2rem;
  }
}
.rounded-avatar-sm {
  img {
    width: 2.5rem;
    height: 2.5rem;
  }
}
.rounded-avatar-md {
  img {
    width: 3rem;
    height: 3rem;
  }
}
.rounded-avatar-lg {
  img {
    width: 3.5rem;
    height: 3.5rem;
  }
}
.rounded-avatar-xl {
  img {
    width: 4rem;
    height: 4rem;
  }
}
</style>
