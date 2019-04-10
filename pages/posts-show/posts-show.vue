<template>
	<view>
		<cu-custom bgColor="bg-gradual-blue" :isBack="true">
			<block slot="backText">返回</block><block slot="content">详情</block>
		</cu-custom>
		
		<view class="post-content">
			<view class="cu-bar bg-shadeBottom"> <text class="text-cut align-center">我已天理为凭，踏入这片荒芜，不再受凡人的枷锁遏制。我已天理为凭，踏入这片荒芜，不再受凡人的枷锁遏制。</text></view>
		
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
				
			};
		}
	}
</script>

<style>

</style>
