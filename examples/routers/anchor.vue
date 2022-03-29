<template>
    <div>
        <div v-for="n in 100" :key="n" :id="n" style="height: 50px;background: #2d8cf0;margin: 20px">
            {{ n }}
        </div>
        <div style="position: absolute;top: 10px;right: 10px">
            <Anchor show-ink>
                <AnchorLink v-for="n in 100" :key="n" :href="'#' + n" :title="'title' + n" />
            </Anchor>
        </div>
    </div>
</template>
