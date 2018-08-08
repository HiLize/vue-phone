<template>
    <div class="nav-template">
        <div class="navbar">
            <van-nav-bar :title="navbarTitle" left-text="" left-arrow @click-left="navbarLeftClick" fixed />
        </div>
        <div class="content">
            <slot></slot>
        </div>
        <div class="vtabber" v-if="hasVtabber">
            <vtabber></vtabber>
        </div>
    </div>
</template>

<script>
import vtabber from '@/components/vtabber'
export default {
    components: { vtabber },
    props: {
        navbarTitle: String,
        navbarLeftText: String,
        navbarLeftClick: Function,
        navbarRightClick: Function,
        hasVtabber: {
            type: Boolean,
            default: true
        }
    }
}
</script>


<style lang='scss' scoped>
    .nav-template {
        display: flex;
        flex-direction: column;
        height: 100vh;
        width: 100%;
        .navbar {
            flex: none;
            -webkit-flex-basis: 46px;
            flex-basis: 46px;
        }
        .content {
            flex-basis: 100%;
            overflow: hidden;
        }
        .vtabber {
            flex: none;
            -webkit-flex-basis: 50px;
            flex-basis: 50px; 
        }   
    }
</style>

