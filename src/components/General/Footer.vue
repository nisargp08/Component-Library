<template>
  <div class="site-footer">
      <p>Made with ❤️‍ by <a href="https://www.github.com/nisargp08" target="_blank">Nisarg Patel</a></p>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
.site-footer{
    font-size: 0.875rem;
    line-height : 1.25rem;
    font-weight: 600;
    text-align: center;
    margin-top: 4rem;
    padding: 1rem;
    padding-bottom: 0;
    border-top: 1px solid $text-gray-200;

    a{
        color: $theme-color;
    }
}
</style>