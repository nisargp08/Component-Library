<template>
<div>
    <button class="btn" @click="isOpen = true">
        Open Create Project Form Example
    </button>
    <div class="slide-over" :class="{ 'is-open': isOpen }">
        <div role="button" @click="isOpen = false" class="slide-overlay"></div>
        <transition-slide>
            <div class="slide-over-panel" v-if="isOpen">
                <div class="slide-over-heading">
                    <div class="mr-2">
                        <h2>New Project</h2>
                        <p>
                            Get started by filling in the information below to create your
                            new project.
                        </p>
                    </div>
                    <div class="dismiss">
                        <button class="reset-btn" @click="isOpen = false">
                            <svg class="w-5 h-5 text-gray-200" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </button>
                    </div>
                </div>
                <div class="slide-over-content">
                    <form action="#">
                        <div class="mb-5">
                            <label for="name" class="form-label">Project name</label>
                            <input id="name" class="form-input" type="text" />
                        </div>
                        <div class="mb-5">
                            <label for="description" class="form-label">Description</label>
                            <textarea name="" id="description" cols="5" rows="5"></textarea>
                        </div>
                        <div class="mb-5">
                            <label class="form-label">Team Members</label>
                            <div class="team-members">
                                <div class="members">
                                    <div class="circular-avatar">
                                        <img src="@/assets/images/erwin-smith.png" alt="" />
                                    </div>
                                    <div class="circular-avatar">
                                        <img src="@/assets/images/zeke-yeager.jpg" alt="" />
                                    </div>
                                    <div class="circular-avatar">
                                        <img src="@/assets/images/reiner-braun.jpg" alt="" />
                                    </div>
                                    <div class="circular-avatar">
                                        <img src="@/assets/images/levi-ackerman.jpg" alt="" />
                                    </div>
                                    <div class="circular-avatar">
                                        <img src="@/assets/images/mikasa-ackerman.jpg" alt="" />
                                    </div>
                                    <button class="btn add-btn">
                                        <svg class="w-5 h-5 text-gray-400" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                                        </svg>
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div class="mb-5">
                            <label class="form-label mb-4">Privacy</label>
                            <div class="form-radio">
                                <input type="radio" name="privacy" id="one" />
                                <label for="one" class="form-label">Public access
                                    <span class="form-description">Everyone with the link will see this project</span>
                                </label>
                            </div>
                            <div class="form-radio">
                                <input type="radio" name="privacy" id="two" />
                                <label for="two" class="form-label">Private to project members
                                    <span class="form-description">Only members of this project would be able to
                                        access.</span>
                                </label>
                            </div>
                            <div class="form-radio">
                                <input type="radio" name="privacy" id="three" />
                                <label for="one" class="form-label">Private to you
                                    <span class="form-description">You are the only one able to access this project.</span>
                                </label>
                            </div>
                        </div>
                        <div class="share-project mb-5">
                            <div class="copy-link">
                                <svg class="w-5 h-5 theme-color" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
                                </svg>
                                <a href="#" class="ml-2">Copy link</a>
                            </div>
                            <div class="learn-more mt-4">
                                <svg class="w-5 h-5 text-gray-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                                    <path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z" clip-rule="evenodd" />
                                </svg>
                                <a href="#" class="ml-2">Learn more about sharing</a>
                            </div>
                        </div>
                    </form>
                </div>
                <div class="slide-over-footer">
                    <div class="actions">
                        <button class="btn" @click="isOpen = false">Cancel</button>
                        <button class="btn btn-theme" @click="isOpen = false">
                            Save
                        </button>
                    </div>
                </div>
            </div>
        </transition-slide>
    </div>
</div>
</template>

<script>
import TransitionSlide from "@general/TransitionSlide.vue";

export default {
    mounted() {
        // Modal close on escape key
        window.addEventListener("keyup", (e) => {
            // If escape key
            if (e.code == "Escape") {
                this.isOpen = false;
            }
        });
    },
    data() {
        return {
            isOpen: false,
        };
    },
    components: {
        TransitionSlide,
    },
};
</script>

<style lang="scss" scoped>
// Variables
$bg-color: white;
$bg-tint: rgba(0, 0, 0, 0.09);
$banner-color: $theme-color;
$shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1),
0 10px 10px -5px rgba(0, 0, 0, 0.04);

