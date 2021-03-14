<template>
  <div class="grouped-stacked">
    <div class="avatar-group avatar-group-sm">
      <img src="@/assets/images/eren-kruger.png" alt="" />
      <img src="@/assets/images/zeke-yeager.jpg" alt="" />
      <img src="@/assets/images/eren-yeager.jpg" alt="" />
      <img src="@/assets/images/levi-ackerman.png" alt="" />
    </div>
    <div class="avatar-group avatar-group-md">
      <img src="@/assets/images/eren-kruger.png" alt="" />
      <img src="@/assets/images/zeke-yeager.jpg" alt="" />
      <img src="@/assets/images/eren-yeager.jpg" alt="" />
      <img src="@/assets/images/levi-ackerman.png" alt="" />
    </div>
    <div class="avatar-group avatar-group-lg">
      <img src="@/assets/images/eren-kruger.png" alt="" />
      <img src="@/assets/images/zeke-yeager.jpg" alt="" />
      <img src="@/assets/images/eren-yeager.jpg" alt="" />
      <img src="@/assets/images/levi-ackerman.png" alt="" />
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
  display: inline-flex;
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
