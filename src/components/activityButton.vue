<template>
    <div :class="type" @click="type === 'disable' ? '' : onClickBut()">
        <p v-if="typeof subLabel !== 'undefined'" class="sub-label">{{subLabel}}</p>
        <p :class="typeof subLabel !== 'undefined' ? 'label' : ''">{{label}}</p>
    </div>
</template>

<script>

export default {
    props: {
        onClickBut: Function, // 点击事件
        label: String, // 主文字
        subLabel: String, // 辅文字
        type: {
            default: 'normal'
            // 样式选择
        }
    }
}
</script>

<style  lang='scss' scoped >
    @mixin common {
        width: 10.375rem;
        height: 2.5rem;
        line-height: 2.5rem;
        box-shadow: 0 8px 14px -6px rgba(0,128,255,0.40);
        border-radius: 1.25rem;
        text-align: center;
        font-size: 1rem;
        box-sizing: border-box;
    }
    .normal {
        @include common;
        background: #0080FF;
        color: #fff;  
    }
    .cancel {
        @include common;
        background: #fff;
        color: #0080FF;
        border: 1px solid #0080FF;
        box-shadow: none;
    }
    .disable {
        @include common;
        background: #D3DAE2;
        color: #ffffff;
        box-shadow: none;
    }
    .sub-label {
        font-size: 0.6875rem;
        line-height: 1.25rem;
    }
    .label {
        line-height: 1rem;
    }
    
</style>

