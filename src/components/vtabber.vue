<template>
	<!-- 底部导航菜单 -->
	<van-tabbar v-model="current" fixed @change='onChange'>
		<van-tabbar-item v-for="(item,i) in menu" :key='i' >
			<span>{{ item.name }}</span>
			<img slot="icon" :src="current == i? item.activeSrc:item.normalSrc" >
		</van-tabbar-item>
	</van-tabbar>

	<!-- tab -->

</template>



<script>
import find from '../assets/img/find.png'
import findActive from '../assets/img/find-active.png'
import user from '../assets/img/user.png'
import userActive from '../assets/img/user-active.png'


export default {
	data() {
		return {
			current: 0,
			menu: [
				{ name: '发现', normalSrc: find , activeSrc: findActive, url: '/index' },
				{ name: '我的活动', normalSrc: user , activeSrc: userActive, url: '/user' },
			],
		}
	},
	created() {
		let index = this.menu.findIndex(function (data, index, arr) {
			return data.url === window.location.pathname
		})
		// methods中的this.current 与 v-model 配合不能实时的修改current的值,在挂载渲染之前就要给current赋默认值
		this.current = index
	},
	watch: {
		'$route.path': {
			handler: function(val, old){
				console.log(val, old)
			},
			deep: true
		},
	},
	methods: {
		onChange(val){
			// console.log(val)
			// this.current = val
			this.$router.push(this.menu[val].url)
		}
	},
}


</script>



<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
