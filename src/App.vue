<template>
  <div id="app">
		<router-view></router-view>
		<FooterGuide v-show="$route.meta.showFooter"></FooterGuide>
  </div>
</template>

<script>
  import vue from 'vue'
	import {mapActions} from 'vuex'
	import FooterGuide from './components/FooterGuide/FooterGuide.vue'
	import {reqFoodTypes} from './API'
  //注册全局组件标签
  import {Button} from 'mint-ui'

  vue.component(Button.name,Button)   //<mt-button>

	export default {
		
		components:{
			FooterGuide
		},
		
		methods:{
			...mapActions(['getAddress'])
		},
		
		mounted () {
			console.log("adasd")
			// this.$store.dispatch('getAddress')	
			this.getAddress()
      this.getUserInfo()
		}
		
	}
</script>

<style lang="stylus" rel="stylesheet/stylus">
	#app
		width 100%
		height 100%
		background #f5f5f5
</style>
