<template>
    <div class="activity-list">

        <!-- 导航条 -->
        <section class='navbar'>
            <van-nav-bar title="最近参加的活动" left-text="" left-arrow @click-left="onClickLeft"  />
        </section>

        <!-- 列表 -->
        <ul class='list'>
            <li v-for="(item,i) in list" :key='i'  @click='toActivityDetail(item.wid)'>
                <div class="info">
                    <h4>{{ item.topic }}</h4>
                    <p><img src="@/assets/img/time.png" alt="">{{ item.hostTime }}</p>
                    <p><img src="@/assets/img/place.png" alt="">{{ item.hostPlace }}</p>
                </div>
                <div class="btn"  @click='showModal=true'>查看电子票</div>
            </li>
            
        </ul>

        <!-- modal -->
        <div class="modal" v-show='showModal'>
            <div class="modal-container">
                <h3 class='title'>国学大百科趣味知识问答南京理工大学站</h3>
                <div class='content'>
                    <section class='content-item'>
                        <dl><dt>姓名</dt><dd>陈都灵</dd></dl>
                        <dl><dt>学号</dt><dd>011164982</dd></dl>
                    </section>
                    <section class='content-item'>
                        <dl><dt>时间</dt><dd>4月21日 17:30-21:30</dd></dl>
                    </section>
                    <section class='content-item'>
                        <dl><dt>地点</dt><dd>文苑路D5262</dd></dl>
                    </section>
                </div>
                <img src="@/assets/img/close.png" alt="" class='modal-icon' @click='showModal=false'>
            </div>
        </div>
    </div>
</template>


<script>
import { mineActivities, } from '@/services/activity'


export default {
    data() {
        return {
            list: [],
            showModal: false,
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
        background: rgba(0,0,0,.5);
        z-index: 999;
        .modal-container {
            width: 19.625rem;
            height: 19.625rem;
            background: url('../../assets/img/modalBg.png') no-repeat;
            background-size: cover;
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translateX(-50%) translateY(-50%);
            .title {
                padding: 1.5rem 2.375rem; 
                height: 6.25rem;
                box-sizing: border-box;
                font-size: 1.25rem;
                line-height: 1.75rem;
                color: #1D2227
            }
            .content {
                padding: .25rem .625rem 0;
                box-sizing: border-box;
                .content-item {
                    padding: 0 1.75rem;
                    height: 3.625rem;
                    display: flex;
                    align-items: center;
                    dl {
                        flex: 1;
                        dt {
                            font-size: .875rem;
                            line-height: 1.125rem;
                            color: #959FA9;
                        }
                        dd {
                            font-size: 1.125rem;
                            line-height: 1.5rem;
                            color: #1D2227;
                        }
                    }
                }
            }
            .modal-icon {
                width: 2.125rem;
                height: 2.125rem;
                position: absolute;
                top: 21.375rem;
                left: 50%;
                margin-left: -1.0625rem;
            }
        }
    }
}

</style>

