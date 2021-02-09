<template>
<div class="pagination">
    <div class="left">
        <a href="#">
            <svg class="w-5 h-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 16l-4-4m0 0l4-4m-4 4h18" />
            </svg>
            <span class="ml-2">Previous</span>
        </a>
    </div>
    <div class="center">
        <ul class="pagination-buttons">
        <li><a class="page-link" href="#">1</a></li>
        <li><a class="page-link" href="#">2</a></li>
        <li><a class="page-link" href="#">3</a></li>
        <li class="active"><a class="page-link" href="#">4</a></li>
        <li><a class="page-link" href="#">5</a></li>
        <li><a class="page-link" href="#">6</a></li>
        <li><a class="page-link" href="#">7</a></li>
    </ul>
    </div>
    <div class="right">
        <a href="#">
            <span class="mr-2">Next</span>
            <svg class="w-5 h-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
        </a>
    </div>
</div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
$font-color: $text-gray-500;
$border-color: $text-gray-300;
$active-text-color: $theme-color;
$active-border-color : $theme-color;

.pagination {
    display: flex;
    align-items: center;
    max-width: 100%;
    align-self: flex-end;
    flex-wrap: wrap;
    margin: 1.5rem;
    justify-content: space-between;
    background-color: white;
    border-top: 1px solid $border-color;
}

// Component css
.w-5 {
    width: 1.25rem;
}

.h-5 {
    height: 1.25rem;
}

.ml-2 {
    margin-left: 0.5rem;
}

.mr-2 {
    margin-right: 0.5rem;
}

// Containers
.left,
.right {

    color: $font-color;
    font-weight: 600;
    transition: color .15s ease-in-out;
    a,
    button {
        display: flex;
        align-items: center;
    }

    &:hover{
        color: $active-text-color;
    }
}

.pagination-buttons {
    display: flex;
    list-style: none;
    padding-left: 0;
    margin: 0;
    color: $font-color;

    >* {
        display: none; //When the list is too big to display in mobile
        border-top: 3px solid transparent;
        @media (min-width: 640px) {
            display: block;
        }

        &.active {
            color: $active-text-color;
            font-weight: 600;
            display: block; //Visible on mobile by default
            border-color:$active-border-color;
            &:hover {
                background: transparent;
            }
        }

        &:first-child {
            display: block; //Visible on mobile by default
        }

        &:last-child {
            display: block; //Visible on mobile by default
        }
    }

    .page-link {
        font-size: 1rem;
        display: block;
        padding: 1.25rem 1rem;
        text-align: center;
    }
}
</style>
