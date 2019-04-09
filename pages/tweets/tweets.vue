<template>
	<view>
		<cu-custom bgColor="bg-gradual-green" :isBack="false"><block slot="backText">返回</block><block slot="content">动弹</block></cu-custom>
		
		<view class="cu-form-group margin-top">
			<textarea maxlength="50"  placeholder="请分享美好的事物"></textarea>
			<!-- <button class="cu-btn round" :class="[bordersize?'lines-green' :'line-green', shadow?'shadow':'']">发布</button> -->
			<button class="cu-btn round" :class="['bg-green' , shadow?'shadow':'']">发布</button>
		</view>
		
		<view class="tweets-list">
			<view class="cu-list menu-avatar">
				<view class="cu-item">
					<view class="cu-avatar round lg" style="background-image:url(https://ossweb-img.qq.com/images/lol/web201310/skin/big10006.jpg);"></view>
					<view class="content flex-sub">
						<view class="text-grey">LaravelCode 正式上线啦正式上线啦</view>
						<view class="text-gray text-sm flex justify-between">
							十天前
							<view class="text-gray text-sm">
								<text class="icon-attentionfill margin-lr-xs"></text> 10
								<text class="icon-appreciatefill margin-lr-xs"></text> 20
								<text class="icon-messagefill margin-lr-xs"></text> 30
							</view>
						</view>
					</view>
				</view>
			</view>
			
			<view class="cu-list menu-avatar">
				<view class="cu-item">
					<view class="cu-avatar round lg" style="background-image:url(https://ossweb-img.qq.com/images/lol/web201310/skin/big10006.jpg);"></view>
					<view class="content flex-sub">
						<view class="text-grey">laravelcode正式上线啦正式上线啦</view>
						<view class="text-gray text-sm flex justify-between">
							十天前
							<view class="text-gray text-sm">
								<text class="icon-attentionfill margin-lr-xs"></text> 10
								<text class="icon-appreciatefill margin-lr-xs"></text> 20
								<text class="icon-messagefill margin-lr-xs"></text> 30
							</view>
						</view>
					</view>
				</view>
			</view>
			
			<view class="cu-list menu-avatar">
				<view class="cu-item">
					<view class="cu-avatar round lg" style="background-image:url(https://ossweb-img.qq.com/images/lol/web201310/skin/big10006.jpg);"></view>
					<view class="content flex-sub">
						<view class="text-grey">laravelcode正式上线啦正式上线啦</view>
						<view class="text-gray text-sm flex justify-between">
							十天前
							<view class="text-gray text-sm">
								<text class="icon-attentionfill margin-lr-xs"></text> 10
								<text class="icon-appreciatefill margin-lr-xs"></text> 20
								<text class="icon-messagefill margin-lr-xs"></text> 30
							</view>
						</view>
					</view>
				</view>
			</view>
			
			<view class="cu-list menu-avatar">
				<view class="cu-item">
					<view class="cu-avatar round lg" style="background-image:url(https://ossweb-img.qq.com/images/lol/web201310/skin/big10006.jpg);"></view>
					<view class="content flex-sub">
						<view class="text-grey">laravelcode正式上线啦正式上线啦</view>
						<view class="text-gray text-sm flex justify-between">
							十天前
							<view class="text-gray text-sm">
								<text class="icon-attentionfill margin-lr-xs"></text> 10
								<text class="icon-appreciatefill margin-lr-xs"></text> 20
								<text class="icon-messagefill margin-lr-xs"></text> 30
							</view>
						</view>
					</view>
				</view>
			</view>
			
			<view class="cu-list menu-avatar">
				<view class="cu-item">
					<view class="cu-avatar round lg" style="background-image:url(https://ossweb-img.qq.com/images/lol/web201310/skin/big10006.jpg);"></view>
					<view class="content flex-sub">
						<view class="text-grey">laravelcode正式上线啦正式上线啦</view>
						<view class="text-gray text-sm flex justify-between">
							十天前
							<view class="text-gray text-sm">
								<text class="icon-attentionfill margin-lr-xs"></text> 10
								<text class="icon-appreciatefill margin-lr-xs"></text> 20
								<text class="icon-messagefill margin-lr-xs"></text> 30
							</view>
						</view>
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
				shadow: true,
				bordersize: ''
			};
		}
	}
</script>

<style>
.tweets-list{
	margin-top:10rpx;
}
.cu-list+.cu-list {
	margin-top:3rpx;

}

</style>
