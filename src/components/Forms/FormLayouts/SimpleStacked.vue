<template>
<div>
    <div class="form-layout">
        <form action="#" class="child-border-t">
            <!-- Section grid -->
            <div class="form-section">
                <div class="section-row">
                    <div class="col-span-3 px-4-md-only">
                        <h3 class="section-title">Profile</h3>
                        <p class="section-description">This information will be displayed publicly so be careful what you share.</p>
                    </div>
                    <div class="col-span-3">
                        <div class="form-card">
                            <div class="form-fields">
                                <div class="form-row grid-col-6">
                                    <div class="col-span-4">
                                        <label for="s-username">Username</label>
                                        <div class="input-wrapper">
                                            <span class="prefix">paradise.com/</span>
                                            <input type="text" id="s-username" placeholder="theOwl">
                                        </div>
                                    </div>
                                </div>

                                <div class="form-row">
                                    <label for="s-about">About</label>
                                    <div class="input-wrapper">
                                        <textarea name="about" id="s-about" rows="5" cols="3" placeholder="you@example.com"></textarea>
                                    </div>
                                    <p class="description">Write a few sentances about yourself.</p>
                                </div>

                                <div class="form-row">
                                    <label for="s-profilePhoto">Photo</label>
                                    <div class="input-wrapper items-center">
                                        <span class="photo-display">
                                            <svg class="text-gray-300" fill="currentColor" viewBox="0 0 24 24">
                                                <path d="M24 20.993V24H0v-2.996A14.977 14.977 0 0112.004 15c4.904 0 9.26 2.354 11.996 5.993zM16.002 8.999a4 4 0 11-8 0 4 4 0 018 0z"></path>
                                            </svg>
                                        </span>
                                        <div class="ml-5">
                                            <input type="file" id="s-profilePhoto" class="sr-only">
                                            <label for="s-profilePhoto" class="btn" id="photo">Change</label>
                                        </div>
                                    </div>
                                </div>

                                <div class="form-row">
                                    <label for="s-coverPhoto">Cover Photo</label>
                                    <div class="input-wrapper">
                                        <div class="upload-field">
                                            <svg class="mx-auto h-12 w-12 text-gray-400" stroke="currentColor" fill="none" viewBox="0 0 48 48" aria-hidden="true">
                                                <path d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
                                            </svg>
                                            <div class="flex items-center">
                                                <label for="s-coverPhoto" class="file-label">
                                                    <span>Upload a file</span>
                                                    <input type="file" class="sr-only" id="s-coverPhoto">
                                                </label>
                                                <p class="ml-1">or drag and drop</p>
                                            </div>
                                            <p class="description">
                                                PNG, JPG, GIF up to 10MB
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <!-- Section grid -->
            <div class="form-section">
                <div class="section-row">
                    <div class="col-span-3 px-4-md-only">
                        <h3 class="section-title">Personal Information</h3>
                        <p class="section-description">Use a permanent address where you can receive mail.</p>
                    </div>
                    <div class="col-span-3">
                        <div class="form-card">
                            <div class="form-fields">
                                <div class="form-row grid-col-6">
                                    <div class="col-span-3">
                                        <label for="s-firstname">First name</label>
                                        <div class="input-wrapper">
                                            <input type="text" id="s-firstname">
                                        </div>
                                    </div>
                                    <div class="col-span-3">
                                        <label for="s-lastname">Last name</label>
                                        <div class="input-wrapper">
                                            <input type="text" id="s-lastname">
                                        </div>
                                    </div>
                                    <div class="col-span-4">
                                        <label for="s-email">Email Address</label>
                                        <div class="input-wrapper">
                                            <input type="email" id="s-email">
                                        </div>
                                    </div>
                                    <div class="col-span-3">
                                        <label for="s-country">Country / Region</label>
                                        <div class="input-wrapper">
                                            <select name="country" id="s-country">
                                                <option selected disabled hidden value="">-- Please select --</option>
                                                <option value="PAR">Paradis</option>
                                                <option value="MAR">Marley</option>
                                                <option value="HIZ">Hizuru</option>
                                            </select>
                                        </div>
                                    </div>
                                    <div class="col-span-6">
                                        <label for="s-address">Street address</label>
                                        <div class="input-wrapper">
                                            <input type="text" id="s-address">
                                        </div>
                                    </div>
                                    <div class="col-span-2">
                                        <label for="s-city">City</label>
                                        <div class="input-wrapper">
                                            <input type="text" id="s-city">
                                        </div>
                                    </div>
                                    <div class="col-span-2">
                                        <label for="s-state">State / Province</label>
                                        <div class="input-wrapper">
                                            <input type="text" id="s-state">
                                        </div>
                                    </div>
                                    <div class="col-span-2">
                                        <label for="s-zipcode">ZIP / Postal</label>
                                        <div class="input-wrapper">
                                            <input type="text" id="s-zipcode">
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <!-- Section grid -->
            <div class="form-section">
                <div class="section-row">
                    <div class="col-span-3 px-4-md-only">
                        <h3 class="section-title">Notifications</h3>
                        <p class="section-description">We'll always let you know about important changes, but you pick what else you want to hear about.</p>
                    </div>
                    <div class="col-span-3">
                        <div class="form-card">
                            <div class="form-fields">
                                <fieldset>
                                    <legend>By Email</legend>
                                    <div class="space-y-4">
                                        <div class="flex">
                                            <div class="flex items-center h-5"><input type="checkbox" name="comments" id="s-comments"></div>
                                            <div class="ml-3 text-sm">
                                                <label for="s-comments">Comments</label>
                                                <p class="text-gray-500">Get notified when someones posts a comment on a posting.</p>
                                            </div>
                                        </div>
                                        <div class="flex">
                                            <div class="flex items-center h-5"><input type="checkbox" name="candidates" id="s-candidates"></div>
                                            <div class="ml-3 text-sm">
                                                <label for="s-candidates">Candidates</label>
                                                <p class="text-gray-500">Get notified when a candidate applies for a job.</p>
                                            </div>
                                        </div>
                                        <div class="flex">
                                            <div class="flex items-center h-5"><input type="checkbox" name="offers" id="s-offers"></div>
                                            <div class="ml-3 text-sm">
                                                <label for="s-offers">Offers</label>
                                                <p class="text-gray-500">Get notified when a candidate accepts or rejects an offer.</p>
                                            </div>
                                        </div>
                                    </div>
                                </fieldset>
                                <fieldset>
                                    <div class="text-sm">
                                        <legend>Push Notifications</legend>
                                        <p class="text-gray-500 text-weight-500">These are delivered via SMS to your mobile phone.</p>
                                    </div>
                                    <div class="mt-6 space-y-4">
                                        <div class="flex">
                                            <div class="flex items-center h-5"><input type="radio" name="push_notification" id="s-everything"></div>
                                            <div class="ml-3 text-sm">
                                                <label for="s-everything">Everything</label>
                                            </div>
                                        </div>
                                        <div class="flex">
                                            <div class="flex items-center h-5"><input type="radio" name="push_notification" id="s-sameAsEmail"></div>
                                            <div class="ml-3 text-sm">
                                                <label for="s-sameAsEmail">Same as email</label>
                                            </div>
                                        </div>
                                        <div class="flex">
                                            <div class="flex items-center h-5"><input type="radio" name="push_notification" id="s-noPushNotifications"></div>
                                            <div class="ml-3 text-sm">
                                                <label for="s-noPushNotifications">No push notifications</label>
                                            </div>
                                        </div>
                                    </div>
                                </fieldset>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <!-- Form Submission -->
            <div class="form-action">
                <button class="btn">Cancel</button>
                <button class="btn btn-theme ml-3">Save</button>
            </div>
        </form>
    </div>
