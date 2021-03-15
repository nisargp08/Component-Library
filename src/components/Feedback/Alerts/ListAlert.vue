<template>
<!-- Alert in a list format -->
<div>
    <div class="alert">
        <div class="alert-icon">
            <svg class="w-5 h-5" style="margin-top : 0.15rem" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
        </div>
        <div class="alert-content">
            <p class="title">There were 2 errors with your submission</p>
            <p class="description">
                <ul>
                    <li>Your password must be at least 8 characters</li>
                    <li>Your password must include atleast one pro wrestling finishing move</li>
                </ul>
            </p>
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
$bg-color : #FEF2F2;
$svg-color : #B91C1C;
$font-title-color : #B91C1C;
$font-description-color : #DC2626;

// Component css
.w-5 {
    width: 1.25rem;
}

.h-5 {
    height: 1.25rem;
}

.alert {
    display: flex;
    background-color: $bg-color;
    padding: 1.25rem 1.5rem;
    border-radius: 0.375rem;
    width: 100%;
    
    .alert-icon {
        color: $svg-color;
        flex-shrink: 0;
    }

    .alert-content {
        margin-left: 0.75rem;
        flex: 1;
        font-size: 0.875rem;
        line-height: 1.25rem;
        
        @media(min-width : 640px){
            font-size: 1rem;
            line-height: 1.5rem;
        }
    }

    .title {
        font-weight: 600;
        color: $font-title-color;
    }

    .description {
        font-weight: 500;
        color: $font-description-color;
        padding-top: 0.25rem;
    }

    ul {
        margin-top: 0.25rem;
        padding-left: 1.25rem;
    }
}
</style>
