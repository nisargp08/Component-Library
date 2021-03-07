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
            <form action="#" class="space-y-6">
                <div>
                    <div>
                        <label for="email" class="sr-only">Email Address</label>
                        <input type="email" id="email" placeholder="Email address" required/>
                    </div>
                    <div class="-mt-1">
                        <label for="password" class="sr-only">Password</label>
                        <input type="password" id="password" placeholder="Password" required/>
                    </div>
                </div>
                <div class="flex items-center space-between text-sm flex-wrap">
                    <div class="flex items-center">
                        <input type="checkbox" id="remember-me">
                        <label for="remember-me" class="ml-2">Remember me</label>
                    </div>
                    <a href="#">
                        Forgot your password?
                    </a>
                </div>
                <div>
                    <button class="btn">
                        <span class="lock-icon">
                            <svg class="w-5 h-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                                <path fill-rule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clip-rule="evenodd" />
                            </svg>
                        </span>
                        <span>Sign in</span>
                    </button>
                </div>
            </form>
        </div>
    </div>
</div>
</template>

<script>
export default {
};
</script>

<style lang="scss" scoped>
// Variables
$font-type : $ternaryFont;
$primary-color : #F59E0B;
$form-bg : $text-gray-50;
$form-max-width : 28rem;
$form-min-height : 60vh;
$shadow-sm : 0 1px 2px 0 rgba(0, 0, 0, 0.05);

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

// Screen readers only
.sr-only {
    position: absolute;
    width: 1px;
    height: 1px;
    padding: 0;
    margin: -1px;
    overflow: hidden;
    clip: rect(0, 0, 0, 0);
    white-space: nowrap;
    border-width: 0;
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

    @media(min-width : 640px) {
        padding-left: 1.5rem;
        padding-right: 1.5rem;
    }

    @media(min-width : 1024px) {
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
    form {
        margin-top: 2rem;
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
            box-shadow: 0 0 0 0.10rem rgba($color: rgba($primary-color, 1), $alpha: 1);
        }
    }

    [type="email"] {
        border-top-left-radius: 0.375rem;
        border-top-right-radius: 0.375rem;
    }

    [type="password"] {
        border-bottom-left-radius: 0.375rem;
        border-bottom-right-radius: 0.375rem;
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
            box-shadow: var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow, 0 0 #0000);
        }
    }

    [type="checkbox"] {
        // Applying style
        border-radius: 0.25rem;
        border-color: $text-gray-300;
        color: $primary-color;

        // Checked state
        &:checked {
            background-image: url('../../../assets/images/white-check.svg');
        }
    }

    // Bottom part
    .btn {
        width: 100%;
        position: relative;
        color: white;
        background-color: rgba($primary-color, 1);
        border: 1px solid rgba($primary-color, 1);

        &:hover {
            background-color: darken($color: rgba($primary-color, 1), $amount: 3%);
        }

        &:focus {
            outline: none;
            box-shadow: 0 0 0 0.15rem rgba($color: rgba($primary-color, 1), $alpha: 0.5);
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
}
</style>
