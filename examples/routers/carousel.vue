<template>
    <div style="width:400px">
    <Carousel :modelValue="value1" loop>
        <CarouselItem>
            <div class="demo-carousel">1-1</div>
        </CarouselItem>
        <CarouselItem>
            <div class="demo-carousel">1-2</div>
        </CarouselItem>
        <CarouselItem>
            <div class="demo-carousel">1-3</div>
        </CarouselItem>
        <CarouselItem>
            <div class="demo-carousel">1-4</div>
        </CarouselItem>
    </Carousel>
        <Button @click="value1 = 2">change1</Button>
    </div>
    <div style="width:400px">
        <Carousel :modelValue="value2" :loop="false" :autoplaySpeed="1000" :dots="'outside'" :rigger="'hover'" :arrow="'always'" :easing="''">
            <CarouselItem>
                <div class="demo-carousel">2-1</div>
            </CarouselItem>
            <CarouselItem>
                <div class="demo-carousel">2-2</div>
            </CarouselItem>
            <CarouselItem>
                <div class="demo-carousel">2-3</div>
            </CarouselItem>
            <CarouselItem>
                <div class="demo-carousel">2-4</div>
            </CarouselItem>
        </Carousel>
        <Button @click="value2 = (value2<3?value2+1:0)">change2</Button>
    </div>
</template>
<script>
export default {
    data () {
        return {
            value1: 0,
            value2: 0
        }
    }
}
</script>
<style>
.demo-carousel{
    height: 200px;
    line-height: 200px;
    text-align: center;
    color: #fff;
    font-size: 20px;
    background: #506b9e;
}
</style>
