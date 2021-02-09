<template>
<nav class="navbar light">
    <div class="wrapper">
        <div class="sub-wrapper">
            <div class="multi-wrapper">
                <div class="flex align-center">
                    <div class="logo-wrapper">
                        <img src="@/assets/images/brand-logo-black.png" alt="Logo" />
                    </div>
                    <!-- Search -->
                    <div class="action-item search-action-item ml-3 flex-1 mobile">
                        <form action="#">
                            <div class="search-group">
                                <div class="search-icon">
                                    <svg class="w-4 h-4 text-gray-700" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                                    </svg>
                                </div>
                                <input type="text" placeholder="Search" name="search" id="search">
                            </div>
                        </form>
                    </div>
                    <!-- Collapse button for mobile -->
                    <div class="button-wrapper ml-3">
                        <button @click="isMenuOpen = !isMenuOpen" class="btn btn-transparent">
                            <!-- When menu is closed -->
                            <svg v-if="!isMenuOpen" class="w-6 h-6 text-gray-700" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
                            </svg>
                            <!-- When menu is opened -->
                            <svg v-if="isMenuOpen" class="w-6 h-6 text-gray-700" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </button>
                    </div>
                </div>
                <div class="links-wrapper" :class="[isMenuOpen ? 'flex' : 'hidden']">
                    <a href="#" class="active">Dashboard</a>
                    <a href="#">Team</a>
                    <a href="#">Projects</a>
                    <a href="#">Calendar</a>
                </div>
            </div>
            <div class="action-wrapper pr-2">
                <!-- Search -->
                <div class="action-item search-action-item ml-3 flex-1 desktop">
                    <form action="#">
                        <div class="search-group">
                            <div class="search-icon">
                                <svg class="w-4 h-4 text-gray-700" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                                </svg>
                            </div>
                            <input type="text" placeholder="Search" name="search" id="search">
                        </div>
                    </form>
                </div>
                <div class="flex align-center justify-between r-width">
                    <!-- Notification -->
                    <div class="action-item ml-3 self-start">
                        <button class="btn btn-transparent btn-round">
                            <svg class="w-6 h-6 text-gray-700" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
                            </svg>
                        </button>
                    </div>
                    <!-- User avatar -->
                    <div class="action-item avatar-action-item ml-3">
                        <div class="user-info">
                            <button @click="isUserDropdown = !isUserDropdown" class="btn btn-transparent btn-avatar" :class="{ 'avatar-ring': isUserDropdown }">
                                <img src="@/assets/images/eren-kruger.png" alt="" />
                                <svg class="w-4 h-4 text-gray-700 px-1" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
                                </svg>
                            </button>
                            <div class="text-wrapper">
                                <p class="text-title">Eren Kruger</p>
                                <p class="text-description">Undercover@eldian.com</p>
                            </div>
                        </div>
                        <div class="dropdown-overlay" @click="isUserDropdown = false" v-if="isUserDropdown"></div>

                        <transition-fade>
                            <div class="action-item-dropdown" v-if="isUserDropdown">
                                <a href="#">Signed in as <b>Eren Kruger</b></a>
                                <a href="#">Your Profile</a>
                                <a href="#">Settings</a>
                                <a href="#">Sign out</a>
                            </div>
                        </transition-fade>
                    </div>
                </div>
            </div>
        </div>
    </div>
</nav>
</template>

<script>
import TransitionFade from "@general/TransitionFade.vue";
export default {
    data() {
        return {
            isUserDropdown: false,
            isMenuOpen: false,
        };
    },
    components: {
        TransitionFade,
    },
};
</script>

<style lang="scss" scoped>
* {
    --animate-duration: 250ms;
}

// Variables
$bg-color: white;
$font-color: $text-gray-600;
$action-color : $theme-color;
$action-hover-color : $text-gray-200;
$action-font-color : $text-gray-50;

// Utilities
.text-gray-700 {
    color: $text-gray-700;
}

