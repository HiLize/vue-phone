<template>
    <navTemplate navbarTitle='第二课堂成绩单' :navbarLeftClick="onClickLeft" :hasVtabber='false'>
        <div class="school-report">
            <!-- main -->
            <div class="main">
                <div class="info">
                    <img src="@/assets/img/avator05.png" alt="" class='avator' />
                    <div class="detail">
                        <h4 class='detail-h4'>{{ report.username }}</h4>
                        <p class='detail-p'>
                            <em>{{ report.userId }}</em>
                            <em>{{ report.gender }}</em>
                            <em>{{ report.userLevel }}</em></p>
                        <p class='detail-p'>
                            <span>院系：{{ report.academyName }}</span>&nbsp;&nbsp;&nbsp;&nbsp;
                            <span>专业：{{ report.majorName }}</span></p>
                        <p class='sub-title'>
                            <span>第二课堂成绩单</span>
                        </p>
                        <div class='report'>
                            <section><p class='report-p'>{{ report.total }}</p>总成绩</section>
                            <section><p class='report-p'>{{ report.progress }}</p>完成进度</section>
                        </div>
                        <div class="cell-group">
                            <section class='cell' v-for="(item,i) in report.scoreOverallItems" :key='i'>
                                <p class='cell-p'>{{ item.type }}</p>
                                <p class='cell-p'>
                                    <b>{{ item.gain }}</b>/{{ item.total }}  <van-icon name="arrow" />
                                </p>
                            </section>
                        </div>
                    </div>
                </div>

                <!-- 底部样式，注意阴影样式 -->
                <section class="main-foot">
                    <section class='section-top'></section>
                    <section class='section-bottom'>
                        <img src="@/assets/img/folder.png" alt="">
                    </section>
                </section>
                
            </div>
        </div>
    </navTemplate>
</template>


<script>
import { getScore } from '@/services/user'
import navTemplate from '@/components/navTemplate'

export default {
    components: { navTemplate },
    data() {
        return {
            report: {}
        }
    },
    mountedt(){
        getScore.then(data => {
            console.log(data)
            // this.report = data
        })
    },
    methods: {
        onClickLeft(){
            this.$router.go(-1)
        },
    }
}
</script>


<style scoped lang='scss'>
.school-report {
    height: 100%;
    overflow: auto;
    .main {
        background: #f2f7fb;
        width: 100%;
        height: auto;
        padding: 2.875rem 0 4.625rem;
        box-sizing: border-box;
        position: relative;
        .info {
            width: calc(100vw - 2.5rem);
            margin: 0 auto;
            position: relative;
            border-radius: 1.25rem 1.25rem 0 0;
            background: #fff;
            z-index: 99;
            .avator {
                width: 3.75rem;
                height: 3.75rem;
                border: 1px solid #eee;
                border-radius: 50%;
                position: absolute;
                top: -1.875rem;
                left: 50%;
                margin-left: -1.875rem;
            }
            .detail {
                width: 100%;
                height: 43.125rem;
                padding-top: 2.25rem;
                text-align: center;
                .detail-h4 {
                    font-size: 1.25rem;
                    color: #1D2227;
                    margin-bottom: .75rem;
                    height: 1.75rem;
                    line-height: 1.75rem;
                }
                .detail-p {
                    height: 1.125rem;
                    line-height: 1.125rem;
                    margin-bottom: .5rem;
                    font-size: .75rem;
                    color: #959FA9;
                    em {
                        &:after {
                            content: '';
                            display: inline-block;
                            width: .125rem;
                            height: .625rem;
                            background: #959FA9;
                            margin: 0 .6rem;
                        }
                        &:last-child:after {
                            display: none;
                        }
                    }
                }
                .sub-title {
                    width: 100%;
                    height: 1px;
                    margin: 1.875rem 0 1.5rem;
                    background: #eee;
                    position: relative;
                    text-align: center;
                    span {
                        font-size: .875rem;
                        color: #1D2227;
                        position: absolute;
                        width: 7.5rem;
                        height: 1.25rem;
                        line-height: 1.25rem;
                        background: #fff;
                        left: 50%;
                        margin-left: -3.75rem;
                        top: 0;
                        margin-top: -10px;
                    }
                }
                .report {
                    display: flex;
                    height: 4.625rem;
                    justify-content: space-around;
                    font-size: .8125rem;
                    line-height: 1.125rem;
                    color: #4F5C69;
                    .report-p {
                        height: 2.5rem;
                        line-height: 2.5rem;
                        font-size: 1.75rem;
                        color: #0080FF;
                    }
                }
                .cell-group {
                    width: calc(100vw - 7.5rem);
                    margin: 0 auto;
                    padding: 1rem 0 .875rem;
                    .cell {
                        height: 3.125rem;
                        display: flex;
                        justify-content: space-between;
                        align-items: center;
                        border-top: 1px solid #eee;
                        .cell-p {
                            font-size: .875rem;
                            color: #1D2227;
                            line-height: 1.5;
                            b {
                                color: #1D2227;
                                font-size: 1.125rem;
                                font-weight: bold;
                            }
                        }
                    }
                }
            }
            
        }
        .section-top {
            position: absolute;
            width: calc(100vw - 1.5rem);
            margin-left: 0.75rem;
            bottom: 4.625rem;
            box-sizing: border-box;
            height: 4.5rem;
            background: #FFCA4A;
            border-radius: .625rem .625rem 0 0; 
        }
        .section-bottom {
            position: absolute;
            width: calc(100vw - 1.5rem);
            margin-left: 0.75rem;
            bottom: 0;
            box-sizing: border-box;
            height: 4.625rem;
            background: #FFE781;
            box-shadow: 0 -8px 16px -8px #FFE781;
            display: flex;
            justify-content: center;
            align-items: center;
            z-index: 100;
            img {
                width: 1.5rem;
                height: 1.5rem;
            }
        }
    }
}
</style>
