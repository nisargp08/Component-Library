<template>
  <div class="avatar-with-text">
    <img
      src="https://images.unsplash.com/photo-1569913486515-b74bf7751574?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=256&q=80"
      alt=""
    />
    <div>
      <p class="text-title">Jane Doe</p>
      <p class="text-description">View Profile</p>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
// Variables
$primary-text-color: #334155;
$secondary-text-color: #475569;
.avatar-with-text {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  column-gap: 0.75rem;
  justify-content: center;
  img {
    width: 3rem;
    height: 3rem;
    border-radius: 9999px;
    object-fit: cover;
  }
  .text-title {
    color: $primary-text-color;
    font-weight: 600;
    font-size: 1.125rem;
  }
  .text-description {
    color: $secondary-text-color;
    font-size: 0.85rem;
  }
}
</style>
