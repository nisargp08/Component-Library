<template>
  <!-- Toggle with icon -->
  <div>
    <div class="toggle">
      <input type="checkbox" id="i-switch" checked />
      <label class="switch" for="i-switch">
        <span class="box-status">
          <!-- 'Cancel' icon - class 'cancel' required for icon change on check -->
          <svg
            class="svg-icon cancel"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="4"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
          <!-- 'Check' icon - class 'check' required for icon change on uncheck -->
          <svg
            class="svg-icon check"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="4"
              d="M5 13l4 4L19 7"
            />
          </svg>
        </span>
      </label>
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
$toggle-radius: $toggle-height / 2;
$toggle-control-size: $toggle-height - ($toggle-gutter * 2);
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

  input:checked {
    ~ .switch {
      background-color: $toggle-background-color-on;
      .box-status {
        left: $toggle-width - $toggle-control-size - ($toggle-gutter * 2);

        .cancel {
          display: none;
        }
        .check {
          display: block;
          color: $toggle-background-color-on;
        }
      }
    }
  }
  .switch {
    display: flex;
    align-items: center;
    cursor: pointer;
    height: $toggle-height;
    width: $toggle-width;
    border-radius: $toggle-radius;
    background-color: $toggle-background-color-off;
    transition: background-color $toggle-control-speed $toggle-control-ease;
  }
  .box-status {
    display: flex;
    align-items: center;
    position: relative;
    left: 0; //for smooth transition
    justify-content: center;
    padding: 3px;
    margin-left: $toggle-gutter;
    width: $toggle-control-size;
    height: $toggle-control-size;
    border-radius: $toggle-radius;
    background: $toggle-control-color;
    transition: left $toggle-control-speed $toggle-control-ease;
  }
  .svg-icon {
    color: $text-gray-400;
    width: 1rem;
    height: 1rem;
  }
  .check {
    display: none;
  }
}
</style>