.ml-2 {
    margin-left: 0.5rem;
}

.pr-2 {
    padding-right: 0.5rem;
}

.px-1 {
    padding-left: 0.25rem;
    padding-right: 0.25rem;
}

// Component css
.flex {
    display: flex;
}

.align-center {
    align-items: center;
}

.flex-1 {
    flex: 1;
    -ms-flex: 1;
}
.self-start{
    align-self: flex-start;
}
.justify-between{
    justify-content: space-between;
}
.r-width{
    width : 100%;
    @media (min-width : 640px){
        width : auto;
    }
}
.navbar {
    display: block;
    width: 100%;
    max-width: 100%;
    box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);

    // Buttons
    .btn-transparent {
        background-color: transparent;
        border: none;
        padding: 0.5rem;

        &:focus {
            box-shadow: 0 0 0 0.15rem rgba($color: $action-color, $alpha: 0.5);
        }
    }

    .btn-round {
        border-radius: 9999px;
    }

    .btn-avatar {
        padding: 0;
        border-radius: 9999px;
        flex-shrink: 0;
        display: flex;
        align-items: center;

        img {
            width: 2rem;
            height: 2rem;
            border-radius: 9999px;
            object-fit: cover;
        }

        &:focus {
            box-shadow: none;
        }

        // When active
        &.avatar-ring {
            box-shadow: 0 0 0 0.15rem rgba($color: $action-color, $alpha: 1);
        }
    }

    // Scheme
    &.light {
        background-color: $bg-color;
        color: $font-color;
    }

    // Wrapper
    .wrapper {
        padding-left: 0.5rem;
        padding-right: 0.5rem;
    }

    //SubWrapper
    .sub-wrapper {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        position: relative;
        min-height: 4rem;

        @media(min-width : 640px) {
            flex-direction: row;
            align-items: center;
        }

        >* {
            padding-top: 0.5rem;
            padding-bottom: 0.5rem;
        }
    }

    // Logo & Links wrapper
    .multi-wrapper {
        display: flex;
        flex-direction: column;
        flex: 1;
        -ms-flex: 1;

        > :not(:first-child) {
            margin-left: 0.75rem;
        }

        @media(min-width : 640px) {
            flex-direction: row;
            align-items: center;
        }
    }

    // Collapse button
    .button-wrapper {
        @media (min-width: 640px) {
            display: none;
        }
    }

    // Logo
    .logo-wrapper {
        display: flex;
        align-items: center;
        flex-shrink: 0;

        img {
            height: 3rem;
            display: block;
            width: auto;
        }
    }

    // Search action item
    .search-action-item {
        position: relative;

        &.mobile {
            @media(min-width : 640px) {
                display: none;
            }
        }

        &.desktop {
            display: none;

            @media(min-width : 640px) {
                display: block;
            }
        }

        .search-icon {
            position: absolute;
            top: 0;
            bottom: 0;
            left: 0;
            display: flex;
            align-items: center;
            padding-left: 0.75rem;
        }

        input {
            display: block;
            width: 100%;
            padding: 0.375rem 2rem;
            font-size: 1rem;
            line-height: 1.5rem;
            border-radius: 0.5rem;
            border: 1px solid $text-gray-400;
            background-clip: padding-box;
            transition: box-shadow 0.15s ease-in-out;

            appearance: none;
            -webkit-appearance: none;
            -moz-appearance: none;

            -webkit-box-sizing: border-box;
            /* Safari/Chrome, other WebKit */
            -moz-box-sizing: border-box;
            /* Firefox, other Gecko */
            box-sizing: border-box;
            /* Opera/IE 8+ */

            &:focus {
                outline: none;
                box-shadow: 0 0 0 0.15rem rgba($color: rgba($action-color, 1), $alpha: 0.3);
                border: 1px solid $action-color;
            }
        }
    }

    // Action Buttons
    .action-wrapper {
        display: flex;
        flex-direction: row-reverse;
        justify-content: space-between;
        border-top: 1px solid darken($color: $bg-color, $amount: 20);
        padding-top: 1rem;
        padding-bottom: 1rem;

        @media(min-width : 640px) {
            border: none;
            padding-top: 0.5rem;
            padding-bottom: 0.5rem;
            align-items: center;
            flex-direction: column;

            > :nth-child(2) {
                margin-top: 0.5rem;
                align-self: flex-end;
            }
        }

        @media(min-width : 1024px) {
            flex-direction: row;

            > :nth-child(2) {
                margin-top: 0;
                align-self: flex-start;
            }
        }
    }

    // Avatar action button
    .avatar-action-item {
        position: relative;
        cursor: pointer;
        align-self: center;

        // Dropdown overlay
        .dropdown-overlay {
            display: none;

            @media(min-width : 640px) {
                position: fixed;
                display: block;
                top: 0;
                right: 0;
                left: 0;
                bottom: 0;
                background-color: transparent;
            }
        }

        // Dropdown
        .action-item-dropdown {
            margin-top: 0.5rem;

            > :first-child {
                display: none;
            }

            >* {
                display: block;
                color: $font-color;
                padding-top: 0.5rem;
                padding-bottom: 0.5rem;
                font-size: 0.875rem;
                cursor: pointer;
                font-weight: 500;
            }

            @media(min-width : 640px) {
                display: flex;
                flex-direction: column;
                position: absolute;
                right: 0;
                transform-origin: top right;
                width: 12rem;
                background-color: white;
                border-radius: 0.375rem;
                padding-top: 0.25rem;
                padding-bottom: 0.25rem;
                margin-top: 0.5rem;
                box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1),
                    0 4px 6px -2px rgba(0, 0, 0, 0.05);

                &::after {
                    position: absolute;
                    display: inline-block;
                    content: "";
                    border: 7px solid transparent;
                    border-bottom-color: white;
                    top: -14px;
                    right: 10px;
                    left: auto;
                }

                > :first-child {
                    border-bottom: 1px solid $text-gray-200;
                    margin-bottom: 0.5rem;
                    display: block;
                }

                >* {
                    color: $text-gray-700;
                    padding: 0.5rem 1rem;

                    &:hover {
                        background-color: $text-gray-100;
                    }
                }
            }
        }
    }

    // Avatar info
    .user-info {
        display: flex;

        .text-wrapper {
            margin-left: 0.75rem;

            @media (min-width: 640px) {
                display: none;
            }

            .text-title {
                color: $font-color;
                font-weight: 600;
                font-size: 1rem;
            }

            .text-description {
                color: lighten($color: $font-color, $amount: 20%);
                font-size: 0.75rem;
            }
        }
    }

    //Links menu
    .links-wrapper {
        display: flex;
        flex: 1;
        -ms-flex: 1;
        flex-direction: column;
        padding-top: 0.5rem;
        padding-bottom: 0.75rem;

        // Hidden and flex class - to hide/show wrapper
        &.flex {
            display: flex;
        }

        &.hidden {
            display: none;
        }

        // Individual links
        >* {
            padding: 0.75rem 0.5rem;
            font-size: 0.875rem;
            font-size: 1rem;
            border-radius: 0.375rem;
            font-weight: 600;
            color: $font-color;
            transition: all .15s ease-in-out;

            &:hover {
                // color: $action-font-color;
                background: $action-hover-color;
            }

            // Active
            &.active {
                color: $action-font-color;
                background: $action-color;
            }
        }

        // After 640px
        @media (min-width: 640px) {
            display: flex !important;
            flex-direction: row;
            flex-wrap: wrap;
            padding-top: 0.5rem;
            padding-bottom: 0.5rem;

            >* {
                padding: 0.5rem 1rem;
                margin: 0.375rem;
            }
        }
    }
}
</style>
