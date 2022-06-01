<template>
	<div class="demo-image">
		<div>
			<div class="demo-image-item" v-for="(fit, index) in fitList" :key="index">
				<Image 
					style="width: 100px; height: 100px" 
					:src="url" 
					:fit="fit"
					:lazy="true"
					preview
					scroll-container=".demo-image" :alt="fit">
					<!-- <template #placeholder>
						<Spin size="large" fix />
					</template> -->
					<template #error>
						<div>失败</div>
					</template>
				</Image>
				<p>{{ fit }}</p>
			</div>
		</div>
	</div>
</template>

<script>
const fitList = ['fill', 'contain', 'cover', 'none', 'scale-down']
export default {
	data() {
		return {
			fitList,
			url: 'https://dev-file.iviewui.com/j9IanwNpbTPM4aXv2fKyPTX1omREAaGG/large'
		}
	}
}
</script>
<style lang="less">
.demo-image {
	max-height: 300px;
	width: 200px;
	overflow: hidden;
	overflow: scroll;

	&-item {
		width: 130px;
		height: 130px;
		float: left;
		margin: 20px;
		text-align: center;

		.ivu-image {
			background: #ccc;
		}

		p {
			margin-top: 5px;
			text-align: center;
		}
	}
}
</style>