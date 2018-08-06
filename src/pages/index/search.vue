<template>
<div class="search">
    <div class="input">
        <van-search v-model.trim="search" show-action @change ="onSearch" @cancel="onCancel" ></van-search>
    </div>
    
    <div class="wrapper">
        <ul class='list' v-if='activities.length'>
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
            <li class='list-li clear'>
                <img src="@/assets/img/time.png" class='fl list-img'>
                <div class='fl list-info'>
                    <h4>
                        <span> item.topic </span>
                        <i style='background: #6AA1FF; '>校</i>
                        <i>思</i>
                    </h4>
                    <p><img src="@/assets/img/school.png" class='icon-img'> item.organizer </p>
                    <p><img src="@/assets/img/time.png" class='icon-img'> item.hostTime </p>
                    <p><img src="@/assets/img/place.png" class='icon-img'> item.hostPlace </p>
                </div>
            </li>
        </ul>
        <div class="no-activity" v-else>
            <p>暂无相关活动</p>
            <span>您可已尝试重新输入搜索词</span>
        </div>
    </div>


</div>
</template>

<script>
import { getActivities } from '@/services/index'

export default {
    data(){
        return {
            search: '',
            activities: [],
        }
    },   
    mounted(){
        // 首页活动列表信息
        getActivities(this.search, '', '', '').then(data => {
            console.log(data)
            // this.activities = data
        })
    }, 
    methods: {
        onSearch(){
            console.log(1111)
        },
        onCancel(){
            this.$router.go(-1)
        },
        toActivityDetail(){
            this.$router.push('/activityDetail')
        },
    }
}
</script>




<style scoped lang='scss'>
.search {
    
    .input {
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 2.875rem;
        .search-text {
            font-size: .75rem;
            padding: 0 1rem;
        }
    }
    .wrapper {
        padding-top: 2.875rem;
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
    
}


</style>

