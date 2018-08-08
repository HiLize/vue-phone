<template>
<navTemplate navbarTitle='校园活动' :navbarLeftClick="onClickLeft" >
    <div class="user">

        <!-- <vtabber></vtabber>  -->

        <!-- 导航条 -->
        <!-- <section class='navbar'> -->
            <!-- <van-nav-bar title="校园活动" left-text="" left-arrow @click-left="onClickLeft"  fixed /> -->
        <!-- </section> -->

        <!-- user-info -->
        <section class="user-info">
            <div class='avator'>
                <img src="@/assets/img/avator03.png" alt="">
                <div class="avatar-info">
                    <h5>张起灵</h5>
                    <span>01116245</span>
                </div>
            </div>
            <div class="subject">
                <div><h5>10</h5><p>活动数</p></div>
                <div><h5>0</h5><p>总分</p></div>
                <div><h5>60%</h5><p>完成进度</p></div>
            </div>
        </section>

        <!-- 签到方式 -->
        <section class='way'>
            <div class='way-item' @click="$router.push('/signInActivity')">
                <img src="@/assets/img/QianDao.png" alt=""><span>活动签到</span>
            </div>
            <div class='way-item' @click="$router.push('/activityList')">
                <img src="@/assets/img/saoyisao.png" alt=""><span>电子票</span>
            </div>
            <div class='way-item' @click="$router.push('/schoolReport')">
                <img src="@/assets/img/seeGrade.png" alt=""><span>查看成绩</span>
            </div>
        </section>

        <!-- 最近参加的活动 -->
        <section class='recent-activity'>
            <div class="cell">
                <h4>最近参加的活动</h4>
                <p><span>更多</span><img src="@/assets/img/more-icon.png" alt=""></p>
            </div>
            <ul class='list'>
                <li class='list-li clear' @click='toActivityList'>
                    <img src="@/assets/img/active01.png" alt="" class='fl list-img'>
                    <div class='fl list-info'>
                        <h4><span>世界和他的悲欢</span> <i style='background: #6AA1FF; '>校</i><i>思</i></h4>
                        <p><img src="@/assets/img/school.png" class='icon-img'>电器信息学院</p>
                        <p><img src="@/assets/img/time.png" class='icon-img'>4月21日  17:30 - 21:30</p>
                        <p><img src="@/assets/img/place.png" class='icon-img'>闻言路A841</p>
                    </div>
                </li>
            </ul>
        </section>

        <!-- 素质发展情况 -->
        <section class='map'>
            <div class="cell">
                <h4>素质发展情况</h4>
                <p>备注</p>
            </div>
            <div class="map-content"></div>
        </section>

    </div>
    </navTemplate>
</template>


<script>
import vtabber from '@/components/vtabber'
import navTemplate from '@/components/navTemplate'

export default {
    components: { vtabber, navTemplate },
    data () {
        return {
            
        }
    },
    mounted(){
        this.initEchart()
    },
    methods: {
        onClickLeft(){
            this.$router.go(-1)
        },
        toActivityList(){
            this.$router.push('/activityList')
        },
        initEchart(){
            let myChart = this.$echarts.init(document.querySelector('.map-content'))
            let option = {
                // title: {
                //     text: '基础雷达图'
                // },
                // tooltip: {},
                // legend: {
                //     data: ['预算分配（Allocated Budget）', '实际开销（Actual Spending）']
                // },
                radar: {
                    // shape: 'circle',
                    name: {
                        textStyle: {
                            color: '#4F5C69',
                            fontSize: '14',
                        }
                    },
                    indicator: [
                        { name: '技能值', max: 6500},
                        { name: '成长值', max: 16000},
                        { name: '个性值', max: 30000},
                        { name: '艺能值', max: 38000},
                        { name: '活跃值', max: 52000},
                        { name: '诚信值', max: 25000},
                        { name: '活力值', max: 45000},
                        { name: '团队值', max: 65000},
                    ]
                },
                series: [{
                    name: '预算 vs 开销（Budget vs spending）',
                    type: 'radar',
                    // areaStyle: {normal: {}},
                    data : [
                        {
                            value : [4300, 10000, 28000, 35000, 50000, 19000, 30442, 62458],
                            name : '预算分配（Allocated Budget）'
                        },
                        {
                            value : [5000, 14000, 28000, 31000, 42000, 21000, 37564, 38784],
                            name : '实际开销（Actual Spending）'
                        }
                    ]
                }]

            }
            myChart.setOption(option)
        }
    }
}
</script>


<style scoped lang='scss'>


@mixin sectionBlock($h) {
    height: $h;
    background: #fff;
    padding: 0 1.25rem;
    margin-bottom: .625rem;
    box-sizing: border-box;
}

.cell {
    height: 3rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
    border-bottom: 1px solid #eee;
    h4 {
        font-size: 1rem;
        line-height: 1.5rem;
        color: #1D2227;
    }
    p{
        font-size: .875rem;
        line-height: 1.25rem;
        color: #959FA9;
        display: flex;
        align-items: center;
        img {
            height: .75rem;
            margin-left: .25rem;
        }
    }
}

.user {
    background: #f2f7fb;
    padding-bottom: 2rem;
    overflow: auto;
    height: 100%;
    box-sizing: border-box;
    .user-info {
        @include sectionBlock(10.25rem);
        .avator {
            display: flex;
            align-items: center;
            padding: 1.25rem 0;
            img {
                width: 3.75rem;
                height: 3.75rem;
                margin-right: .75rem;
                border-radius: 50%;
                border: 1px solid #eee;
            }
            .avatar-info {
                h5 {
                    height: 1.75rem;
                    line-height: 1.75rem;
                    font-size: 1.25rem;
                    color: #1D2227;
                }
                span {
                    font-size: .875rem;
                    line-height: 1.25rem;
                    color: #959FA9;
                }
            }
        }
        .subject {
            height: 2.875rem;
            display: flex;
            align-items: center;
            div {
                flex: 1;
                display: flex;
                flex-direction: column;
                align-items: center;
                h5 {
                    height: 1.75rem;
                    line-height: 1.75rem;
                    font-size: 1.25rem;
                    color: #1D2227;
                }
                span {
                    font-size: .875rem;
                    line-height: 1.25rem;
                    color: #959FA9;
                }
            }
        }
    }

    .way {
        @include sectionBlock(6.25rem);
        padding: 0;
        display: flex;
        justify-content: space-around;
        align-items: center;
        .way-item {
            display: flex;
            flex-direction: column;
            align-items: center;
            img {
                height: 1.5rem;
                margin-bottom: .5rem;
            }
            span {
                font-size: .8125rem;
                color: #4F5C69;
                line-height: 1.125rem;
            }
        }
    }

    .recent-activity {
        @include sectionBlock(12rem);
        .list {
            padding-top: 1.25rem;
            .list-li {
                margin-bottom: 1rem;
                .list-img {
                    width: 5.4rem;
                    height: 5.4rem;
                    border-radius: 1rem;
                    margin-right: .8rem;
                    border: 1px solid #eee;
                }
                .list-info {
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

    .map {
        @include sectionBlock(22.75rem);
        .map-content {
            height: 17.125rem;
            padding: 1.25rem 0;
        }
    }

}


</style>

