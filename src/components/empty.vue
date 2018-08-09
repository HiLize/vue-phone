<template>
    <div class='emptyContent'>
        <slot></slot>
        
        <p class="label">{{label}}</p>
        <p class='subLabel' v-if="typeof subLabel !== 'undefined'">{{subLabel}}</p>
    </div>
</template>

<script>
export default {
    name: 'empty',
    props: {
        label: String,
        subLabel: String
    }
}
</script>

<style>
    .emptyContent {
        position: fixed;
        top: 0;
        width: 100%;
        /* height: 100vh; */
        text-align: center;
        z-index: 0;
        margin-top: 11.937rem;
    }
    .label {
        height: 1.25rem;
        line-height: 1.25rem;
        font-size: 0.875rem;
        color: #4F5C69;
        padding-bottom: 0.125rem;
        margin-top: 2.125rem;
    }
    .subLabel {
        height: 1.0625rem;
        line-height: 1.0625rem;
        font-size: 0.75rem;
        color: #959FA9; 
    }
</style>