.slide-over {
    display: none;
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: 10;
    justify-content: flex-end;

    &.is-open {
        //   When slide bar opened
        display: flex;
    }

    .slide-overlay {
        position: fixed;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
        z-index: 10;
        background-color: $bg-tint;
    }

    .slide-over-panel {
        position: relative;
        z-index: 10;
        display: flex;
        flex-direction: column;
        max-width: 28rem;
        width: calc(100vw - 4rem);
        background-color: $bg-color;
        overflow-y: hidden; //For fixed footer
        box-shadow: $shadow;
        // height: 100%;
    }
}

// Element design css - Not required for component
.text-gray-400 {
    color: $text-gray-400;
}

.text-gray-200 {
    color: $text-gray-200;
}

.slide-over-heading {
    display: flex;
    align-items: flex-start;
    background-color: darken($banner-color, 3%);
    padding: 1.25rem;

    h2 {
        flex: 1;
        -ms-flex: 1;
        margin: 0;
        font-size: 1.125rem;
        line-height: 1.75rem;
        font-weight: 600;
        color: white;
    }

    p {
        color: $text-gray-300;
        font-size: 0.875rem;
        line-height: 1.25rem;
    }
}

.slide-over-content {
    position: relative;
    padding: 1rem;
    flex: 1;
    -ms-flex: 1;
    overflow-y: auto;
}

.slide-over-footer {
    display: flex;
    align-items: center;
    justify-content: flex-end;
    padding-left: 1rem;
    padding-right: 1rem;
    border-top: 1px solid $text-gray-200;

    .actions {
        margin-top: 1rem;
        margin-bottom: 1rem;
    }

    .btn-theme {
        margin-left: 0.75rem;
    }
}

.slide-over {
    --animate-duration: 250ms;
}

// Form inputs
.form-label {
    display: inline-block;
    font-size: 0.875rem;
    line-height: 1.25rem;
    font-weight: bold;
    margin-bottom: 0.5rem;
}

.form-radio {
    display: flex;
    align-items: flex-start;

    input[type="radio"] {
        height: 1.125rem;
        width: 1.125rem;
        color: $text-gray-400;
        padding: 0.75rem;
        border: 1px solid $text-gray-400;
        border-radius: 9999px;
        margin-right: 0.5rem;
    }
}

.form-description {
    display: block;
    font-weight: 500;
    font-size: 0.875rem;
    color: $text-gray-400;
}

.form-input,
textarea {
    // Replace with your color
    $focus-ring-color: $theme-color;
    display: block;
    width: 100%;
    padding: 0.375rem 0.75rem;
    font-size: 1rem;
    line-height: 1.5rem;
    border-radius: 0.5rem;
    border: 1px solid $text-gray-200;
    background-clip: padding-box;
    transition: box-shadow 0.15s ease-in-out;

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
        box-shadow: 0 0 0 0.15rem rgba($color: rgba($focus-ring-color, 1), $alpha: 0.3);
        border: 1px solid $focus-ring-color;
    }
}

// Team members
.team-members {
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    flex: 1;
    -ms-flex: 1;
    gap: 0.75rem;

    .members {
        display: flex;
        align-items: center;
        flex-wrap: wrap;
        gap: 0.75rem;
    }
}

.circular-avatar {
    img {
        width: 3rem;
        height: 3rem;
        border-radius: 9999px;
        object-fit: cover;
    }
}

.add-btn {
    border: 2px dashed $text-gray-200;
    border-radius: 9999px;
    padding: 0.5rem;

    &:focus {
        box-shadow: none;
    }
}

// Share Project
.share-project{
    border-top: 1px solid $text-gray-200;
    padding-top: 1rem;
    padding-bottom: 1rem;

    .copy-link{
        display: flex;
        align-items: center;
        flex-wrap: wrap;
        color : $theme-color;
        line-height: 1.5rem;
        font-weight: 600; 
    }

    .learn-more{
        display: flex;
        align-items: center;
        flex-wrap: wrap;
        font-weight: 600;
        line-height: 1.5rem;
        color: $text-gray-400;
    }
}
</style>
