<template>
<navTemplate navbarTitle='校园活动' :navbarLeftClick="onClickLeft" >
    <div class='index'>

        <!-- <vtabber></vtabber> -->

        <!-- 导航条 -->
        <!-- <div class='navbar'>
            <van-nav-bar title="校园活动" left-text="" left-arrow @click-left="onClickLeft" fixed />
        </div> -->

        <div v-if='!activities.length' class='activity' id="activity">
            <!-- 搜索框 -->
            <div class="search">
                <div class="search-container" @click="$router.push('/search')">
                    <img src="@/assets/img/search.png" alt=""  />
                    <span>活动名称</span>
                </div>
            </div>

            <!-- 轮播图 -->
            <!-- <div class='banner'>
                <van-swipe :autoplay="3000">
                    <van-swipe-item v-for="(item,i) in bannerList" :key='i'  @click='toActivityDetail(item.wid)'>
                        <img :src="item.poster" alt="">
                    </van-swipe-item>
                    
                </van-swipe>
            </div> -->
            <div class='banner'>
                <van-swipe :autoplay="3000">
                    <van-swipe-item>
                        <img src="@/assets/img/banner01.png" alt="">
                    </van-swipe-item>
                    <van-swipe-item>
                        <img src="@/assets/img/banner02.png" alt="">
                    </van-swipe-item>
                    <van-swipe-item>
                        <img src="@/assets/img/banner03.png" alt="">
                    </van-swipe-item>
                    
                </van-swipe>
            </div>
            
            <!-- select group -->
            <section class='main'>
                <div class="selector-group" :style="top?'position: fixed; top:'+top:''">
                    <div class="selector-group-container">
                        <section :class="['section', showStatus?'section-active':'']" @click='showStatus=!showStatus'>
                            <span v-text='statusText'></span><img src="@/assets/img/down.png" class='icon'>
                        </section>
                        <section :class="['section', showType?'section-active':'']" @click='showType=!showType'>
                            <span v-text='typeText'></span><img src="@/assets/img/down.png" class='icon'>
                        </section>
                        <section :class="['section', showLevel?'section-active':'']" @click='showLevel=!showLevel'>
                            <span v-text='levelText'></span><img src="@/assets/img/down.png" class='icon'>
                        </section>
                    </div>
                </div>
                
                <van-list v-model="loading" :finished="finished" @load="onLoad" class='list'>
                    <ul>
                        <!-- <li class='list-li clear' @click='toActivityDetail(item.wid)' v-for="(item,i) in activities" :key='i'>
                            <img :src="item.poster" alt="" class='fl list-img'>
                            <div class='fl list-info'>
                                <h4>
                                    <span>{{ item.topic }}</span>
                                    <i style='background: #6AA1FF; '>校</i>
                                    <i>思</i>
                                </h4>
                                <p><img src="@/assets/img/school.png" class='icon-img'>{{ item.organizer }}</p>
                                <p><img src="@/assets/img/time.png" class='icon-img'>{{ item.hostTime }}</p>
                                <p><img src="@/assets/img/place.png" class='icon-img'>{{ item.hostPlace }}</p>
                            </div>
                        </li> -->
                        <li class='list-li clear' >
                            <img src="@/assets/img/active01.png" alt="" class='fl list-img'>
                            <div class='fl list-info'>
                                <h4>
                                    <span>标题</span>
                                    <i style='background: #6AA1FF; '>校</i>
                                    <i>思</i>
                                </h4>
                                <p><img src="@/assets/img/school.png" class='icon-img'>.organizer </p>
                                <p><img src="@/assets/img/time.png" class='icon-img'> item.hostTime </p>
                                <p><img src="@/assets/img/place.png" class='icon-img'>item.hostPlace</p>
                            </div>
                        </li>
                        <li class='list-li clear' >
                            <img src="@/assets/img/active01.png" alt="" class='fl list-img'>
                            <div class='fl list-info'>
                                <h4>
                                    <span>标题</span>
                                    <i style='background: #6AA1FF; '>校</i>
                                    <i>思</i>
                                </h4>
                                <p><img src="@/assets/img/school.png" class='icon-img'>.organizer </p>
                                <p><img src="@/assets/img/time.png" class='icon-img'> item.hostTime </p>
                                <p><img src="@/assets/img/place.png" class='icon-img'>item.hostPlace</p>
                            </div>
                        </li>
                        <li class='list-li clear' >
                            <img src="@/assets/img/active01.png" alt="" class='fl list-img'>
                            <div class='fl list-info'>
                                <h4>
                                    <span>标题</span>
                                    <i style='background: #6AA1FF; '>校</i>
                                    <i>思</i>
                                </h4>
                                <p><img src="@/assets/img/school.png" class='icon-img'>.organizer </p>
                                <p><img src="@/assets/img/time.png" class='icon-img'> item.hostTime </p>
                                <p><img src="@/assets/img/place.png" class='icon-img'>item.hostPlace</p>
                            </div>
                        </li>
                        <li class='list-li clear' >
                            <img src="@/assets/img/active01.png" alt="" class='fl list-img'>
                            <div class='fl list-info'>
                                <h4>
                                    <span>标题</span>
                                    <i style='background: #6AA1FF; '>校</i>
                                    <i>思</i>
                                </h4>
                                <p><img src="@/assets/img/school.png" class='icon-img'>.organizer </p>
                                <p><img src="@/assets/img/time.png" class='icon-img'> item.hostTime </p>
                                <p><img src="@/assets/img/place.png" class='icon-img'>item.hostPlace</p>
                            </div>
                        </li>
                    </ul>
                </van-list>

            </section>
        </div>
        <empty v-else label='暂无相关活动' imgSrc="@/assets/img/notFind-active@2x.png"/>

        <!-- 底部菜单 -->
        <van-popup v-model="showStatus" position="bottom" :overlay="true">
            <van-picker show-toolbar title="状态" :columns="columns" @cancel="onCancel"  @confirm="onConfirm" />
        </van-popup>
        <van-popup v-model="showType" position="bottom" :overlay="true">
            <van-picker show-toolbar title="分类" :columns="columns" @cancel="onCancel"  @confirm="onConfirm" />
        </van-popup>
        <van-popup v-model="showLevel" position="bottom" :overlay="true">
            <van-picker show-toolbar title="级别" :columns="columns" @cancel="onCancel"  @confirm="onConfirm" />
        </van-popup>
        
    </div>
    </navTemplate>
