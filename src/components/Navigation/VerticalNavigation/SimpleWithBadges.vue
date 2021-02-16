<template>
<div>
    <div class="vertical-navigation">
        <a class="nav-links active" href="#">
            Dashboard
            <span class="badge">5</span>
        </a>
        <a class="nav-links" href="#">Team</a>
        <a class="nav-links" href="#">
            Projects
            <span class="badge">18</span>
        </a>
        <a class="nav-links" href="#">
            Calendar
            <span class="badge">25+</span>
        </a>
        <a class="nav-links" href="#">Documents</a>
        <a class="nav-links" href="#">Reports</a>
    </div>
</div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
// Variables
$font-color : $text-gray-500;
$active-bg-color : lighten($theme-color, 30%);
$active-font-color : $theme-color;

$badge-bg : $text-gray-100;
$badge-font-color : $text-gray-600;
$active-badge-bg : white;
$active-badge-font-color : $text-gray-700;

.vertical-navigation {
    display: flex;
    flex-direction: column;
    width: 100%;
    max-width: 16rem;

    .nav-links {
        display: flex;
        align-items: center;
        flex-wrap: wrap;
        justify-content: space-between;
        font-size: 0.875rem;
        line-height: 1.5rem;
        font-weight: 600;
        color: $font-color;
        border-radius: 4px;
        padding: 0.5rem 1rem;
        margin-top: 0.25rem;
        transition: all .15s ease-in-out;

        // Active state
        &.active {
            background-color: $active-bg-color;
            color: $active-font-color;
            font-weight: 700;

            .badge {
                background-color: $active-badge-bg;
                color: $active-badge-font-color;
            }
        }

        // Hover State
        &:hover {
            color: $active-font-color;
            background-color: $active-bg-color;

            .badge {
                background-color: $active-badge-bg;
                color: $active-badge-font-color;
            }
        }
    }

    .badge {
        display: inline-block;
        padding: 0 0.75rem;
        border-radius: 9999px;
        font-size: 0.75rem;
        font-weight: 600;
        background-color: $badge-bg;
        color: $badge-font-color;
    }
}
</style>
