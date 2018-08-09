<template>
    <navTemplate navbarTitle='活动详情' :navbarLeftClick="onClickLeft" :hasVtabber='false'>
        <div class="activity-detail">
            <!-- 静态大图 -->
            <section class="big-img">
                <img :src="detail.poster" alt="" />
            </section>

            <!-- info -->
            <section class="info">
                <h4>{{ detail.topic }}</h4>
                <section class="btn-group">
                    <span style='background: #6AA1FF'>{{ detail.level }}</span>
                    <span style='background: #FFB56A'>{{ detail.signInType }}</span>
                    <span style='background: #5DDAA1'>实践实习</span>
                    <span style=''>{{ detail.credit }}学分</span>
                </section>
                <section class='info-detail'>
                    <p><img src="@/assets/img/time.png" class='icon-img'>{{ detail.hostTime }}</p>
                    <p><img src="@/assets/img/place.png" class='icon-img'>{{ detail.hostPlace }}</p>
                    <p><img src="@/assets/img/area.png" class='icon-img'>活动对象: {{ detail.activityTarget }}</p> 
                   
                </section>
                
            </section>

            <!-- step -->
            <section class="step">
                <section>
                    <!-- active-color='#0080FF' -->
                    <van-steps :active="active" >
                        <van-step></van-step>
                        <van-step>报名</van-step>
                        <van-step>签到</van-step>
                        <van-step>结果维护</van-step>
                        <van-step>结束</van-step>
                        <van-step></van-step>
                    </van-steps>
                </section>
                <div class="join">
                    <div class='ticket'>
                        <h4>{{ detail.remaining }}</h4>
                        <p>余票 / 张</p>
                    </div>
                    <div class="btn" @click="isSign ? userSignActivity() : userCancelSignActivity()"> {{isSign ? '我要参加' : '取消报名'}} </div>
                </div>
            </section>

            <!-- cell -->
            <section class="cell">
                <img src="@/assets/img/school-active.png" alt="">
                <h4 class='cell-title'>{{ detail.organizer }}</h4>
            </section>

            <!-- 活动详情 -->
            <div class="activity-content">
                <section class="cell-main">
                    <img src="@/assets/img/activityDetail.png" alt="">
                    <h4 class='cell-title'>活动详情</h4>
                </section>
                <div class="line"></div>
                <div class="detail">
                    <p>{{ detail.description }}</p>
                    <img src="@/assets/img/activityInfo.png" alt="img" />
                </div>
            </div>

            <!-- 人员列表 -->
            <div class='person-list'>
                <!-- {{ detail.attends.length }} -->
                <p>20人参加</p>
                <ul>
                    <li @click='toUser' v-for="(item,i) in detail.attends" :key='i'>
                        <img src="@/assets/img/avator01.png" alt="avator">
                        <span>{{ item.userName }}</span>
                    </li>
                    <li class='more'>
                        <img src="@/assets/img/more.png" alt="avator">
                        <span>更多</span>
                    </li>
                </ul>
            </div>

        </div>
    </navTemplate>
</template>

<script>
import { getActivityDetail } from '@/services/activity'
import navTemplate from '@/components/navTemplate'

import { userSign, userCancelSign } from '@/services/user'

export default {
    components: { navTemplate },
    data(){
        return {
            active: 1,
            detail: {},
            showMore: false,
            isSign: true
        }
    },
    mounted(){
        let wid = this.$route.params.wid
        getActivityDetail(wid).then(data => {
            this.detail = data 
        })

        // this.$dialog.alert({
        //     message: '弹窗内容'
        // });
    },
    methods: {
        onClickLeft() {
            this.$router.push('/')
        },
        toUser(){
            this.$router.push('/user')
        },
        // 用户报名参加活动
        userSignActivity() {
            this.isSign = false
            let wid = this.$route.params.wid
            userSign(wid).then(data => {
                console.log(data, 'userSign return data')
            })
        },
        // 用户取消报名活动
        userCancelSignActivity() {
            this.isSign = true
            let wid = this.$route.params.wid
            userCancelSign(wid).then(data => {
                console.log(data, 'userCancelSign return data')
            })
        }
    }
}
</script>

<style lang='scss' scoped >
@mixin mb10 {
    margin-bottom: .625rem;
}

