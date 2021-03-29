<template>
<div class="site-footer">
    <p>Designed by <a class="tailwind" href="https://github.com/tailwindlabs" target="_blank">Tailwind Labs</a> made with 💖‍ by <a href="https://www.github.com/nisargp08" target="_blank">Nisarg Patel</a></p>
</div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
$tailwind-color : #21d0ee;

.site-footer {
    font-size: 0.875rem;
    line-height: 1.25rem;
    font-weight: 500;
    text-align: center;
    margin-top: 4rem;
    padding: 1rem;
    padding-bottom: 0;
    border-top: 1px solid $text-gray-200;

    a {
        color: $theme-color;
    }

    .tailwind {
        color: $tailwind-color;
    }
}
</style>
