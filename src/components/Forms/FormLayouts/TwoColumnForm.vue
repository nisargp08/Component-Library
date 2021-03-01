<template>
<div>
    <div class="form-layout">
        <!-- Section grid -->
        <div class="form-section">
            <div class="section-row">
                <div class="col-span-1">
                    <h3 class="section-title">Profile</h3>
                    <p class="section-description">This information will be displayed publicly so be careful what you share.</p>
                </div>
                <div class="col-span-2">
                    <form action="#">
                        <div class="form-card">
                            <div class="form-fields">
                                <div class="form-row grid-wrapper">
                                    <div class="col-span-2">
                                        <label for="website">Website</label>
                                        <div class="input-wrapper">
                                            <span class="prefix">http://</span>
                                            <input type="text" id="website" placeholder="www.example.com">
                                        </div>
                                    </div>
                                </div>
                                <div class="form-row">
                                    <label for="about">About</label>
                                    <div class="input-wrapper">
                                        <textarea name="about" id="about" rows="5" cols="3" placeholder="you@example.com"></textarea>
                                    </div>
                                    <p class="description">Brief description for your profile. URLs are hyperlinked.</p>
                                </div>
                                <div class="form-row">
                                    <label for="photo">Photo</label>
                                    <div class="input-wrapper items-center">
                                        <span class="photo-display">
                                            <svg class="text-gray-300" fill="currentColor" viewBox="0 0 24 24">
                                                <path d="M24 20.993V24H0v-2.996A14.977 14.977 0 0112.004 15c4.904 0 9.26 2.354 11.996 5.993zM16.002 8.999a4 4 0 11-8 0 4 4 0 018 0z"></path>
                                            </svg>
                                        </span>
                                        <div class="ml-5">
                                            <input type="file" id="profilePhoto" class="sr-only">
                                            <label for="profilePhoto" class="btn" id="photo">Change</label>
                                        </div>
                                    </div>
                                </div>
                                <div class="form-row">
                                    <label for="coverPhoto">Cover Photo</label>
                                    <div class="input-wrapper">
                                        <div class="upload-field">
                                            <svg class="mx-auto h-12 w-12 text-gray-400" stroke="currentColor" fill="none" viewBox="0 0 48 48" aria-hidden="true">
                                                <path d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
                                            </svg>
                                            <div class="flex items-center">
                                                <label for="coverPhoto" class="file-label">
                                                    <span>Upload a file</span>
                                                    <input type="file" class="sr-only" id="coverPhoto">
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
                            <div class="form-action">
                                <button class="btn btn-theme">Save</button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
</div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
// Variables
$form-max-width : 80rem;
$card-bg : white;
$focus-ring-color: $theme-color;
$shadow-sm : 0 1px 2px 0 rgba(0, 0, 0, 0.05);
$shadow-md : 0 1px 3px 0 rgba(0, 0, 0, 0.1),
0 1px 2px 0 rgba(0, 0, 0, 0.06);

// Utilities
.text-gray-300 {
    color: $text-gray-300;
}

.text-gray-400 {
    color: $text-gray-400;
}

.w-12 {
    width: 3rem;
}

.h-12 {
    height: 3rem;
}

.ml-1 {
    margin-left: 0.25rem
}

.ml-5 {
    margin-left: 1.25rem;
}

.mx-auto {
    margin-left: auto;
    margin-right: auto;
}

.flex {
    display: flex;
}

.items-center {
    align-items: center;
}

// Component css
.form-layout {
    padding: 1.5rem 2rem;
    max-width: $form-max-width;
    margin-left: auto;
    margin-right: auto;
    box-sizing: border-box;
    // Containers
    .section-row {
        display: grid;
        grid-template-columns: repeat(3, minmax(0, 1fr));
        gap: 1.5rem;
    }

    .col-span-1 {
        grid-column: span 1 / span 1;
    }

    .col-span-2 {
        grid-column: span 2 / span 2;
    }

    .section-title {
        margin: 0;
        font-size: 1.125rem;
        line-height: 1.5rem;
        font-weight: 600;
        color: $text-gray-900;
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
        border-radius: 0.375rem;
        box-shadow: $shadow-md;
        background-color: $card-bg;

    }

    .form-fields {
        padding: 1.5rem;

        > :not(:first-child) {
            margin-top: 1.75rem;
        }
    }
    .form-action{
        background-color: $text-gray-50;
        padding: 0.75rem 1rem;
        text-align: right;
        border-bottom-left-radius: 0.375rem;
        border-bottom-right-radius: 0.375rem;

        @media(min-width : 640px){
            padding-left: 1.5rem;
            padding-right: 1.5rem;
        }
    }
    .grid-wrapper {
        display: grid;
        grid-template-columns: repeat(3, minmax(0, 1fr));
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
    }

    input[type="text"],
    textarea {
        display: block;
        font-size: 0.875rem;
        line-height: 1.25rem;
        width: 100%;
        flex: 1 1 0%;
        padding: 0.5rem 0.75rem;
        font-weight: 500;
        border-top-right-radius: 0.375rem;
        border-bottom-right-radius: 0.375rem;
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

    textarea {
        border-radius: 0.375rem;
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
