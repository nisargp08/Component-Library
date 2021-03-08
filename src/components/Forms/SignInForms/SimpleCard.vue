<template>
<div>
    <div class="sign-in-form">
        <div class="form-wrapper">
            <div>
                <img class="logo" src="@/assets/images/one-piece-logo.png" alt="" />
                <h2 class="title">Sign in to your account</h2>
                <p class="subtitle">
                    Or
                    <a href="#">start your 14-day free trial</a>
                </p>
            </div>
            <div class="form-card">
                <form action="#" class="space-y-6 text-sm">
                    <div class="space-y-6">
                        <div>
                            <label for="c-email">Email Address</label>
                            <input type="email" id="c-email" required />
                        </div>
                        <div class="-mt-1">
                            <label for="c-password">Password</label>
                            <input type="password" id="c-password" required />
                        </div>
                    </div>
                    <div class="flex items-center space-between flex-wrap">
                        <div class="flex items-center">
                            <input type="checkbox" id="c-remember-me" />
                            <label for="c-remember-me" class="ml-2">Remember me</label>
                        </div>
                        <a href="#">
                            Forgot your password?
                        </a>
                    </div>
                    <div class="space-y-6">
                        <button class="btn btn-theme">
                            <span class="lock-icon">
                                <svg class="w-5 h-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                                    <path fill-rule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clip-rule="evenodd" />
                                </svg>
                            </span>
                            <span>Sign in</span>
                        </button>
                        <p class="separator"><span>or continue with</span></p>
                        <div class="social-login">
                            <div>
                                <!-- Facebook -->
                                <button class="btn">
                                    <svg class="w-6 h-6 text-gray-600" xmlns="http://www.w3.org/2000/svg" enable-background="new 0 0 24 24" viewBox="0 0 24 24" fill="currentColor" width="18px" height="18px">
                                        <rect fill="none" height="24" width="24" />
                                        <path d="M22,12c0-5.52-4.48-10-10-10S2,6.48,2,12c0,4.84,3.44,8.87,8,9.8V15H8v-3h2V9.5C10,7.57,11.57,6,13.5,6H16v3h-2 c-0.55,0-1,0.45-1,1v2h3v3h-3v6.95C18.05,21.45,22,17.19,22,12z" />
                                    </svg>
                                </button>
                            </div>
                            <div>
                                <!-- Twitter -->
                                <button class="btn">
                                    <svg class="w-6 h-6 text-gray-600" viewBox="0 0 24 24">
                                        <path fill="currentColor" d="M22.46,6C21.69,6.35 20.86,6.58 20,6.69C20.88,6.16 21.56,5.32 21.88,4.31C21.05,4.81 20.13,5.16 19.16,5.36C18.37,4.5 17.26,4 16,4C13.65,4 11.73,5.92 11.73,8.29C11.73,8.63 11.77,8.96 11.84,9.27C8.28,9.09 5.11,7.38 3,4.79C2.63,5.42 2.42,6.16 2.42,6.94C2.42,8.43 3.17,9.75 4.33,10.5C3.62,10.5 2.96,10.3 2.38,10C2.38,10 2.38,10 2.38,10.03C2.38,12.11 3.86,13.85 5.82,14.24C5.46,14.34 5.08,14.39 4.69,14.39C4.42,14.39 4.15,14.36 3.89,14.31C4.43,16 6,17.26 7.89,17.29C6.43,18.45 4.58,19.13 2.56,19.13C2.22,19.13 1.88,19.11 1.54,19.07C3.44,20.29 5.7,21 8.12,21C16,21 20.33,14.46 20.33,8.79C20.33,8.6 20.33,8.42 20.32,8.23C21.16,7.63 21.88,6.87 22.46,6Z" />
                                    </svg>
                                </button>
                            </div>
                            <div>
                                <!-- Github -->
                                <button class="btn">
                                    <svg class="w-6 h-6 text-gray-600" style="width:24px;height:24px" viewBox="0 0 24 24">
                                        <path fill="currentColor" d="M12,2A10,10 0 0,0 2,12C2,16.42 4.87,20.17 8.84,21.5C9.34,21.58 9.5,21.27 9.5,21C9.5,20.77 9.5,20.14 9.5,19.31C6.73,19.91 6.14,17.97 6.14,17.97C5.68,16.81 5.03,16.5 5.03,16.5C4.12,15.88 5.1,15.9 5.1,15.9C6.1,15.97 6.63,16.93 6.63,16.93C7.5,18.45 8.97,18 9.54,17.76C9.63,17.11 9.89,16.67 10.17,16.42C7.95,16.17 5.62,15.31 5.62,11.5C5.62,10.39 6,9.5 6.65,8.79C6.55,8.54 6.2,7.5 6.75,6.15C6.75,6.15 7.59,5.88 9.5,7.17C10.29,6.95 11.15,6.84 12,6.84C12.85,6.84 13.71,6.95 14.5,7.17C16.41,5.88 17.25,6.15 17.25,6.15C17.8,7.5 17.45,8.54 17.35,8.79C18,9.5 18.38,10.39 18.38,11.5C18.38,15.32 16.04,16.16 13.81,16.41C14.17,16.72 14.5,17.33 14.5,18.26C14.5,19.6 14.5,20.68 14.5,21C14.5,21.27 14.66,21.59 15.17,21.5C19.14,20.16 22,16.42 22,12A10,10 0 0,0 12,2Z" />
                                    </svg>
                                </button>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    </div>