.activity-detail {
    background: #f2f7fb;
    padding-bottom: 1.25rem;
    box-sizing: border-box;
    -moz-box-sizing: border-box;
    height: 100%;
    overflow: auto;
    .big-img {
        width: 100%;
        height: 13.5rem;
        img {
            width: 100%;
        }
    }
    .info {
        min-height: 13.25rem;
        padding: 0 1.25rem;
        background: #fff;
        margin-bottom: 1px;
        h4 {
            font-size: 1.25rem;
            color: #1D2227;
            line-height: 1.4;
            padding: 1.25rem 0 .75rem 0;
        }
        .btn-group {
            margin-bottom: 1.25rem;
            span {
                display: inline-block;
                height: 1.25rem;
                line-height: 1.5;
                padding: 0 .5rem;
                font-size: .75rem;
                color: #fff;
                border-radius: 1.25rem;
                background: #959FA9;
                margin-right: .25rem;
            }
        }
        .info-detail {
            p {
                font-size: .875rem;
                color: #959FA9;
                line-height: 1.25rem;
                margin: 0.25rem 0;
                padding-left: 1.125rem;
                position: relative;
                display: -webkit-box;
                -webkit-box-orient: vertical;
                -webkit-line-clamp: 2;  //这里是在第二行有省略号
                overflow: hidden;
                .icon-img {
                    width: .625rem;
                    height: .625rem;
                    position: absolute;
                    left: 0;
                    top: .375rem;
                }
            }
        }
    }
    .step {
        height: 10.75rem;
        padding: 1.5rem 1.25rem 1.25rem;
        background: #fff;
        box-sizing: border-box;
        @include mb10;
        .join {
            padding-top: 2rem;
            display: flex;
            justify-content: space-between;
            .ticket {
                height: 2.5rem;
                position: relative;
                padding-left: .625rem;
                &:before {
                    position: absolute;
                    left: 0;
                    top: 0;
                    content: '';
                    width: .25rem;
                    height: 2.5rem;
                    background: #DDE2E7;
                    border-radius: .125rem;
                    margin-right: .375rem;
                }
                h4 {
                    height: 1.75rem;
                    font-size: 1.25rem;
                    color: #1D2227;
                }
                p {
                    font-size: 12px;
                    color: #959FA9;
                }
            }
        }
        .btn {
            width: 10.375rem;
            height: 2.5rem;
            background: #0080FF;
            box-shadow: 0 8px 14px -6px rgba(0,128,255,0.40);
            border-radius: 1.25rem;
            text-align: center;
            line-height: 2.5rem;
            color: #fff;
            font-size: 1rem;
        }
    }
    .cell {
        height: 3.125rem;
        padding: 0 1.25rem;
        font-size: 1.125rem;
        color: #1D2227;
        background: #fff;
        display: flex;
        align-items: center;
        @include mb10;
        img {
            width: .875rem;
            height: .875rem;
            margin-right: .5rem;
        }
        .cell-title {
            color: #1D2227;
        }
    }
    .activity-content {
        height: 21.25rem;
        background: #fff;
        @include mb10;
        .cell-main {
            height: 3.125rem;
            padding: 0 1.25rem;
            font-size: 1.125rem;
            color: #1D2227;
            font-size: 1.125rem;
            display: flex;
            align-items: center;
            img {
                width: .875rem;
                height: .875rem;
                margin-right: .5rem;
            }
        }
        .line {
            margin: 0 1.25rem;
            height: 1px; 
            background: #eee;
            transform: scaleY(0.5);
        }
        .detail {
            margin: 0 1.25rem;
            padding: .75rem 0 1.25rem;
            p {
                font-size: .875rem;
                color: #4F5C69;
                line-height: 1.625rem;
                margin-bottom: .75rem;
            }
            img {
                width: 100%;
                height: 8.875rem;
                border: 1px solid #eee;
                border-radius: 1.25rem;
            }
        }
    }
    .person-list {
        box-sizing: border-box;
        height: 7.25rem;
        background: #fff;
        padding: 0 1.25rem;
        padding-top: 0.75rem;
        p {
            height: .75rem;
            color: #959FA9;
            font-size: .75rem;
            line-height: .75rem;
        }
        ul {
            width: 100%;
            height: 5.75rem;
            display: flex;
            justify-content: space-around;
            li {
                display: flex;
                flex-direction: column;
                justify-content: center;
                align-items: center;
                img {
                    width: 2.5rem;
                    border-radius: 50%;
                    margin-bottom: .25rem;
                }
                span {
                    height: 1.25rem;
                    line-height: 1.25rem;
                    font-size: .875rem;
                    color: #4F5C69;
                }
            }
            .more {
                span {
                    color: #0080FF;
                }
            }
        }
    }
}
</style>


