<template>
<div>
    <div class="breadcrumbs">
        <a @keydown.enter.exact="routeTo(index)" @click="routeTo(index)" :tabindex="[!!breadcrumb.link ? 1 : '']" v-for="(breadcrumb,index) in breadcrumbList" :key="index" :class="{'active' : !!breadcrumb.link}">
            <template v-if="breadcrumb.name == 'Home'">
                <svg class="w-6 h-6 flex-shrink-0 mr-2" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                </svg>
            </template>
            <template>
                {{ breadcrumb.name }}
            </template>
        </a>
    </div>
</div>
</template>

<script>
export default {
    name: "SiteBreadcrumbs",
    data() {
        return {
            breadcrumbList: [],
        }
    },
    mounted() {
        this.updateList();
    },
    watch: {
        '$route'() {
            this.updateList();
        }
    },
    methods: {
        // Updates current routes breadcrumbs
        updateList() {
            this.breadcrumbList = this.$route.meta.breadcrumb;
        },
        // Router redirect on click
        routeTo(index) {
            // If link present
            if (this.breadcrumbList[index].link) {
                // Then redirect to that link
                this.$router.push({
                    path: this.breadcrumbList[index].link,
                })
            }
        }
    },
}
</script>

<style lang="scss" scoped>
// Variables
$font-color : $text-gray-500;
$active-color : $theme-color;

// Component css
.w-6 {
    width: 1.5rem;
}

.h-6 {
    height: 1.5rem;
}

.flex-shrink-0 {
    flex-shrink: 0;
}

.breadcrumbs {
    position: relative;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    color: $font-color;
    font-weight: 600;
    font-size: 0.875rem;
    line-height: 1.25rem;
    padding: 0.5rem 0;
    margin-bottom: 1rem;
    border-bottom: 1px solid $text-gray-200;
    row-gap: 0.75rem;

    > :not(:first-child) {
        position: relative;

        &::before {
            content: url('../../assets/images/chevron-right.svg');
            display: inline-block;
            opacity: 0.5;
            margin-left: 0.5rem;
            margin-right: 0.5rem;
            width: 1rem;
            height: 1rem;
            color: $font-color;
        }
    }

    >* {
        display: flex;
        align-items: center;
        cursor: default;
        transition: all .15s ease-in-out;

        &.active {
            color: $active-color;
            font-weight: 700;
            cursor: pointer;
        }
    }
}
</style>
