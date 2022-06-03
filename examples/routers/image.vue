<template>
	<div class="demo-image">
		<div style="width: 1000px;height: 300px;">
			<div class="demo-image-item" v-for="(fit, index) in fitList" :key="index">
				<Image
					:src="url"
					:fit="fit"
					:previewList="srcList"
					width="100"
					height="100"
					preview
					scroll-container=".demo-image" :alt="fit">
					<template #placeholder>
						<Spin size="large" fix />
					</template>
					<!-- <template #error>
						<div>失败</div>
					</template> -->
				</Image>
				<p>{{ fit }}</p>
			</div>
		</div>
	</div>
	<h2 style="margin-top: 40px;">竖向LazyLoad</h2>
	<div class="demo-image2" style="width: 300px; height: 200px; overflow: hidden; overflow-y: scroll;">
		<div>
			<div class="demo-image-item" v-for="(fit, index) in fitList" :key="index" style="float: none;">
				<Image
					style="width: 100px; height: 100px"
					:src="url"
					:fit="fit"
					:lazy="true"
					:infinite="false"
					:previewList="srcList"
					preview
					scroll-container=".demo-image2" :alt="fit">
					<template #placeholder>
						<Spin size="large" fix />
					</template>
					<!-- <template #error>
						<div>失败</div>
					</template> -->
				</Image>
			</div>
		</div>
	</div>
	<h2 style="margin-top: 40px;">横向LazyLoad</h2>
	<div class="demo-image3" style="width: 300px; height: 200px; overflow: hidden; overflow-x: scroll;">
		<div style="width: 1000px;height: 300px;">
			<div class="demo-image-item" v-for="(fit, index) in fitList" :key="index" style="float: left;">
				<Image
					style="width: 100px; height: 100px"
					:src="url"
					:fit="fit"
					:lazy="true"
					:infinite="false"
					:initialIndex="index"
					:previewList="srcList"
					preview
					scroll-container=".demo-image3" :alt="fit">
					<template #placeholder>
						<Spin size="large" fix />
					</template>
					<!-- <template #error>
						<div>失败</div>
					</template> -->
				</Image>
			</div>
		</div>
	</div>
    <ImagePreview
        v-model="showPreview"
        :previewList="srcList"
		:initialIndex="2"
        :transfer="false"
        :maskClosable="true"
    ></ImagePreview>

    <Button type="primary" @click="showPreview = !showPreview">Switch Preview</Button>
</template>

<script>
const fitList = ['fill', 'contain', 'cover', 'none', 'scale-down']
// const fitList = ['fill']
export default {
    data() {
		return {
			fitList,
			url: 'https://dev-file.iviewui.com/j9IanwNpbTPM4aXv2fKyPTX1omREAaGG/large',
            showPreview: false,
            srcList: [
                'https://dev-file.iviewui.com/ll7neXYI7fzKv1SjjOl77vpfkDbJpbDB/large',
                'https://dev-file.iviewui.com/ASzUrSpwJHqOi2G2jWzsVJyDV1ZF6xnK/large',
                'https://dev-file.iviewui.com/YSUjM5Fx7mOjsijiI3eVDuaHGqnmT7H8/large',
            ]
		}
	}
}
</script>
<style lang="less">
.demo-image {
	&-item {
		width: 100px;
		height: 100px;
		float: left;
		margin: 10px;
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