</template>

<script>
import vtabber from '@/components/vtabber'
import empty from '@/components/empty'
import navTemplate from '@/components/navTemplate'
import { getActivities ,getBanner } from '@/services/index'

export default {
    components: { vtabber, empty, navTemplate },
    data(){
        return {
            statusText: '状态',
            showStatus: false,
            typeText: '分类',
            showType: false,
            levelText: '级别',
            showLevel: false,
            top: 0,
            loading: false,
            finished: false,
            activities: [],
            list: [],
            bannerList: [],
            columns: ['杭州', '宁波', '温州', '嘉兴', '湖州'],
        }
    },
    mounted(){
        // 页面上拉吸顶
        this.initPage()
        // 首页活动列表信息
        getActivities(this.search, this.status, this.type, this.level).then(data => {
            console.log(data)
            // this.activities = data
        })
        // banner
        getBanner().then(data => {
            console.log(data)
            // this.bannerList = data
        })
    },
    methods: {
        initPage(){
            let _this = this
            var index = document.getElementById('activity')
            index.addEventListener('touchmove',function(){
                let scrollTop = index.scrollTop
                console.log(scrollTop, _this.top, index.offsetTop)
                if(scrollTop >= 220) {
                    _this.top = '118px'
                }
                else {
                    _this.top = 0
                }
            })
        },
        toActivityDetail(){
            this.$router.push('/activityDetail')
        },
        onClickLeft() {
            console.log('返回')
        },
        onLoad() {
            setTimeout(() => {
                for (let i = 0; i < 10; i++) {
                    this.list.push(this.list.length + 1)
                }
                this.loading = false

                if (this.list.length >= 40) {
                    this.finished = true
                }
            }, 500) 
        },
        onConfirm(value, index) {
            this.statusText = value
            this.onCancel()
        },
        onCancel() {
            this.showStatus = false
            this.showType = false
            this.showLevel = false
        }
    }
};
</script>

