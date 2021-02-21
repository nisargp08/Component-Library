<template>
<div>
    <div class="steps">
        <div class="step-item finished">
            <div class="step-marker">
                step 1
            </div>
            <div class="step-title">
                <p>Job details</p>
            </div>
        </div>
        <div class="step-item finished">
            <div class="step-marker">
                step 2
            </div>
            <div class="step-title">
                <p>Application Form</p>
            </div>
        </div>
        <div class="step-item">
            <div class="step-marker">
                step 3
            </div>
            <div class="step-title">
                <p>Preview</p>
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
$steps-theme : $theme-color;
$steps-inactive : $text-gray-300;
$font-color : $text-gray-900;
// Component css
.steps {
    display: flex;
    width: 100%;
    flex-wrap: wrap;
    align-items: center;
}

.step-item {
    flex-grow: 1;
    border-top: 3px solid $steps-inactive;
    padding-top: 1rem;
    margin: 1rem;
    cursor: default;
    word-break: break-word;

    .step-marker {
        text-transform: uppercase;
        font-size: 0.75rem;
        line-height: 1rem;
        font-weight: 700;
        color: $steps-theme;
    }

    .step-title {
        text-transform: capitalize;
        font-size: 0.875rem;
        line-height: 1.25rem;
        font-weight: 700;
    }
}
// Change top border color for finished steps
.step-item.finished{
  border-top-color: $steps-theme;
}
</style>
