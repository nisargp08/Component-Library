<template>
  <!-- Toggle with left label and description -->
  <div>
      <div class="toggle-wrapper">
        <label for="l-switch" class="text">
          <p class="title">Available to hire</p>
          <p class="description">
            Turn this option on to let the recruiters know that you are available to
            hire
          </p>
        </label>
        <div class="toggle">
          <input type="checkbox" id="l-switch" checked />
          <label class="switch" for="l-switch"></label>
        </div>
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
$toggle-width: 50px;
$toggle-height: 25px;
$toggle-gutter: 4px;
$toggle-control-speed: 0.15s;
$toggle-control-ease: ease-in;

$toggle-radius: $toggle-height / 2;
$toggle-control-size: $toggle-height - ($toggle-gutter * 2);

div.toggle-wrapper {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem 4rem;
  justify-content: space-between;
  align-items: center;
  max-width: 42rem;
}
.text {
  .title {
    font-weight: 500;
    font-size: 1rem;
    line-height: 1.5rem;
  }
  .description {
    font-size: 0.875rem;
    line-height: 1.25rem;
    font-weight: 400;
    color: $text-gray-500;
  }
}
.toggle {
  display: block;
  position: relative;
  height: $toggle-height;
  width: $toggle-width;
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
      top: $toggle-gutter;
      width: $toggle-control-size;
      height: $toggle-control-size;
      border-radius: $toggle-radius;
      background: $toggle-control-color;
      transition: left $toggle-control-speed $toggle-control-ease;
    }
  }
}
</style>