<style lang='scss' scoped>
.index {
    position: relative;
    // height: 100%;
    // min-height: 100vh;
    .navbar {
        width: 100%;
        position: fixed;
        top: 0;
        z-index: 999;
        .van-nav-bar__title {
            font-size: .9rem;
            color: #333;
        }
    }
    .activity {
        padding: 4.5rem 0 3rem;
        .search {
            width: 100%;
            height: 4.5rem;
            position: fixed;
            top: 2.875rem;
            left: 0;
            background: #fff;
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: .7rem;
            color: #959FA9;
            z-index: 999;
            .search-container {
                width: 21rem;
                height: 2.5rem;
                background: #F2F7FB;
                border-radius: 1.25rem;
                display: flex;
                align-items: center;
                justify-content: center;
                img {
                    width: .75rem;
                    height: .75rem;
                }
                span {
                    display: inline-block;
                    height: .75rem;
                    margin-left: .25rem;
                }
            }
        }
        .banner {
            height: 13.5rem;
            margin-bottom: 2.625rem;
            overflow: hidden;
            text-align: center;
            img {
                height: 13.5rem;
            }
        }
        .main {
            .selector-group {
                width: 100%;
                height: 2.5rem;
                background: #fff;
                transition: all 1s;
                .selector-group-container {
                    width: 21rem;
                    margin: 0 auto;
                    display: flex;
                    justify-content: space-between;
                    font-size: .875rem;
                    color: #4F5C69;
                    .section {
                        width: 6.75rem;
                        height: 2.5rem;
                        border: 1px solid #fff;
                        border-radius: 1.25rem;
                        background: #F2F7FB;
                        display: flex;
                        justify-content: center;
                        align-items: center;
                        .icon {
                            width: .625rem;
                            height: .3125rem;
                            margin-left: 5px;
                        }
                        
                    }
                    .section-active {
                        border: 1px solid #38f;
                        color: #38f;
                        .icon {
                            transform: rotate(180deg);
                            
                        }
                    }
                }
            }
            
            .list {
                width: 21rem;
                margin: 0 auto;
                padding-top: 1.25rem;
                .list-li {
                    margin-bottom: 1rem;
                    .list-img {
                        width: 5.4rem;
                        height: 5.4rem;
                        border-radius: 1.25rem;
                        margin-right: 1rem;
                        border: 1px solid #eee;
                    }
                    .list-info {
                        max-width: 11.25rem;
                        overflow: hidden;
                        text-overflow: ellipsis;
                        white-space: nowrap;
                        h4 {
                            font-size: 1.25rem;
                            color: #1D2227;
                            margin: .1rem 0 .5rem;
                            i {
                                display: inline-block;
                                width: 1.25rem;
                                height: 1.25rem;
                                text-align: center;
                                line-height: 1.125rem;
                                background: #FFB56A;
                                border-radius: .25rem;
                                color: #fff;
                                font-size: .75rem;
                                margin: 0 .1rem;
                                vertical-align: middle;
                            }
                            
                        }
                        .icon-img {
                            width: .625rem;
                            height: .625rem;
                            margin-right: .5rem;
                            display: inline-block;
                            vertical-align: middle;
                        }
                        p {
                            font-size: .65rem;
                            color: #959FA9;
                            line-height: 1.125rem;
                        }
                    }
                }
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
        p {
            margin: .625rem;
            color: #2d2f33;
        }
    }
}



</style>

