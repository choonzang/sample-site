<template>
    <div>
        <top-area></top-area>
        <div>
            <router-view/>
        </div>
        <footer-area></footer-area>
    </div>
</template>

<script>
    import TopArea from '@/layout/TopArea'
    import FooterArea from '@/layout/FooterArea'

    export default {
        name: "index.vue",
        components: {
            TopArea,
            FooterArea
        }
    }
</script>

<style scoped>

</style>