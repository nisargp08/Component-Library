<template>
<div>
    <div class="step-panel">
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
                    <div class="step-info">
                        <div class="step-title">
                            <p>Job details</p>
                        </div>
                        <div class="step-description">
                            Lorem ipsum dolor sit amet.
                        </div>
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
                    <div class="step-info">
                        <div class="step-title">
                            <p>Application Form</p>
                        </div>
                        <div class="step-description">
                            Lorem ipsum dolor sit amet consectetur adipisicing.
                        </div>
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
                    <div class="step-info">
                        <div class="step-title">
                            <p>Preview</p>
                        </div>
                        <div class="step-description">
                            Lorem ipsum dolor sit amet consectetur adipisicing.
                        </div>
                    </div>
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

.step-panel {
    display: flex;
    flex-wrap: wrap;
    width: 100%;
    align-items: center;
    margin-top: 2rem;
    margin-bottom: 2rem;
    border-top: 1px solid $border-color;
    border-bottom: 1px solid $border-color;
}

.steps {
    display: flex;
    width: 100%;
    flex-wrap: wrap;
    // border: 1px solid $border-color;
    margin-left: 1.25rem;
    margin-right: 1.25rem;
    flex-direction: column;
    justify-content: flex-start;

    @media(min-width : 640px) {
        // align-items: center;
        flex-direction: row;
        margin-left: 1.5rem;
        margin-right: 1.5rem;
    }
}

.step-wrapper {
    position: relative;
    display: flex;
    box-sizing: border-box;
    align-items: center;
    flex-grow: 1;
    max-width: 100%;
    width: 100%;
    border-left: 1px solid $border-color;
    border-right: 1px solid $border-color;

    @media(min-width : 640px) {
        border-right: none;
        flex: 0 0 auto;
        width: 33%;        
    }
}

// Apply to all step-wrapper except the first one(border-top : MOBILE)
.step-wrapper:not(:first-of-type) {
    border-top: 1px solid $border-color;

    @media(min-width : 640px) {
        border-top: none;
        // Create a chevron in between border 
        &::after,&::before{
            content: "";
            display: inline-block;
        }
    }
}

.step-item {
    display: flex;
    align-items: center;
    padding: 1rem;
    border-left: 4px solid transparent;
    flex-grow: 1;
    cursor: default;
    word-break: break-word;

    @media(min-width : 640px){
        border-left: none;
        border-bottom: 4px solid transparent;
    }

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

    .step-title,
    .step-description {
        text-transform: uppercase;
        font-size: 0.875rem;
        line-height: 1.25rem;
        margin-left: 1rem;
        color: $steps-unfinished;
    }

    .step-title {
        font-size: 0.75rem;
        letter-spacing: 0.025rem;
        line-height: 1rem;
        font-weight: 700;
    }

    .step-description {
        text-transform: none;
        font-weight: 500;
    }
}

// Change color for currently active step
.step-item.active {
    border-left-color: $steps-finished;
    @media(min-width : 640px){
        border-bottom-color: $steps-finished;
    }
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
