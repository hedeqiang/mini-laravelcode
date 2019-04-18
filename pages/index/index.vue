<template>
	<view class="content">
		<cu-custom bgColor="bg-gradual-pink" :isBack="false"><block slot="backText">返回</block><block slot="content">首页</block></cu-custom>
        <swiper class="card-swiper" :class="dotStyle?'square-dot':'round-dot'" :indicator-dots="true" :circular="true"
         :autoplay="true" interval="5000" duration="500" @change="cardSwiper" indicator-color="#8799a3"
         indicator-active-color="#0081ff">
        	<swiper-item v-for="(item,index) in swiperList" :key="index" :class="cardCur==index?'cur':''">
        		<view class="swiper-item">
        			<image :src="item.url" mode="aspectFill" v-if="item.type=='image'"></image>
        			<video :src="item.url" autoplay loop muted :show-play-btn="false" :controls="false" objectFit="cover" v-if="item.type=='video'"></video>
        		</view>
        	</swiper-item>
        </swiper>
		
		<view class="post-list">
			<view v-for="(post,index) in posts" :key="index">
				<view class="cu-card case" :class="isCard?'no-card':''" @tap="onenShow" :data-post-id="post.id">
					<view class="cu-item shadow">
						<view class="image">
							<image src="https://ossweb-img.qq.com/images/lol/web201310/skin/big10006.jpg"
							 mode="widthFix"></image>
							<view class="cu-tag bg-blue">{{posts[index].category.name}}</view>
							<view class="cu-bar bg-shadeBottom"> <text class="text-cut">{{post.title}}</text></view>
						</view>
						<view class="cu-list menu-avatar">
							<view class="cu-item">
								<image class="cu-avatar round lg" :src="posts[index].user.avatar"></image>
								<view class="content flex-sub">
									<view class="text-grey">{{post.user.name}}</view>
									<view class="text-gray text-sm flex justify-between">
										{{ post.created_at | moment }}
										<view class="text-gray text-sm">
											<text class="icon-attentionfill margin-lr-xs"></text> {{post.view_count}}
											<!-- <text class="icon-appreciatefill margin-lr-xs"></text> 20 -->
											<text class="icon-messagefill margin-lr-xs"></text> {{post.reply_count}}
										</view>
									</view>
								</view>
							</view>
						</view>
					</view>
				</view>
			</view>
		</view>
		
		
		
	</view>
</template>

<script>
	import moment from 'moment'
	export default {
		data() {
			return {
				isCard: true,
				cardCur: 0,
				posts:[],
				created_at:"",
				swiperList: [{
					id: 0,
					type: 'image',
					url: 'https://ossweb-img.qq.com/images/lol/web201310/skin/big84000.jpg'
				}, {
					id: 1,
					type: 'image',
					url: 'https://ossweb-img.qq.com/images/lol/web201310/skin/big37006.jpg',
				}, {
					id: 2,
					type: 'image',
					url: 'https://ossweb-img.qq.com/images/lol/web201310/skin/big39000.jpg'
				}, {
					id: 3,
					type: 'image',
					url: 'https://ossweb-img.qq.com/images/lol/web201310/skin/big10001.jpg'
				}, {
					id: 4,
					type: 'image',
					url: 'https://ossweb-img.qq.com/images/lol/web201310/skin/big25011.jpg'
				}, {
					id: 5,
					type: 'image',
					url: 'https://ossweb-img.qq.com/images/lol/web201310/skin/big21016.jpg'
				}, {
					id: 6,
					type: 'image',
					url: 'https://ossweb-img.qq.com/images/lol/web201310/skin/big99008.jpg'
				}],
				dotStyle: false,
				towerStart: 0,
				direction: ''
			};
		},
		filters: {
			moment: function(value) {
				return moment(value).startOf('day').fromNow();
			}
		},
		onLoad() {
			this.TowerSwiper('swiperList');
			// 初始化towerSwiper 传已有的数组名即可
		},
		mounted() {
			uni.showLoading({
				title:'加载中'
			})
			uni.request({
				url: 'https://laravelcode.info/api/posts?include=user,category',
				method: 'GET',
				data: {},
				success: res => {
					this.posts = res.data.data;
					this.created_at = moment(res.data.data.created_at).startOf('day').fromNow();
					uni.hideLoading();
				},
				fail: () => {},
				complete: () => {}
			});
		},
		methods: {
			DotStyle(e) {
				this.dotStyle = e.detail.value
			},
			// cardSwiper
			cardSwiper(e) {
				this.cardCur = e.detail.current
			},
			// towerSwiper
			// 初始化towerSwiper
			TowerSwiper(name) {
				let list = this[name];
				for (let i = 0; i < list.length; i++) {
					list[i].zIndex = parseInt(list.length / 2) + 1 - Math.abs(i - parseInt(list.length / 2))
					list[i].mLeft = i - parseInt(list.length / 2)
				}
				this.swiperList = list
			},

			// towerSwiper触摸开始
			TowerStart(e) {
				this.towerStart = e.touches[0].pageX
			},

			// towerSwiper计算方向
			TowerMove(e) {
				this.direction = e.touches[0].pageX - this.towerStart > 0 ? 'right' : 'left'
			},

			// towerSwiper计算滚动
			TowerEnd(e) {
				let direction = this.direction;
				let list = this.swiperList;
				if (direction == 'right') {
					let mLeft = list[0].mLeft;
					let zIndex = list[0].zIndex;
					for (let i = 1; i < this.swiperList.length; i++) {
						this.swiperList[i - 1].mLeft = this.swiperList[i].mLeft
						this.swiperList[i - 1].zIndex = this.swiperList[i].zIndex
					}
					this.swiperList[list.length - 1].mLeft = mLeft;
					this.swiperList[list.length - 1].zIndex = zIndex;
				} else {
					let mLeft = list[list.length - 1].mLeft;
					let zIndex = list[list.length - 1].zIndex;
					for (let i = this.swiperList.length - 1; i > 0; i--) {
						this.swiperList[i].mLeft = this.swiperList[i - 1].mLeft
						this.swiperList[i].zIndex = this.swiperList[i - 1].zIndex
					}
					this.swiperList[0].mLeft = mLeft;
					this.swiperList[0].zIndex = zIndex;
				}
				this.direction = ""
				this.swiperList = this.swiperList
			},
			IsCard(e) {
				this.isCard = e.detail.value
			},
			onenShow(e){
				//console.log(e.currentTarget.dataset.postId);
				var postId = e.currentTarget.dataset.postId;
				uni.navigateTo({
					url:'../posts-show/posts-show?postid='+postId
				})
			}
		}
	}
</script>

<style>
	.tower-swiper .tower-item {
		transform: scale(calc(0.5 + var(--index) / 10));
		margin-left: calc(var(--left) * 100upx - 150upx);
		z-index: var(--index);
	}
</style>