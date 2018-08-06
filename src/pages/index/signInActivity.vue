<template>
    <div class="activity-list">

        <!-- 导航条 -->
        <section class='navbar'>
            <van-nav-bar title="可签到活动" left-text="" left-arrow @click-left="onClickLeft"  />
        </section>

        <!-- 列表 -->
        <div class="wrapper">
            <ul class='list' v-if='list.length'>
                <li v-for="(item,i) in list" :key='i'  @click='toActivityDetail(item.wid)'>
                    <div class="info">
                        <h4>{{ item.topic }}</h4>
                        <p><img src="@/assets/img/time.png" alt="">{{ item.hostTime }}</p>
                        <p><img src="@/assets/img/place.png" alt="">{{ item.hostPlace }}</p>
                    </div>
                    <div class="btn" @click.stop='show=true; showKeyboard=true'>签到</div>
                </li>
                <li @click='scanning'>扫一扫</li>
            </ul>
            <div class='no-activity' v-else>
                <img src="../../assets/img/active01.png" alt="">
                <p>暂无相关活动</p>
            </div>
        </div>
        
        <!-- modal -->
        <div class="modal" v-show='show'>
            <div class='password-input'>
                <h5>输入验证码</h5>
                <p class='info-p'>活动名称：世界和他的悲欢</p>
                <van-password-input :value="value" :length='4' @focus="showKeyboard = true" />
                <em>验证码有误，请仔细核对</em>
                <div class='sure' @click='confirmPsw'>确定</div>
            </div>
            <section class="keyboard">
                <van-number-keyboard :show="showKeyboard"  @input="onInput" @delete="onDelete" @blur="showKeyboard = false"/>
            </section>
        </div>

        
    </div>
</template>


<script>
import { mineActivities, } from '@/services/activity'
import { setRightButton } from '@/utils/sdk'

export default {
    data() {
        return {
            show: false,
            value: '123',
            showKeyboard: false,
            list: [
                { topic: '世界和他的悲欢', hostTime: '19:30', hostPlace: '文苑路46316分' }
            ],
        };
    },
    mounted(){
        mineActivities().then(data => {
            console.log(data)
            // this.list = data
        })
    },
    methods: {
        toActivityDetail(){
            this.$router.push('/activityDetail')
        },

        onClickLeft(){
            this.$router.go(-1)
        },

        onInput(key) {
            this.value = (this.value + key).slice(0, 6)
        },
        onDelete() {
            this.value = this.value.slice(0, this.value.length - 1)
        },
        confirmPsw(){
            this.show = false
        },
        scanning(){
            setRightButton(2, function(){
                console.log(11)
            })
        },
    }

}
</script>

<style scoped lang='scss'>
.activity-list {
    background: #f2f7fb;
    .list {
        height: calc(100vh - 2.875rem);
        box-sizing: border-box;
        padding: 0 1.25rem;
        background: #fff;
        li {
            height: 7.25rem;
            box-sizing: border-box;
            display: flex;
            justify-content: space-between;
            align-items: center;
            border-bottom: 1px solid #eee;
            // &:last-child {
            //     border: none;
            // }
            .info {
                h4 {
                    font-size: 1.25rem;
                    line-height: 1.75rem;
                    color: #1D2227;
                    margin-bottom: .625rem;
                }
                p {
                    font-size: .8125rem;
                    color: #959FA9;
                    height: 1.125rem;
                    line-height: 1.125rem;
                }
                img {
                    height: .625rem;
                    margin-right: .5rem;
                    vertical-align: middle;
                }
            }
            .btn {
                width: 6.25rem;
                height: 2rem;
                border-radius: 20px;
                border: 1px solid #0080FF;
                color: #0080FF;
                font-size: .875rem;
                line-height: 2rem;
                text-align: center;
            }
        }
    }

    .modal {
        position: fixed;
        left: 0;
        top: 0;
        width: 100%;
        height: 100%;
        z-index: 999;
        background: rgba(0,0,0,0.4);
        .password-input {
            background: #fff;
            width: 17.5rem;
            height: 17.5rem;
            background-size: cover;
            position: absolute;
            top: 20%;
            left: 50%;
            transform: translateX(-50%);
            text-align: center;
            border-radius: 1.25rem;
            h5 {
                height: 4.75rem;
                line-height: 4.75rem;
                font-weight: bold;
                font-size: 1.125rem;
            }
            .info-p {
                font-size: .75rem;
                height: 3.125rem;
                line-height: 3.125rem;
                color: #959FA9; 
            }
            em {
                font-size: .75rem;
                color: #c00;
                height: 2.5rem;
                line-height: 2.5rem;
                display: block;

            }
            .sure {
                width: 14.375rem;
                height: 2.25rem;
                line-height: 2.25rem;
                background: #e6f0ff;
                margin: 0 auto;
                text-align: center;
                color: #90b4ff;
                border-radius: .625rem;
            }
        }
    }

    .no-activity {
        width: 100%;
        height: 7.5rem;
        text-align: center;
        position: absolute;
        top: 50%;
        transform: translateY(-50%);
        font-size: .75rem;
        color: #959FA9;
        img {
            width: 6.25rem;
            margin-bottom: .5rem;
        }
    }
}

</style>

