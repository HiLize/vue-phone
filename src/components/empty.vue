<template>
    <div class='emptyContent'>
        <img src="@/assets/img/notSearch-active@2x.png" class='icon-img'>
        <p class="label">{{label}}</p>
        <p class='subLabel' v-if="typeof subLabel !== 'undefined'">{{subLabel}}</p>
    </div>
</template>

<script>
export default {
    name: 'empty',
    props: {
        label: String,
        subLabel: String,
        imgSrc: String
    },
    created () {
        console.log(this.subLabel, 'sub', this.imgSrc)
    }
}
</script>

<style>
    .emptyContent {
        position: fixed;
        top: 0;
        width: 100%;
        height: 100vh;
        text-align: center;
        z-index: -1;
    }
    .emptyContent img {
        margin: 11.937rem auto 2.125rem auto;
        width: 10.125rem;
        height: 6.25rem;
    }
    .label {
        height: 1.25rem;
        line-height: 1.25rem;
        font-size: 0.875rem;
        color: #4F5C69;
        padding-bottom: 0.125rem;
    }
    .subLabel {
        height: 1.0625rem;
        line-height: 1.0625rem;
        font-size: 0.75rem;
        color: #959FA9; 
    }
</style>

