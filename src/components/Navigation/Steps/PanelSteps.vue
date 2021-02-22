<template>
<div>
    <div class="steps">
        <div class="step-wrapper">
            <!-- When step is finished -->
            <div class="step-item finished">
                <div class="step-marker">
                    <!-- Show when step is not finished -->
                    <p>01</p>
                    <!-- Show when step is finished -->
                    <svg class="w-5 h-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                    </svg>
                </div>
                <div class="step-title">
                    <p>Job details</p>
                </div>
            </div>
        </div>
        <div class="step-wrapper">
            <!-- When step is active -->
            <div class="step-item active">
                <div class="step-marker">
                    <!-- Show when step is not finished -->
                    <p>02</p>
                    <!-- Show when step is finished -->
                    <svg class="w-5 h-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                    </svg>
                </div>
                <div class="step-title">
                    <p>Application Form</p>
                </div>
            </div>
        </div>
        <div class="step-wrapper">
            <!-- When step is not finished -->
            <div class="step-item">
                <div class="step-marker">
                    <!-- Show when step is not finished -->
                    <p>03</p>
                    <!-- Show when step is finished -->
                    <svg class="w-5 h-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                    </svg>
                </div>
                <div class="step-title">
                    <p>Preview</p>
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
$steps-finished : $theme-color;
$steps-unfinished : $text-gray-500;
$font-color : $text-gray-900;
$border-color : $text-gray-200;

// Component css
.w-5 {
    width: 1.25rem;
}

.h-5 {
    height: 1.25rem;
}

.steps {
    display: flex;
    width: 100%;
    flex-wrap: wrap;
    border: 1px solid $border-color;
    margin: 1rem 1.25rem;
    border-radius: 0.5rem;
    flex-direction: column;
    justify-content: flex-start;

    @media(min-width : 640px) {
        align-items: center;
        flex-direction: row;
    }
}

.step-wrapper {
    position: relative;
    display: flex;
    align-items: center;
    flex-grow: 1;
}

// Apply to all step-wrapper except the first one(border-top : MOBILE)
.step-wrapper:not(:first-of-type) {
    border-top: 1px solid $border-color;

    @media(min-width : 640px) {
        border-top: none;
    }
}

// Apply to all step-wrapper except the last one(chevron icon : Desktop)
@media(min-width : 640px) {
    .step-wrapper:not(:last-of-type) {

        &::after,
        &::before {
            content: "";
            position: absolute;
            right: 0;
            display: block;
            border: 1px solid transparent;
            height: 50%;
            width: 2rem;
            border-left-color: $border-color;
        }

        &::after {
            top: -2px;
            transform: skew(30deg);
        }

        &::before {
            bottom: -2px;
            transform: skew(-30deg);
        }
    }
}

.step-item {
    display: flex;
    align-items: center;
    margin: 1rem;
    flex-grow: 1;
    cursor: default;
    word-break: break-word;

    .step-marker {
        display: flex;
        align-items: center;
        text-transform: uppercase;
        font-size: 0.875rem;
        line-height: 1rem;
        font-weight: 600;
        color: $steps-unfinished;
        border-radius: 9999px;
        border: 3px solid $border-color;
        padding: 0.75rem;
        flex-shrink: 0;

        svg {
            // Hiding by default and show when step finished
            display: none;
        }
    }

    .step-title {
        text-transform: capitalize;
        font-size: 0.875rem;
        line-height: 1.25rem;
        font-weight: 600;
        margin-left: 1rem;
        color: $steps-unfinished;
    }
}

// Change color for currently active step
.step-item.active {
    .step-marker {
        color: $steps-finished;
        border-color: $steps-finished;
    }

    .step-title {
        color: $steps-finished;
    }
}

.step-item.finished {
    .step-marker {
        color: white;
        background-color: $steps-finished;
        border: none;

        // When step is finished hide the step number
        p {
            display: none;
        }

        // And display the 'check' icon
        svg {
            display: block;
        }
    }

    .step-title {
        color: $font-color;
        font-weight: 700;
    }
}
</style>
