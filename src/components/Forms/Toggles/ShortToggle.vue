<template>
  <!-- Short toggle -->
  <div>
    <div class="toggle">
      <input type="checkbox" id="s-switch" checked />
      <label class="switch" for="s-switch"></label>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
$toggle-background-color-on: $theme-color;
$toggle-background-color-off: $text-gray-300;
$toggle-width: 2.5rem;
$toggle-height: 1rem;
$toggle-radius: 9999px;

$toggle-control-color: white;
$toggle-control-size : $toggle-height + 0.25rem;
$toggle-control-top : -3px;
$toggle-control-shadow : $shadow-md;
$toggle-control-speed: 0.15s;
$toggle-control-ease: ease-in;

.toggle {
  display: block;
  position: relative;
  padding-left: $toggle-width;
  margin-bottom: 12px;
  cursor: pointer;
  font-size: 22px;
  user-select: none;

  input {
    position: absolute;
    opacity: 0;
    cursor: pointer;
    height: 0;
    width: 0;
  }

  input:checked ~ .switch{
    background-color: $toggle-background-color-on;

    &::after{
      left: $toggle-width - $toggle-control-size;
    }
  }
  .switch {
    position: absolute;
    top: 0;
    left: 0;
    cursor: pointer;
    width: $toggle-width;
    height: $toggle-height;
    border-radius: $toggle-radius;
    background-color: $toggle-background-color-off;
    transition: background-color $toggle-control-speed $toggle-control-ease;

    &::after {
      content: "";
      top: $toggle-control-top;
      left: 0;
      position: absolute;
      width: $toggle-control-size;
      height: $toggle-control-size;
      border-radius: $toggle-radius;
      background-color: $toggle-control-color;
      border: 1px solid $toggle-background-color-off;
      box-shadow: $toggle-control-shadow;
      transition: left $toggle-control-speed $toggle-control-ease;
    }
  }
}
</style>
