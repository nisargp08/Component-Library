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
$toggle-control-color: white;
$toggle-width: 40px;
$toggle-height: 18px;
$toggle-gutter: -1px;
$toggle-radius: 50%;
$toggle-control-speed: 0.15s;
$toggle-control-ease: ease-in;
$shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
// These are our computed variables
// change at your own risk.
$toggle-radius: $toggle-height / 2;
$toggle-control-size: $toggle-height - ($toggle-gutter * 2);

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

  input:checked ~ .switch {
    background-color: $toggle-background-color-on;

    &:after {
      left: $toggle-width - $toggle-control-size - $toggle-gutter;
    }
  }
  .switch {
    position: absolute;
    top: 0;
    left: 0;
    cursor: pointer;
    height: $toggle-height;
    width: $toggle-width;
    border-radius: $toggle-radius;
    background-color: $toggle-background-color-off;
    transition: background-color $toggle-control-speed $toggle-control-ease;

    &:after {
      content: "";
      position: absolute;
      left: $toggle-gutter;
      top: -2px;
      border: 2px solid $toggle-background-color-off;
      width: $toggle-control-size;
      height: $toggle-control-size;
      border-radius: 50%;
      background: $toggle-control-color;
      transition: left $toggle-control-speed $toggle-control-ease;
    }
  }
}
</style>
