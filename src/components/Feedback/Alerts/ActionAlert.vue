<template>
<div>
    <div class="alert">
        <div class="alert-icon">
            <svg class="w-5 h-5" style="margin-top : 0.15rem" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
        </div>
        <div class="alert-content">
            <p class="title">Order Completed</p>
            <p class="description">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum, eum reprehenderit. Recusandae blanditiis quidem temporibus!
            </p>
            <div class="alert-actions">
                <a href="#" class="action-links">View status</a>
                <a href="#" class="ml-6 action-links">Dismiss</a>
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
$bg-color : #F0FDF4;
$svg-color : #15803D;
$font-title-color : #15803D;
$font-description-color : #16A34A;

// Component css
.w-5 {
    width: 1.25rem;
}

.h-5 {
    height: 1.25rem;
}
.ml-6{
    margin-left : 1.5rem;
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
        padding-top: 0.25rem;
        color: $font-description-color;
    }

    .alert-actions{
        margin-top: 1rem;
    }
    .action-links{
        font-weight: 600;
        color : $font-title-color;
        transition: color 0.15s ease-in-out;

        &:hover{
            color: darken($color: $font-title-color, $amount: 15);
        }
    }
}
</style>