</div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
// Variables
$form-max-width : 48rem;
$section-title-color : $theme-color;
$focus-ring-color: $theme-color;
$shadow-sm : 0 1px 2px 0 rgba(0, 0, 0, 0.05);

// Utilities
.text-gray-300 {
    color: $text-gray-300;
}

.text-gray-400 {
    color: $text-gray-400;
}

.text-gray-500 {
    color: $text-gray-500;
}

// Width
.w-12 {
    width: 3rem;
}

.h-12 {
    height: 3rem;
}

// Height
.h-5 {
    height: 1.25rem;
}

// Margin
.ml-1 {
    margin-left: 0.25rem;
}

.ml-3 {
    margin-left: 0.75rem;
}

.ml-5 {
    margin-left: 1.25rem;
}

.mt-6 {
    margin-top: 1.5rem;
}

.space-y-4 {
    >* {
        margin-top: 1rem;
    }
}

.mx-auto {
    margin-left: auto;
    margin-right: auto;
}

// Padding
.px-4-md-only {
    padding-left: 1rem;
    padding-right: 1rem;

    @media(min-width : 768px) {
        padding-left: 0;
        padding-right: 0;
    }
}

// Font
.text-sm {
    font-size: 0.875rem;
    line-height: 1.25rem;
}

.text-weight-500 {
    font-weight: 500;
}

