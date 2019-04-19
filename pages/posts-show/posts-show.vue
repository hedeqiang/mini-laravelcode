<template>
	<view>
		<cu-custom bgColor="bg-gradual-blue" :isBack="true">
			<block slot="backText">返回</block><block slot="content">详情</block>
		</cu-custom>
		
		<view class="content">
			<view class="flex-sub text-center">
					<view class="bg-grey padding-sm margin-xs radius">{{post.title}}</view>
				
				</view>
			<view class="flex-sub">
				<wxParse :content="post.body" />
			</view>
		</view>
	</view>
</template>

<script>
	import wxParse from 'mpvue-wxparse';
	
	export default {
		data() {
			return {
				post:[],
				strings:'',
			};
		},
		components: {
			wxParse
		},
		onLoad(e) {
			console.log(e);
			uni.showLoading({
				title:'加载中...'
			});
			uni.request({
				url: 'https://laravelcode.info/api/posts/'+ e.postid,
				method: 'GET',
				data: {},
				success: res => {
					console.log(res.data);
					this.post = res.data;
					this.strings = "res.data.body";
					uni.hideLoading();
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
@import url("mpvue-wxparse/src/wxParse.css");

.content{
		padding: 10upx 10upx;
		
	}
</style>
