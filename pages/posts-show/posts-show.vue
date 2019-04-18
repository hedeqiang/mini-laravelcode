<template>
	<view>
		<cu-custom bgColor="bg-gradual-blue" :isBack="true">
			<block slot="backText">返回</block><block slot="content">详情</block>
		</cu-custom>
		
		<view class="content post-content">
			<view class="cu-bar bg-shadeBottom"> <text class="text-cut align-center">{{post.title}}</text></view>
			<view class="flex-sub">
				
			</view>
		</view>
	</view>
</template>

<script>
	import hljs from 'highlight.js';
	import javascript from 'highlight.js/lib/languages/javascript';
	hljs.registerLanguage('javascript', javascript);
	
	export default {
		data() {
			return {
				post:[],
				body:','
			};
		},
		
		onLoad(e) {
			console.log(e);
			uni.request({
				url: 'https://laravelcode.info/api/posts/'+ e.postid,
				method: 'GET',
				data: {},
				success: res => {
					console.log(res.data);
					this.post = res.data;
					this.body = marked(res.data.body);
				},
				fail: () => {},
				complete: () => {}
			});
		},
		methods: {
	
		},
	}
</script>

<style>

</style>
