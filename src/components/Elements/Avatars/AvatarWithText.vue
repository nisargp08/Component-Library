<template>
  <!-- Avatar with text -->
  <div class="avatar-with-text">
    <img src="@/assets/images/eren-kruger.png" alt="" />
    <div>
      <p class="text-title">Eren Kruger</p>
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

div.avatar-with-text {
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
    font-weight: 500;
    font-size: 1rem;
    line-height: 1.5rem;
  }
  .text-description {
    color: $secondary-text-color;
    font-size: 0.875rem;
    line-height: 1.25rem;
  }
}
</style>