// Flex
.flex {
    display: flex;
}

.items-center {
    align-items: center;
}

// Component css
.child-border-t {
    > :not(:first-child) {
        border-top: 1px solid #e5e7eb;
        padding-top: 1.5rem;
        margin-top: 1.5rem;
    }
}

.form-layout {
    max-width: $form-max-width;
    width: 100%;
    margin-left: auto;
    margin-right: auto;
    padding-top: 3rem;
    box-sizing: border-box;

    @media(min-width : 768px) {
        padding-left: 1rem;
        padding-right: 1rem;
    }

    // Containers

    .section-row {
        @media(min-width : 768px) {
            display: grid;
            grid-template-columns: repeat(3, minmax(0, 1fr));
            gap: 1.5rem;
        }
    }

    .col-span-1 {
        grid-column: 1 / -1;

        @media (min-width : 768px) {
            grid-column: span 1 / span 1;
        }
    }

    .col-span-2 {
        grid-column: 1 / -1;

        @media (min-width : 768px) {
            grid-column: span 2 / span 2;
        }
    }

    .col-span-3 {
        grid-column: 1 / -1;

        @media (min-width : 768px) {
            grid-column: span 3 / span 3;
        }
    }

    .col-span-4 {
        grid-column: 1 / -1;

        @media (min-width : 768px) {
            grid-column: span 4 / span 4;
        }
    }

    .col-span-6 {
        grid-column: 1 / -1;

        @media (min-width : 768px) {
            grid-column: span 6 / span 6;
        }
    }

    .section-title {
        margin: 0;
        font-size: 1.125rem;
        line-height: 1.5rem;
        font-weight: 600;
        color: $section-title-color;

        @media(min-width : 640px) {
            font-size: 1.25rem;
            line-height: 1.75rem;
        }
    }

    .section-description {
        color: $text-gray-600;
        font-size: 0.875rem;
        font-weight: 500;
        line-height: 1.25rem;
        margin-top: 0.25rem;
    }

    .form-card {
        width: 100%;

        @media(min-width : 768px) {
            margin-top: 0;
            border-radius: 0.375rem;
        }
    }

    .form-fields {
        padding: 1.5rem 1rem;

        > :not(:first-child) {
            margin-top: 1.5rem;
        }

        @media(min-width : 768px) {
            padding: 0;
        }
    }

    .form-action {
        padding: 1.25rem 1rem;
        text-align: right;

        @media(min-width : 640px) {
            padding-left: 1.5rem;
            padding-right: 1.5rem;
        }

        @media(min-width : 768px) {
            padding-top: 1rem;
        }
    }

    .grid-col-3 {
        display: grid;
        gap: 1.5rem;

        @media(min-width : 768px) {
            grid-template-columns: repeat(3, minmax(0, 1fr));
        }
    }

    .grid-col-6 {
        display: grid;
        gap: 1.5rem;

        @media(min-width : 768px) {
            grid-template-columns: repeat(6, minmax(0, 1fr));
        }
    }

    // Form elements
    .input-wrapper {
        display: flex;
        margin-top: 0.25rem;
        border-radius: 0.375rem;
    }

    label {
        color: $text-gray-700;
        font-size: 0.875rem;
        line-height: 1.25rem;
        font-weight: 600;
        display: block;
    }

    .description {
        margin-top: 0.5rem;
        font-size: 0.875rem;
        line-height: 1.25rem;
        color: $text-gray-500;
        font-weight: 500;
    }

    .prefix {
        color: $text-gray-500;
        display: inline-flex;
        align-items: center;
        padding-left: 0.75rem;
        padding-right: 0.75rem;
        font-size: 0.875rem;
        line-height: 1.25rem;
        font-weight: 500;
        border: 1px solid $text-gray-300;
        border-right-width: 0;
        border-top-left-radius: 0.375rem;
        border-bottom-left-radius: 0.375rem;
        background-color: $text-gray-50;

        +input {
            border-top-left-radius: 0 !important;
            border-bottom-left-radius: 0 !important;
        }
    }

    [type="text"],
    [type="email"],
    select,
    textarea {
        display: block;
        font-size: 0.875rem;
        line-height: 1.25rem;
        width: 100%;
        flex: 1 1 0%;
        padding: 0.5rem 0.75rem;
        font-weight: 500;
        border-radius: 0.375rem;
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
            box-shadow: 0 0 0 0.10rem rgba($color: rgba($focus-ring-color, 1), $alpha: 1);
        }
    }

    [type="checkbox"],
    [type="radio"] {
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
        color: $focus-ring-color;

        // Checked state
        &:checked {
            background-image: url('../../../assets/images/white-check.svg');
        }
    }

    [type="radio"] {
        // Applying style
        border-radius: 100%;
        border-color: $text-gray-300;
        color: $focus-ring-color;

        // Checked state
        &:checked {
            background-image: url('../../../assets/images/white-radio.svg');
        }
    }

    select {
        width: 100%;
        padding-right: 2.25rem;
        background-color: #fff;
        background-image: url('../../../assets/images/chevron-down.svg');
        background-repeat: no-repeat;
        background-position: right 0.75rem center;
        background-size: 16px 20px;
    }

    fieldset {
        border: 0;
        padding: 0;
        margin: 0;
    }

    legend {
        font-size: 1rem;
        line-height: 1.5rem;
        padding: 0;
        font-weight: 600;
        color: $text-gray-900;
        padding-right: 1rem;
    }

    legend+p {
        padding-right: 1rem;
    }

    .photo-display {
        display: inline-block;
        height: 3rem;
        width: 3rem;
        border-radius: 9999px;
        background-color: $text-gray-100;
        overflow: hidden;
    }

    .upload-field {
        font-size: 0.875rem;
        line-height: 1.25rem;
        font-weight: 500;
        width: 100%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        padding: 1.25rem 1.5rem 1.5rem 1.5rem;
        margin-top: 0.25rem;
        border: 2px dashed $text-gray-300;
        border-radius: 0.375rem;

        >* {
            margin-top: 0.25rem;
        }
    }

    .file-label {
        position: relative;
        cursor: pointer;
        background-color: white;
        border-radius: 0.375rem;
        color: $focus-ring-color;

        &:hover {
            color: darken($color: $focus-ring-color, $amount: 10);
        }

        &:focus {
            outline: none;
            box-shadow: 0 0 0 0.10rem rgba($color: rgba($focus-ring-color, 1), $alpha: 1);
        }
    }

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
}
</style>
