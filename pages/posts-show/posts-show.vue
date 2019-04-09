<template>
	<view>
		<cu-custom bgColor="bg-gradual-pink" :isBack="true">
			<block slot="backText">返回</block><block slot="content">详情</block>
		</cu-custom>
		
		<view class="post-content">
			<pre><code class="plaintext">ssascac</code></pre>
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
