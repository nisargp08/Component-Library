<template>
  <!-- Circular avatars with initials -->
  <div class="circular-intials">
    <div class="circular-initials circular-initials-xs">
      <p>NP</p>
    </div>
    <div class="circular-initials circular-initials-sm">
      <p>NP</p>
    </div>
    <div class="circular-initials circular-initials-md">
      <p>NP</p>
    </div>
    <div class="circular-initials circular-initials-lg">
      <p>NP</p>
    </div>
    <div class="circular-initials circular-initials-xl">
      <p>NP</p>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
// Variables
$bg-color: #94a3b8;
$text-color: white;

.circular-initials {
  width: 3rem;
  height: 3rem;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 9999px;
  background-color: $bg-color;
  color: $text-color;
  font-weight: 600;
}
.circular-initials-xs {
  width: 2rem;
  height: 2rem;
}
.circular-initials-sm {
  width: 2.5rem;
  height: 2.5rem;
}
.circular-initials-md {
  width: 3rem;
  height: 3rem;
}
.circular-initials-lg {
  width: 3.5rem;
  height: 3.5rem;
}
.circular-initials-xl {
  width: 4rem;
  height: 4rem;
}
</style>
