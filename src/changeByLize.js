// 李泽 2018/08/06————2018/08/09

/*
 1、创建公共组件
     components/navTemplate.vue 头部导航和底部导航，固定不动，底部导航可选有无
     components/empty.vue 空白提示页，可以传递title和subtitle两类文字，插入img等不同的icon
*/

/*
2、修改文件使用navTemplate.vue 模板
    indexe.vue / search.vue / user.vue / schoolReport.vue / activityList.vue / activityDetail.vue
*/

/*
3、修改文件使用empty.vue模板
    indexe.vue / search.vue
*/

/*
4、index.vue修改内容
    (1) this.initPage()上拉吸顶
    (2) 由于使用了navTemplate.vue模板，该方法的获取scrollTop失效，先修改为通过id=index的标签，来获取scrollTop
    判断后操作top
    (3) activitiesDetail path 添加wid
*/

/*
5、search.vue修改内容
    (1) 重写搜索框元素样式
    (2) 绑定inputOnChange方法，实时监控input内容变化
    (3) 绑定clearInput方法，一键清空input内容
    (4) 最近搜索样式
*/

/*
6、schoolReport.vue修改内容
    底部文件袋样式大小样式，并添加阴影
*/

/*
6、activityList.vue修改内容
    (1) 查看电子票按钮，@click.stop阻止冒泡到li的@click
    (2) 给activitiesDetail 方法传递wid, 但是该页面方法抓取到的数据，没有wid信息????
*/

/*
7、user.vue修改内容
    (1) 将toActivityList方法，放到最近参加活动的<更多>的点击事件上
*/

/*
8、activityDetail.vue修改内容
    (1) user.js中添加两个post接口方法 userSign/userCancelSign，用于报名活动和取消报名。
    (2) 给<我要参加>添加button，测试调用接口
*/
