<template>
	<view>
		<cu-custom  bgColor="bg-gradual-blue" :isBack="false"><block slot="backText">返回</block><block slot="content">个人中心</block></cu-custom>
		<view class="flex solid-bottom padding align-center">
			<image class="cu-avatar xl round margin-left" :src="avatarUrl"></image>
			<view>
				<view class="text-grey margin-left">{{ nickName }}</view>
			</view>
		</view>
		<view v-if="isShow" class="padding flex flex-direction">
			<button class="cu-btn bg-grey lg" open-type="getUserInfo" lang="zh_CN" @getuserinfo="getuserinfo">登陆</button>
		</view>
		
		<view class="cu-list menu" :class="[menuBorder?'sm-border':'',menuCard?'card-menu margin-top':'']">
				<view class="cu-item" :class="menuArrow?'arrow':''">
					<view class="content">
						<text class="icon-circlefill text-grey"></text>
						<text class="text-grey">我的文章</text>
					</view>
				</view>
				<view class="cu-item" :class="menuArrow?'arrow':''">
					<view class="content">
						<image src="/static/logo.png" class="png" mode="aspectFit"></image>
						<text class="text-grey">我的动弹</text>
					</view>
				</view>
				<view class="cu-item" :class="menuArrow?'arrow':''">
					<button class="cu-btn content" open-type="contact">
						<text class="icon-btn text-olive"></text>
						<text class="text-grey">意见反馈</text>
					</button>
				</view>
				
				<view class="cu-item" :class="menuArrow?'arrow':''">
					<view class="content">
						<text class="icon-tagfill text-red  margin-right-xs"></text>
						<text class="text-grey">标签</text>
					</view>
					<view class="action">
						<view class="cu-tag round bg-orange light">音乐</view>
						<view class="cu-tag round bg-olive light">电影</view>
						<view class="cu-tag round bg-blue light">旅行</view>
					</view>
				</view>
				<view class="cu-item" :class="menuArrow?'arrow':''">
					<view class="content" @tap="showModal" data-target="Modal">
						<text class="icon-discoverfill text-orange"></text>
						<text class="text-grey">关于我们</text>
					</view>
				</view>
				
				<view class="cu-modal" :class="modalName=='Modal'?'show':''">
			<view class="cu-dialog">
				<view class="cu-bar bg-white justify-end">
					<view class="content">温馨提示</view>
					<view class="action" @tap="hideModal">
						<text class="icon-close text-red"></text>
					</view>
				</view>
				<view class="padding-xl">
					来了老弟
				</view>
			</view>
		</view>
				
				</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				menuArrow: true,
				modalName: null,
				nickName:'',
				avatarUrl:'',
				isShow:true,
			};
		},
		methods: {
			showModal(e) {
				console.log(e);
				this.modalName = e.currentTarget.dataset.target
			},
			hideModal(e) {
				this.modalName = null
			},
			getuserinfo(e) {
				this.avatarUrl = e.detail.userInfo.avatarUrl;
				this.nickName = e.detail.userInfo.nickName;
				this.isShow = false;
				uni.login({
				  provider: 'weixin',
				  success: function (loginRes) {
					console.log(loginRes);
					uni.getUserInfo({
					  provider: 'weixin',
					  success: function (infoRes) {
						console.log('用户昵称为：' + infoRes.userInfo.nickName);
					  }
					});
				  }
				});
			},
		}
	}
</script>

<style>

</style>
