<template>
<div>
    <div class="alert">
        <div class="alert-icon">
            <svg class="w-5 h-5" style="margin-top : 0.15rem" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
            </svg>
        </div>
        <div class="alert-content">
            <p class="title">Attention needed</p>
            <p class="description">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad consequatur blanditiis optio harum, laudantium sunt!
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
$bg-color : #FEFCE8;
$svg-color : #A16207;
$font-title-color : #A16207;
$font-description-color : #CA8A04;

// Component css
.w-5{
    width : 1.25rem;
}
.h-5{
    height: 1.25rem;
}
.alert{
    display: flex;
    background-color: $bg-color;
    padding: 1.25rem 1.5rem;
    border-radius: 0.375rem;
    width : 100%;

    .alert-icon{
        color : $svg-color;
        flex-shrink: 0;
    }
    .alert-content{
        margin-left: 0.75rem;
        flex: 1;
        font-size: 0.875rem;
        line-height: 1.25rem;
        
        @media(min-width : 640px){
            font-size: 1rem;
            line-height: 1.5rem;
        }
    }
    .title{
        font-weight: 600;
        color : $font-title-color;
    }
    .description{
        font-weight: 500;
        padding-top: 0.25rem;
        color : $font-description-color;
    }
}
</style>
