<template>
	<div class="demo-image">
        <div>
            <Button @click="img1 = 'https://dev-file.iviewui.com/ll7neXYI7fzKv1SjjOl77vpfkDbJpbDB/large'">换1</Button>
            <Button @click="img1 = 'https://dev-file.iviewui.com/YSUjM5Fx7mOjsijiI3eVDuaHGqnmT7H8/large'">换2</Button>
            <Button @click="img1 = 'https://file.iviewui.com/DSCF6873.JPG'">换大</Button>
            <Button @click="img1 = 'https://replit.com/cdn-cgi/image/width=32,quality=80,format=auto/https://storage.googleapis.com/replit/images/1664475603315_1442b3c69cc612aff6ef60cce0c69328.jpeg/avatar'">换error</Button>
            <Image :src="img1"></Image>
        </div>
        <Divider></Divider>
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
        :infinite="false"
        :toolbar="['zoomOut', 'original', 'rotateRight', 'rotateLeft', 'zoomIn', 'download']"
    ></ImagePreview>

    <Button type="primary" @click="showPreview = !showPreview">Switch Preview</Button>

    <Button @click="showImagePreview1">$ImagePreview1</Button>
    <Button @click="showImagePreview2">$ImagePreview2</Button>
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
                'https://file.iviewui.com/DSCF6873.JPG',
                'https://dev-file.iviewui.com/YSUjM5Fx7mOjsijiI3eVDuaHGqnmT7H8/large',
            ],
            srcList2: [
                'https://file.iviewui.com/DSCF6873.JPG',
                'https://dev-file.iviewui.com/ll7neXYI7fzKv1SjjOl77vpfkDbJpbDB/large',
                'https://dev-file.iviewui.com/ASzUrSpwJHqOi2G2jWzsVJyDV1ZF6xnK/large',
                'https://dev-file.iviewui.com/YSUjM5Fx7mOjsijiI3eVDuaHGqnmT7H8/large',
            ],
            img1: 'https://dev-file.iviewui.com/ll7neXYI7fzKv1SjjOl77vpfkDbJpbDB/large'
		}
	},
    methods: {
        showImagePreview1 () {
            this.$ImagePreview.show({
                previewList: this.srcList
            });
        },
        showImagePreview2 () {
            this.$ImagePreview.show({
                previewList: this.srcList2,
                initialIndex: 2
            });
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