</div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
// Variables
$font-type: $ternaryFont;
$primary-color: #f59e0b;
$form-bg: $text-gray-100;
$card-bg: white;
$form-max-width: 28rem;
$form-min-height: 60vh;
$shadow-sm: 0 1px 2px 0 rgba(0, 0, 0, 0.05);

// Component css
.-mt-1 {
    margin-top: -1px;
}

.ml-2 {
    margin-left: 0.5rem;
}

.h-5 {
    height: 1.25rem;
}

.w-5 {
    width: 1.25rem;
}

.space-y-6 {
    >*+* {
        margin-top: 1.5rem;
    }
}

.flex {
    display: flex;
}

.items-center {
    align-items: center;
}

.flex-wrap {
    flex-wrap: wrap;
}

.space-between {
    justify-content: space-between;
}

.text-sm {
    font-size: 0.875rem;
    line-height: 1.25rem;
}

.text-gray-600 {
    color: $text-gray-600;
}

.sign-in-form {
    display: flex;
    align-items: center;
    justify-content: center;
    min-height: $form-min-height;
    background-color: $form-bg;
    padding: 3rem 1rem;
    font-family: $font-type;
    width: 100%;

    @media (min-width: 640px) {
        padding-left: 1.5rem;
        padding-right: 1.5rem;
    }

    @media (min-width: 1024px) {
        padding-left: 2rem;
        padding-right: 2rem;
    }

    a {
        font-weight: 500;
        color: $primary-color;

        &:hover {
            color: darken($color: $primary-color, $amount: 10);
        }
    }

    .form-wrapper {
        max-width: $form-max-width;
        width: 100%;
    }

    // Top part
    .logo {
        height: 4rem;
        width: auto;
        margin: 0 auto;
        display: block;
    }

    .title {
        margin: 0;
        margin-top: 1.5rem;
        font-size: 1.875rem;
        line-height: 2.25rem;
        font-weight: 800;
        text-align: center;
    }

    .subtitle {
        margin-top: 0.5rem;
        text-align: center;
        font-size: 0.875rem;
        line-height: 1.25rem;
        color: $text-gray-600;
    }

    // Middle part
    .form-card {
        background-color: $card-bg;
        padding: 2rem 1rem;
        border-radius: 0.375rem;
        margin-top: 2rem;
        box-shadow: $shadow-sm;

        @media(min-width : 640px) {
            padding: 2rem 2.5rem;
        }
    }

    label {
        font-weight: 500;
        color: $text-gray-600;
    }

    [type="email"],
    [type="password"] {
        display: block;
        position: relative;
        font-size: 0.875rem;
        line-height: 1.25rem;
        width: 100%;
        flex: 1 1 0%;
        padding: 0.5rem 0.75rem;
        border-radius: 0.375rem;
        font-weight: 500;
        border: 1px solid $text-gray-300;
        background-clip: padding-box;
        transition: box-shadow 0.15s ease-in-out;
        box-shadow: $shadow-sm;

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
            z-index: 10;
            box-shadow: 0 0 0 0.1rem rgba($color: rgba($primary-color, 1), $alpha: 1);
        }
    }

    [type="checkbox"] {
        // Simple resets
        appearance: none;
        -webkit-appearance: none;
        -moz-appearance: none;

        user-select: none;
        -webkit-user-select: none;
        -moz-user-select: none;
        -ms-user-select: none;

        color-adjust: exact;
        -webkit-print-color-adjust: exact;

        display: inline-block;
        padding: 0;
        vertical-align: middle;
        background-origin: border-box;

        flex-shrink: 0;
        height: 1rem;
        width: 1rem;
        color: #2563eb;
        background-color: #fff;
        border: 1px solid #6b7280;

        // Checked state
        &:checked {
            border-color: transparent;
            background-color: currentColor;
            background-size: 100% 100%;
            background-position: center;
            background-repeat: no-repeat;

            &:hover,
            &:focus {
                border-color: transparent;
                background-color: currentColor;
            }
        }

        // Focused state
        &:focus {
            outline: 2px solid transparent;
            --tw-ring-inset: var(--tw-empty,
                    /*!*/
                    /*!*/
                );
            --tw-ring-offset-width: 2px;
            --tw-ring-offset-color: #fff;
            --tw-ring-color: currentColor;
            --tw-ring-offset-shadow: var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color);
            --tw-ring-shadow: var(--tw-ring-inset) 0 0 0 calc(2px + var(--tw-ring-offset-width)) var(--tw-ring-color);
            box-shadow: var(--tw-ring-offset-shadow), var(--tw-ring-shadow),
                var(--tw-shadow, 0 0 #0000);
        }
    }

    [type="checkbox"] {
        // Applying style
        border-radius: 0.25rem;
        border-color: $text-gray-300;
        color: $primary-color;

        // Checked state
        &:checked {
            background-image: url("../../../assets/images/white-check.svg");
        }
    }

    // Bottom part
    .btn {
        width: 100%;
        position: relative;

        &:focus {
            outline: none;
            box-shadow: 0 0 0 0.15rem rgba($color: rgba($primary-color, 1), $alpha: 0.5);
        }
    }

    .btn-theme {
        color: white;
        background-color: rgba($primary-color, 1);
        border: 1px solid rgba($primary-color, 1);

        &:hover {
            background-color: darken($color: rgba($primary-color, 1), $amount: 3%);
        }
    }

    .lock-icon {
        position: absolute;
        left: 0;
        top: 0;
        bottom: 0;
        padding-left: 0.75rem;
        display: flex;
        align-items: center;
        color: lighten($color: $primary-color, $amount: 20);
    }

    .separator {
        width: 100%;
        text-align: center;
        line-height: 0.1em;
        border-bottom: 1px solid $text-gray-200;
        margin-bottom: 2rem;
        margin-top : 2rem;
        color: $text-gray-500;

        span {
            background-color: white;
            padding-left: 0.5rem;
            padding-right: 0.5rem;
        }
    }

    .social-login {
        display: flex;
        user-select: none;
        gap : 1rem;
        flex-wrap: wrap;

        > * {
            flex-grow: 1;
        }

        svg,img{
            flex-shrink: 0;
        }
    }
}
</style>
