<template>
<div class="component-box">
    <div class="component-box-head">
        <div>
            <slot name="header"></slot>
        </div>
        <div class="action-tabs">
            <button @click="makePreviewActive(true)" class="btn" title="View component" :class="{ active: isPreview }">
                <svg class="w-5 h-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
                </svg>
                <span class="ml-1">Preview</span>
            </button>
            <button @click="makePreviewActive(false)" class="btn" title="Component code" :class="{ active: !isPreview }">
                <svg class="w-5 h-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                </svg>
                <span class="ml-1">Code</span>
            </button>
        </div>
    </div>
    <div class="component-box-body">
        <transition-fade>
            <!-- Preview body -->
            <slot name="body" v-if="isPreview"></slot>
            <!-- Code body -->
            <div class="code-body" v-else>
                <codemirror ref="cmEditor" :value="currentComponentDetails.source"  /> 
                <!-- :options="cmOptions" -->
            </div>
        </transition-fade>
    </div>
</div>
</template>

<script>
import TransitionFade from "@general/TransitionFade.vue";
import ComponentRegistry from "/src/component-registry.js";

// Language mode
import 'codemirror/mode/vue/vue.js'

export default {
    props: ['details'],
    data() {
        return {
            isPreview: true,
            currentComponentDetails: {},
        };
    },
    methods: {
        makePreviewActive(status) {
            if (status) {
                this.isPreview = true;
            } else {
                // Set component details of the current active component(name and source code)
                this.setComponentDetails();
                this.isPreview = false;
            }
        },
        // Function to set currect component details by name
        setComponentDetails() {
            if (this.details) {
                let filePath = this.details.__file.split("/");
                let fileName = filePath[filePath.length - 1].split(".")[0];
                // Get component source code from 'ComponentRegistry' file by passing it the component name
                // And then set it to 'currentComponentDetails'
                this.currentComponentDetails = ComponentRegistry.getComponentByName(fileName);
            }
        },
    },
    components: {
        TransitionFade,
    },
};
</script>

<style lang="scss" scoped>
.component-box {
    border: 1px solid $text-gray-200;
    border-radius: 0.375rem;
}

.component-box-head {
    display: flex;
    flex-wrap: wrap;
    gap: 0.75rem;
    align-items: center;
    justify-content: space-between;
    padding: 1.25rem 1rem;
    border-bottom: 1px solid $text-gray-200;
    font-size: 1rem;
    border-top-left-radius: 0.375rem;
    border-top-right-radius: 0.375rem;
    line-height: 1.75rem;
    font-weight: 600;
    color: $text-gray-900;
    background-color: white;
    text-transform: capitalize;
    // letter-spacing: -0.025rem;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;

    @media (min-width: 768px) {
        font-size: 1.125rem;
    }
}

.component-box-body {
    position: relative;
    // padding: 3rem 2rem;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;

    //   Immediate childs
    >* {
        display: flex;
        align-items: center;
        justify-content: space-around;
        gap: 0.5rem;
        width: 100%;
        max-width: 100%;
        // max-width: 32rem;
        // padding: 3rem 2rem;
        // margin: 0 auto;
        flex-wrap: wrap;

        @media (min-width: 768px) {
            gap: 1rem;
        }
    }

    .code-body {
        background: $text-gray-900;
        color: $text-gray-100;
        max-width: 100%;
        padding: 0;
        overflow: auto;

        .vue-codemirror {
            width: 100%;
            max-width: 100%;
        }

        /deep/ .CodeMirror{
          height: 600px;
          font-size: 16px;
        }
    }
}

.badge {
    display: inline-block;
    padding: 0 0.75rem;
    border-radius: 9999px;
    font-size: 0.875rem;
    font-weight: 700;
    background-color: #f4f4f5;
    color: #71717a;
    text-transform: uppercase;
}

.badge-red {
    background-color: #fee2e2;
    color: #ef4444;
}

.action-tabs {
    .btn {
        border: none;
        box-shadow: none;

        &:hover {
            background-color: transparent;
            color: $theme-color;
        }
    }

    .btn.active {
        color: $theme-color;
        background-color: rgba(lighten($theme-color, 20), 0.2);

        &:focus {
            outline: none;
            box-shadow: none;
        }
    }
}
</style>
