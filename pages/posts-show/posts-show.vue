<template>
	<view>
		<cu-custom bgColor="bg-gradual-blue" :isBack="true">
			<block slot="backText">返回</block><block slot="content">详情</block>
		</cu-custom>
		
		<view class="content post-content">
			<view class="cu-bar bg-shadeBottom"> <text class="text-cut align-center">{{post.title}}</text></view>
			<view class="flex-sub">
				 <wxParse :content="body" @preview="preview" @navigate="navigate" />
			</view>
		</view>
	</view>
</template>

<script>
	import hljs from 'highlight.js';
	import javascript from 'highlight.js/lib/languages/javascript';
	hljs.registerLanguage('javascript', javascript);
	
	import marked from 'marked'
	import wxParse from 'mpvue-wxparse'

	export default {
		data() {
			return {
				post:[],
				body:','
			};
		},
		components: {
			wxParse
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
			preview(src, e) {
      // do something
			},
			navigate(href, e) {
				// do something
			}
		},
	}
</script>

<style>

</style>
